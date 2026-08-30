// Variables used by Scriptable.
// icon-color: green; icon-glyph: mountain;
//
// Widget "Allenamento Lavaredo" — legge widget-data.json pubblicato
// insieme alla dashboard (stessa pipeline: generate_dashboard.py lo
// genera, deploy_github.py lo pubblica). Vedi widget-scriptable-spec.md
// per la specifica originale.
//
// Setup: incolla questo file in Scriptable (app) come nuovo script,
// poi aggiungi un widget "medium" di Scriptable in home screen e scegli
// questo script. Refresh: iOS decide i tempi reali, `refreshAfterDate`
// qui sotto è solo un suggerimento (~1 ora).

const WIDGET_DATA_URL = "https://leozardi92.github.io/allenamento/widget-data.json";
const CACHE_PATH = FileManager.local().joinPath(
  FileManager.local().documentsDirectory(),
  "widget-allenamento-cache.json"
);

const COLORS = {
  bg: new Color("#0f0f0f"),
  text: new Color("#f0ede8"),
  muted: new Color("#6b6560"),
  green: new Color("#4ade80"),
  blue: new Color("#60a5fa"),
  orange: new Color("#f97316"),
  purple: new Color("#a78bfa"),
  red: new Color("#f43f5e"),
  yellow: new Color("#fbbf24"),
};

function typeColor(t) {
  return (
    {
      run: COLORS.blue,
      trail: COLORS.green,
      bike: COLORS.orange,
      gym: COLORS.purple,
      hike: COLORS.green,
      race: COLORS.yellow,
      test: COLORS.red,
      rest: COLORS.muted,
    }[t] || COLORS.text
  );
}

// Estrae solo il dislivello ("~900m D+") dal campo "extra", per tenere
// la riga della sessione chiave corta e leggibile in un widget piccolo.
function shortExtra(extra) {
  if (!extra) return "";
  const m = extra.match(/~?(\d+)\s*m\s*D\+/);
  return m ? `${m[1]}m D+` : "";
}

// Toglie l'emoji iniziale dal nome gara ("🏁 ULTRABERICUS" -> "Ultrabericus")
// e sistema le maiuscole.
function raceNameShort(label) {
  const cleaned = (label || "").replace(/^[^\p{L}]+/u, "").trim();
  return cleaned.charAt(0) + cleaned.slice(1).toLowerCase();
}

async function fetchData() {
  try {
    const req = new Request(WIDGET_DATA_URL);
    req.timeoutInterval = 8;
    const data = await req.loadJSON();
    try {
      FileManager.local().writeString(CACHE_PATH, JSON.stringify(data));
    } catch (e) {
      // cache best-effort, non blocca il widget se fallisce
    }
    return data;
  } catch (e) {
    try {
      return JSON.parse(FileManager.local().readString(CACHE_PATH));
    } catch (e2) {
      return null;
    }
  }
}

// Mini grafico km fatti vs pianificati (settimana corrente) — disegnato a
// 2x e poi mostrato ridotto, per restare nitido su schermi retina senza
// occupare più di ~40px di altezza nel widget.
function drawKmChart(planned, actual) {
  const W = 300,
    H = 80;
  const ctx = new DrawContext();
  ctx.size = new Size(W, H);
  ctx.opaque = false;
  ctx.respectScreenScale = true;

  const maxVal = Math.max(planned || 0, actual || 0, 1) * 1.15;
  const barW = 74,
    gap = 36,
    baseY = H - 16,
    maxBarH = H - 36;
  const x1 = W / 2 - gap / 2 - barW,
    x2 = W / 2 + gap / 2;

  function bar(x, val, color, label) {
    const h = Math.max((val / maxVal) * maxBarH, 2);
    ctx.setFillColor(color);
    const path = new Path();
    path.addRoundedRect(new Rect(x, baseY - h, barW, h), 6, 6);
    ctx.addPath(path);
    ctx.fillPath();

    ctx.setFont(Font.boldSystemFont(14));
    ctx.setTextColor(COLORS.text);
    ctx.setTextAlignedCenter();
    ctx.drawTextInRect(`${val}`, new Rect(x - 10, baseY - h - 20, barW + 20, 18));

    ctx.setFont(Font.systemFont(9));
    ctx.setTextColor(COLORS.muted);
    ctx.setTextAlignedCenter();
    ctx.drawTextInRect(label, new Rect(x - 10, baseY + 3, barW + 20, 12));
  }

  bar(x1, actual || 0, COLORS.green, "FATTI");
  bar(x2, planned || 0, COLORS.blue, "PIANO");

  return ctx.getImage();
}

function planStatusLabel(status) {
  if (status === "pre_season") return "Pre-stagione";
  if (status === "finished") return "Piano concluso";
  return "Allenamento";
}

async function createWidget(payload) {
  const w = new ListWidget();
  w.backgroundColor = COLORS.bg;
  w.setPadding(12, 14, 12, 14);

  if (!payload) {
    const t = w.addText("Dati non disponibili");
    t.textColor = COLORS.muted;
    t.font = Font.systemFont(13);
    return w;
  }

  // 1. Fase + settimana
  const phaseText = (payload.phase_label || planStatusLabel(payload.plan_status)).toUpperCase();
  const phaseLine = w.addText(phaseText);
  phaseLine.font = Font.boldSystemFont(11);
  phaseLine.textColor = COLORS.muted;
  w.addSpacer(6);

  // 2. Prossimo allenamento in assoluto
  if (payload.next_workout) {
    const nw = payload.next_workout;
    const row = w.addStack();
    row.centerAlignContent();
    const dot = row.addText("● ");
    dot.font = Font.boldSystemFont(13);
    dot.textColor = typeColor(nw.type);
    const txt = row.addText(`${nw.day_label} · ${nw.label}`);
    txt.font = Font.semiboldSystemFont(14);
    txt.textColor = COLORS.text;
    txt.lineLimit = 1;
    row.addSpacer();
  } else {
    const t = w.addText("Nessun allenamento in programma");
    t.font = Font.systemFont(12);
    t.textColor = COLORS.muted;
  }
  w.addSpacer(4);

  // 3. Sessione chiave — solo se diversa dalla precedente
  const nextDate = payload.next_workout && payload.next_workout.date;
  if (payload.key_workout && payload.key_workout.date !== nextDate) {
    const kw = payload.key_workout;
    const extraShort = shortExtra(kw.extra);
    const line = `Chiave: ${kw.day_label} · ${kw.label}${extraShort ? " · " + extraShort : ""}`;
    const kt = w.addText(line);
    kt.font = Font.systemFont(11);
    kt.textColor = COLORS.yellow;
    kt.lineLimit = 1;
  }
  w.addSpacer(8);

  // 4. Mini grafico km reale vs pianificato (settimana corrente)
  if (payload.week) {
    const img = drawKmChart(payload.week.planned_km, payload.week.actual_km);
    const stack = w.addStack();
    stack.addSpacer();
    const iw = stack.addImage(img);
    iw.imageSize = new Size(150, 40);
    stack.addSpacer();
  } else {
    const t = w.addText("Settimana fuori piano");
    t.font = Font.systemFont(11);
    t.textColor = COLORS.muted;
  }

  w.addSpacer();

  // 5. Countdown prossima gara milestone
  if (payload.next_race) {
    const r = payload.next_race;
    const line = w.addText(`🏁 ${raceNameShort(r.label)} — ${r.days_until}gg`);
    line.font = Font.boldSystemFont(12);
    line.textColor = COLORS.yellow;
    line.lineLimit = 1;
  }

  return w;
}

const payload = await fetchData();
const widget = await createWidget(payload);
widget.refreshAfterDate = new Date(Date.now() + 60 * 60 * 1000); // suggerimento a iOS, ~1 ora

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  await widget.presentMedium();
}
Script.complete();

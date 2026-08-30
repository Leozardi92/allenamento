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
  text: new Color("#f0ede8"),
  muted: new Color("#8b857e"),
  faint: new Color("#5a5450"),
  divider: new Color("#ffffff", 0.08),
  green: new Color("#4ade80"),
  blue: new Color("#60a5fa"),
  orange: new Color("#f97316"),
  purple: new Color("#a78bfa"),
  red: new Color("#f43f5e"),
  yellow: new Color("#fbbf24"),
};

// Stessi colori fase della dashboard (tab Blocchi/Verdict).
const PHASE_COLORS = {
  Restart: COLORS.green,
  Base: COLORS.blue,
  Aerobico: COLORS.orange,
  Specifico: COLORS.purple,
  Picco: COLORS.red,
  Taper: COLORS.yellow,
};

// Icone per tipo — solo per i tipi la cui label non ha già un'emoji
// incorporata (gym/test/race ce l'hanno già: "💪 Giorno 1", "🔬 Test AeT"...).
const TYPE_ICON = { run: "🏃", trail: "🏔️", bike: "🚴", hike: "🥾" };

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
      rest: COLORS.faint,
    }[t] || COLORS.text
  );
}

function iconFor(type) {
  return TYPE_ICON[type] ? TYPE_ICON[type] + " " : "";
}

// Riga di dettaglio compatta sotto il prossimo allenamento — FC target e/o
// dislivello, se presenti nel campo "extra"; altrimenti niente (meglio
// vuoto che una riga troppo lunga in un widget piccolo).
function compactDetail(extra) {
  if (!extra) return "";
  const parts = [];
  const bpm = extra.match(/[<>]\s*\d+\s*bpm/);
  const dplus = extra.match(/~?(\d+)\s*m\s*D\+/);
  if (bpm) parts.push(bpm[0].replace(/\s+/g, " "));
  if (dplus) parts.push(`${dplus[1]}m D+`);
  return parts.join(" · ");
}

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

// Sottile linea divisoria — pattern standard Scriptable: uno stack con
// width 0 (= riempi lo spazio disponibile) e height 1.
function addDivider(container) {
  const line = container.addStack();
  line.size = new Size(0, 1);
  line.backgroundColor = COLORS.divider;
}

// Mini grafico km fatti vs pianificati — barre con un filo di highlight in
// cima per dare profondità senza bisogno di gradienti veri (DrawContext
// non li supporta su un path arbitrario). Disegnato a 2x per restare
// nitido su schermi retina anche se mostrato piccolo.
function drawKmChart(planned, actual) {
  const W = 320,
    H = 92;
  const ctx = new DrawContext();
  ctx.size = new Size(W, H);
  ctx.opaque = false;
  ctx.respectScreenScale = true;

  const maxVal = Math.max(planned || 0, actual || 0, 1) * 1.15;
  const barW = 78,
    gap = 34,
    baseY = H - 20,
    maxBarH = H - 42;
  const x1 = W / 2 - gap / 2 - barW,
    x2 = W / 2 + gap / 2;

  function bar(x, val, color, label) {
    const h = Math.max((val / maxVal) * maxBarH, 3);
    const top = baseY - h;

    ctx.setFillColor(color);
    const path = new Path();
    path.addRoundedRect(new Rect(x, top, barW, h), 7, 7);
    ctx.addPath(path);
    ctx.fillPath();

    // highlight sottile in cima, per dare un minimo di volume alla barra
    if (h > 10) {
      ctx.setFillColor(new Color("#ffffff", 0.18));
      const hl = new Path();
      hl.addRoundedRect(new Rect(x, top, barW, Math.min(8, h * 0.3)), 7, 7);
      ctx.addPath(hl);
      ctx.fillPath();
    }

    ctx.setFont(Font.heavySystemFont(15));
    ctx.setTextColor(COLORS.text);
    ctx.setTextAlignedCenter();
    ctx.drawTextInRect(`${val}`, new Rect(x - 10, top - 22, barW + 20, 20));

    ctx.setFont(Font.mediumSystemFont(9));
    ctx.setTextColor(COLORS.muted);
    ctx.setTextAlignedCenter();
    ctx.drawTextInRect(label, new Rect(x - 10, baseY + 5, barW + 20, 13));
  }

  // linea di base sottile
  ctx.setFillColor(COLORS.divider);
  const basePath = new Path();
  basePath.addRect(new Rect(x1 - 6, baseY, barW * 2 + gap + 12, 1));
  ctx.addPath(basePath);
  ctx.fillPath();

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
  const gradient = new LinearGradient();
  gradient.colors = [new Color("#1a1a2e"), new Color("#0f0f0f")];
  gradient.locations = [0, 1];
  gradient.startPoint = new Point(0, 0);
  gradient.endPoint = new Point(0.3, 1);
  w.backgroundGradient = gradient;
  w.setPadding(13, 15, 12, 15);

  if (!payload) {
    w.addSpacer();
    const t = w.addText("⚠️ Dati non disponibili");
    t.font = Font.semiboldSystemFont(13);
    t.textColor = COLORS.muted;
    t.centerAlignText();
    w.addSpacer();
    return w;
  }

  // 1. Fase + settimana, con pallino colorato per fase
  const phaseName = payload.phase_label ? payload.phase_label.split(" · ")[0] : null;
  const phaseColor = PHASE_COLORS[phaseName] || COLORS.muted;
  const phaseText = (payload.phase_label || planStatusLabel(payload.plan_status)).toUpperCase();

  const header = w.addStack();
  header.centerAlignContent();
  const phaseDot = header.addText("●");
  phaseDot.font = Font.systemFont(9);
  phaseDot.textColor = phaseColor;
  header.addSpacer(5);
  const phaseLine = header.addText(phaseText);
  phaseLine.font = Font.boldSystemFont(11);
  phaseLine.textColor = COLORS.muted;
  header.addSpacer();
  const brand = header.addText("🏔️");
  brand.font = Font.systemFont(11);

  w.addSpacer(9);
  addDivider(w);
  w.addSpacer(9);

  // 2. Prossimo allenamento in assoluto
  if (payload.next_workout) {
    const nw = payload.next_workout;
    const row = w.addStack();
    row.centerAlignContent();
    const dot = row.addText("●");
    dot.font = Font.boldSystemFont(11);
    dot.textColor = typeColor(nw.type);
    row.addSpacer(6);
    const txt = row.addText(`${nw.day_label} · ${iconFor(nw.type)}${nw.label}`);
    txt.font = Font.semiboldSystemFont(15);
    txt.textColor = COLORS.text;
    txt.lineLimit = 1;
    row.addSpacer();

    const detail = compactDetail(nw.extra);
    if (detail) {
      w.addSpacer(2);
      const dRow = w.addStack();
      dRow.addSpacer(17);
      const dt = dRow.addText(detail);
      dt.font = Font.systemFont(11);
      dt.textColor = COLORS.muted;
      dRow.addSpacer();
    }
  } else {
    const t = w.addText("Nessun allenamento in programma");
    t.font = Font.systemFont(12);
    t.textColor = COLORS.muted;
  }

  // 3. Sessione chiave — solo se diversa dalla precedente
  const nextDate = payload.next_workout && payload.next_workout.date;
  if (payload.key_workout && payload.key_workout.date !== nextDate) {
    const kw = payload.key_workout;
    w.addSpacer(6);
    const row = w.addStack();
    row.centerAlignContent();
    const star = row.addText("⭐");
    star.font = Font.systemFont(10);
    row.addSpacer(6);
    const detail = compactDetail(kw.extra);
    const line = `${kw.day_label} · ${iconFor(kw.type)}${kw.label}${detail ? " · " + detail : ""}`;
    const kt = row.addText(line);
    kt.font = Font.mediumSystemFont(11);
    kt.textColor = COLORS.yellow;
    kt.lineLimit = 1;
    row.addSpacer();
  }

  w.addSpacer(10);
  addDivider(w);
  w.addSpacer(4);

  // 4. Mini grafico km reale vs pianificato (settimana corrente)
  if (payload.week) {
    const img = drawKmChart(payload.week.planned_km, payload.week.actual_km);
    const stack = w.addStack();
    stack.addSpacer();
    const iw = stack.addImage(img);
    iw.imageSize = new Size(160, 46);
    stack.addSpacer();
  } else {
    w.addSpacer(4);
    const t = w.addText("Settimana fuori piano");
    t.font = Font.systemFont(11);
    t.textColor = COLORS.muted;
    t.centerAlignText();
  }

  w.addSpacer();

  // 5. Countdown prossima gara milestone — badge pieno
  if (payload.next_race) {
    const r = payload.next_race;
    const badgeRow = w.addStack();
    const badge = badgeRow.addStack();
    badge.backgroundColor = COLORS.yellow;
    badge.cornerRadius = 8;
    badge.setPadding(4, 9, 4, 9);
    const line = badge.addText(`🏁 ${raceNameShort(r.label)} — ${r.days_until}gg`);
    line.font = Font.boldSystemFont(11);
    line.textColor = new Color("#241a00");
    line.lineLimit = 1;
    badgeRow.addSpacer();
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

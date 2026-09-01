# Prossimi Allenamenti — da importare su Garmin

Scritto da Claude Chat, letto da Claude Code che importa le sessioni su Garmin.
Claude Code chiede sempre conferma prima di importare.
Dopo l'import segna la sessione come "✅ importata".

## Formato

```
Data: YYYY-MM-DD
Blocco: Restart | Base | Aerobico | Specifico | Picco | Taper | Test
Tipo: corsa easy | corsa qualità | long trail | hiking | bici | forza
Distanza: X km (o Durata: X min)
FC target: < XXX bpm
Note: dettagli
Stato: da importare
```

---

## BLOCCO: Test (pre-restart)

Data: 2026-08-29
Blocco: Test
Tipo: corsa easy
Distanza: 8 km
FC target: < 145 bpm
Note: prima sessione — verifica che compaia su Garmin
Stato: ✅ importata (workout_id 1678944638, verificato via API il 28/08/2026)

---

## BLOCCO: Restart — Settimana 1 (1–6 settembre 2026)

Data: 2026-09-01
Blocco: Restart
Tipo: forza
Durata: 50 min
Note: Palestra Giorno 1 — Adductor · Squat bilanciere · Hip Thrust · Leg Extension Mono · Calf · Push Down · ABS
Stato: da importare

Data: 2026-09-02
Blocco: Restart
Tipo: corsa easy
Distanza: 6 km
FC target: < 145 bpm
Note: passo 6:30-7:00/km · stop se dolore ITB
Stato: da importare

Data: 2026-09-04
Blocco: Restart
Tipo: bici
Durata: 45 min
FC target: < 140 bpm
Note: Z2 bassa · sera 19:00+
Stato: da importare

Data: 2026-09-05
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < 145 bpm
Note: ITB check
Stato: da importare

---

## BLOCCO: Restart — Settimana 2 (8–13 settembre 2026)

Data: 2026-09-08
Blocco: Restart
Tipo: corsa easy
Distanza: 6 km
FC target: < 145 bpm
Note: pre-test AeT
Stato: da importare

Data: 2026-09-09
Blocco: Restart
Tipo: forza
Durata: 50 min
Note: Palestra Giorno 3 — Leg Curl Prono · Affondi · Nordic Curl · Spinte panca · Croci · Curl cavo · ABS
Stato: da importare

Data: 2026-09-10
Blocco: Restart
Tipo: corsa qualità
Riscaldamento: 15 min FC 110-130 bpm
Ripetute: 60 min FC 135-148 bpm (TEST AeT — nota passo medio e FC media)
Defaticamento: 10 min FC < 125 bpm
Note: usa file test_AeT.fit su Garmin · riporta risultato a Claude Chat
Stato: da importare

Data: 2026-09-12
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata il 10/09
Stato: da importare

Data: 2026-09-13
Blocco: Restart
Tipo: bici
Durata: 45 min
FC target: < 140 bpm
Note: recupero attivo post-test
Stato: da importare

---

## BLOCCO: Restart — Settimana 3 (15–20 settembre 2026)

Data: 2026-09-15
Blocco: Restart
Tipo: corsa qualità
Riscaldamento: 15 min facile
Ripetute: 30 min al massimo sforzo sostenibile (TEST AnT — FC media = AnT)
Defaticamento: 10 min facile
Note: riporta FC media dei 30 min a Claude Chat
Stato: ✅ importata (workout_id 1678952007, verificato via API il 28/08/2026)

Data: 2026-09-17
Blocco: Restart
Tipo: corsa easy
Distanza: 6 km
FC target: < AeT misurata
Note: scarico post-AnT
Stato: ✅ importata (workout_id 1678952008, verificato via API il 28/08/2026)

Data: 2026-09-19
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata
Stato: ✅ importata (workout_id 1678952016, verificato via API il 28/08/2026)

Data: 2026-09-20
Blocco: Restart
Tipo: bici
Durata: 30 min
FC target: < 135 bpm
Stato: ✅ importata (workout_id 1678952018, verificato via API il 28/08/2026)

---

## BLOCCO: Restart — Settimana 4 (22–27 settembre 2026)

Data: 2026-09-22
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata
Stato: ✅ importata (workout_id 1678952024, verificato via API il 28/08/2026)

Data: 2026-09-23
Blocco: Restart
Tipo: forza
Durata: 50 min
Note: Palestra Giorno 2 — Lat Machine · Pulley · Trazioni EPS · Chest Press · Shoulder Press · Alzate · ABS
Stato: ✅ importata (workout_id 1678952029, verificato via API il 28/08/2026)

Data: 2026-09-24
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata
Note: ultimi 15 min a AeT bpm
Stato: ✅ importata (workout_id 1678952034, verificato via API il 28/08/2026)

Data: 2026-09-25
Blocco: Restart
Tipo: bici
Durata: 50 min
FC target: < 145 bpm
Stato: ✅ importata (workout_id 1678952035, verificato via API il 28/08/2026)

Data: 2026-09-26
Blocco: Restart
Tipo: long trail
Distanza: 10 km
FC target: < AeT misurata
Note: ~400m D+ · bastoncini · mangia ogni 45 min · ISCRIVITI LAVAREDO 80K 2027
Stato: ✅ importata (workout_id 1678952037, verificato via API il 28/08/2026)

Data: 2026-09-27
Blocco: Restart
Tipo: hiking
Durata: 60 min
Note: back-to-back leggero
Stato: ✅ importata (workout_id 1678952042, verificato via API il 28/08/2026)
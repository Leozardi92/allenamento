# Prossimi Allenamenti — da importare su Garmin

Scritto da Claude Chat, letto da Claude Code che importa le sessioni su Garmin.
Claude Code chiede sempre conferma prima di importare.
Dopo l'import segna la sessione come "✅ importata".

## Formato dal 26/10/2026 — sessioni SENZA giorno

Le sessioni di una settimana non hanno più un giorno: Leonardo decide quando farle.
Ogni sessione ha `Settimana:` (il lunedì) e `Sessione:` al posto di `Data:`. Vengono caricate nella
libreria Garmin senza data (nome con prefisso `S<n> · `). Il lungo ha tre versioni equivalenti
(`-lungo-corsa`, `-lungo-bici`, `-lungo-skimo`): ne fai una. Le gare e le sessioni con giorno fisso
restano con `Data:`.

```
Settimana: YYYY-MM-DD
Sessione: S<n>-<nome>
Blocco: Restart | Base | Aerobico | Specifico | Picco | Taper | Test
Tipo: corsa easy | corsa qualità | long trail | hiking | bici | forza
Distanza: X km (o Durata: X min)
FC target: < XXX bpm
Note: dettagli
Stato: da importare
```

---

## Formato (sessioni con giorno fisso)

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

## BLOCCO: Restart — Settimana 2 (8–13 settembre 2026)

Data: 2026-09-08
Blocco: Restart
Tipo: corsa easy
Distanza: 6 km
FC target: < 145 bpm
Note: pre-test AeT
Stato: ✅ importata (workout_id 1684303573, automatico il 01/09/2026)

Data: 2026-09-09
Blocco: Restart
Tipo: forza
Durata: 50 min
Note: Palestra Giorno 3 — Leg Curl Prono · Affondi · Nordic Curl · Spinte panca · Croci · Curl cavo · ABS
Stato: ✅ importata (workout_id 1684303576, automatico il 01/09/2026)

Data: 2026-09-10
Blocco: Restart
Tipo: corsa qualità
Riscaldamento: 15 min FC 110-130 bpm
Ripetute: 60 min FC 135-148 bpm (TEST AeT — nota passo medio e FC media)
Defaticamento: 10 min FC < 125 bpm
Note: usa file test_AeT.fit su Garmin · riporta risultato a Claude Chat
Stato: ✅ importata (workout_id 1684303580, automatico il 01/09/2026)

Data: 2026-09-12
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata il 10/09
Stato: ✅ importata (workout_id 1684303606, automatico il 01/09/2026)

Data: 2026-09-13
Blocco: Restart
Tipo: bici
Durata: 45 min
FC target: < 140 bpm
Note: recupero attivo post-test
Stato: ✅ importata (workout_id 1684303619, automatico il 01/09/2026)

---

## BLOCCO: Restart — Settimana 3 (15–20 settembre 2026)

Data: 2026-09-15
Blocco: Restart
Tipo: corsa qualità
Riscaldamento: 15 min facile
Ripetute: 30 min al massimo sforzo sostenibile (TEST AnT — FC media = AnT)
Defaticamento: 10 min facile
Note: riporta FC media dei 30 min a Claude Chat
Stato: ✅ importata (workout_id 1693529278, automatico il 10/09/2026)

Data: 2026-09-17
Blocco: Restart
Tipo: corsa easy
Distanza: 6 km
FC target: < AeT misurata
Note: scarico post-AnT
Stato: ✅ importata (workout_id 1693529294, automatico il 10/09/2026)

Data: 2026-09-19
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata
Stato: ✅ importata (workout_id 1693529296, automatico il 10/09/2026)

Data: 2026-09-20
Blocco: Restart
Tipo: bici
Durata: 30 min
FC target: < 135 bpm
Stato: ✅ importata (workout_id 1693529299, automatico il 10/09/2026)

---

## BLOCCO: Restart — Settimana 4 (22–27 settembre 2026)

Data: 2026-09-22
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata
Stato: ✅ importata (workout_id 1701884895, automatico il 18/09/2026)

Data: 2026-09-23
Blocco: Restart
Tipo: forza
Durata: 50 min
Note: Palestra Giorno 2 — Lat Machine · Pulley · Trazioni EPS · Chest Press · Shoulder Press · Alzate · ABS
Stato: ✅ importata (workout_id 1701884899, automatico il 18/09/2026)

Data: 2026-09-24
Blocco: Restart
Tipo: corsa easy
Distanza: 8 km
FC target: < AeT misurata
Note: ultimi 15 min a AeT bpm
Stato: ✅ importata (workout_id 1701884903, automatico il 18/09/2026)

Data: 2026-09-25
Blocco: Restart
Tipo: bici
Durata: 50 min
FC target: < 145 bpm
Stato: ✅ importata (workout_id 1701884906, automatico il 18/09/2026)

Data: 2026-09-26
Blocco: Restart
Tipo: long trail
Distanza: 10 km
FC target: < AeT misurata
Note: ~400m D+ · bastoncini · mangia ogni 45 min · ISCRIVITI LAVAREDO 80K 2027
Stato: ✅ importata (workout_id 1701884909, automatico il 18/09/2026)

Data: 2026-09-27
Blocco: Restart
Tipo: hiking
Durata: 60 min
Note: back-to-back leggero
Stato: ✅ importata (workout_id 1701884913, automatico il 18/09/2026)

---

### BLOCCO: Base — Settimana 5 (29 set–4 ott 2026) · 30 km · Tipo: B

> ⚡ INIZIANO HILL SPRINTS + ME ogni settimana da ora in poi

Data: 2026-09-29
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 6x8sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints S1 — trova una salita ≥20% di pendenza · sforzo MASSIMO in ogni ripetuta · stop se non riesci a mantenere la distanza delle prime
Stato: ✅ importata (workout_id 1714403604, confermato in chat 29/09/2026)

Data: 2026-09-30
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 2 — Lat Machine · Pulley · Trazioni EPS · Chest Press · Shoulder Press · Alzate · ABS + Core #1: plank 3×45sec · bird-dog 3×10 per lato
Stato: ✅ importata (workout_id 1708926412, automatico il 25/09/2026)

Data: 2026-10-01
Blocco: Base
Tipo: corsa easy
Distanza: 7 km
FC target: < 141 bpm (Z1)
Note: Easy Z1 · alla fine: 3×150m discesa veloce controllata (pick-up DH) · recupero salendo piano in 2 min
Stato: ✅ importata (workout_id 1708926420, automatico il 25/09/2026)

Data: 2026-10-02
Blocco: Base
Tipo: corsa qualità
Durata: 45 min
FC target: < 141 bpm cardiovascolare (la fatica sarà muscolare locale)
Note: ME Workout #1 — zaino 5 kg · salita con 25-35% pendenza · cammina/corri su per 20 min continuativi · le gambe devono bruciare, il cuore no · Core #2 dopo: plank + crunch obliqui
Stato: ✅ importata (workout_id 1708926428, automatico il 25/09/2026)

Data: 2026-10-03
Blocco: Base
Tipo: long trail
Distanza: 9 km
FC target: < 141 bpm (Z1) · ultimi 15 min opzionali fino a 153 bpm (Z2)
Note: Prima uscita trail con zaino gara + bastoncini · 400-500m D+ · mangia ogni 40-45 min (30-40g CHO/ora) · pesa prima e dopo (sweat test baseline)
Stato: ✅ importata (workout_id 1708926434, automatico il 25/09/2026)

Data: 2026-10-04
Blocco: Base
Tipo: hiking
Durata: 60 min
FC target: < 130 bpm
Note: Recovery · alla fine: 3×150m discesa veloce (secondo DH pick-up della settimana)
Stato: ✅ importata (workout_id 1708926439, automatico il 25/09/2026)

---

### BLOCCO: Base — Settimana 6 (6–11 ott 2026) · 33 km · Tipo: B

Data: 2026-10-06
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 7x8sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints S2 — stessa salita della settimana scorsa per confrontare la distanza
Stato: ✅ importata (workout_id 1714403612, confermato in chat 29/09/2026)

Data: 2026-10-07
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 3 — Leg Curl Prono · Affondi camminata · Nordic Curl · Spinte panca · Croci · Curl cavo · ABS + Core #1
Stato: ✅ importata (workout_id 1716511843, automatico il 02/10/2026)

Data: 2026-10-08
Blocco: Base
Tipo: corsa easy
Distanza: 8 km
FC target: < 141 bpm
Note: Easy Z1 · 3×150m DH pick-up alla fine
Stato: ✅ importata (workout_id 1716511857, automatico il 02/10/2026)

Data: 2026-10-09
Blocco: Base
Tipo: corsa qualità
Durata: 50 min
Note: ME Workout #2 — zaino 6 kg · salita 25-35% · 22 min continuativi · Core #2 dopo
Stato: ✅ importata (workout_id 1716511874, automatico il 02/10/2026)

Data: 2026-10-10
Blocco: Base
Tipo: long trail
Distanza: 11 km
FC target: < 141 bpm (Z1) · ultimi 15 min Z2
Note: ~550m D+ · bastoncini + vest · CHO ogni 40 min · pesa prima/dopo
Stato: ✅ importata (workout_id 1716511880, automatico il 02/10/2026)

Data: 2026-10-11
Blocco: Base
Tipo: hiking
Durata: 75 min
Note: 3×150m DH pick-up · Recovery
Stato: ✅ importata (workout_id 1716511887, automatico il 02/10/2026)

---

### BLOCCO: Base — Settimana 7 (13–18 ott 2026) · 36 km · Tipo: B

Data: 2026-10-13
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 7x10sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints S3 — NON eseguiti: martedì 13/10 è stato fatto il Test AeT #2 (9.3 km · FC media 139 bpm · passo medio 6:11/km). Gli Hill Sprints S3 slittano a S8 (20/10)
Stato: ⛔ non eseguita — sostituita dal Test AeT #2 del 13/10 (workout_id 1714403620, mai eseguito)

Data: 2026-10-14
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 1 — Adductor · Squat bilanciere · Hip Thrust · Leg Extension · Calf · ABS + Core #1 · incrementa pesi rispetto a S5
Stato: ✅ importata (workout_id 1723911317, automatico il 09/10/2026)

Data: 2026-10-15
Blocco: Base
Tipo: corsa easy
Distanza: 9 km
FC target: < 141 bpm
Note: Easy Z1 · 4×150m DH pick-up alla fine
Stato: ✅ importata (workout_id 1723911325, automatico il 09/10/2026)

Data: 2026-10-16
Blocco: Test
Tipo: corsa qualità
Riscaldamento: 15 min FC 110-130 bpm
Ripetute: 60 min FC 135-148 bpm (Test AeT #2 — stesso percorso del 10 set · confronta passo medio)
Defaticamento: 10 min FC < 125 bpm
Note: NON eseguito il 16/10: il Test AeT #2 è stato fatto martedì 13/10 (9.3 km · FC media 139 bpm · passo medio 6:11/km vs 6:56/km di settembre)
Stato: ⛔ non eseguita — test già fatto il 13/10 (workout_id 1723911327, mai eseguito)

Data: 2026-10-17
Blocco: Base
Tipo: bici
Durata: 75 min
FC target: < 145 bpm
Note: Z2 bassa · sera · recupero attivo
Stato: ✅ importata (workout_id 1723911334, automatico il 09/10/2026)

Data: 2026-10-18
Blocco: Base
Tipo: long trail
Distanza: 13 km
FC target: < 141 bpm · ultimi 20 min Z2
Note: ~650m D+ · bastoncini + vest · CHO ogni 40 min · 40g/ora
Stato: ✅ importata (workout_id 1723911341, automatico il 09/10/2026)

---

### BLOCCO: Base — Settimana 8 (20–25 ott 2026) · 36 km · Tipo: B
> Ripresa dopo lo scarico di fatto di S7 · Trail del Cinghiale rinunciato (17/10) · la progressione del Base prosegue

Data: 2026-10-20
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 7x10sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints S3 — è il passo saltato in S7 (martedì scorso hai fatto il Test AeT) · sforzo MASSIMO · stessa salita delle settimane scorse
Stato: ✅ importata (workout_id 1732433378, automatico il 17/10/2026)

Data: 2026-10-21
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 1 — Adductor · Squat bilanciere · Hip Thrust · Leg Extension · Calf · ABS + Core #1 (Giorno 1 saltato in S7)
Stato: ✅ importata (workout_id 1732433382, automatico il 17/10/2026)

Data: 2026-10-22
Blocco: Base
Tipo: corsa easy
Distanza: 7 km
FC target: < 141 bpm
Note: Easy Z1 · 3×150m DH pick-up alla fine
Stato: ✅ importata (workout_id 1732433383, automatico il 17/10/2026)

Data: 2026-10-23
Blocco: Base
Tipo: forza
Durata: 55 min
Note: ME Workout #3 su SCALA INFINITA in palestra — 10 min riscaldamento lento + 24 min continui con zaino 7 kg (gradini alternati, senza appoggiarti ai corrimano) + 10 min defaticamento lento · FC 130-150 (oltre 155 rallenta) · le gambe devono bruciare, il cuore no · Core #2 dopo
Stato: ✅ importata (workout_id 1736488810, automatico il 20/10/2026)

Data: 2026-10-24
Blocco: Base
Tipo: long trail
Distanza: 16 km
FC target: < 141 bpm (Z1) · ultimi 20 min Z2
Note: ~650m D+ · bastoncini + vest · CHO ogni 40 min · 40g/ora
Stato: ✅ importata (workout_id 1732433386, automatico il 17/10/2026)

Data: 2026-10-25
Blocco: Base
Tipo: hiking
Durata: 75 min
FC target: < 130 bpm
Note: Recovery · 3×150m DH pick-up alla fine
Stato: ✅ importata (workout_id 1732433387, automatico il 17/10/2026)

---

### BLOCCO: Base — Settimana 9 (26 ott–1 nov 2026) · 40 km · Tipo: B
> 2ª settimana di carico · nessuna gara · sessioni senza giorno: scegli tu quando farle (una sola sessione dura al giorno)

Settimana: 2026-10-26
Sessione: S9-hill-sprints
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 8x12sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints #4 — sforzo MASSIMO · stop se non raggiungi più la distanza delle prime ripetute
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-me
Blocco: Base
Tipo: forza
Durata: 55 min
Note: ME Workout #4 su SCALA INFINITA in palestra — 10 min riscaldamento lento + 25 min continui con zaino 7 kg (gradini alternati, senza appoggiarti ai corrimano) + 10 min defaticamento lento · FC 130-150 (oltre 155 rallenta) · le gambe devono bruciare, il cuore no · Core #2 dopo
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-palestra
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 2 — Lat Machine · Pulley · Trazioni EPS · Chest Press · Shoulder Press · Alzate laterali · ABS + Core #1
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-easy-1
Blocco: Base
Tipo: corsa easy
Distanza: 8 km
FC target: < 141 bpm
Note: Easy Z1 · 3×150m DH pick-up alla fine
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-hiking
Blocco: Base
Tipo: hiking
Durata: 90 min
FC target: < 130 bpm
Note: Recovery · 3×150m DH pick-up alla fine
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-lungo-corsa
Blocco: Base
Tipo: long trail
Distanza: 19 km
FC target: < 141 bpm (Z1) · ultimi 20 min Z2
Note: LUNGO (versione corsa) · ~800m D+ · bastoncini + vest · CHO ogni 40 min (40g/ora) · alternative equivalenti: bici o scialpinismo
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-lungo-bici
Blocco: Base
Tipo: bici
Durata: 220 min
FC target: < 147 bpm
Note: LUNGO (versione bici) · ~1300m D+ · Z2 FC<147 · 1,3× il tempo del trail (niente impatto) · CHO ogni 40 min
Stato: da importare

Settimana: 2026-10-26
Sessione: S9-lungo-skimo
Blocco: Base
Tipo: hiking
Durata: 170 min
FC target: < 147 bpm
Note: LUNGO (versione scialpinismo) · ~2250m D+ · FC<147 (ultimi 20 min fino all'AeT) · stesso tempo del trail · solo se c'è neve
Stato: da importare


### BLOCCO: Base — Settimana 10 (2–8 nov 2026) · 22 km · Tipo: R (SCARICO)
> Chiude il ciclo 2:1 (S8-S9) · metà reps, una sola palestra, niente ME né Z3-4

Settimana: 2026-11-02
Sessione: S10-hill-sprints
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 4x8sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints dimezzati — sforzo MASSIMO · stop se non raggiungi più la distanza delle prime ripetute · metà reps (scarico)
Stato: da importare

Settimana: 2026-11-02
Sessione: S10-palestra
Blocco: Base
Tipo: forza
Durata: 40 min
Note: Palestra Giorno 3 RIDOTTA · solo 2 esercizi principali + Core #1 · carichi ridotti del 30%
Stato: da importare

Settimana: 2026-11-02
Sessione: S10-easy-1
Blocco: Base
Tipo: corsa easy
Distanza: 4 km
FC target: < 135 bpm
Note: Easy Z1
Stato: da importare

Settimana: 2026-11-02
Sessione: S10-lungo-corsa
Blocco: Base
Tipo: long trail
Distanza: 12 km
FC target: < 135 bpm
Note: LUNGO (versione corsa) · ~450m D+ · bastoncini + vest · CHO ogni 40 min (40g/ora) · alternative equivalenti: bici o scialpinismo
Stato: da importare

Settimana: 2026-11-02
Sessione: S10-lungo-bici
Blocco: Base
Tipo: bici
Durata: 135 min
FC target: < 147 bpm
Note: LUNGO (versione bici) · ~800m D+ · Z2 FC<147 · 1,3× il tempo del trail (niente impatto) · CHO ogni 40 min
Stato: da importare

Settimana: 2026-11-02
Sessione: S10-lungo-skimo
Blocco: Base
Tipo: hiking
Durata: 105 min
FC target: < 147 bpm
Note: LUNGO (versione scialpinismo) · ~1350m D+ · FC<147 (ultimi 20 min fino all'AeT) · stesso tempo del trail · solo se c'è neve
Stato: da importare


### BLOCCO: Base — Settimana 11 (9–15 nov 2026) · 44 km · Tipo: G (C-race)
> C-race Trail delle Bregonze 25K / 1100m D+ domenica 15/11 (il lungo è la gara, senza workout Garmin) · Hill Sprints e ME entro i primi giorni · nei 3 giorni prima della gara solo easy o riposo

Settimana: 2026-11-09
Sessione: S11-hill-sprints
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 8x15sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints #5 — sforzo MASSIMO · stop se non raggiungi più la distanza delle prime ripetute
Stato: da importare

Settimana: 2026-11-09
Sessione: S11-me
Blocco: Base
Tipo: forza
Durata: 55 min
Note: ME Workout #5 su SCALA INFINITA in palestra — 10 min riscaldamento lento + 25 min continui con zaino 7 kg (gradini alternati, senza appoggiarti ai corrimano) + 10 min defaticamento lento · FC 130-150 (oltre 155 rallenta) · le gambe devono bruciare, il cuore no · Core #2 dopo
Stato: da importare

Settimana: 2026-11-09
Sessione: S11-palestra
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 2 — Lat Machine · Pulley · Trazioni EPS · Chest Press · Shoulder Press · Alzate laterali · ABS + Core #1 · palestra pre-gara: niente gambe pesanti
Stato: da importare

Settimana: 2026-11-09
Sessione: S11-easy-1
Blocco: Base
Tipo: corsa easy
Distanza: 5 km
FC target: < 141 bpm
Note: Easy Z1 · 3×150m DH pick-up alla fine
Stato: da importare


### BLOCCO: Base — Settimana 12 (16–22 nov 2026) · 48 km · Tipo: G (C-race)
> C-race Trail dello Shamano 30K / 1400m D+ domenica 22/11 (il lungo è la gara, senza workout Garmin) · dopo la Bregonze 2-3 giorni solo easy/riposo · niente ME

Settimana: 2026-11-16
Sessione: S12-hill-sprints
Blocco: Base
Tipo: corsa qualità
Riscaldamento: 15 min FC < 141 bpm
Ripetute: 8x15sec recupero 3min
Defaticamento: 10 min FC < 141 bpm
Note: Hill Sprints #6 — sforzo MASSIMO · stop se non raggiungi più la distanza delle prime ripetute
Stato: da importare

Settimana: 2026-11-16
Sessione: S12-palestra
Blocco: Base
Tipo: forza
Durata: 60 min
Note: Palestra Giorno 2 — Lat Machine · Pulley · Trazioni EPS · Chest Press · Shoulder Press · Alzate laterali · ABS + Core #1 · palestra pre-gara: niente gambe pesanti
Stato: da importare

Settimana: 2026-11-16
Sessione: S12-easy-1
Blocco: Base
Tipo: corsa easy
Distanza: 10 km
FC target: < 141 bpm
Note: Easy Z1 · 3×150m DH pick-up alla fine
Stato: da importare


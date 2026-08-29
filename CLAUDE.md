# CLAUDE.md — Istruzioni per Claude Code

## Flusso automatico ad ogni avvio

Esegui in ordine, senza chiedere conferma:

1. **Sync Garmin** → sync_garmin.py → salva in garmin-ai/ su Google Drive
2. **Sync Strava** → scarica attività recenti e dati wellness via API Strava
3. **Genera dashboard** → leggi contesto-allenamento.md da GitHub +
   dati Garmin da Drive + dati Strava → genera index.html
4. **Push GitHub** → deploy_github.py → pubblica su leozardi92.github.io/allenamento/
5. **Mostra riepilogo** → data sync, ultimi dati Garmin, link dashboard

## Credenziali

- **GitHub token:** da configurazione locale (non in questo file)
- **GitHub repo:** Leozardi92/allenamento
- **GitHub Pages:** https://leozardi92.github.io/allenamento/
- **Strava:** token OAuth già configurato

## File sorgenti

- **Contesto + specifiche dashboard:** leggi da GitHub (contesto-allenamento.md)
- **Prossimi allenamenti:** leggi da GitHub (prossimi-allenamenti.md)
- **Dati Garmin grezzi:** garmin-ai/garmin/ su Google Drive
- **Dashboard:** genera index.html e pusha su GitHub

## Dopo ogni sync Strava

Leggi l'ultima attività e genera una breve descrizione automatica
(tipo sessione, distanza, passo medio, FC media, zone cardiache, confronto piano).
Questa descrizione va nella Tab 1 della dashboard sotto la mappa.

## Import allenamenti su Garmin

Leggi prossimi-allenamenti.md da GitHub.
Chiedi sempre conferma prima di importare.
Dopo l'import aggiorna lo stato a "✅ importata" e fai push su GitHub.

## Verdict

A fine blocco (settimane di scarico: S4·S7·S11·S15·S20·S24·S28·S33·S36):
- Leggi dati Garmin+Strava del periodo
- Genera il Verdict seguendo la specifica in contesto-allenamento.md
- Aggiorna index.html con la card del blocco completato

## Struttura file sul PC

```
progetto/
├── CLAUDE.md           ← questo file
├── sync_garmin.py      ← sync Garmin → Drive
├── deploy_github.py    ← push index.html su GitHub
└── garmin-ai/          ← dati Garmin (sincronizzati su Drive)
    └── garmin/
        ├── daily/
        └── data.json
```

# Snimio Coming Soon

Landingspagina (wachtlijst + productuitleg) voor **Snimio** — launch **29 mei 2026**.

| | |
|--|--|
| **GitHub** | https://github.com/NielsHoffmann9/ComingSoonSnimio *(verplaats naar `flowixagents` indien gewenst)* |
| **Live (Pages)** | https://nielshoffmann9.github.io/ComingSoonSnimio/ |
| **Productiedomein** | www.snim.io *(DNS apart instellen)* |

## Wat staat waar?

| Map | Inhoud |
|-----|--------|
| **`site/`** | **Productie** — statische HTML (`index.html`, `bedankt.html`, css, js) |
| `docs/` | Brief, vragenlijst, AI copy-paste prompt |
| `src/` | Oude Vite/React prototype (niet productie) |

## Lokaal bekijken

```powershell
cd site
npx serve . -l 5176
```

Of vanuit root: `npm run preview:site` → http://localhost:5176

## Deploy

### GitHub Pages (snel online)
Push naar `main` → Actions deployt `site/`. URL: https://nielshoffmann9.github.io/ComingSoonSnimio/

### Productie snim.io (VPS)
Op de server (netwerk `snim_edge` moet bestaan — zie Snimio `docker-compose.yml`):

```bash
git clone https://github.com/NielsHoffmann9/ComingSoonSnimio.git
cd ComingSoonSnimio
docker compose up -d --build
```

Caddy in Snimio (`deploy/Caddyfile`) proxiet `snim.io` → container `snimio-site:80`.

### Lokaal
```powershell
.\start-site.ps1
```

## Wachtlijst API

In `site/js/main.js`: zet `CONFIG.waitlistApi` op het Snimio-endpoint.

## Documentatie

- `docs/AI-BUILD-PROMPT.md` — volledige opdracht voor AI (knippen/plakken)
- `docs/COMING-SOON-BRIEF.md` — product- en designbrief

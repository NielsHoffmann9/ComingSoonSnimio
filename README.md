# Snimio Coming Soon

Landingspagina (wachtlijst + productuitleg) voor **Snimio** — launch **29 mei 2026**.

| | |
|--|--|
| **GitHub** | https://github.com/flowixagents/ComingSoonSnimio |
| **Live (Pages)** | https://flowixagents.github.io/ComingSoonSnimio/ *(na Pages aan)* |
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

1. **GitHub Pages** — push naar `main`; workflow publiceert map `site/`.
2. In repo: **Settings → Pages → Source: GitHub Actions**.
3. Optioneel custom domain: `www.snim.io` + CNAME in `site/`.

## Wachtlijst API

In `site/js/main.js`: zet `CONFIG.waitlistApi` op het Snimio-endpoint.

## Documentatie

- `docs/AI-BUILD-PROMPT.md` — volledige opdracht voor AI (knippen/plakken)
- `docs/COMING-SOON-BRIEF.md` — product- en designbrief

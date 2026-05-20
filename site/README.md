# Snimio Coming Soon (statische HTML)

Productie-build voor **www.snim.io** — launch **29 mei 2026**.

## Lokaal bekijken

```bash
cd site
npx serve . -l 5176
```

Of vanuit de repo-root: `npm run preview:site`

## Bestanden

| Bestand | Doel |
|---------|------|
| `index.html` | Lange scroll landing + wachtlijst |
| `bedankt.html` | Bedankpagina na inschrijving |
| `css/styles.css` | Donker hero, animaties, responsive |
| `js/main.js` | Countdown, NL/EN, scroll, formulier |

## Wachtlijst koppelen

In `js/main.js` zet `CONFIG.waitlistApi` op het Snimio-endpoint. Zonder URL: demo-modus → redirect naar `bedankt.html` na validatie.

## Deploy

Upload de map `site/` naar Vercel, Netlify of Cloudflare Pages (root = `site`).

## Nog te doen

- Echte UI-screenshots in `assets/`
- Productvideo `assets/hero.mp4`
- OG-image 1200×630
- Privacy/Voorwaarden URLs in footer

Brief: `../docs/COMING-SOON-BRIEF.md`

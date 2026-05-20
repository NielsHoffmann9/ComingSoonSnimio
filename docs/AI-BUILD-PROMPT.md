# AI PROMPT — Snimio Coming Soon pagina (copy-paste)

> **Gebruik:** Kopieer alles onder de streep naar een AI (design, code, deploy). Dit is de volledige opdracht — geen andere context nodig.

---

## OPDRACHT IN ÉÉN ZIN

Bouw een **statische, mega moderne, donkere coming-soon landingspagina** voor **Snimio** (supersnelle mailclient voor Outlook & Gmail): wachtlijst + productuitleg, **NL/EN toggle**, launch **29 mei 2026**, visueel geïnspireerd op de mock (COMING/Soon, countdown, paarse glow) en referenties Apple NL + Attio.

---

## PROJECT

| Item | Waarde |
|------|--------|
| Product | **Snimio** — mailwerkplek (keyboard-first, AI, reminders, agenda) |
| Domein (beoogd) | **www.snim.io** *(bevestig vs snimio.nl)* |
| GitHub | **https://github.com/flowixagents/ComingSoonSnimio** |
| Clone | `git clone https://github.com/flowixagents/ComingSoonSnimio.git` |
| Lokaal pad | `C:\Users\niels\ComingSoonSnimio` |
| Pages URL | `https://flowixagents.github.io/ComingSoonSnimio/` |
| Stack | **Statische HTML/CSS/JS** (geen React verplicht) |
| Bestaande basis | Map `site/` met `index.html`, `bedankt.html`, `css/styles.css`, `js/main.js` |
| Launch | **29 mei 2026**, 09:00 Europe/Amsterdam (countdown) |

---

## WAT IS SNIMIO?

Snimio is een **supersnelle e-mailwerkplek** voor professionals met **veel mailverkeer** die **Outlook** en/of **Gmail** gebruiken.

- **Wel:** inbox, AI (triage, samenvatting, antwoordsuggesties), reminders, **Wacht op reactie** (opvolging verzonden mail), **Day Brief**, **Ask AI**, agenda (Outlook), sneltoetsen (J/K, Done, Reply, …), privacy onder regie.
- **Niet:** Snimio vervangt **geen** Microsoft/Google — mail blijft bij de provider; Snimio is de snelle laag erbovenop via OAuth.
- **Niet beloven als “nu live”:** volledige Google Calendar, enterprise SSO, send-later volledig server-side, bijlagen versturen via alle providers (tenzij expliciet live).

**Doelgroep:** ondernemers, sales, consultants, office managers — vooral Outlook-heavy MKB NL/EU.

**Pagina-doel:** **wachtlijst** (e-mail + GDPR) **én** uitleg waarom Snimio anders is — geen app-login op de coming-soon pagina.

---

## DOELGROEP & CONVERSIE

| Keuze | Specificatie |
|-------|----------------|
| Bezoeker | Mensen met **veel mailverkeer** |
| Primair doel | Inschrijven wachtlijst |
| Secundair | Product begrijpen → vertrouwen |
| Social proof | **Eerste 100 early-access plekken** (geen fake testimonials) |
| Urgentie “nog X plekken” | **Nee** |
| Founding-prijs | **Ja, klein vermelden** (ca. €14/mnd, 2 mailboxen, 12 mnd vast, max 300 founding) |
| Na inschrijven | Aparte **`bedankt.html`** + **bevestigingsmail** (server-side via Snimio API) |
| Backend formulier | **Snimio eigen API** (`CONFIG.waitlistApi` in `js/main.js`) |
| GDPR | **Verplichte checkbox** vóór submit |

---

## TONE OF VOICE & COPY-REGELS

| Wel | Niet |
|-----|------|
| Zakelijk modern, warm, direct | Hype (“revolutionair”, “disruptief”) |
| **Jij**-vorm | U-vorm |
| **Gmail + Outlook** expliciet noemen | **“Superhuman”** niet noemen (ook niet in vergelijking) |
| Concreet (J/K, Wacht op reactie, Day Brief) | Technisch jargon |
| Eerlijk “binnenkort” / early access | Alles al live suggereren |
| NL primair + **EN toggle** | Alleen Engels |

**Hoofdheadline (H1, SEO):**  
- NL: **Mail die je vooruit helpt**  
- EN: **Email that moves you forward**

**Decoratieve typografie (visueel, níet de SEO-H1):** groot **COMING** (wit, extra bold) + **Soon** (italic script, gradient paars→blauw), zoals de mock.

**Hero subline:**  
- NL: *De e-mailclient die je inbox teruggeeft. AI sorteert, labelt en prioriteert. Jij handelt af met je toetsenbord. Inbox zero in minuten — voor Outlook én Gmail.*  
- EN: *The email client that gives your inbox back. AI sorts, labels, and prioritizes. You act with your keyboard. Inbox zero in minutes — for Outlook and Gmail.*

---

## VISUEEL DESIGN (VERPLICHT)

### Stijl
- **Zakelijk modern**, mega strak, weinig ruis, **wow-factor**
- Referenties: [Apple NL](https://www.apple.com/nl/) (rust, typografie, witruimte), [Attio](https://attio.com/) (SaaS-modern, cards)
- Mock/printscreen: donkere pagina, paarse glow, countdown-boxes, 3 hero-cards, pill-formulier met paarse CTA

### Kleuren
- Achtergrond: `#0c0c0f` – `#121212`
- Tekst: `#f4f4f5`, muted `#a1a1aa`
- Accent: **`#7c5cff`** (behouden)
- Gradient highlights: paars → lichtblauw (`#7c5cff` → `#5b9dff`)
- Cards: donkergrijs `#1a1a1f`, subtiele border `rgba(255,255,255,0.08)`

### Typografie
- **Inter** (Google Fonts)
- Eyebrow: klein, caps, paars (“BINNENKORT BESCHIKBAAR” / “COMING SOON”)

### Logo
- **Nog geen definitief logo** — tijdelijk woordmerk **Snimio** + paars favicon/icoon

### Layout
- **Lange scroll** (één pagina)
- **Sticky nav** met blur
- Hero gecentreerd, max ~720–900px breed
- Secties max ~1100px
- **Mobiel-first**, responsive

---

## PAGINA-STRUCTUUR (VOLGORDE)

1. **Sticky nav** — Logo Snimio · Features · Hoe het werkt · FAQ · **NL | EN** · knop Inschrijven (scroll naar formulier)
2. **Hero**
   - Eyebrow: Binnenkort beschikbaar
   - Decor: COMING + Soon (optioneel)
   - H1: Mail die je vooruit helpt
   - **Live countdown** → 29 mei 2026 (dagen : uren : min : sec)
   - Subline (zie copy)
   - **3 hero-cards:** 2–3× sneller (native, geen Electron) · Keyboard-first (50+ shortcuts, command palette) · AI-gestuurd (smart triage, auto-labels, suggested replies)
   - **Formulier:** e-mail pill + paarse knop “Houd me op de hoogte” + GDPR checkbox + microcopy “Geen spam…”
   - **Secundaire CTA:** “Vraag early access” (mailto of link — nog in te vullen)
   - Scroll-hint: “SCROLL” + pijl
3. **Social proof** — “Nog **100** plekken voor founding early access”
4. **Probleem → oplossing** — te veel mail, weinig structuur → Snimio = snelheid + overzicht + opvolging
5. **Feature grid — exact 6 kaarten** (zie tabel hieronder)
6. **Signature animatie** — **orbit:** 6 USP-labels draaien rond centraal Snimio-logo (CSS/SVG; geen Lottie verplicht)
7. **Screenshots** — 4 frames: Inbox, Day Brief, Wacht op reactie, Agenda (echte UI-captures wanneer beschikbaar; tot die tijd stijlvolle placeholders met glow frame)
8. **Hoe het werkt** — 3 stappen: (1) Koppel Outlook/Gmail OAuth (2) Werk met toetsenbord (3) Opvolging via Wacht op reactie + Day Brief + AI
9. **Video** — productloop, muted, loop; poster bij reduced-motion; bestand `assets/hero.mp4`
10. **Privacy** — tracking uit, externe AI optioneel, blur bijlagen
11. **Pricing teaser** — Founding Pro vanaf ca. €14/maand, klein en eerlijk
12. **FAQ** — min. 6 vragen, NL/EN (launchdatum, Outlook/Gmail, vervangt provider?, Wacht op reactie, veiligheid, prijs)
13. **Footer** — © Snimio · Privacy · Voorwaarden · Contact (URLs nog invullen)

---

## 6 FEATURE-KAARTEN (GRID)

| NL titel | NL tekst | EN titel | EN tekst |
|----------|----------|----------|----------|
| Supersnelle inbox | J/K door je mail, Done met E — voor Outlook én Gmail. | Blazing inbox | J/K through mail, Done with E — Outlook & Gmail. |
| Wacht op reactie | Verzonden mails waar je nog antwoord op verwacht; AI leert mee. | Awaiting reply | Sent mail you still expect a reply on; AI learns with you. |
| Day Brief | Ochtendoverzicht: urgentie, agenda en mails die ertoe doen. | Day Brief | Morning view: urgency, calendar, mail that matters. |
| Ask AI | Eén zoekactie over inbox, agenda, reminders en VIP-contacten. | Ask AI | One search across inbox, calendar, reminders, VIPs. |
| Agenda in Snimio | Plan vanuit mail, stuur uitnodigingen, week naast inbox. | Calendar built in | Schedule from mail, send invites, week beside inbox. |
| Privacy onder regie | Tracking uit, externe AI optioneel, blur op bijlagen. | Privacy you control | Block tracking, optional external AI, blurred attachments. |

**Orbit-labels (6):** Wacht op reactie · Day Brief · Keyboard-first · Ask AI · Outlook + Gmail · Privacy

---

## ANIMATIES (VEEL — MAAR TOEGANKELIJK)

| Effect | Ja/Nee |
|--------|--------|
| Bewegende hero gradient glow | **Ja** |
| Live countdown | **Ja** |
| Scroll fade-in + slide-up | **Ja** |
| Subtiele parallax op screenshots | **Ja** |
| Hover lift/glow op cards | **Ja** |
| Orbit USPs rond logo | **Ja** (signature) |
| Video sectie | **Ja** |
| Lottie/Rive | **Nee** (CSS/SVG volstaat) |
| `prefers-reduced-motion` | **Ja, respecteren** — animaties uit of vereenvoudigen |

---

## FORMULIER & TECHNISCH

```
Bestanden:
  site/index.html      — hoofdpagina
  site/bedankt.html    — na succesvolle inschrijving
  site/css/styles.css
  site/js/main.js      — CONFIG.waitlistApi, countdown, i18n, scroll, form

Formulier flow:
  1. Valideer e-mail + GDPR checkbox
  2. POST naar Snimio waitlist API (JSON: email, consent, source, locale)
  3. Bij succes: redirect bedankt.html + server stuurt bevestigingsmail
  4. Zonder API: demo-modus mag redirect naar bedankt na validatie (dev)

SEO:
  title: Snimio — Binnenkort | Supersnelle mail voor Outlook & Gmail
  OG-image: 1200×630 genereren uit design (nog niet klaar)
  url: https://www.snim.io/

Deploy:
  Upload map site/ naar Vercel / Netlify / Cloudflare Pages
  Preview lokaal: npx serve site -l 5176
```

---

## FAQ (MINIMAAL DEZE 6)

1. Wanneer live? → 29 mei 2026, early access via wachtlijst  
2. Outlook/Gmail? → Ja, OAuth  
3. Vervangt provider? → Nee, laag erbovenop  
4. Wacht op reactie? → Verzonden mail waar je antwoord verwacht  
5. Veilig? → Officiële API’s, AI/tracking onder regie  
6. Prijs? → Founding ca. €14/mnd, definitief bij launch  

---

## WAT DE AI WEL / NIET MOET DOEN

### Wel
- Statische HTML/CSS/JS opleveren (productie-klaar, geen placeholders “lorem ipsum” in user-facing copy)
- NL + EN volledig via toggle (geen gemixte pagina’s)
- Donker hero exact in de geest van de mock
- Alle 13 secties in volgorde
- Performance: lazy images, lichte JS, geen zware libraries
- Bestaande `site/` verbeteren/aanvullen i.p.v. opnieuw beginnen tenzij nodig

### Niet
- Superhuman noemen
- Fake klantlogo’s of reviews
- “Nog 3 plekken!” urgency-tellers
- Licht thema of drukke illustraties
- React/framework verplicht stellen
- Bestaande Snimio app-code aanpassen (ander project: SuperHuman repo)

---

## OPEN PUNTEN (LAAT LEGE PLACEHOLDERS OF VRAAG)

| Punt | Status |
|------|--------|
| Domein www.snim.io vs snimio.nl | Bevestigen |
| Waitlist API URL + payload | Invullen in `CONFIG.waitlistApi` |
| LinkedIn / secundaire CTA URL | Nog leeg |
| Privacy & Voorwaarden URLs | `#` of placeholder |
| Echte screenshots + hero.mp4 | Toevoegen in `site/assets/` |
| Bevestigingsmail template | Backend Snimio |

---

## ACCEPTATIECRITERIA (KLAAR =)

- [ ] Donkere hero met COMING/Soon-decor, countdown naar 29-05-2026, 3 hero-cards, formulier werkt
- [ ] NL/EN toggle wisselt alle zichtbare teksten
- [ ] 6 feature cards + orbit-animatie + 4 screenshot frames
- [ ] Sticky nav, lange scroll, alle secties aanwezig
- [ ] GDPR verplicht; submit → bedankt.html; API-koppelbaar
- [ ] Animaties rijk; reduced-motion gerespecteerd
- [ ] Mobiel + desktop; Lighthouse performance redelijk (>85)
- [ ] Geen “Superhuman” in copy; wel Gmail + Outlook

---

*Einde prompt — versie 2026-05-20*

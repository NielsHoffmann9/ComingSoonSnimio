# Snimio — Coming Soon pagina (brief voor cloud / AI-build)

> **Doel van dit document:** Eén bron waar een designer, developer of cloud-agent precies begrijpt wat Snimio is, wat er op de pagina moet staan, en hoe de pagina eruit mag zien (na invulling §8).

**Project:** Coming Soon Snimio  
**GitHub:** https://github.com/flowixagents/ComingSoonSnimio  
**Lokaal:** `C:\Users\niels\ComingSoonSnimio`  
**Productie:** map `site/` · preview: `npm run preview:site` → http://localhost:5176  
**Pages:** push `main` → GitHub Actions deployt `site/`

---

## 1. Wat is Snimio? (kern voor iedereen die de pagina bouwt)

**Snimio** is een supersnelle **mailwerkplek** voor professionals die **Outlook** en/of **Gmail** gebruiken. Het voelt aan als een moderne “Superhuman-achtige” inbox: toetsenbord eerst, weinig klikken, alles in één scherm.

Snimio **vervangt** je mailbox-provider niet — het **leest en schrijft** via officiële koppelingen (OAuth) met Gmail en Microsoft 365/Outlook.

**Belofte in één zin (NL):**  
*Mail die je vooruit helpt — met AI, reminders en agenda in hetzelfde ritme.*

**Engels (optioneel):**  
*Superfast email for Outlook & Gmail — AI, follow-ups, and calendar in one flow.*

**Doelgroep (marketing):**  
- Ondernemers, sales, consultants, office managers  
- Vooral **Outlook-heavy** MKB in NL/EU, ook Gmail  
- Mensen die veel mail krijgen en opvolging belangrijk vinden  

**Status nu:** Product in ontwikkeling / early access (“coming soon”). Pagina = **wachtlijst + uitleg**, geen volledige app-login (tenzij later toegevoegd).

---

## 2. Wat Snimio níet is (voorkom verkeerde verwachtingen)

- Geen vervanger van Microsoft/Google — je blijft op je eigen mailserver  
- Geen “alleen AI-chat” — het is een **volledige inbox-ervaring**  
- Geen belofte dat **alle** features al live zijn (zie §6)  

---

## 3. Alle functies (compacte lijst voor website)

### Mail & inbox
- Gmail + Outlook koppelen (meerdere mailboxen)
- Snelle sync — nieuwe mail snel zichtbaar
- Outlook-mappen (inbox, submappen, sent, archive, spam, trash, concepten)
- Sneltoetsen: J/K, Done (E), Reply (R), Reminder (H), nieuwe mail (C), Command palette (⌘K)
- Smart Views: Important, VIP, Other
- Zoeken + filters (ongelezen, bijlage, recent)
- Zoeken in bijlage-tekst (PDF/Word/Excel)
- Labels/categorieën met kleuren

### Schrijven
- Compose + inline antwoord/forward
- Undo send
- Smart Compose (AI terwijl je typt)
- Schrijf met AI (toon & lengte)
- Voice mode
- Handtekeningen, snippets
- Send Later (roadmap: volledig server-side)
- Rijke bijlage-preview (PDF, Office, HTML, …)

### AI
- Thread-samenvatting
- Instant Reply (3 suggesties)
- Auto Drafts bij reminders
- Ask AI (mail + agenda + reminders + labels + VIP)
- Day Brief (ochtendoverzicht)
- Style-profiel op eigen verzonden mails
- Externe AI optioneel (privacy)

### Reminders & opvolging
- Handmatige reminders (H)
- Mijn reminders
- **Wacht op reactie** — verzonden mails waar je antwoord verwacht; AI + leren per contact

### Agenda
- Agenda in de app
- Outlook-agenda lezen + plannen + uitnodigingen
- Mail → afspraak inplannen
- iCal-feeds; Google Calendar volledig = roadmap

### Integraties
- Linear, Todoist, Slack, CRM-koppelingen (instelbaar)

### Privacy
- Tracking-pixels blokkeren
- Externe AI aan/uit
- Bijlage-voorvertoning: icoon / inhoud / geblurd

---

## 4. Onderscheidende punten (USPs — gebruik op de pagina)

1. **Wacht op reactie** — opvolging van *verzonden* mail, niet alleen snooze  
2. **Mail + agenda + reminders** in één workflow (Day Brief, inplannen vanuit mail)  
3. **Ask AI** — één zoekactie over inbox, agenda, reminders, VIP  
4. **Outlook-diepte** — mappen, sync, agenda (NL/EU MKB)  
5. **AI met regie** — externe AI opt-in, tracking uit, blur op bijlagen  
6. **Superhuman-tempo** met eigen identiteit (NL, founding-prijs)  

**Drie homepage-bullets (voorstel):**
- Wacht nooit meer op een antwoord dat je zelf bent vergeten op te volgen  
- Start je dag met Day Brief — mail en agenda in één overzicht  
- Outlook én Gmail, supersnel, privacy onder jouw regie  

---

## 5. Tone of voice (tekst op de pagina)

| Wel | Niet |
|-----|------|
| Direct, warm, professioneel | Hype (“revolutionair”, “disruptief”) |
| Concreet (J/K, Done, Wacht op reactie) | Vage buzzwords zonder uitleg |
| Eerlijk over “coming soon” | Alles live beloven |
| Nederlands primair | Te veel Engels tenzij bewust bilingual |

Referentie-stijl: **Superhuman** (kort, zelfverzekerd) maar **toegankelijker** en **Nederlands**.

---

## 6. Wat wel / niet beloven op Coming Soon

### Wel vermelden (kern live of duidelijk in product)
- Snelle inbox Outlook/Gmail  
- AI-samenvatting & antwoordsuggesties  
- Reminders + Wacht op reactie  
- Day Brief & Ask AI (Pro-positionering)  
- Agenda (Outlook)  
- Founding / early access prijs (indien actief)  

### Niet als “nu beschikbaar” (tenzij expliciet live)
- Bijlagen versturen via Gmail/Outlook  
- Send Later volledig op server  
- Volledige Google Calendar  
- Enterprise SSO / team workspaces  

Formulering: *“Binnenkort”* of *“op de roadmap”*.

---

## 7. Pagina-structuur (definitieve volgorde — lange scroll)

| # | Sectie | Inhoud |
|---|--------|--------|
| 1 | **Sticky nav** | Logo · Features · Hoe het werkt · FAQ · **NL \| EN** · CTA Inschrijven |
| 2 | **Hero** | “Binnenkort beschikbaar” · headline · countdown → **29 mei 2026** · subline · 3 USP-cards · formulier · SCROLL-hint |
| 3 | **Social proof** | Eerste **100 early access** plekken |
| 4 | **Probleem → oplossing** | Veel mail → structuur + snelheid |
| 5 | **Feature grid (6)** | Zie §9 |
| 6 | **Orbit-animatie** | USPs rond Snimio-logo (§8.6) |
| 7 | **Screenshots** | Inbox · Day Brief · Wacht op reactie · Agenda |
| 8 | **Hoe het werkt** | 3 stappen |
| 9 | **Video** | Productloop |
| 10 | **Privacy** | AI + tracking onder jouw regie |
| 11 | **Pricing teaser** | Founding **klein** (§6) |
| 12 | **FAQ** | 6–8 vragen NL/EN |
| 13 | **Footer** | Snimio · juridische links |

**CTA’s:** e-mail + **Houd me op de hoogte** → **`/bedankt`** + mail via **Snimio API** · secundaire CTA: ja (links §14)

---

## 8. Design & beweging (definitief — Niels, 20 mei 2026)

### 8.1 Merk & logo
- Geen definitief logo — tijdelijk **Snimio** + paars icoon
- Visuele referentie: **printscreen** (donker, COMING/Soon-stijl optioneel als decor, glow, countdown-boxes)
- Favicon: `#7c5cff`

### 8.2 Kleuren
- Achtergrond `#0c0c0f`–`#121212` · tekst `#f4f4f5` / muted `#a1a1aa`
- Accent **`#7c5cff`** · gradient paars→blauw op highlights
- Cards: donkergrijs + subtiele border
- Referenties: [Apple NL](https://www.apple.com/nl/), [Attio](https://attio.com/)

### 8.3 Typografie
- **Inter** voor UI/body
- Hoofdheadline copy: **Mail die je vooruit helpt** (decor: optioneel groot “COMING” + script “Soon” zoals mock)

### 8.4 Layout
- Lange scroll · sticky nav · hero gecentreerd ~720–900px · secties max ~1100px
- Mega modern, eenvoudig, wow — weinig visuele ruis

### 8.5 Screenshots
- Inbox, Day Brief, Wacht op reactie, Agenda — framed met zachte glow
- OG-image: genereren (1200×630)

### 8.6 Animaties (veel + reduced-motion)
- Bewegende hero **gradient glow**
- **Countdown** live naar 29 mei 2026 (Europe/Amsterdam)
- Scroll: fade + slide-up · **parallax** subtiel
- Cards: hover lift/glow
- **Signature:** orbit — 6 USPs draaien rond centraal Snimio-logo (CSS/SVG)
- **Video** in eigen sectie (muted loop; static poster bij reduced-motion)
- `prefers-reduced-motion`: **ja**

### 8.7 Taal NL + EN
- Toggle in nav · geen “Superhuman” · **wel Gmail + Outlook** · **jij** · minimaal jargon

### 8.8 Formulier
- Snimio waitlist API · GDPR checkbox verplicht · redirect `/bedankt` + bevestigingsmail

### 8.9 Domein & SEO
- **`www.snim.io`** *(bevestigen)* · launch **29 mei 2026**
- Meta NL/EN — OG nog genereren

### 8.10 Footer
- **Snimio** · Privacy / Voorwaarden / Contact (URLs §14)

---

## 9. Feature-kaarten (6 op de pagina)

| # | Titel NL | Tekst NL | EN title | EN text |
|---|----------|----------|----------|---------|
| 1 | Supersnelle inbox | J/K door je mail, Done met E — voor Outlook én Gmail. | Blazing inbox | J/K through mail, Done with E — Outlook & Gmail. |
| 2 | Wacht op reactie | Verzonden mails waar je nog antwoord op verwacht; AI leert mee. | Awaiting reply | Sent mail you still expect a reply on; AI learns with you. |
| 3 | Day Brief | Ochtendoverzicht: urgentie, agenda en de mails die ertoe doen. | Day Brief | Morning view: urgency, calendar, and mail that matters. |
| 4 | Ask AI | Eén zoekactie over inbox, agenda, reminders en VIP-contacten. | Ask AI | One search across inbox, calendar, reminders, and VIPs. |
| 5 | Agenda in Snimio | Plan vanuit mail, stuur uitnodigingen, week naast je inbox. | Calendar built in | Schedule from mail, send invites, week beside inbox. |
| 6 | Privacy onder regie | Tracking uit, externe AI optioneel, blur op bijlagen. | Privacy you control | Block tracking, optional external AI, blurred attachments. |

**Hero (3 cards, zoals mock):** 2–3× sneller · Keyboard-first · AI-gestuurd

---

## 10. FAQ (voorstel — aanpasbaar)

**Wanneer kan ik Snimio gebruiken?**  
We openen gefaseerd via early access. Schrijf je in voor de wachtlijst — founding-leden krijgen voorrang.

**Werkt Snimio met mijn Outlook / Gmail?**  
Ja. Je koppelt je bestaande mailbox via een veilige OAuth-koppeling.

**Vervangt Snimio Outlook of Gmail?**  
Nee. Je mail blijft bij Microsoft of Google; Snimio is je snelle werkplek erbovenop.

**Wat is “Wacht op reactie”?**  
Een lijst van mails die jij hebt verstuurd en waar je nog inhoudelijk antwoord op verwacht — slimmer dan alleen een snooze.

**Is mijn mail veilig?**  
We gebruiken officiële API’s; je kunt externe AI uitzetten en tracking in mails blokkeren. Zie privacy-sectie op de site (later uitgewerkt).

**Wat kost Snimio?**  
Founding Pro vanaf ca. €14/maand (2 mailboxen, 12 maanden prijs vast, max. 300 plekken) — definitieve prijzen op de launch-pagina.

---

## 11. Copy-blokken (definitief — NL + EN)

### Hero (headline **A**)
- **NL:** Mail die je vooruit helpt  
- **EN:** Email that moves you forward  
- **Decor (visueel, mock):** COMING + *Soon* — niet als SEO-H1; echte H1 = headline A  

### Hero subline
- **NL:** De e-mailclient die je inbox teruggeeft. AI sorteert, labelt en prioriteert. Jij handelt af met je toetsenbord. Inbox zero in minuten.  
- **EN:** The email client that gives your inbox back. AI sorts, labels, and prioritizes. You act with your keyboard. Inbox zero in minutes.

### CTA
| | NL | EN |
|--|----|-----|
| Knop | Houd me op de hoogte | Notify me at launch |
| Placeholder | je@email.com | you@email.com |
| Microcopy | Geen spam. Alleen een seintje bij launch. | No spam. One ping when we launch. |
| GDPR | Ik ga akkoord met updates over Snimio. | I agree to receive Snimio launch updates. |
| Secundair | Vraag early access | Request early access |

### Social proof
- **NL:** Een van de eerste **100** early-access plekken  
- **EN:** Be among the first **100** early-access spots

---

## 12. Technische notities (statische HTML)

- **Bron:** `site/` — `index.html`, `bedankt.html`, `css/styles.css`, `js/main.js`  
- **Geen build verplicht** — upload `site/` naar Vercel / Netlify / Cloudflare Pages / S3  
- **Wachtlijst:** `js/main.js` → `WAITLIST_API` (Snimio backend; placeholder tot endpoint live)  
- **Na submit:** redirect `bedankt.html` + bevestigingsmail server-side  
- **Launch countdown:** 29 mei 2026, `Europe/Amsterdam`  
- **Performance:** lazy images, video muted+loop, `prefers-reduced-motion`  
- Oude Vite/React in repo = optioneel dev; productie = HTML in `site/`  

---

## 13. Changelog brief

| Datum | Wijziging |
|-------|-----------|
| 2026-05-20 | Eerste versie + vragenlijst |
| 2026-05-20 | §7–§8 ingevuld; §9–§12; statische `site/` |

---

## 14. Open punten (voor Niels)

| Onderwerp | Actie |
|-----------|--------|
| Domein | Bevestig **www.snim.io** vs snimio.nl |
| Wachtlijst API | Endpoint + auth voor `WAITLIST_API` |
| Secundaire CTA | LinkedIn-URL, mailto-adres |
| Footer | Privacy / Voorwaarden URLs |
| Screenshots & video | Echte UI-captures + MP4/WebM |
| OG-image | Genereren 1200×630 na design lock |
| Bevestigingsmail | Template + sender (Snimio) |

---

*Einde document — build: `site/index.html`.*

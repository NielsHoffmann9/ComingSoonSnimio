# GitHub — repo koppelen en pushen

## Repo-URL (jouw organisatie)

**Organisatie:** `flowixagents`  
**Aanbevolen repo-naam:** `ComingSoonSnimio` of `comingsoon`

| Naam | Clone / remote |
|------|----------------|
| ComingSoonSnimio | `https://github.com/flowixagents/ComingSoonSnimio.git` |
| comingsoon | `https://github.com/flowixagents/comingsoon.git` |

Lokaal staat de remote nu op **ComingSoonSnimio**. Wil je **`comingsoon`**? Zie stap 2b.

---

## Stap 1 — Repo op GitHub aanmaken

1. Ga naar https://github.com/organizations/flowixagents/repositories/new  
2. Naam: `ComingSoonSnimio` (of `comingsoon`)  
3. **Public** (voor gratis GitHub Pages) of Private + Pages  
4. **Geen** README/license toevoegen (die staat al lokaal)  
5. Create repository  

---

## Stap 2a — Push (naam ComingSoonSnimio)

```powershell
cd C:\Users\niels\ComingSoonSnimio
git remote set-url origin https://github.com/flowixagents/ComingSoonSnimio.git
git push -u origin main
```

## Stap 2b — Push (naam comingsoon)

```powershell
cd C:\Users\niels\ComingSoonSnimio
git remote set-url origin https://github.com/flowixagents/comingsoon.git
git push -u origin main
```

Bij private repo: GitHub CLI `gh auth login` of Personal Access Token.

---

## Stap 3 — GitHub Pages aanzetten

1. Repo → **Settings** → **Pages**  
2. **Build and deployment** → Source: **GitHub Actions**  
3. Na eerste push op `main` draait workflow `Deploy Coming Soon (site/)`  
4. Site: `https://flowixagents.github.io/ComingSoonSnimio/`  
   (of `/comingsoon/` bij die repo-naam)

## Stap 4 — Custom domain (later)

Settings → Pages → Custom domain: `www.snim.io`  
DNS: CNAME naar `flowixagents.github.io` (of Pages-URL van jouw repo).

---

## Wat er al lokaal klaarstaat

- Commit op `main`: statische site in `site/`, docs, Pages-workflow  
- Alleen **push** ontbreekt zodra de repo op GitHub bestaat  

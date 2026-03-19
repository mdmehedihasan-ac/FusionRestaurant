# Analisi approfondita progetto FusionRestaurant

Data analisi: 2026-03-19

## 1) Executive summary
- Progetto frontend SPA realizzato con Vite + React + TypeScript.
- Obiettivo principale: sito ristorante orientato a conversione (prenotazione/ordine via WhatsApp e telefono).
- Architettura complessivamente chiara e coerente; routing completo con redirect legacy SEO-friendly.
- Funnel ordine ben definito: Menu -> Carrello -> Checkout -> WhatsApp.
- Stato tecnico: build OK, lint KO (4 errori) con alcuni segnali di debito tecnico.

## 2) Stack e tooling
- Runtime/UI: React 19, React Router 7, Framer Motion, Swiper, React Datepicker, React Helmet Async.
- Build: Vite 7, TypeScript 5.
- Quality: ESLint 9 con plugin `react-hooks`, `react-refresh`, `typescript-eslint`.
- Script principali: `dev`, `build`, `lint`, `preview`.

## 3) Architettura applicativa
- Entrypoint in `src/main.tsx` con provider globali:
  - `HelmetProvider` (SEO meta dinamici)
  - `BrowserRouter` (routing SPA)
  - `MenuOrderCartProvider` (stato carrello menu)
- In `src/App.tsx`:
  - layout globale tramite `SiteLayout`
  - animazioni transizioni route con `AnimatePresence` + `motion`
  - mapping route completo + redirect da URL storici

## 4) Routing e pagine
Route principali:
- `/` Home
- `/fusion`
- `/all-you-can-eat`
- `/menu`
- `/menu/:slug`
- `/take-away`
- `/checkout`
- `/fidelity`
- `/zone-consegna`
- `/shop`
- `/policy`
- `/contatti`
- `*` -> 404

Redirect legacy presenti (es. vecchie URL SEO) verso route moderne: punto positivo per migrazione senza perdita traffico.

## 5) Data model e contenuti
File centrale: `src/data/siteContent.ts`
- Contiene tipologie TS + contenuti editoriali (menu, contatti, SEO, recensioni, policy, delivery, ecc.).
- Vantaggi:
  - forte centralizzazione dei contenuti
  - coerenza testo/CTA tra pagine
- Limiti:
  - file monolitico molto esteso (accoppiamento alto)
  - rischio conflitti git e manutenzione lenta

## 6) SEO e tracking
SEO (`src/components/Seo.tsx`):
- Meta title/description dinamici per pathname
- OpenGraph + Twitter card + canonical
- Buona base SEO on-page per SPA

Tracking (`src/lib/tracking.ts`):
- `trackEvent` usa `window.gtag` se presente
- fallback `console.info` in locale
- Eventi diffusi su CTA principali (header, menu, checkout, contatti, fidelity)

Nota: non emerge una tassonomia eventi formalizzata (naming convention/documentazione centralizzata).

## 7) Funnel ordine e conversione
### 7.1 Menu
- Filtri categoria + card prodotto cliccabile + CTA "Aggiungi".
- Slug generato localmente con funzione `slugify`.

### 7.2 Carrello menu
- Stato globale in context (`src/lib/menuOrderCart.tsx`) con persistenza localStorage.
- Drawer visibile solo su route menu.
- Azioni: incrementa/decrementa/rimuovi/svuota.

### 7.3 Checkout
- Raccoglie anagrafica minima + modalità (ritiro/consegna) + note.
- Valida campi essenziali lato client.
- Crea messaggio ordine testuale e apre WhatsApp con testo precompilato.
- Dopo invio, svuota carrello.

Valutazione funnel: lineare, comprensibile, orientato a ridurre attrito.

## 8) UX/UI osservazioni
Punti forti:
- Design coerente con sistema CSS centralizzato (`src/index.css`).
- CTA principali sempre visibili (header, floating actions, footer).
- Buona attenzione mobile (menu toggle, pannelli, fab carrello).

Criticità:
- Presenza ampia di placeholder `img-ph` al posto di immagini reali in diverse pagine.
- Alcuni testi/encoding sono non uniformi (accenti/apostrofi, stringhe "EUR" hardcoded).
- Incoerenza tra carrello `Menu` (context globale) e carrello `Shop` (stato locale separato).

## 9) Qualità codice: esito controlli
## Lint (`npm run lint`) -> FALLITO
Errori trovati:
1. `Header.tsx`: setState dentro `useEffect` (`react-hooks/set-state-in-effect`).
2. `menuOrderCart.tsx`: variabili `_removed` non usate (2 occorrenze).
3. `menuOrderCart.tsx`: warning `react-refresh/only-export-components` (export non-component nello stesso file del provider).

## Build (`npm run build`) -> OK
- Build completata.
- Warning bundle size: chunk JS principale ~688 KB (sopra soglia warning 500 KB).

## 10) Debito tecnico principale
Priorità alta:
1. Risolvere errori lint per ripristinare baseline qualità CI.
2. Estrarre logica/shared utilities (`slugify`, mapping prezzi, helper whatsapp) in moduli dedicati.
3. Spezzare `siteContent.ts` in domain file (`seo`, `menu`, `contacts`, `shop`, ecc.).

Priorità media:
4. Unificare carrello `menu` e `shop` in un unico stato applicativo o strategia condivisa.
5. Ridurre bundle con code-splitting route-level (lazy import pagine).
6. Definire naming standard eventi analytics + documento eventi.

Priorità bassa:
7. Rifinitura copy/encoding testi.
8. Revisione accessibilità fine (aria-label e keyboard UX in overlay/lightbox).

## 11) Rischi
- Manutenibilità: contenuti e logiche troppo centralizzate in pochi file grandi.
- Performance: bundle iniziale elevato può impattare Core Web Vitals su mobile.
- Evolutività: duplicazione utility (es. `slugify`) e stato carrello multiplo aumenta divergenze future.

## 12) Conclusione
Il progetto è già in uno stato funzionale buono e orientato al business (lead via WhatsApp/telefono), con routing e SEO impostati correttamente. I miglioramenti più urgenti sono di qualità codice (lint), modularità dei contenuti e ottimizzazione performance frontend.
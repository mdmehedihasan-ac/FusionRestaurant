# Analisi ridondanze e ottimizzazioni

Data: 2026-03-19

## Executive summary
Le ridondanze principali si concentrano su:
1. Utility duplicate (`slugify`) in più pagine.
2. Stato carrello duplicato tra flusso Menu e flusso Shop.
3. Pattern UI ripetuti (empty states, CTA WhatsApp, card/drawer simili).
4. Bundle iniziale elevato (warning Vite) per caricamento eager di tutte le pagine.
5. File contenuti troppo monolitico (`siteContent.ts`) con alto accoppiamento.

## Evidenze concrete

## 1) Utility `slugify` duplicata (Alta priorità, basso effort)
- Occorrenze: 4
- File:
  - `src/pages/MenuPage.tsx`
  - `src/pages/MenuItemPage.tsx`
  - `src/pages/ShopPage.tsx`
  - `src/pages/TakeAwayPage.tsx`

Problema:
- Logica identica copiata in più punti.
- Rischio divergenze su edge-case URL/slug.

Ottimizzazione:
- Estrarre `slugify` in `src/lib/slugify.ts` (o `src/lib/text.ts`) e riusarlo ovunque.

Effort stimato: S (15-30 min)
Impatto: Medio (manutenibilità, coerenza)

## 2) Doppio sistema carrello (Alta priorità, medio effort)
- Carrello globale menu: `src/lib/menuOrderCart.tsx` + `src/components/MenuOrderCart.tsx`
- Carrello shop locale: `src/pages/ShopPage.tsx` (state interno separato)

Problema:
- Due stati paralleli per concetto simile (ordine prodotti).
- UX incoerente: quantità, persistenza e comportamento diversi.
- Maggior costo di evoluzione (es. coupon, min order, analytics uniformi).

Ottimizzazione:
- Unificare in uno store/contesto unico (con namespace `menu`/`shop` oppure modello prodotto comune).
- Centralizzare anche logica di subtotal/checkout message.

Effort stimato: M (0.5-1.5 giorni)
Impatto: Alto (consistenza UX + riduzione bug futuri)

## 3) Empty states e testi ripetuti (Media priorità, basso effort)
- Messaggio "Il carrello e vuoto" replicato in:
  - `src/components/MenuOrderCart.tsx`
  - `src/pages/CheckoutPage.tsx`
  - `src/pages/ShopPage.tsx`

Problema:
- Copy duplicato, facile introdurre inconsistenze linguistiche.

Ottimizzazione:
- Centralizzare microcopy in `siteContent` o in costanti UI (`src/data/uiText.ts`).

Effort stimato: S
Impatto: Basso-Medio

## 4) Pattern CTA WhatsApp ripetuto (Media priorità, medio effort)
- `buildWhatsAppLink(...)` usato in molte pagine (AYCE, Checkout, Contact, Delivery, Fidelity, MenuItem, Shop).

Problema:
- Ogni pagina costruisce messaggi ad hoc con stringhe hardcoded.
- Coerenza tono/analytics e testabilità ridotte.

Ottimizzazione:
- Introdurre factory messaggi (`src/lib/whatsappTemplates.ts`) con template tipizzati.
- Eventuale helper `openWhatsAppWithTracking(eventName, message)`.

Effort stimato: M
Impatto: Medio-Alto (coerenza conversion funnel)

## 5) `siteContent.ts` monolitico (Alta priorità, medio effort)
- File unico con tipi + contenuti di tutte le sezioni.

Problema:
- Alto accoppiamento e conflitti git probabili.
- Caricamento cognitivo elevato per modifiche semplici.

Ottimizzazione:
- Split per dominio:
  - `src/data/content/seo.ts`
  - `src/data/content/menu.ts`
  - `src/data/content/contacts.ts`
  - `src/data/content/fidelity.ts`
  - ecc.
- Tipi condivisi in `src/data/types.ts`.

Effort stimato: M
Impatto: Alto (manutenibilità)

## 6) Immagini placeholder `img-ph` diffuse (Media priorità, medio effort)
- Occorrenze elevate su più pagine (`Home`, `Fusion`, `Ayce`, `Shop`, `TakeAway`) e relativo CSS.

Problema:
- Riduce qualità percepita e conversion rate in pagine commerciali.
- Duplica markup placeholder in molte card.

Ottimizzazione:
- Sostituire con `img` reali progressivamente o componente unico `ResponsiveImage` con fallback.

Effort stimato: M-L (dipende da asset)
Impatto: Alto (UX/brand/conversion)

## 7) Caricamento pagine non lazy + bundle warning (Alta priorità, medio effort)
- In `src/App.tsx` tutte le pagine sono importate eager.
- Build segnala chunk principale grande (~688KB).

Problema:
- TTFB/TTI peggiori su mobile/reti lente.

Ottimizzazione:
- Route-level code splitting con `React.lazy` + `Suspense`.
- Eventuale separazione librerie pesanti dove possibile.

Effort stimato: M
Impatto: Alto (performance)

## 8) `useMemo` da rivedere in alcuni casi (Bassa-Media priorità, basso effort)
Casi rilevati:
- `ContactPage`: `openStatus` con `useMemo([])` calcolato una sola volta all mount.

Problema:
- Stato "aperto/chiuso" non si aggiorna nel tempo durante permanenza in pagina.

Ottimizzazione:
- Calcolo diretto a render o aggiornamento con timer (es. ogni minuto) se richiesto UX real-time.

Effort stimato: S
Impatto: Basso-Medio (correttezza UX)

## 9) Pattern layout/CTA ripetuti (Media priorità, medio effort)
- Blocchi `page-hero`, `detail-panel`, `cta-banner`, `stack-actions` replicati con struttura simile.

Problema:
- Coerenza visiva buona, ma componentizzazione bassa.
- Modifiche trasversali richiedono tocchi multipli.

Ottimizzazione:
- Introdurre componenti compositivi riusabili (es. `PageHero`, `CtaBanner`) senza cambiare UX.

Effort stimato: M
Impatto: Medio

## Roadmap consigliata (ordine)
1. Estrarre `slugify` condiviso.
2. Introdurre lazy loading route in `App.tsx`.
3. Spezzare `siteContent.ts` per domini.
4. Unificare carrelli menu/shop.
5. Centralizzare template messaggi WhatsApp + microcopy.
6. Sostituzione progressiva placeholder immagini.

## Quick wins (oggi)
- `slugify` shared utility.
- Copy vuoto carrello centralizzato.
- Refactor minimo `openStatus` in `ContactPage`.
- Preparazione lazy import pagine ad alto peso (`ShopPage`, `ContactPage`, `HomePage`).

## Conclusione
Il progetto è già funzionale, ma ha alcune ridondanze strutturali tipiche della fase crescita rapida. Le ottimizzazioni ad alto ritorno sono: consolidamento utility/stato e code-splitting. Queste azioni riducono debito tecnico e migliorano performance senza cambiare la UX attuale.
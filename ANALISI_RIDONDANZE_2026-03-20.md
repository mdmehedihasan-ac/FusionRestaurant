# Analisi Ridondanze - 2026-03-20

## Metodo
- Build baseline (`npm run build`) eseguita con successo.
- Scansione automatica duplicazioni (`jscpd`) su `src` con soglia minima 6 linee.
- Verifica pattern ripetuti con analisi testuale.

## Sintesi Risultati
- Duplicazioni trovate da `jscpd`: **7**.
- Percentuale duplicazione codice (`src`): **~3.34%**.
- Hotspot principale: logica carrello duplicata tra componenti menu e shop.

## Top Duplicazioni (per priorita)
1. `src/components/MenuOrderCart.tsx` <-> `src/pages/ShopPage.tsx`
   - Gravita: Alta
   - Tipo: rendering righe carrello + controlli quantita
   - Nota: ottimo candidato a componente condiviso

2. `src/components/MenuFormulaPage.tsx` <-> `src/pages/MenuAycePage.tsx`
   - Gravita: Media
   - Tipo: rendering sezioni menu con card prodotto
   - Azione: **deduplicato** in questa sessione (AYCE ora riusa `MenuFormulaPage`)

3. `src/components/MenuExtrasSections.tsx` (blocchi interni ripetuti)
   - Gravita: Media
   - Tipo: mapping card identiche per dessert/gruppi
   - Azione consigliata: estrarre sub-componente card extra

4. `src/pages/MenuPranzoPage.tsx` <-> `src/pages/MenuPranzoFestivoPage.tsx`
   - Gravita: Media-Bassa
   - Tipo: shell pagina quasi identica
   - Nota: gia abbastanza ridotte via `MenuFormulaPage`

## Ridondanze Rischiose (non toccate ora)
- Blocchi piccoli condivisi tra pagine contenuto/editoriali (`FusionPage`, `Footer`, `ContactPage`):
  rischio regressione visiva superiore al beneficio immediato.

## Prossimo Refactor Consigliato
- Estrarre un componente condiviso per la lista righe carrello (riuso in `MenuOrderCart` e `ShopPage`) con props per varianti UI.

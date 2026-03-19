# Analisi gap contenuti Shop (originale vs progetto)

Data: 2026-03-19
Sorgente confronto: https://www.fusionrestaurant.it/shop/ e principali categorie prodotto del sito originale.

## Sintesi rapida
Il progetto attuale contiene una versione editoriale/semplificata dello shop, ma rispetto all'originale manca una porzione molto ampia di contenuto catalogo e metadata e-commerce (categorie, SKU/codici, pezzi, allergeni puntuali, listing completo prodotti).

## 1) Copertura catalogo: cosa manca

### Originale (evidenza osservata)
Nella pagina shop originale compaiono molte categorie con conteggio prodotti, ad esempio:
- Nippo tapas (3)
- Novità (2)
- Sushi Box (11)
- Usuzukuri / Carpacci (5)
- Hosomaki (6)
- Nighiri (10)
- Temaki (8)
- Uramaki (25)
- (altre categorie presenti ma non completamente estratte nel dump)

Inoltre, nelle categorie analizzate in dettaglio si vede un numero elevato di prodotti reali:
- Uramaki: decine di voci (es. 020, 021A, 028A, 031B, ecc.)
- Zensai/Antipasti: molte voci con varianti e formati pezzi
- Dolci: catalogo esteso (mochi, soufflé, tiramisù, ecc.)
- Nighiri: almeno 10 prodotti
- Sushi Box: più box composti (16/24/30/34 pezzi)
- Sashimi: almeno 2 voci nella categoria analizzata

### Progetto attuale
- `shopProducts`: 4 prodotti totali.
- `menuCategories`: 8 macro-categorie editoriali.

**Gap principale:** mancano la quasi totalità dei prodotti reali presenti nello shop originale.

## 2) Gap di struttura contenuto prodotto
Nell'originale, ogni prodotto include spesso:
- codice prodotto numerico (es. 021A)
- numero pezzi (2/4/6/8/16/24/30/34 pz)
- descrizione ingrediente specifica
- allergeni puntuali per singolo prodotto
- prezzo preciso per singola voce
- talvolta indicatori come “Novità”

Nel progetto attuale (shop):
- nome
- categoria testuale
- immagine (spesso placeholder in UI)
- prezzo singolo

**Gap:** mancano attributi fondamentali per ordine informato (pezzi, allergeni puntuali, codice prodotto, dettaglio ingredienti esteso).

## 3) Gap di tassonomia e navigazione contenutistica
Originale:
- filtro categorie con conteggio prodotti
- tassonomia ampia per categorie e tag ingredienti

Progetto:
- categorie semplificate in blocchi editoriali
- assenza di conteggio per categoria
- assenza di tag navigabili (es. “gamberi”, “piccante”, “salmone”)

**Gap:** manca navigazione catalogo profonda tipica di uno shop menu.

## 4) Gap di contenuti di supporto all’ordine
Originale mostra anche contenuti utili al contesto acquisto:
- richiamo ordine minimo consegna (€30)
- collegamento zone consegna
- riferimenti legali e di contatto coerenti su tutte le pagine

Nel progetto questi elementi esistono in altre sezioni del sito, ma nello shop non sono sempre esplicitati con la stessa densità informativa.

## 5) Gap UX informativo (non solo tecnico)
Originale contiene elementi di supporto decisionale che nel progetto sono ridotti:
- ampia profondità menu
- più prodotti comparabili nella stessa categoria
- maggiore granularità per scegliere formato/prezzo

Il progetto attuale ha un tono più “vetrina” che “catalogo completo”.

## 6) Priorità contenuti da colmare (ordine consigliato)
1. **Catalogo prodotti completo**: importare almeno le categorie ad alta domanda (Uramaki, Nighiri, Sushi Box, Zensai, Dolci, Sashimi).
2. **Attributi prodotto**: pezzi, allergeni, descrizione ingredienti, codice prodotto.
3. **Categorie con conteggio**: mostrare numero prodotti per categoria.
4. **Tag ingredienti/filtri**: almeno Piccante, Salmone, Gamberi, Vegetariano.
5. **Uniformare informazioni ordine**: ripetere nel blocco shop ordine minimo + link zone consegna.

## 7) Proposta operativa minima (MVP realistico)
- Portare il catalogo da 4 a ~40/60 prodotti iniziali (subset priorizzato).
- Aggiungere campi dati nel model shop:
  - `code`
  - `pieces`
  - `allergens[]`
  - `description`
  - `isNew`
- Aggiungere filtro categoria + badge conteggio.
- Mantenere checkout WhatsApp (coerente col processo attuale) ma con messaggi più dettagliati (codice + quantità + allergeni opzionali).

## Conclusione
La mancanza più grande non è il layout: è la **profondità del contenuto catalogo** rispetto al sito originale. Se l’obiettivo è sostituire davvero lo shop attuale, il prossimo step critico è un data enrichment massivo del menu prodotti, prima ancora di ulteriori rifiniture estetiche.
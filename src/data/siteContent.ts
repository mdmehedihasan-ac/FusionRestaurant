export type NavItem = {
  label: string
  path: string
}

export type LinkItem = {
  label: string
  href: string
}

export type MenuCategory = {
  title: string
  description: string
  image: string
  link: string
  group: 'sushi' | 'signature' | 'hot' | 'dessert'
  allergens?: string[]
  dietary?: string[]
  priceRange?: string
  spotlight?: boolean
}

export type SeoConfig = {
  title: string
  description: string
}

export type AycePeriod = 'pranzo' | 'cena'

export type AyceOffer = {
  title: string
  subtitle: string
  price: string
  notes: string
}

export type TimelinePoint = {
  year: string
  title: string
  body: string
}

export type FidelityTier = {
  name: string
  progress: number
  benefit: string
}

export type ShopProduct = {
  name: string
  category: string
  image: string
  price: number
}

export type MenuSection = {
  label: string
  count?: number
}

export type PositiveReview = {
  author: string
  quote: string
  rating: number
}

export const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Fusion', path: '/fusion' },
  { label: 'All You Can Eat', path: '/all-you-can-eat' },
  { label: 'Menu', path: '/menu' },
  { label: 'Take Away', path: '/take-away' },
  { label: 'Contatti', path: '/contatti' },
]

export const utilityLinks: LinkItem[] = [
  { label: 'Fidelity Card', href: '/fidelity' },
  { label: 'Zone di consegna', href: '/zone-consegna' },
  { label: 'Catalogo piatti', href: '/shop' },
  { label: 'Policy', href: '/policy' },
]

export const contacts = {
  phoneLabel: '0331 554759',
  phoneHref: 'tel:+390331554759',
  whatsappLabel: '376 0337952',
  whatsappHref: 'https://wa.me/393760337952',
  email: 'info@fusionrestaurant.it',
  emailHref: 'mailto:info@fusionrestaurant.it',
  facebookHref: 'https://www.facebook.com/FusionRestaurant.Parabiago',
  address: 'Via Ugo Foscolo 6, 20015 Parabiago (MI)',
  mapsHref: 'https://maps.google.com/?q=Via+Ugo+Foscolo+6+Parabiago',
}

export const defaultSeo: SeoConfig = {
  title: 'Fusion Restaurant Parabiago | Sushi, AYCE, Delivery e Take Away',
  description:
    'Fusion Restaurant Parabiago: esperienza sushi premium, formula AYCE, delivery e take away con prenotazione rapida.',
}

export const seoByPath: Record<string, SeoConfig> = {
  '/': {
    title: 'Fusion Restaurant Parabiago | Esperienza Sushi Premium',
    description:
      'Scopri Fusion Restaurant a Parabiago: atmosfera elegante, menu sushi e cucina fusion, prenotazioni e ordini rapidi.',
  },
  '/fusion': {
    title: 'Fusion Experience | Atmosfera, Sala e Servizio',
    description:
      'La storia e l esperienza Fusion: ambiente, servizio, orari e galleria del ristorante di Parabiago.',
  },
  '/all-you-can-eat': {
    title: 'All You Can Eat Fusion Parabiago | Pranzo e Cena',
    description:
      'Formula AYCE pranzo e cena con proposta premium, regole chiare e prenotazione diretta via telefono o WhatsApp.',
  },
  '/menu': {
    title: 'Menu Fusion Restaurant | Sushi, Signature, Cucina Calda',
    description:
      'Consulta il menu per categorie con filtri intelligenti, dettagli piatti e richiesta rapida su WhatsApp.',
  },
  '/take-away': {
    title: 'Take Away Fusion | Ordina in Pochi Passi',
    description:
      'Configura il tuo ordine take away o delivery con planner rapido e messaggi precompilati.',
  },
  '/zone-consegna': {
    title: 'Zone Consegna Fusion | Copertura e Tempi',
    description:
      'Verifica aree di consegna, tempi medi e disponibilita delivery del ristorante Fusion.',
  },
  '/fidelity': {
    title: 'Fidelity Card Fusion | Programma Vantaggi',
    description:
      'Entra nel programma fedelta Fusion con benefit esclusivi, livelli e attivazione veloce.',
  },
  '/shop': {
    title: 'Shop Fusion | Catalogo Piatti Online',
    description:
      'Esplora il catalogo piatti con selezione premium, aggiunta rapida al carrello e checkout guidato.',
  },
  '/policy': {
    title: 'Policy e Documenti Legali | Fusion Restaurant',
    description:
      'Consulta privacy, cookie e termini del servizio in un area legale unica e chiara.',
  },
  '/contatti': {
    title: 'Contatti Fusion Restaurant | Prenota il Tavolo',
    description:
      'Contatti, orari, mappa e modulo prenotazione rapido per Fusion Restaurant Parabiago.',
  },
}

export const heroVisuals = {
  heroPrimary:
    'https://www.fusionrestaurant.it/wp-content/uploads/2020/06/slide-home-menu-1200x800.jpg',
  heroSecondary:
    'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/sushi-fusion.jpg',
  logo: 'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/Logo-Fusion-Restaurant-Parabiago.jpg',
}

export const siteStats = [
  { value: 'Mar–Dom', label: 'Aperto a pranzo e cena' },
  { value: '30€', label: 'Ordine minimo per la consegna' },
  { value: 'AYCE', label: 'Formula all you can eat' },
  { value: '2019', label: 'Anno di apertura' },
]

export const serviceHighlights = [
  {
    title: 'Cena e pranzo in sala',
    body: 'Piatti sushi freschi, cucina calda orientale e una selezione signature curata dallo chef. Atmosfera intima, servizio attento.',
    ctaLabel: 'Prenota tavolo',
    ctaHref: contacts.phoneHref,
  },
  {
    title: 'Take away rapido',
    body: 'Ordina i tuoi piatti preferiti per il ritiro in sede. Scegli dal menu completo e passa a ritirare quando vuoi.',
    ctaLabel: 'Ordina ora',
    ctaHref: contacts.whatsappHref,
  },
  {
    title: 'Consegna a domicilio',
    body: 'Portiamo Fusion a casa tua nelle zone limitrofe di Parabiago. Ordine minimo 30€, consegna rapida su richiesta.',
    ctaLabel: 'Vedi zone',
    ctaHref: '/zone-consegna',
  },
]

export const menuCategories: MenuCategory[] = [
  {
    title: 'Uramaki signature',
    description: 'Rollini di riso al contrario con pesce fresco, avocado e salse signature. Il piatto più amato della nostra carta.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/04/21-uramaki-sake-avocado-fusion-restaurant-parabiago-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/uramaki/',
    group: 'sushi',
    allergens: ['Pesce', 'Soia'],
    dietary: ['Pescetariano'],
    priceRange: 'EUR 8-16',
    spotlight: true,
  },
  {
    title: 'Nigiri e sashimi',
    description: 'Fette di pesce freschissimo servite sul riso o al naturale. Essenziale, puro, autentico.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/04/Nighiri-salmone-Fusion-Restaurant-Parabiago-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/nighiri/',
    group: 'sushi',
    allergens: ['Pesce'],
    dietary: ['Gluten free options'],
    priceRange: 'EUR 6-18',
  },
  {
    title: 'Tartare e crudi',
    description: 'Pesce crudo finemente tagliato con condimenti orientali e salse artigianali. Piatto forte della cucina fusion.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/04/Tartare-saporiko-Fusion-Restaurant-Parabiago-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/usuzukuri/',
    group: 'signature',
    allergens: ['Pesce', 'Sesamo'],
    dietary: ['Low carb'],
    priceRange: 'EUR 12-22',
    spotlight: true,
  },
  {
    title: 'Sashimi moriawase',
    description: 'Composizioni da condividere con pesci misti, ricche e curate per sorprendere ogni ospite.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/04/sashimi-moriawase-fusion-restaurant-parabiago-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/sashimi/',
    group: 'signature',
    allergens: ['Pesce'],
    dietary: ['High protein'],
    priceRange: 'EUR 16-30',
  },
  {
    title: 'Fagottino orientale',
    description: 'Involucri croccanti di pasta con ripieno orientale. Perfetto come antipasto caldo da condividere.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/057-fagottino-orientale-fusion-restaurant-parabiago-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/zensai-antipasti/',
    group: 'hot',
    allergens: ['Glutine', 'Soia'],
    dietary: ['Vegetarian options'],
    priceRange: 'EUR 5-13',
  },
  {
    title: 'Kaisen salad',
    description: 'Insalata di mare con ingredienti freschi e condimento orientale. Leggera, colorata e saporita.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/062-kaisen-salad-fusion-restaurant-parabiago-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/salad/',
    group: 'hot',
    allergens: ['Crostacei'],
    dietary: ['Light'],
    priceRange: 'EUR 9-15',
  },
  {
    title: 'Sushi box',
    description: 'La nostra selezione take away: sushi e piatti freddi confezionati per portare Fusion dove vuoi.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/Sushi-Box-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/sushi-box/',
    group: 'sushi',
    allergens: ['Pesce', 'Soia'],
    dietary: ['Sharing box'],
    priceRange: 'EUR 28-65',
    spotlight: true,
  },
  {
    title: 'Souffle al cioccolato',
    description: 'Il dessert perfetto per concludere: soufflè al cioccolato caldo servito al momento.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2021/02/Souffle-al-cioccolato-300x300.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/dolci/',
    group: 'dessert',
    allergens: ['Uova', 'Lattosio', 'Glutine'],
    dietary: ['Vegetarian'],
    priceRange: 'EUR 5-8',
  },
]

export const menuAllergenLegend = [
  { code: 'Pesce', description: 'Presenza di pesce o derivati' },
  { code: 'Soia', description: 'Presenza di soia' },
  { code: 'Glutine', description: 'Può contenere glutine' },
  { code: 'Sesamo', description: 'Presenza di sesamo' },
  { code: 'Crostacei', description: 'Presenza di crostacei' },
  { code: 'Lattosio', description: 'Presenza di latticini' },
]

export const galleryImages = [
  {
    title: 'Sala e atmosfera',
    image: 'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/fusion-restaurant-parabiago-1.jpg',
  },
  {
    title: 'Sushi experience',
    image: 'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/Fusion-Restaurant-sushi-Parabiago-002.jpg',
  },
  {
    title: 'All you can eat',
    image: 'https://www.fusionrestaurant.it/wp-content/uploads/2023/01/all-you-can-eat-cena_parabiago_2023.jpg',
  },
  {
    title: 'Formula pranzo',
    image: 'https://www.fusionrestaurant.it/wp-content/uploads/2021/02/formula-open-pranzo-feriali-fusion-parabiago.jpg',
  },
]

export const orderingSteps = [
  'Sfoglia il menu e scegli i tuoi piatti preferiti tra le nostre categorie.',
  'Seleziona ritiro in sede o consegna a domicilio (min. 30€).',
  'Invia il tuo ordine via WhatsApp o chiama il ristorante per conferma rapida.',
]

export const openingHours = [
  {
    label: 'Servizio al tavolo',
    value: 'Martedi-Domenica 12:00-15:00 | 19:00-23:30',
  },
  {
    label: 'Take away',
    value: 'Martedi-Domenica 12:00-15:00 | 18:00-22:00',
  },
  {
    label: 'Chiusura',
    value: 'Lunedi',
  },
]

export const aycePlans = [
  {
    title: 'Pranzo feriale',
    description: 'Formula pensata per pausa pranzo con selezione ampia e servizio rapido.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2021/02/formula-open-pranzo-feriali-fusion-parabiago-351x400.jpg',
    cta: 'https://www.fusionrestaurant.it/all-you-can-eat-fusion-parabiago/',
  },
  {
    title: 'Cena all you can eat',
    description: 'Esperienza completa serale con proposta sushi e cucina calda bilanciata.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2023/01/all-you-can-eat-cena_parabiago_2023-351x400.jpg',
    cta: 'https://www.fusionrestaurant.it/all-you-can-eat-fusion-parabiago/',
  },
  {
    title: 'Experience premium',
    description: 'Piatto signature e selezioni stagionali valorizzate da una presentazione editoriale.',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/sushi-ristorante-giapponese-parabiago-1200x800.jpg',
    cta: 'https://www.fusionrestaurant.it/all-you-can-eat-fusion-parabiago/',
  },
]

export const ayceOffersByPeriod: Record<AycePeriod, AyceOffer[]> = {
  pranzo: [
    {
      title: 'Open Lunch Feriale',
      subtitle: 'Formula agile per pausa pranzo',
      price: 'EUR 16.90',
      notes: 'Coperto e bevande esclusi. Servizio rapido.',
    },
    {
      title: 'Open Lunch Weekend',
      subtitle: 'Selezione estesa sabato e domenica',
      price: 'EUR 22.90',
      notes: 'Inclusi signature roll selezionati.',
    },
  ],
  cena: [
    {
      title: 'Dinner Experience',
      subtitle: 'Carta AYCE completa serale',
      price: 'EUR 31.90',
      notes: 'Include piatti premium e proposta calda.',
    },
    {
      title: 'Dinner Prestige',
      subtitle: 'Menu degustazione con extra signature',
      price: 'EUR 36.90',
      notes: 'Ideale per occasioni speciali.',
    },
  ],
}

export const ayceRules = [
  'Ordina in piu turni per garantire freschezza e servizio fluido.',
  'Gli sprechi possono comportare un contributo extra a piatto.',
  'Comunicare allergie al personale prima della comanda.',
  'Il tempo medio consigliato al tavolo e di 1h45.',
]

export const fidelityBenefits = [
  'Accesso anticipato a novita menu e box stagionali.',
  'Promozioni dedicate su take away e serate speciali.',
  'Priorita di prenotazione nei momenti di alta richiesta.',
  'Comunicazioni piu pulite via WhatsApp ed email.',
]

export const deliveryAreas = [
  {
    area: 'Parabiago centro',
    eta: '20-30 min',
    note: 'Consegna rapida in fascia cena, ideale per ordini multipli.',
  },
  {
    area: 'Legnano e limitrofi',
    eta: '30-45 min',
    note: 'Disponibile con ordine minimo e conferma orario via WhatsApp.',
  },
  {
    area: 'Comuni vicini',
    eta: '35-50 min',
    note: 'Copertura su richiesta con verifica disponibilita in tempo reale.',
  },
]

export const deliveryMapEmbed =
  'https://www.google.com/maps?q=Via+Ugo+Foscolo+6,+Parabiago&output=embed'

export const policyLinks: LinkItem[] = [
  { label: 'Termini e condizioni', href: 'https://www.fusionrestaurant.it/termini-e-condizioni/' },
  { label: 'Privacy policy', href: 'https://www.fusionrestaurant.it/privacy-policy/' },
  { label: 'Cookies policy', href: 'https://www.fusionrestaurant.it/cookies-policy/' },
]

export const experiencePoints = [
  'Ambiente elegante e accogliente, perfetto per ogni occasione.',
  'Ingredienti freschi selezionati ogni giorno per garantire qualita massima.',
  'Chef esperto nella cucina fusion giapponese con tocco contemporaneo.',
  'Proposta AYCE e menu a la carte per soddisfare ogni gusto.',
]

export const fusionTimeline: TimelinePoint[] = [
  {
    year: '2019',
    title: 'Apertura Fusion Restaurant',
    body: 'Nasce il progetto con una proposta orientata a sushi di qualita e servizio attento.',
  },
  {
    year: '2021',
    title: 'Evoluzione AYCE e takeaway',
    body: 'Il menu si amplia con percorsi dedicati a pranzo, cena e asporto.',
  },
  {
    year: '2023',
    title: 'Raffinamento esperienza in sala',
    body: 'Migliorano impiattamento, ritmo servizio e selezione signature.',
  },
  {
    year: '2026',
    title: 'Menu e offerta in continua evoluzione',
    body: 'La cucina si aggiorna ogni stagione con nuovi signature, box speciali e serate a tema.',
  },
]

export const fidelityTiers: FidelityTier[] = [
  { name: 'Silver', progress: 35, benefit: 'Welcome perks e promo dedicate weekday' },
  { name: 'Gold', progress: 68, benefit: 'Priorita prenotazione e bonus su take away' },
  { name: 'Platinum', progress: 100, benefit: 'Esperienze tasting e vantaggi esclusivi' },
]

export const shopProducts: ShopProduct[] = [
  {
    name: 'Signature Sushi Box 24',
    category: 'Sushi Box',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/05/Sushi-Box-300x300.jpg',
    price: 38,
  },
  {
    name: 'Tartare Saporiko',
    category: 'Usuzukuri (Carpacci)',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/04/Tartare-saporiko-Fusion-Restaurant-Parabiago-300x300.jpg',
    price: 14,
  },
  {
    name: 'Uramaki Sake Avocado',
    category: 'Uramaki',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2020/04/21-uramaki-sake-avocado-fusion-restaurant-parabiago-300x300.jpg',
    price: 11,
  },
  {
    name: 'Souffle al cioccolato',
    category: 'Dolci',
    image:
      'https://www.fusionrestaurant.it/wp-content/uploads/2021/02/Souffle-al-cioccolato-300x300.jpg',
    price: 7,
  },
]

export const menuSections: MenuSection[] = [
  { label: 'Nippo tapas', count: 3 },
  { label: 'Novità', count: 2 },
  { label: 'Sushi Box', count: 11 },
  { label: 'Usuzukuri (Carpacci)', count: 5 },
  { label: 'Hosomaki', count: 6 },
  { label: 'Nighiri', count: 10 },
  { label: 'Temaki', count: 8 },
  { label: 'Uramaki', count: 25 },
  { label: 'Uramaki Venere', count: 4 },
  { label: 'Futomaki', count: 4 },
  { label: 'Gunkan', count: 8 },
  { label: 'Chirashi', count: 3 },
  { label: 'Sashimi', count: 2 },
  { label: 'Zensai (Antipasti)', count: 21 },
  { label: 'Salad', count: 6 },
  { label: 'Poke', count: 2 },
  { label: 'Agemono', count: 5 },
  { label: 'Primi', count: 10 },
  { label: 'Secondi', count: 19 },
  { label: 'Dolci' },
]

export const positiveReviews: PositiveReview[] = [
  {
    author: 'Chiara M.',
    quote: 'Sushi freschissimo e servizio rapido. Atmosfera elegante, torneremo sicuramente.',
    rating: 5,
  },
  {
    author: 'Luca R.',
    quote: 'Ottima formula AYCE, piatti curati e personale molto gentile durante tutta la cena.',
    rating: 5,
  },
  {
    author: 'Martina G.',
    quote: 'Take away puntuale, porzioni perfette e qualita alta anche da asporto.',
    rating: 5,
  },
  {
    author: 'Davide P.',
    quote: 'Location curata, menu vario e sapori davvero ben bilanciati. Esperienza super positiva.',
    rating: 5,
  },
]

export function buildWhatsAppLink(message: string) {
  return `${contacts.whatsappHref}?text=${encodeURIComponent(message)}`
}
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

export type DishItem = {
  code: string
  title: string
  description?: string
  allergens?: string[]
}

export type DishSection = {
  key: string
  title: string
  subtitle?: string
  items: DishItem[]
}

export type PricedItem = {
  title: string
  description?: string
  price: string
}

export type TakeAwayDishItem = {
  code: string
  title: string
  description?: string
  price: string
}

export type TakeAwaySection = {
  key: string
  title: string
  subtitle?: string
  items: TakeAwayDishItem[]
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
  heroPrimary: '/hero-home.jpg',
  heroSecondary: '/hero-secondary.jpg',
  logo: '/Logo-Fusion-Restaurant-Parabiago.jpg',
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
    image: '/cat-uramaki.jpg',
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
    image: '/cat-nighiri.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/nighiri/',
    group: 'sushi',
    allergens: ['Pesce'],
    dietary: ['Gluten free options'],
    priceRange: 'EUR 6-18',
  },
  {
    title: 'Tartare e crudi',
    description: 'Pesce crudo finemente tagliato con condimenti orientali e salse artigianali. Piatto forte della cucina fusion.',
    image: '/cat-tartare.jpg',
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
    image: '/cat-sashimi.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/sashimi/',
    group: 'signature',
    allergens: ['Pesce'],
    dietary: ['High protein'],
    priceRange: 'EUR 16-30',
  },
  {
    title: 'Fagottino orientale',
    description: 'Involucri croccanti di pasta con ripieno orientale. Perfetto come antipasto caldo da condividere.',
    image: '/cat-fagottino.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/zensai-antipasti/',
    group: 'hot',
    allergens: ['Glutine', 'Soia'],
    dietary: ['Vegetarian options'],
    priceRange: 'EUR 5-13',
  },
  {
    title: 'Kaisen salad',
    description: 'Insalata di mare con ingredienti freschi e condimento orientale. Leggera, colorata e saporita.',
    image: '/cat-kaisen.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/salad/',
    group: 'hot',
    allergens: ['Crostacei'],
    dietary: ['Light'],
    priceRange: 'EUR 9-15',
  },
  {
    title: 'Sushi box',
    description: 'La nostra selezione take away: sushi e piatti freddi confezionati per portare Fusion dove vuoi.',
    image: '/cat-sushibox.jpg',
    link: 'https://www.fusionrestaurant.it/product-category/sushi-box/',
    group: 'sushi',
    allergens: ['Pesce', 'Soia'],
    dietary: ['Sharing box'],
    priceRange: 'EUR 28-65',
    spotlight: true,
  },
  {
    title: 'Soufflè al cioccolato',
    description: 'Il dessert perfetto per concludere: soufflè al cioccolato caldo servito al momento.',
    image: '/cat-dessert.jpg',
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

export const pranzoFestivoInfo = {
  formulaPrice: '19,00 €',
  childPrice: '13,00 €',
  childNote: 'fino a 130 cm',
  note: 'Coperto escluso. I dolci e le bevande sono esclusi dalla formula Open.',
}

export const pranzoFestivoSections: DishSection[] = [
  {
    key: 'tapas',
    title: 'Nippo Tapas, Bao e Yam Rolls',
    items: [
  { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.', allergens: ['Glutine'] },
  { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.', allergens: ['Glutine', 'Uova'] },
  { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.', allergens: ['Pesce'] },
  { code: '109', title: 'Gnocchi coreani', description: '', allergens: ['Glutine'] },
      { code: '105', title: 'Bao', description: 'Panino ripieno con carne di maiale.', allergens: ['Glutine'] },
      { code: '106', title: 'Yam rolls', description: 'Involtini di patate dolci con cuore di tè matcha.', allergens: ['Glutine', 'Crostacei'] },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.', allergens: ['Pesce', 'Sesamo'] },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.', allergens: ['Glutine', 'Crostacei', 'Soia'] },
    ],
  },
  {
    key: 'carpacci',
    title: 'Carpacci (Usuzukuri)',
    items: [
      { code: '03', title: 'Tartare di salmone', allergens: ['Pesce', 'Sesamo'] },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.', allergens: ['Glutine', 'Pesce', 'Lattosio', 'Sesamo'] },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.', allergens: ['Pesce', 'Sesamo'] },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.', allergens: ['Pesce', 'Sesamo'] },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.', allergens: ['Crostacei', 'Sesamo'] },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone', allergens: ['Pesce'] },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.', allergens: ['Pesce', 'Lattosio'] },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.', allergens: ['Pesce'] },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.', allergens: ['Uova', 'Pesce', 'Frutta a guscio'] },
      { code: '10', title: 'Avocado' },
      { code: '10A', title: 'Nighiri pistacchio', description: 'Salmone scottato, pistacchio, salsa al pistacchio.', allergens: ['Pesce', 'Frutta a guscio'] },
      { code: '11', title: 'Gamberi cotti', allergens: ['Crostacei'] },
      { code: '11A', title: 'Gamberi crudi', allergens: ['Crostacei'] },
      { code: '11B', title: 'Salmone e salsa avocado', allergens: ['Pesce'] },
      { code: '12', title: 'Tonno', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.', allergens: ['Glutine', 'Pesce', 'Soia'] },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.', allergens: ['Lattosio', 'Sesamo'] },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.', allergens: ['Crostacei', 'Uova', 'Pesce', 'Sesamo'] },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.', allergens: ['Pesce', 'Sesamo'] },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.', allergens: ['Pesce', 'Sesamo'] },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.', allergens: ['Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '20', title: 'Salmon fresh', description: 'Salmone con sopra salmone e philadelphia.', allergens: ['Pesce', 'Lattosio'] },
      { code: '20A', title: 'Tiger fresh', description: 'Gambero fritto con sopra salmone e maionese.', allergens: ['Crostacei', 'Pesce', 'Uova'] },
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.', allergens: ['Pesce', 'Lattosio'] },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.', allergens: ['Pesce', 'Lattosio'] },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.', allergens: ['Lattosio', 'Sesamo'] },
      { code: '23', title: 'Salmone special', description: 'Salmone, philadelphia, con sopra crema di avocado e scaglie di mandorle.', allergens: ['Pesce', 'Lattosio', 'Frutta a guscio', 'Sesamo'] },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.', allergens: ['Glutine', 'Uova', 'Sesamo'] },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.', allergens: ['Uova', 'Pesce', 'Sesamo'] },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.', allergens: ['Pesce', 'Sesamo'] },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.', allergens: ['Glutine', 'Lattosio'] },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.', allergens: ['Glutine', 'Crostacei', 'Sesamo', 'Lattosio'] },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.', allergens: ['Glutine', 'Crostacei', 'Sesamo'] },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Pesce', 'Sesamo'] },
      { code: '30A', title: 'Flamb\u00e9', description: 'Gamberi fritti, ricoperti con salmone scottato e salsa teriyaki.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Soia', 'Sesamo'] },
      { code: '30B', title: 'Special tiger roll', description: 'Gamberi fritti, avocado, philadelphia e patate fritte.', allergens: ['Glutine', 'Crostacei', 'Lattosio'] },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
      { code: '31', title: 'Dragon roll', description: 'Gamberi fritti, con sopra maionese piccante e avocado.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '31A', title: 'Rainbow roll', description: 'Salmone con sopra pesce misto.', allergens: ['Crostacei', 'Pesce', 'Sesamo'] },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.', allergens: ['Crostacei', 'Pesce', 'Lattosio', 'Frutta a guscio', 'Sesamo'] },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.', allergens: ['Glutine', 'Pesce', 'Lattosio', 'Sesamo'] },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Frutta a guscio', 'Sesamo'] },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.', allergens: ['Glutine', 'Pesce', 'Sesamo'] },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '36', title: 'Zucchina out', description: 'Polpetta di riso avvolta da zucchina con salsa avocado, leggermente piccante.' },
      { code: '36A', title: 'Tuna out', description: 'Polpetta di riso, maionese, avvolta da tonno.', allergens: ['Uova', 'Pesce'] },
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.', allergens: ['Uova', 'Pesce'] },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki.", allergens: ['Uova', 'Pesce'] },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti.", allergens: ['Crostacei'] },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.', allergens: ['Sesamo'] },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.', allergens: ['Pesce', 'Sesamo'] },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.', allergens: ['Pesce', 'Sesamo'] },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.', allergens: ['Glutine', 'Molluschi', 'Soia'] },
      { code: '49', title: 'Alette di pollo' },
      { code: '50', title: 'Nuvole di gamberi', allergens: ['Crostacei'] },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.', allergens: ['Glutine', 'Lattosio'] },
      { code: '50B', title: 'Stick di gamberi (2 pz.)', allergens: ['Glutine', 'Crostacei'] },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).', allergens: ['Glutine'] },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)', allergens: ['Glutine'] },
      { code: '51B', title: 'Patatine fritte', allergens: ['Glutine'] },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.', allergens: ['Soia'] },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.', allergens: ['Soia'] },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.', allergens: ['Glutine', 'Crostacei'] },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.', allergens: ['Glutine'] },
      { code: '56', title: 'Ravioli di carne', allergens: ['Glutine'] },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.', allergens: ['Glutine'] },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).', allergens: ['Glutine', 'Crostacei'] },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.', allergens: ['Glutine'] },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.' },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.', allergens: ['Crostacei', 'Pesce'] },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.', allergens: ['Sesamo'] },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.', allergens: ['Crostacei', 'Pesce'] },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.', allergens: ['Glutine'] },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.', allergens: ['Glutine'] },
      { code: '70', title: 'Calamari fritti', allergens: ['Glutine', 'Molluschi'] },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta e riso saltati',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.', allergens: ['Uova'] },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.', allergens: ['Crostacei', 'Uova'] },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.', allergens: ['Glutine', 'Uova'] },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.', allergens: ['Uova', 'Soia'] },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.', allergens: ['Glutine'] },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.', allergens: ['Crostacei', 'Soia'] },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.', allergens: ['Glutine', 'Soia'] },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.', allergens: ['Crostacei'] },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.', allergens: ['Crostacei'] },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa sat\u00e9.', allergens: ['Soia'] },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.', allergens: ['Soia'] },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.', allergens: ['Pesce', 'Sesamo'] },
      { code: '83', title: 'Salmone alla griglia', description: 'Con salsa teriyaki.', allergens: ['Pesce', 'Soia'] },
      { code: '85', title: 'Pollo in salsa al limone' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.', allergens: ['Glutine'] },
      { code: '87', title: 'Pollo con le mandorle', allergens: ['Frutta a guscio'] },
      { code: '88', title: 'Gamberi in salsa al limone', allergens: ['Crostacei'] },
      { code: '90', title: 'Gamberi sale e pepe', allergens: ['Crostacei'] },
      { code: '97', title: 'Anatra alla pechinese' },
    ],
  },
]

export const pranzoFestivoDolci: PricedItem[] = [
  { title: 'Soufflé black & white', price: '7,00 €' },
  { title: 'Cocco ripieno', price: '7,00 €' },
  { title: 'Crema catalana in coccio', price: '6,00 €' },
  { title: 'Limone ripieno', price: '6,00 €' },
  { title: 'Gelato fritto', price: '5,50 €' },
  { title: 'Mochi (2 pz)', price: '5,50 €', description: 'Gusti: mango, pistacchio, cocco, cioccolato, tè matcha, lampone' },
  { title: 'Tartufo classico', price: '5,50 €' },
  { title: 'Tiramiù della casa', price: '5,50 €' },
  { title: 'Marengo', price: '5,50 €' },
  { title: 'Coppa cheesecake Monterosa', price: '5,50 €' },
  { title: 'Tortina della nonna', price: '6,00 €' },
  { title: 'Soufflé al cioccolato', price: '5,50 €' },
  { title: 'Gelato al tè verde', price: '5,50 €' },
  { title: 'Sorbetto al limone', price: '5,50 €' },
  { title: 'Twitty — Gelato al fiordilatte', price: '5,50 €' },
  { title: 'Cip Ciok — Gelato al cioccolato', price: '5,50 €' },
  { title: 'Mango fresco', price: '4,00 €' },
]

export const pranzoFestivoBevande: { section: string; items: PricedItem[] }[] = [
  {
    section: 'Bibite e Acqua',
    items: [
      { title: 'Acqua 75 cl (naturale / frizzante)', price: '3,00 €' },
      { title: 'Bibite 33 cl (Coca Cola, Coca Zero, Tè limone)', price: '3,00 €' },
      { title: 'Tè verde per 1 persona', price: '3,00 €' },
      { title: 'Tè verde per 2 persone', price: '5,00 €' },
    ],
  },
  {
    section: 'Birre',
    items: [
      { title: 'Asahi 50 cl', price: '5,50 €' },
      { title: 'Tsingtao 66 cl', price: '6,00 €' },
      { title: 'Sapporo Steiny 65 cl', price: '8,00 €' },
    ],
  },
  {
    section: 'Caffetteria',
    items: [
      { title: 'Caffè', price: '1,50 €' },
      { title: 'Caffè HAG / Orzo / Corretto', price: '2,00 €' },
    ],
  },
  {
    section: 'Liquori',
    items: [
      { title: 'Limoncello', price: '3,00 €' },
      { title: 'Amaro / Grappa', price: '4,00 €' },
    ],
  },
]

export const pranzoFestivoCantina: { section: string; items: PricedItem[] }[] = [
  {
    section: 'Vini in Bottiglia',
    items: [
      { title: 'Pinot Nero (Lombardia, Pirovano 1910) — Frizzante', price: '16,00 €' },
      { title: 'Ribolla Gialla (Friuli V.G., Norina Pez) — Bianco', price: '20,00 €' },
      { title: 'Falanghina (Campania, Tenuta Cavalier Pepe) — Bianco', price: '20,00 €' },
      { title: 'Vermentino (Sardegna, Piero Mancini) — Bianco', price: '20,00 €' },
      { title: 'Senior Bortolomiol (Veneto) — Prosecco Extra Dry', price: '22,00 €' },
      { title: 'Serpaiolo di Endrizzi (Toscana) — Rosso', price: '22,00 €' },
      { title: 'Gewurztraminer (Trentino, Endrizzi) — Bianco', price: '24,00 €' },
    ],
  },
  {
    section: 'Vino Sfuso',
    items: [
      { title: '1/4 Vino (bianco / rosso)', price: '4,00 €' },
      { title: '1/2 Vino (bianco / rosso)', price: '7,00 €' },
    ],
  },
]

export const pranzoFerialeInfo = {
  formulaPrice: '15,00 €',
  childPrice: '10,00 €',
  childNote: 'fino a 130 cm',
  note: 'I dolci e le bevande sono esclusi dalla formula Open.',
}

export const pranzoFerialeSections: DishSection[] = [
  {
    key: 'tapas',
    title: 'Nippo Tapas',
    items: [
  { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.', allergens: ['Glutine'] },
  { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.', allergens: ['Glutine', 'Uova'] },
  { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.', allergens: ['Pesce'] },
  { code: '109', title: 'Gnocchi coreani', description: '', allergens: ['Glutine'] },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.', allergens: ['Pesce', 'Sesamo'] },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.', allergens: ['Glutine', 'Crostacei', 'Soia'] },
    ],
  },
  {
    key: 'usuzukuri',
    title: 'Usuzukuri',
    subtitle: 'Carpacci',
    items: [
      { code: '03', title: 'Tartare di salmone', allergens: ['Pesce', 'Sesamo'] },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.', allergens: ['Glutine', 'Pesce', 'Lattosio', 'Sesamo'] },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.', allergens: ['Pesce', 'Sesamo'] },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.', allergens: ['Pesce', 'Sesamo'] },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.', allergens: ['Crostacei', 'Sesamo'] },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone', allergens: ['Pesce'] },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.', allergens: ['Pesce', 'Lattosio'] },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.', allergens: ['Pesce'] },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.', allergens: ['Uova', 'Pesce', 'Frutta a guscio'] },
      { code: '10', title: 'Avocado' },
      { code: '11', title: 'Gamberi cotti', allergens: ['Crostacei'] },
      { code: '11A', title: 'Gamberi crudi', allergens: ['Crostacei'] },
      { code: '11B', title: 'Salmone e salsa avocado', allergens: ['Pesce'] },
      { code: '12', title: 'Tonno', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso con alga, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.', allergens: ['Glutine', 'Pesce', 'Soia'] },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.', allergens: ['Lattosio', 'Sesamo'] },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.', allergens: ['Crostacei', 'Uova', 'Pesce', 'Sesamo'] },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.', allergens: ['Pesce', 'Sesamo'] },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.', allergens: ['Pesce', 'Sesamo'] },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.', allergens: ['Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.', allergens: ['Pesce', 'Lattosio'] },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.', allergens: ['Pesce', 'Lattosio'] },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.', allergens: ['Lattosio', 'Sesamo'] },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.', allergens: ['Glutine', 'Uova', 'Sesamo'] },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.', allergens: ['Uova', 'Pesce', 'Sesamo'] },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.', allergens: ['Pesce', 'Sesamo'] },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.', allergens: ['Glutine', 'Lattosio'] },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.', allergens: ['Glutine', 'Crostacei', 'Sesamo', 'Lattosio'] },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.', allergens: ['Glutine', 'Crostacei', 'Sesamo'] },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Pesce', 'Sesamo'] },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.', allergens: ['Crostacei', 'Pesce', 'Lattosio', 'Frutta a guscio', 'Sesamo'] },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.', allergens: ['Glutine', 'Pesce', 'Lattosio', 'Sesamo'] },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Frutta a guscio', 'Sesamo'] },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.', allergens: ['Glutine', 'Pesce', 'Sesamo'] },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.', allergens: ['Uova', 'Pesce'] },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki.", allergens: ['Uova', 'Pesce'] },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti.", allergens: ['Crostacei'] },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    subtitle: 'Ciotola di riso',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.', allergens: ['Sesamo'] },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.', allergens: ['Pesce', 'Sesamo'] },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.', allergens: ['Pesce', 'Sesamo'] },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.', allergens: ['Glutine', 'Molluschi', 'Soia'] },
      { code: '50', title: 'Nuvole di gamberi', allergens: ['Crostacei'] },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.', allergens: ['Glutine', 'Lattosio'] },
      { code: '50B', title: 'Stick di gamberi (2 pz.)', allergens: ['Glutine', 'Crostacei'] },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).', allergens: ['Glutine'] },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)', allergens: ['Glutine'] },
      { code: '51B', title: 'Patatine fritte', allergens: ['Glutine'] },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.', allergens: ['Soia'] },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.', allergens: ['Soia'] },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.', allergens: ['Glutine', 'Crostacei'] },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.', allergens: ['Glutine'] },
      { code: '56', title: 'Ravioli di carne', allergens: ['Glutine'] },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.', allergens: ['Glutine'] },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).', allergens: ['Glutine', 'Crostacei'] },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.', allergens: ['Glutine'] },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.' },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.', allergens: ['Crostacei', 'Pesce'] },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.', allergens: ['Sesamo'] },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.', allergens: ['Crostacei', 'Pesce'] },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.', allergens: ['Glutine'] },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.', allergens: ['Glutine'] },
      { code: '70', title: 'Calamari fritti', allergens: ['Glutine', 'Molluschi'] },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.', allergens: ['Uova'] },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta saltata',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.', allergens: ['Crostacei', 'Uova'] },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.', allergens: ['Glutine', 'Uova'] },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.', allergens: ['Uova', 'Soia'] },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.', allergens: ['Glutine'] },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.', allergens: ['Crostacei', 'Soia'] },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.', allergens: ['Glutine', 'Soia'] },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.', allergens: ['Crostacei'] },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.', allergens: ['Crostacei'] },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa sat\u00e9.', allergens: ['Soia'] },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.', allergens: ['Soia'] },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.', allergens: ['Pesce', 'Sesamo'] },
      { code: '85', title: 'Pollo in salsa al limone' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.', allergens: ['Glutine'] },
      { code: '87', title: 'Pollo con le mandorle', allergens: ['Frutta a guscio'] },
      { code: '88', title: 'Gamberi in salsa al limone', allergens: ['Crostacei'] },
      { code: '90', title: 'Gamberi sale e pepe', allergens: ['Crostacei'] },
    ],
  },
]

export const ayceMenuInfo = {
  formulaPrice: '28,00 €',
  childPrice: '13,00 €',
  childNote: 'fino a 130 cm',
  note: 'Coperto compreso. Le bevande e i dolci sono esclusi dalla formula All You Can Eat.',
}

export const ayceMenuSections: DishSection[] = [
  {
    key: 'speciali',
    title: 'Piatti Speciali',
    subtitle: '1 piatto a scelta a persona — incluso nella formula',
    items: [
      { code: 'F1', title: 'Special tris tartare', description: 'Tris di tartare (salmone, tonno e branzino) con gambero rosso di Mazara con salsa ponzu.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Soia'] },
      { code: 'F2', title: 'Tonno scottato', description: 'Tonno scottato con salsa ponzu.', allergens: ['Glutine', 'Pesce', 'Soia'] },
      { code: 'F4', title: 'Ostriche', description: '2 pz.', allergens: ['Molluschi'] },
      { code: 'F6', title: 'Mini wok spicy (2 pz.)', description: 'Piccola padella con gamberi, verdure miste, piccante.', allergens: ['Glutine', 'Soia'] },
    ],
  },
  {
    key: 'carpacci-speciali',
    title: 'Carpacci Speciali',
    subtitle: '1 carpaccio a scelta a persona — incluso nella formula',
    items: [
      { code: 'C1', title: 'Carpaccio capesante', description: 'Carpaccio di capesante, lime e salsa sesamo.', allergens: ['Molluschi', 'Sesamo'] },
      { code: 'C2', title: 'Carpaccio mix', description: 'Carpaccio misto con lime e salsa ponzu (gambero rosso, salmone, tonno, gambero amaebi, capesante).', allergens: ['Pesce', 'Crostacei', 'Molluschi', 'Soia'] },
      { code: 'C3', title: 'Carpaccio salmone', description: 'Carpaccio di salmone, mango, avocado, salsa ponzu e salsa mango.', allergens: ['Pesce', 'Soia'] },
      { code: 'C4', title: 'Carpaccio amaebi', description: 'Carpaccio di gambero crudo e salsa citronette.', allergens: ['Crostacei'] },
    ],
  },
  {
    key: 'tapas',
    title: 'Nippo Tapas, Bao e Yam Rolls',
    items: [
  { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.', allergens: ['Glutine'] },
  { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.', allergens: ['Glutine', 'Uova'] },
  { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.', allergens: ['Pesce'] },
  { code: '109', title: 'Gnocchi coreani', description: '', allergens: ['Glutine'] },
      { code: '105', title: 'Bao (1 pz a persona)', description: 'Panino ripieno con carne di maiale.', allergens: ['Glutine'] },
      { code: '106', title: 'Yam rolls (1 pz a persona)', description: 'Involtini di patate dolci con cuore di tè matcha.', allergens: ['Glutine', 'Crostacei'] },
      { code: '107', title: 'Crispy salmon spicy (1 pz a persona)', description: 'Con spicy salmon, philadelphia e salsa teriyaki.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '108', title: 'Sashimi salmone (1 pz a persona)', description: 'Sashimi salmone con salsa ponzu.', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.', allergens: ['Pesce', 'Sesamo'] },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.', allergens: ['Glutine', 'Crostacei', 'Soia'] },
    ],
  },
  {
    key: 'usuzukuri',
    title: 'Usuzukuri',
    subtitle: 'Carpacci e Tartare',
    items: [
      { code: '03', title: 'Tartare di salmone', allergens: ['Pesce', 'Sesamo'] },
      { code: '03A', title: 'Tartare mango', description: 'Salmone, mango.', allergens: ['Pesce', 'Sesamo'] },
      { code: '03B', title: 'Tartare black mango', description: 'Riso venere, salmone, mango.', allergens: ['Pesce', 'Sesamo'] },
      { code: '04', title: 'Tartare di tonno', allergens: ['Pesce'] },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.', allergens: ['Glutine', 'Pesce', 'Lattosio', 'Sesamo'] },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.', allergens: ['Pesce', 'Sesamo'] },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.', allergens: ['Pesce', 'Sesamo'] },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.', allergens: ['Crostacei', 'Sesamo'] },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone', allergens: ['Pesce'] },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.', allergens: ['Pesce', 'Lattosio'] },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.', allergens: ['Pesce'] },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.', allergens: ['Uova', 'Pesce', 'Frutta a guscio'] },
      { code: '10', title: 'Avocado' },
      { code: '10A', title: 'Nighiri pistacchio', description: 'Salmone scottato, pistacchio, salsa al pistacchio.', allergens: ['Pesce', 'Frutta a guscio'] },
      { code: '11', title: 'Gamberi cotti', allergens: ['Crostacei'] },
      { code: '11A', title: 'Gamberi crudi', allergens: ['Crostacei'] },
      { code: '11B', title: 'Salmone e salsa avocado', allergens: ['Pesce'] },
      { code: '12', title: 'Tonno', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.', allergens: ['Lattosio', 'Sesamo'] },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.', allergens: ['Crostacei', 'Uova', 'Pesce', 'Sesamo'] },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.', allergens: ['Pesce', 'Sesamo'] },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.', allergens: ['Pesce', 'Sesamo'] },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.', allergens: ['Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '20', title: 'Salmon fresh', description: 'Salmone con sopra salmone e philadelphia.', allergens: ['Pesce', 'Lattosio'] },
      { code: '20A', title: 'Tiger fresh', description: 'Gambero fritto con sopra salmone e maionese.', allergens: ['Crostacei', 'Pesce', 'Uova'] },
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.', allergens: ['Pesce', 'Lattosio'] },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.', allergens: ['Pesce', 'Lattosio'] },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.', allergens: ['Lattosio', 'Sesamo'] },
      { code: '23', title: 'Salmone special', description: 'Salmone, philadelphia, con sopra crema di avocado e scaglie di mandorle.', allergens: ['Pesce', 'Lattosio', 'Frutta a guscio', 'Sesamo'] },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.', allergens: ['Glutine', 'Uova', 'Sesamo'] },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.', allergens: ['Uova', 'Pesce', 'Sesamo'] },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.', allergens: ['Pesce', 'Sesamo'] },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.', allergens: ['Pesce', 'Lattosio', 'Sesamo'] },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.', allergens: ['Glutine', 'Lattosio'] },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.', allergens: ['Glutine', 'Crostacei', 'Sesamo', 'Lattosio'] },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.', allergens: ['Glutine', 'Crostacei', 'Sesamo'] },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Pesce', 'Sesamo'] },
      { code: '30A', title: 'Flamb\u00e9', description: 'Gamberi fritti, ricoperti con salmone scottato e salsa teriyaki.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Soia', 'Sesamo'] },
      { code: '30B', title: 'Special tiger roll', description: 'Gamberi fritti, avocado, philadelphia e patate fritte.', allergens: ['Glutine', 'Crostacei', 'Lattosio'] },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
      { code: '31', title: 'Dragon roll', description: 'Gamberi fritti, con sopra maionese piccante e avocado.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '31A', title: 'Rainbow roll', description: 'Salmone con sopra pesce misto.', allergens: ['Crostacei', 'Pesce', 'Sesamo'] },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.', allergens: ['Crostacei', 'Pesce', 'Lattosio', 'Frutta a guscio', 'Sesamo'] },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Crostacei', 'Pesce', 'Lattosio'] },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.', allergens: ['Glutine', 'Pesce', 'Lattosio'] },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.', allergens: ['Glutine', 'Pesce', 'Lattosio', 'Sesamo'] },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Frutta a guscio', 'Sesamo'] },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.', allergens: ['Pesce', 'Sesamo'] },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.', allergens: ['Glutine', 'Crostacei', 'Uova', 'Sesamo'] },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.', allergens: ['Glutine', 'Pesce', 'Sesamo'] },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '36', title: 'Zucchina out', description: 'Polpetta di riso avvolta da zucchina con salsa avocado, leggermente piccante.' },
      { code: '36A', title: 'Tuna out', description: 'Polpetta di riso, maionese, avvolta da tonno.', allergens: ['Uova', 'Pesce'] },
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.', allergens: ['Uova', 'Pesce'] },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki.", allergens: ['Uova', 'Pesce'] },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti.", allergens: ['Crostacei'] },
      { code: '37D', title: 'Gunkan amaebi', description: 'Polpetta di riso avvolta da salmone, ricoperta da gamberi crudi.', allergens: ['Crostacei', 'Uova', 'Pesce'] },
      { code: '38', title: 'Gunkan pistacchio', description: 'Polpetta di riso avvolta da salmone scottato, con sopra philadelphia, granelle di pistacchio.', allergens: ['Pesce', 'Lattosio', 'Frutta a guscio'] },
      { code: '39', title: 'Gunkan mango', description: 'Polpetta di riso avvolta da salmone, con sopra mango, philadelphia e salsa mango.', allergens: ['Pesce', 'Lattosio'] },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.', allergens: ['Sesamo'] },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.', allergens: ['Pesce', 'Sesamo'] },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.', allergens: ['Pesce', 'Sesamo'] },
      { code: '41', title: 'Sashimi moriawase', description: 'Sashimi misto.', allergens: ['Crostacei', 'Pesce'] },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.', allergens: ['Pesce'] },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.', allergens: ['Glutine', 'Molluschi', 'Soia'] },
      { code: '49', title: 'Alette di pollo' },
      { code: '50', title: 'Nuvole di gamberi', allergens: ['Crostacei'] },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.', allergens: ['Glutine', 'Lattosio'] },
      { code: '50B', title: 'Stick di gamberi (2 pz.)', allergens: ['Glutine', 'Crostacei'] },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).', allergens: ['Glutine'] },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)', allergens: ['Glutine'] },
      { code: '51B', title: 'Patatine fritte', allergens: ['Glutine'] },
      { code: '51C', title: 'Pane dolce al vapore', description: "Pane orientale al vapore con crema all'uovo (2 pz.).", allergens: ['Glutine', 'Lattosio'] },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.', allergens: ['Soia'] },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.', allergens: ['Soia'] },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.', allergens: ['Glutine', 'Crostacei'] },
      { code: '54B', title: 'Ravioli di cristallo', description: 'Ravioli di gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.', allergens: ['Glutine'] },
      { code: '56', title: 'Ravioli di carne', allergens: ['Glutine'] },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.', allergens: ['Glutine'] },
      { code: '56B', title: 'Ravioli di pollo fritto', allergens: ['Glutine'] },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).', allergens: ['Glutine', 'Crostacei'] },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.', allergens: ['Glutine'] },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.' },
      { code: '60A', title: 'Cocktail di gamberi in salsa rosa', allergens: ['Crostacei', 'Uova'] },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.', allergens: ['Crostacei', 'Pesce'] },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.', allergens: ['Sesamo'] },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.', allergens: ['Crostacei', 'Pesce'] },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.', allergens: ['Glutine'] },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.', allergens: ['Glutine'] },
      { code: '70', title: 'Calamari fritti', allergens: ['Glutine', 'Molluschi'] },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta e riso saltati',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.', allergens: ['Glutine', 'Crostacei'] },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.', allergens: ['Uova'] },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.', allergens: ['Crostacei', 'Uova'] },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.', allergens: ['Glutine', 'Uova'] },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.', allergens: ['Uova', 'Soia'] },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.', allergens: ['Glutine'] },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.', allergens: ['Crostacei', 'Soia'] },
      { code: '77A', title: 'Ramen in brodo', description: 'Gamberi, verdure e frittata.', allergens: ['Glutine', 'Crostacei', 'Uova'] },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.', allergens: ['Glutine', 'Soia'] },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.', allergens: ['Crostacei'] },
      { code: '79', title: 'Salmone wok', description: 'Salmone cotto con verdure.', allergens: ['Pesce'] },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.', allergens: ['Crostacei'] },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa sat\u00e9.', allergens: ['Soia'] },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.', allergens: ['Soia'] },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.', allergens: ['Pesce', 'Sesamo'] },
      { code: '83', title: 'Salmone alla griglia', description: 'Con salsa teriyaki.', allergens: ['Pesce', 'Soia'] },
      { code: '85', title: 'Pollo in salsa al limone' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.', allergens: ['Glutine'] },
      { code: '87', title: 'Pollo con le mandorle', allergens: ['Frutta a guscio'] },
      { code: '88', title: 'Gamberi in salsa al limone', allergens: ['Crostacei'] },
      { code: '89', title: 'Gamberi in salsa thailandese', description: 'Gamberi e verdure in salsa thai.', allergens: ['Glutine', 'Crostacei'] },
      { code: '90', title: 'Gamberi sale e pepe', allergens: ['Crostacei'] },
      { code: '92', title: 'Gamberoni in salsa piccante', allergens: ['Glutine', 'Crostacei'] },
      { code: '93', title: 'Gamberi in salsa piccante', allergens: ['Glutine', 'Crostacei'] },
      { code: '95', title: 'Pollo in salsa piccante', allergens: ['Glutine'] },
      { code: '97', title: 'Anatra alla pechinese' },
    ],
  },
]

export const takeAwayMenuSections: TakeAwaySection[] = [
  {
    key: 'speciali',
    title: 'Piatti Speciali',
    items: [
      { code: 'F1', title: 'Special tris tartare', description: 'Tris di tartare (salmone, tonno e branzino) con gambero rosso di Mazara con salsa ponzu.', price: '16,00 €' },
      { code: 'F2', title: 'Tonno scottato', description: 'Tonno scottato con salsa ponzu.', price: '12,00 €' },
      { code: 'F4', title: 'Ostriche', price: '14,00 €' },
      { code: 'F6', title: 'Mini wok spicy (2 pz.)', description: 'Piccola padella con gamberi, verdure miste, piccante.', price: '9,00 €' },
    ],
  },
  {
    key: 'carpacci-speciali',
    title: 'Carpacci Speciali',
    items: [
      { code: 'C1', title: 'Carpaccio capesante', description: 'Carpaccio di capesante, lime e salsa sesamo.', price: '13,00 €' },
      { code: 'C2', title: 'Carpaccio mix', description: 'Carpaccio misto con lime e salsa ponzu (gambero rosso, salmone, tonno, gambero amaebi, capesante).', price: '14,00 €' },
      { code: 'C3', title: 'Carpaccio salmone', description: 'Carpaccio di salmone, mango, avocado, salsa ponzu e salsa mango.', price: '11,00 €' },
      { code: 'C4', title: 'Carpaccio amaebi', description: 'Carpaccio di gambero crudo e salsa citronette.', price: '12,00 €' },
    ],
  },
  {
    key: 'tapas',
    title: 'Nippo Tapas, Bao e Yam Rolls',
    items: [
      { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.', price: '6,00 €' },
      { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.', price: '5,00 €' },
      { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.', price: '5,00 €' },
      { code: '109', title: 'Gnocchi coreani', description: '', price: '7,00 €' },
      { code: '105', title: 'Bao (1 pz.)', description: 'Panino ripieno con carne di maiale.', price: '4,50 €' },
      { code: '106', title: 'Yam rolls (1 pz.)', description: 'Involtini di patate dolci con cuore di tè matcha.', price: '4,50 €' },
      { code: '107', title: 'Crispy salmon spicy (1 pz.)', description: 'Con spicy salmon, philadelphia e salsa teriyaki.', price: '5,00 €' },
      { code: '108', title: 'Sashimi salmone (1 pz.)', description: 'Sashimi salmone con salsa ponzu.', price: '5,00 €' },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.', price: '13,00 €' },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.', price: '13,00 €' },
    ],
  },
  {
    key: 'usuzukuri',
    title: 'Usuzukuri',
    subtitle: 'Carpacci e Tartare',
    items: [
      { code: '03', title: 'Tartare di salmone', price: '10,00 €' },
      { code: '03A', title: 'Tartare mango', description: 'Salmone, mango.', price: '11,00 €' },
      { code: '03B', title: 'Tartare black mango', description: 'Riso venere, salmone, mango.', price: '11,00 €' },
      { code: '04', title: 'Tartare di tonno', price: '11,00 €' },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.', price: '9,00 €' },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.', price: '6,00 €' },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.', price: '8,00 €' },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.', price: '6,00 €' },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.', price: '6,50 €' },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.', price: '6,00 €' },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.', price: '6,50 €' },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone', price: '4,00 €' },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.', price: '4,50 €' },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.', price: '4,50 €' },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.', price: '5,00 €' },
      { code: '10', title: 'Avocado', price: '3,50 €' },
      { code: '10A', title: 'Nighiri pistacchio', description: 'Salmone scottato, pistacchio, salsa al pistacchio.', price: '5,00 €' },
      { code: '11', title: 'Gamberi cotti', price: '4,00 €' },
      { code: '11A', title: 'Gamberi crudi', price: '4,50 €' },
      { code: '11B', title: 'Salmone e salsa avocado', price: '4,50 €' },
      { code: '12', title: 'Tonno', price: '4,50 €' },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.', price: '5,00 €' },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.', price: '4,50 €' },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.', price: '5,50 €' },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.', price: '4,50 €' },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.', price: '5,00 €' },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.', price: '5,50 €' },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.', price: '5,00 €' },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.', price: '5,00 €' },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '20', title: 'Salmon fresh', description: 'Salmone con sopra salmone e philadelphia.', price: '8,00 €' },
      { code: '20A', title: 'Tiger fresh', description: 'Gambero fritto con sopra salmone e maionese.', price: '8,50 €' },
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.', price: '7,00 €' },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.', price: '7,00 €' },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.', price: '8,00 €' },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.', price: '8,00 €' },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.', price: '8,00 €' },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.', price: '7,00 €' },
      { code: '23', title: 'Salmone special', description: 'Salmone, philadelphia, con sopra crema di avocado e scaglie di mandorle.', price: '8,50 €' },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.', price: '7,50 €' },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.', price: '8,00 €' },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.', price: '8,50 €' },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.', price: '7,50 €' },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.', price: '8,00 €' },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.', price: '8,00 €' },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.', price: '9,50 €' },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.', price: '9,00 €' },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.', price: '8,50 €' },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.', price: '9,00 €' },
      { code: '30A', title: 'Flambé', description: 'Gamberi fritti, ricoperti con salmone scottato e salsa teriyaki.', price: '9,00 €' },
      { code: '30B', title: 'Special tiger roll', description: 'Gamberi fritti, avocado, philadelphia e patate fritte.', price: '9,50 €' },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.', price: '9,00 €' },
      { code: '31', title: 'Dragon roll', description: 'Gamberi fritti, con sopra maionese piccante e avocado.', price: '9,00 €' },
      { code: '31A', title: 'Rainbow roll', description: 'Salmone con sopra pesce misto.', price: '10,00 €' },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.', price: '9,00 €' },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.', price: '9,50 €' },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.', price: '9,50 €' },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.', price: '8,50 €' },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.', price: '9,00 €' },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.', price: '8,00 €' },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.', price: '7,50 €' },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.', price: '8,50 €' },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.', price: '8,00 €' },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '36', title: 'Zucchina out', description: 'Polpetta di riso avvolta da zucchina con salsa avocado, leggermente piccante.', price: '5,50 €' },
      { code: '36A', title: 'Tuna out', description: 'Polpetta di riso, maionese, avvolta da tonno.', price: '6,00 €' },
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.', price: '5,50 €' },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki.", price: '6,00 €' },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti.", price: '6,00 €' },
      { code: '37D', title: 'Gunkan amaebi', description: 'Polpetta di riso avvolta da salmone, ricoperta da gamberi crudi.', price: '7,00 €' },
      { code: '38', title: 'Gunkan pistacchio', description: 'Polpetta di riso avvolta da salmone scottato, con sopra philadelphia, granelle di pistacchio.', price: '6,50 €' },
      { code: '39', title: 'Gunkan mango', description: 'Polpetta di riso avvolta da salmone, con sopra mango, philadelphia e salsa mango.', price: '6,00 €' },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.', price: '3,50 €' },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.', price: '10,00 €' },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.', price: '11,00 €' },
      { code: '41', title: 'Sashimi moriawase', description: 'Sashimi misto.', price: '14,00 €' },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.', price: '10,00 €' },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.', price: '7,00 €' },
      { code: '49', title: 'Alette di pollo', price: '8,00 €' },
      { code: '50', title: 'Nuvole di gamberi', price: '5,00 €' },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.', price: '6,00 €' },
      { code: '50B', title: 'Stick di gamberi (2 pz.)', price: '5,50 €' },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).', price: '4,00 €' },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)', price: '4,00 €' },
      { code: '51B', title: 'Patatine fritte', price: '4,00 €' },
      { code: '51C', title: 'Pane dolce al vapore', description: "Pane orientale al vapore con crema all'uovo (2 pz.).", price: '4,50 €' },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.', price: '3,50 €' },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.', price: '4,00 €' },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.', price: '6,50 €' },
      { code: '54B', title: 'Ravioli di cristallo', description: 'Ravioli di gamberi.', price: '6,00 €' },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.', price: '5,50 €' },
      { code: '56', title: 'Ravioli di carne', price: '5,50 €' },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.', price: '6,00 €' },
      { code: '56B', title: 'Ravioli di pollo fritto', price: '6,00 €' },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).', price: '6,00 €' },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.', price: '5,00 €' },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.', price: '5,00 €' },
      { code: '60A', title: 'Cocktail di gamberi in salsa rosa', price: '9,00 €' },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.', price: '5,00 €' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.', price: '9,00 €' },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.', price: '8,00 €' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.', price: '5,50 €' },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.', price: '5,00 €' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.', price: '8,50 €' },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.', price: '8,00 €' },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.', price: '9,00 €' },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.', price: '8,50 €' },
      { code: '70', title: 'Calamari fritti', price: '9,00 €' },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta e riso saltati',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.', price: '10,00 €' },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.', price: '9,00 €' },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.', price: '10,00 €' },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.', price: '9,00 €' },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.', price: '10,50 €' },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.', price: '9,50 €' },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.', price: '10,00 €' },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.', price: '10,00 €' },
      { code: '77A', title: 'Ramen in brodo', description: 'Gamberi, verdure e frittata.', price: '11,00 €' },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.', price: '10,00 €' },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.', price: '14,00 €' },
      { code: '79', title: 'Salmone wok', description: 'Salmone cotto con verdure.', price: '13,00 €' },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.', price: '12,00 €' },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa saté.', price: '11,00 €' },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.', price: '11,00 €' },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.', price: '13,00 €' },
      { code: '83', title: 'Salmone alla griglia', description: 'Con salsa teriyaki.', price: '12,00 €' },
      { code: '85', title: 'Pollo in salsa al limone', price: '11,00 €' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.', price: '11,50 €' },
      { code: '87', title: 'Pollo con le mandorle', price: '12,00 €' },
      { code: '88', title: 'Gamberi in salsa al limone', price: '13,00 €' },
      { code: '89', title: 'Gamberi in salsa thailandese', description: 'Gamberi e verdure in salsa thai.', price: '13,00 €' },
      { code: '90', title: 'Gamberi sale e pepe', price: '13,00 €' },
      { code: '92', title: 'Gamberoni in salsa piccante', price: '15,00 €' },
      { code: '93', title: 'Gamberi in salsa piccante', price: '13,00 €' },
      { code: '95', title: 'Pollo in salsa piccante', price: '11,00 €' },
      { code: '97', title: 'Anatra alla pechinese', price: '14,00 €' },
    ],
  },
]

/** Maps dish code → local image path in /dishes/ for AYCE and Take Away menu pages */
export const dishImages: Record<string, string> = {
  '01A': '/dishes/001a-poke-salmone.jpg',
  '01B': '/dishes/001b-poke-pollo-fritto.jpg',
  '03': '/dishes/003-tartare-di-salmone.jpg',
  '03A': '/dishes/003a-tartare-mango.jpg',
  '03B': '/dishes/003a-tartare-mango-black.jpg',
  '04': '/dishes/004-tartare-di-tonno.jpg',
  '05A': '/dishes/005a-involtino-salmone-e-gamberi.jpg',
  '06': '/dishes/006-hosomaki-vegetariano.jpg',
  '06A': '/dishes/006a-hosomaki-mango.jpg',
  '07': '/dishes/007-hosomaki-sake.jpg',
  '08': '/dishes/008-hosomaki-tekka.jpg',
  '08A': '/dishes/008a-hosomaki-ebi.jpg',
  '08B': '/dishes/008b-hosomaki-miura.jpg',
  '09': '/dishes/009-nighiri-salmone.jpg',
  '09A': '/dishes/009a-nighiri-salmone-scottato.jpg',
  '09B': '/dishes/009b-nighiri-caramellato.jpg',
  '09C': '/dishes/009c-nighiri-mandorle.jpg',
  '10': '/dishes/010-nighiri-avocado.jpg',
  '10A': '/dishes/010a-nighiri-pistacchio.jpg',
  '11': '/dishes/023-nigiri-gambero-cotto.jpg',
  '11A': '/dishes/011a-nighiri-gamberi-crudi.jpg',
  '11B': '/dishes/011b-nighiri-salmone-salsa-avocado.jpg',
  '12': '/dishes/012-nighiri-tonno.jpg',
  '13': '/dishes/013-temaki-sake-avocado.jpg',
  '13A': '/dishes/013a-temaki-vegetariano.jpg',
  '14': '/dishes/014-temaki-maguro-avocado.jpg',
  '15': '/dishes/015-temaki-california.jpg',
  '16': '/dishes/016-temaki-spicy-salmon.jpg',
  '17': '/dishes/017-temaki-spicy-tuna.jpg',
  '18': '/dishes/018-temaki-ebiten.jpg',
  '19': '/dishes/019-temaki-miura.jpg',
  '20': '/dishes/020-uramaki-salmon-fresh.jpg',
  '20A': '/dishes/020a-uramaki-tiger-fresh.jpg',
  '21': '/dishes/070-ura-salmone-avocado.jpg',
  '21A': '/dishes/021a-uramaki-sake-philadelphia.jpg',
  '21B': '/dishes/021b-uramaki-salmon-cream.jpg',
  '21C': '/dishes/021c-uramaki-salmone-fritto.jpg',
  '22': '/dishes/022-uramaki-mango-roll.jpg',
  '22A': '/dishes/022a-uramaki-vegetariano.jpg',
  '23': '/dishes/023-uramaki-samone-special.jpg',
  '24': '/dishes/024-uramaki-chicken-roll.jpg',
  '25': '/dishes/025-uramaki-spicy-salmon.jpg',
  '26': '/dishes/026-uramaki-spicy-tuna.jpg',
  '27': '/dishes/027-uramaki-miura-maki.jpg',
  '27A': '/dishes/027a-uramaki-chicken-cheddar.jpg',
  '28': '/dishes/028-uramaki-ebiten.jpg',
  '28A': '/dishes/028a-uramaki-crispy-king.jpg',
  '28C': '/dishes/028c-uramaki-white-royal-salmon.jpg',
  '29': '/dishes/029-uramaki-ebi-roll.jpg',
  '30': '/dishes/030-uramaki-tiger-roll.jpg',
  '30A': '/dishes/030a-uramaki-flambe.jpg',
  '30B': '/dishes/30b-special-tiger-roll.jpg',
  '30C': '/dishes/030c-uramaki-white-tiger-roll.jpg',
  '31': '/dishes/031-uramaki-dragon-roll.jpg',
  '31A': '/dishes/031a-uramaki-rainbow-roll.jpg',
  '31B': '/dishes/031b-uramaki-esotico.jpg',
  '32': '/dishes/032-futomaki-sake-avocado.jpg',
  '33': '/dishes/033-futomaki-california.jpg',
  '34': '/dishes/034-futomaki-ebiten.jpg',
  '35': '/dishes/035-futomaki-fritto.jpg',
  '36': '/dishes/036-gunkan-zucchina-out.jpg',
  '36A': '/dishes/031-gunkan-tonno-out.jpg',
  '37A': '/dishes/030-gunkan-salmone-out.jpg',
  '37B': '/dishes/037b-gunkan-bianco.jpg',
  '37C': '/dishes/037c-zucchine-e-gamberetti.jpg',
  '37D': '/dishes/037d-gunkan-amaebi.jpg',
  '38': '/dishes/038-gunkan-pistacchio.jpg',
  '39': '/dishes/039-gunkan-mango.jpg',
  '40': '/dishes/040-gohan.jpg',
  '40B': '/dishes/040b-sake-don.jpg',
  '40C': '/dishes/040c-tekka-don.jpg',
  '41': '/dishes/041-sashimi-moriawase.jpg',
  '42': '/dishes/042-sake-sashimi.jpg',
  '48': '/dishes/48-polpette-di-takoyaki.jpg',
  '49': '/dishes/49-alette-di-pollo.jpg',
  '50': '/dishes/050-nuvole-di-gamberi.jpg',
  '50A': '/dishes/050a-crocchette-di-patate-con-bacon-e-cheddar.jpg',
  '50B': '/dishes/050b-stick-di-gamberi.jpg',
  '51': '/dishes/051-pane-orientale-al-vapore.jpg',
  '51A': '/dishes/109-pane-fritto.jpg',
  '51B': '/dishes/111-patatine.jpg',
  '51C': '/dishes/51c-pane-dolce-al-vapore.jpg',
  '52': '/dishes/052-zuppa-di-miso.jpg',
  '53': '/dishes/053-edamame.jpg',
  '54': '/dishes/054-ebi-shumai.jpg',
  '54B': '/dishes/054-ravioli-di-cristallo.jpg',
  '55': '/dishes/055-harumaki.jpg',
  '56': '/dishes/056-ravioli-di-carne.jpg',
  '56A': '/dishes/056a-ravioli-di-pollo-brasati.jpg',
  '56B': '/dishes/56b-ravioli-di-pollo-fritto.jpg',
  '57': '/dishes/057-fagottino-orientale-2.jpg',
  '58': '/dishes/058-moyashi-itame.jpg',
  '59': '/dishes/059-pak-choi.jpg',
  '60A': '/dishes/060a-cocktail-di-gamberi-in-salsa-rosa.jpg',
  '61': '/dishes/061-yasai-salad.jpg',
  '62': '/dishes/062-kaisen-salad.jpg',
  '62A': '/dishes/062a-insalata-esotica.jpg',
  '63': '/dishes/063-japanese-salad.jpg',
  '64': '/dishes/064-wakame.jpg',
  '65': '/dishes/065-kaisen-wakame.jpg',
  '67': '/dishes/067-yasai-tempura.jpg',
  '68': '/dishes/068-ebi-tempura.jpg',
  '69': '/dishes/069-tori-no-karaaghe.jpg',
  '70': '/dishes/070-calamari-fritti.jpg',
  '71': '/dishes/121-udon-con-verdure.jpg',
  '72': '/dishes/072-yasai-meshi.jpg',
  '73': '/dishes/073-riso-alla-thailandese.jpg',
  '74': '/dishes/074-noodles.jpg',
  '75': '/dishes/074-noodles-2.jpg',
  '76': '/dishes/129-riso-alla-cantonese.jpg',
  '76A': '/dishes/076a-gnocchi-di-riso.jpg',
  '77': '/dishes/077-spaghetti-di-soia-con-verdure-e-gamberi.jpg',
  '77A': '/dishes/077a-ramen-in-brodo.jpg',
  '77B': '/dishes/077-spaghetti-di-soia-piccanti.jpg',
  '78': '/dishes/078-ooebi-no-shioyaki.jpg',
  '79': '/dishes/140-salmone-alla-griglia.jpg',
  '80': '/dishes/080-yaki-ebi.jpg',
  '81': '/dishes/145-spiedini-di-pollo.jpg',
  '81A': '/dishes/081a-pollo-alla-griglia-con-salsa-teriyaki.jpg',
  '82': '/dishes/082-salmone-scottato-con-crosta-di-sesamo.jpg',
  '83': '/dishes/083-salmone-alla-griglia-con-salsa-teriyaki.jpg',
  '85': '/dishes/085-pollo-in-salsa-al-limone.jpg',
  '86': '/dishes/086-pollo-in-salsa-thailandese.jpg',
  '87': '/dishes/087-pollo-con-le-mandorle.jpg',
  '88': '/dishes/088-gamberi-in-salsa-al-limone.jpg',
  '89': '/dishes/089-gamberi-in-salsa-thailandese.jpg',
  '90': '/dishes/090-gamberi-sale-e-pepe.jpg',
  '92': '/dishes/092-gamberoni-in-salsa-piccante.jpg',
  '93': '/dishes/093-gamberi-in-salsa-piccante-2.jpg',
  '95': '/dishes/095-pollo-in-salsa-piccante.jpg',
  '97': '/dishes/097-anatra-alla-pechinese.jpg',
  '102': '/dishes/102-spiedino-di-pollo-fritto.png',
  '103': '/dishes/103-tacos-chicken-spicy.png',
  '104': '/dishes/104-tacos-spicy.png',
  '105': '/dishes/105-bao.png',
  '106': '/dishes/106-yam-rolls.jpg',
  '107': '/dishes/107-crispy-salmon-spicy.png',
  '108': '/dishes/108-sashimi-salmone.png',
  '109': '/gnocchi-coreani.jpeg',
  '110': '/dishes/110-uramaki-black-tiger.jpg',
  '111': '/dishes/111-uramaki-black-royal-salmon.jpg',
  '112': '/dishes/112-uramaki-black-miura.jpg',
  '113': '/dishes/113-uramaki-black-ebiten-special.jpg',
  '68A': '/dishes/068a-ebi-crispy.jpg',
  'F1': '/dishes/f1-special-tris-tartare.png',
  'F2': '/dishes/f2-tonno-scottato.png',
  'F4': '/dishes/f4-ostriche.png',
  'F6': '/dishes/f6-mini-wok-spicy.png',
  'C1': '/dishes/c1-carpaccio-capesante.png',
  'C2': '/dishes/c2-carpaccio-mix.png',
  'C3': '/dishes/c3-carpaccio-salmone.png',
  'C4': '/dishes/c4-carpaccio-amaebi.png',
}

// Title-based image map for items without a numeric code (e.g. desserts)
export const dishImagesByTitle: Record<string, string> = {
  'Soufflé black & white': '/dishes/souffle-al-cioccolato.jpg',
  'Soufflé al cioccolato': '/dishes/souffle-al-cioccolato.jpg',
  'Cocco ripieno': '/dishes/cocco-ripieno.jpg',
  'Crema catalana in coccio': '/dishes/crema-catalana.jpg',
  'Limone ripieno': '/dishes/limone-ripieno.jpg',
  'Gelato fritto': '/dishes/gelato-fritto.jpg',
  'Tartufo classico': '/dishes/tartufo-classico.jpg',
  'Marengo': '/dishes/marengo.jpg',
  'Coppa cheesecake Monterosa': '/dishes/coppa-cheesecake-monterosa.jpg',
  'Tortina della nonna': '/tortino della nonna.png',
  'Gelato al tè verde': '/dishes/gelato-al-te-verde.jpg',
  'Cip Ciok — Gelato al cioccolato': '/dishes/cip-ciok.jpg',
  'Tiramisù della casa': '/images/products/tiramisu-della-casa.jpg',
  'Tiramiù della casa': '/images/products/tiramisu-della-casa.jpg',
  'Sorbetto al limone': '/sorbettoallimone.png',
  'Mango fresco': '/dishes/mezzo-mango.jpg',
}

export const galleryImages = [
  {
    title: 'Sala e atmosfera',
    image: '/gallery-sala.jpg',
  },
  {
    title: 'Sushi experience',
    image: '/gallery-sushi.jpg',
  },
  {
    title: 'All you can eat',
    image: '/gallery-ayce.jpg',
  },
  {
    title: 'Formula pranzo',
    image: '/gallery-pranzo.jpg',
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
    title: 'Pranzo Feriale',
    badge: 'PRANZO',
    description: 'Dal Martedì al Venerdì (esclusi festivi). Formula OPEN: 2 porzioni per ogni piatto. Coperto compreso, bevande escluse.',
    price: '€ 15',
    image: '/images/sections/menu-pranzo.jpg',
    formulaHref: '/menu/pranzo',
  },
  {
    title: 'Pranzo Festivo',
    badge: 'FESTIVI',
    description: 'Sabato, Domenica e Festivi. Formula OPEN: 2 porzioni per ogni piatto. Coperto compreso, bevande escluse.',
    price: '€ 19',
    image: '/images/sections/menu-pranzo-festivo.jpg',
    formulaHref: '/menu/pranzo-festivo',
  },
  {
    title: 'Cena All You Can Eat',
    badge: 'CENA',
    description: 'Tutti i giorni della settimana. Formula AYCE completa con sushi, cucina calda e piatti signature. Coperto compreso, bevande escluse.',
    price: '€ 28',
    image: '/images/sections/menu-ayce.jpg',
    formulaHref: '/menu/ayce',
  },
]

export const ayceOffersByPeriod: Record<AycePeriod, AyceOffer[]> = {
  pranzo: [
    {
      title: 'Formula Pranzo Feriale',
      subtitle: 'Dal Martedì al Venerdì',
      price: '€ 15',
      notes: 'Coperto compreso, bevande escluse.',
    },
    {
      title: 'Formula Pranzo Festivo',
      subtitle: 'Sabato, Domenica e Festivi',
      price: '€ 19',
      notes: 'Coperto compreso, bevande escluse.',
    },
  ],
  cena: [
    {
      title: 'Formula Cena All You Can Eat',
      subtitle: 'Tutti i giorni della settimana',
      price: '€ 28',
      notes: 'Coperto compreso, bevande escluse.',
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
  { label: 'Termini e condizioni', href: '/termini-e-condizioni' },
  { label: 'Privacy policy', href: '/privacy' },
  { label: 'Cookies policy', href: '/cookie-policy' },
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
    image: '/shop-sushibox.jpg',
    price: 38,
  },
  {
    name: 'Tartare Saporiko',
    category: 'Usuzukuri (Carpacci)',
    image: '/shop-tartare.jpg',
    price: 14,
  },
  {
    name: 'Uramaki Salmone Fritto',
    category: 'Uramaki',
    image: '/shop-uramaki-sake.jpg',
    price: 11,
  },
  {
    name: 'Soufflè al cioccolato',
    category: 'Dolci',
    image: '/shop-souffle.jpg',
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
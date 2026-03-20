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
      { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.' },
      { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.' },
      { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.' },
      { code: '105', title: 'Bao', description: 'Panino ripieno con carne di maiale.' },
      { code: '106', title: 'Yam rolls', description: 'Involtini di patate dolci con cuore di tè matcha.' },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.' },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.' },
    ],
  },
  {
    key: 'carpacci',
    title: 'Carpacci (Usuzukuri)',
    items: [
      { code: '03', title: 'Tartare di salmone' },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.' },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.' },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.' },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.' },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.' },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.' },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.' },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone' },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.' },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.' },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.' },
      { code: '10', title: 'Avocado' },
      { code: '10A', title: 'Nighiri pistacchio', description: 'Salmone scottato, pistacchio, salsa al pistacchio.' },
      { code: '11', title: 'Gamberi cotti' },
      { code: '11A', title: 'Gamberi crudi' },
      { code: '11B', title: 'Salmone e salsa avocado' },
      { code: '12', title: 'Tonno' },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.' },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.' },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.' },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.' },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.' },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.' },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.' },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.' },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '20', title: 'Salmon fresh', description: 'Salmone con sopra salmone e philadelphia.' },
      { code: '20A', title: 'Tiger fresh', description: 'Gambero fritto con sopra salmone e maionese.' },
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.' },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.' },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.' },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.' },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.' },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.' },
      { code: '23', title: 'Salmone special', description: 'Salmone, philadelphia, con sopra crema di avocado e scaglie di mandorle.' },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.' },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.' },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.' },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.' },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.' },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.' },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.' },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.' },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.' },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.' },
      { code: '30A', title: 'Flambé', description: 'Gamberi fritti, ricoperti con salmone scottato e salsa teriyaki.' },
      { code: '30B', title: 'Special tiger roll', description: 'Gamberi fritti, avocado, philadelphia e patate fritte.' },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.' },
      { code: '31', title: 'Dragon roll', description: 'Gamberi fritti, con sopra maionese piccante e avocado.' },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.' },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.' },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.' },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.' },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.' },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.' },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.' },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.' },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.' },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '36', title: 'Zucchina out', description: 'Polpetta di riso avvolta da zucchina con salsa avocado, leggermente piccante.' },
      { code: '36A', title: 'Tuna out', description: 'Polpetta di riso, maionese, avvolta da tonno.' },
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.' },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki." },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti." },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.' },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.' },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.' },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.' },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.' },
      { code: '49', title: 'Alette di pollo' },
      { code: '50', title: 'Nuvole di gamberi' },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.' },
      { code: '50B', title: 'Stick di gamberi (2 pz.)' },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).' },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)' },
      { code: '51B', title: 'Patatine fritte' },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.' },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.' },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.' },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.' },
      { code: '56', title: 'Ravioli di carne' },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.' },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).' },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.' },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.' },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.' },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.' },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.' },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.' },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.' },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.' },
      { code: '70', title: 'Calamari fritti' },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta e riso saltati',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.' },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.' },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.' },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.' },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.' },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.' },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.' },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.' },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.' },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.' },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.' },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa saté.' },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.' },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.' },
      { code: '83', title: 'Salmone alla griglia', description: 'Con salsa teriyaki.' },
      { code: '85', title: 'Pollo in salsa al limone' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.' },
      { code: '87', title: 'Pollo con le mandorle' },
      { code: '88', title: 'Gamberi in salsa al limone' },
      { code: '90', title: 'Gamberi sale e pepe' },
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
  { title: 'Tortina della nonna', price: '5,50 €' },
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
    section: 'Caffetteria e Liquori',
    items: [
      { title: 'Caffè', price: '1,50 €' },
      { title: 'Caffè HAG / Orzo / Corretto', price: '2,00 €' },
      { title: 'Limoncello', price: '3,00 €' },
      { title: 'Amaro / Grappa', price: '4,00 €' },
      { title: 'Sake', price: '6,00 €' },
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
      { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.' },
      { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.' },
      { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.' },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.' },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.' },
    ],
  },
  {
    key: 'usuzukuri',
    title: 'Usuzukuri',
    subtitle: 'Carpacci',
    items: [
      { code: '03', title: 'Tartare di salmone' },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.' },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.' },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.' },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.' },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.' },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.' },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.' },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone' },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.' },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.' },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.' },
      { code: '10', title: 'Avocado' },
      { code: '11', title: 'Gamberi cotti' },
      { code: '11A', title: 'Gamberi crudi' },
      { code: '11B', title: 'Salmone e salsa avocado' },
      { code: '12', title: 'Tonno' },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso con alga, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.' },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.' },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.' },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.' },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.' },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.' },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.' },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.' },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.' },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.' },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.' },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.' },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.' },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.' },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.' },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.' },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.' },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.' },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.' },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.' },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.' },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.' },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.' },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.' },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.' },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.' },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.' },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.' },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.' },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.' },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.' },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.' },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.' },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.' },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.' },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki." },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti." },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    subtitle: 'Ciotola di riso',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.' },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.' },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.' },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.' },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.' },
      { code: '50', title: 'Nuvole di gamberi' },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.' },
      { code: '50B', title: 'Stick di gamberi (2 pz.)' },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).' },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)' },
      { code: '51B', title: 'Patatine fritte' },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.' },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.' },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.' },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.' },
      { code: '56', title: 'Ravioli di carne' },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.' },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).' },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.' },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.' },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.' },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.' },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.' },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.' },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.' },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.' },
      { code: '70', title: 'Calamari fritti' },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.' },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta saltata',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.' },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.' },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.' },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.' },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.' },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.' },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.' },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.' },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.' },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.' },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa saté.' },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.' },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.' },
      { code: '85', title: 'Pollo in salsa al limone' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.' },
      { code: '87', title: 'Pollo con le mandorle' },
      { code: '88', title: 'Gamberi in salsa al limone' },
      { code: '90', title: 'Gamberi sale e pepe' },
    ],
  },
]

export const ayceMenuInfo = {
  formulaPrice: '28,00 €',
  childPrice: '13,00 €',
  childNote: 'fino a 130 cm',
  note: 'Coperto escluso. I dolci e le bevande sono esclusi dalla formula All You Can Eat.',
}

export const ayceMenuSections: DishSection[] = [
  {
    key: 'speciali',
    title: 'Piatti Speciali',
    subtitle: '1 piatto a scelta a persona — incluso nella formula',
    items: [
      { code: 'F1', title: 'Special tris tartare', description: 'Tris di tartare (salmone, tonno e branzino) con gambero rosso di Mazara con salsa ponzu.' },
      { code: 'F2', title: 'Tonno scottato', description: 'Tonno scottato con salsa ponzu.' },
      { code: 'F4', title: 'Ostriche' },
      { code: 'F6', title: 'Mini wok spicy (2 pz.)', description: 'Piccola padella con gamberi, verdure miste, piccante.' },
    ],
  },
  {
    key: 'carpacci-speciali',
    title: 'Carpacci Speciali',
    subtitle: '1 carpaccio a scelta a persona — incluso nella formula',
    items: [
      { code: 'C1', title: 'Carpaccio capesante', description: 'Carpaccio di capesante, lime e salsa sesamo.' },
      { code: 'C2', title: 'Carpaccio mix', description: 'Carpaccio misto con lime e salsa ponzu (gambero rosso, salmone, tonno, gambero amaebi, capesante).' },
      { code: 'C3', title: 'Carpaccio salmone', description: 'Carpaccio di salmone, mango, avocado, salsa ponzu e salsa mango.' },
      { code: 'C4', title: 'Carpaccio amaebi', description: 'Carpaccio di gambero crudo e salsa citronette.' },
    ],
  },
  {
    key: 'tapas',
    title: 'Nippo Tapas, Bao e Yam Rolls',
    items: [
      { code: '102', title: 'Spiedino di pollo fritto', description: 'Con salsa spicy fusion.' },
      { code: '103', title: 'Tacos chicken spicy', description: 'Con pollo fritto, insalata e maionese piccante.' },
      { code: '104', title: 'Tacos spicy', description: 'Con spicy salmon.' },
      { code: '105', title: 'Bao (1 pz a persona)', description: 'Panino ripieno con carne di maiale.' },
      { code: '106', title: 'Yam rolls (1 pz a persona)', description: 'Involtini di patate dolci con cuore di tè matcha.' },
      { code: '107', title: 'Crispy salmon spicy (1 pz a persona)', description: 'Con spicy salmon, philadelphia e salsa teriyaki.' },
      { code: '108', title: 'Sashimi salmone (1 pz a persona)', description: 'Sashimi salmone con salsa ponzu.' },
    ],
  },
  {
    key: 'poke',
    title: 'Pokè',
    items: [
      { code: '01A', title: 'Poke salmone', description: 'Salmone, avocado, edamame, pistacchi e salsa di sesamo.' },
      { code: '01B', title: 'Poke gamberi', description: 'Gamberi cotti, edamame, avocado con sopra cipolla fritta e salsa teriyaki.' },
    ],
  },
  {
    key: 'usuzukuri',
    title: 'Usuzukuri',
    subtitle: 'Carpacci e Tartare',
    items: [
      { code: '03', title: 'Tartare di salmone' },
      { code: '03A', title: 'Tartare mango', description: 'Salmone, mango.' },
      { code: '03B', title: 'Tartare black mango', description: 'Riso venere, salmone, mango.' },
      { code: '04', title: 'Tartare di tonno' },
      { code: '05A', title: 'Involtino salmone e gamberi', description: 'Involtino di salmone con gamberi e philadelphia.' },
    ],
  },
  {
    key: 'hosomaki',
    title: 'Hosomaki',
    subtitle: 'Involtino di riso con alga esterna',
    items: [
      { code: '06', title: 'Hoso fritto (4 pz.)', description: 'Involtino fritto con salmone grigliato e philadelphia.' },
      { code: '06A', title: 'Hoso mango (8 pz.)', description: 'Involtino fritto con salmone, mango e philadelphia.' },
      { code: '07', title: 'Sake (8 pz.)', description: 'Salmone.' },
      { code: '08', title: 'Tekka (8 pz.)', description: 'Tonno.' },
      { code: '08A', title: 'Ebi (8 pz.)', description: 'Gambero cotto.' },
      { code: '08B', title: 'Miura (8 pz.)', description: 'Salmone grigliato e philadelphia.' },
    ],
  },
  {
    key: 'nighiri',
    title: 'Nighiri',
    subtitle: '2 pz.',
    items: [
      { code: '09', title: 'Salmone' },
      { code: '09A', title: 'Salmone scottato', description: 'Salmone scottato, philadelphia.' },
      { code: '09B', title: 'Nighiri caramellato', description: 'Salmone scottato caramellato.' },
      { code: '09C', title: 'Nighiri mandorle', description: 'Salmone scottato, mandorle, salsa maionese piccante.' },
      { code: '10', title: 'Avocado' },
      { code: '10A', title: 'Nighiri pistacchio', description: 'Salmone scottato, pistacchio, salsa al pistacchio.' },
      { code: '11', title: 'Gamberi cotti' },
      { code: '11A', title: 'Gamberi crudi' },
      { code: '11B', title: 'Salmone e salsa avocado' },
      { code: '12', title: 'Tonno' },
    ],
  },
  {
    key: 'temaki',
    title: 'Temaki',
    subtitle: 'Cono di riso, 1 pz.',
    items: [
      { code: '13', title: 'Sake avocado', description: 'Salmone, avocado.' },
      { code: '13A', title: 'Vegetariano', description: 'Avocado, philadelphia.' },
      { code: '14', title: 'Maguro avocado', description: 'Tonno, avocado.' },
      { code: '15', title: 'California', description: 'Surimi, avocado, maionese.' },
      { code: '16', title: 'Spicy salmon', description: 'Salmone piccante.' },
      { code: '17', title: 'Spicy tuna', description: 'Tonno piccante.' },
      { code: '18', title: 'Temaki ebiten', description: 'Gambero fritto e maionese.' },
      { code: '19', title: 'Temaki miura', description: 'Salmone cotto e philadelphia.' },
    ],
  },
  {
    key: 'uramaki',
    title: 'Uramaki',
    subtitle: 'Rotolo con riso esterno, 4 pz.',
    items: [
      { code: '20', title: 'Salmon fresh', description: 'Salmone con sopra salmone e philadelphia.' },
      { code: '20A', title: 'Tiger fresh', description: 'Gambero fritto con sopra salmone e maionese.' },
      { code: '21', title: 'Sake avocado', description: 'Salmone, avocado.' },
      { code: '21A', title: 'Sake philadelphia', description: 'Salmone, philadelphia.' },
      { code: '21B', title: 'Salmon cream', description: 'Rotolo di riso con salmone cotto, philadelphia, con sopra bacon e salsa cheddar.' },
      { code: '21C', title: 'Salmone fritto', description: 'Rotolo di riso con salmone fritto, philadelphia, riccioli di tempura.' },
      { code: '22', title: 'Mango roll', description: 'Rotolo di riso con salmone, philadelphia, mango.' },
      { code: '22A', title: 'Vegetariano', description: 'Avocado, mango, philadelphia.' },
      { code: '23', title: 'Salmone special', description: 'Salmone, philadelphia, con sopra crema di avocado e scaglie di mandorle.' },
      { code: '24', title: 'Chicken roll', description: 'Pollo, maionese piccante e granella di cipolla fritta.' },
      { code: '25', title: 'Spicy salmon', description: 'Salmone piccante, maionese piccante, alghe piccanti.' },
      { code: '26', title: 'Spicy tuna', description: 'Tonno piccante, alghe piccanti.' },
      { code: '27', title: 'Miura maki', description: 'Salmone alla griglia, philadelphia.' },
      { code: '27A', title: 'Chicken cheddar', description: 'Pollo fritto, con bacon e salsa cheddar.' },
      { code: '28', title: 'Ebiten', description: 'Gambero fritto, maionese.' },
      { code: '28A', title: 'Crispy King', description: 'Gamberi fritti, avocado, con sopra spicy salmon e salsa cheddar.' },
      { code: '28C', title: 'White royal salmon', description: 'Salmone crudo, avocado, philadelphia, con sopra salmone.' },
      { code: '29', title: 'Ebi roll', description: 'Gamberi cotti, avocado, riccioli di tempura, guarnito con pasta fillo.' },
      { code: '30', title: 'Tiger roll', description: 'Gamberi fritti, maionese con sopra salmone e pasta fillo.' },
      { code: '30A', title: 'Flambé', description: 'Gamberi fritti, ricoperti con salmone scottato e salsa teriyaki.' },
      { code: '30B', title: 'Special tiger roll', description: 'Gamberi fritti, avocado, philadelphia e patate fritte.' },
      { code: '30C', title: 'White tiger roll', description: 'Gambero fritto, avocado, philadelphia, con sopra salmone.' },
      { code: '31', title: 'Dragon roll', description: 'Gamberi fritti, con sopra maionese piccante e avocado.' },
      { code: '31A', title: 'Rainbow roll', description: 'Salmone con sopra pesce misto.' },
      { code: '31B', title: 'Esotico', description: 'Gambero cotto, philadelphia, avocado con sopra pistacchi.' },
    ],
  },
  {
    key: 'uramaki-venere',
    title: 'Uramaki Venere',
    subtitle: 'Rotolo con riso venere, 4 pz.',
    items: [
      { code: '110', title: 'Black tiger', description: 'Riso venere, gambero fritto, avocado, philadelphia, con sopra salmone.' },
      { code: '111', title: 'Black royal salmon', description: 'Riso venere, salmone crudo, avocado, philadelphia, con sopra salmone.' },
      { code: '112', title: 'Black miura', description: 'Riso venere con salmone cotto, philadelphia e granella di cipolla fritta.' },
      { code: '113', title: 'Black ebiten special', description: 'Riso venere, gambero fritto, maionese, granella di pistacchi.' },
    ],
  },
  {
    key: 'futomaki',
    title: 'Futomaki',
    subtitle: 'Rotolo grande con alga esterna',
    items: [
      { code: '32', title: 'Sake avocado (6 pz.)', description: 'Rotolo di riso con salmone crudo, avocado.' },
      { code: '33', title: 'California (6 pz.)', description: 'Rotolo di riso con surimi fritto, avocado, maionese.' },
      { code: '34', title: 'Ebiten (6 pz.)', description: 'Rotolo di riso con tempura di gambero, maionese.' },
      { code: '35', title: 'Futomaki fritto (4 pz.)', description: 'Rotolo di riso fritto con salmone cotto e pasta fillo.' },
    ],
  },
  {
    key: 'gunkan',
    title: 'Gunkan',
    subtitle: "Pallina di riso con pesce all'esterno, 2 pz.",
    items: [
      { code: '36', title: 'Zucchina out', description: 'Polpetta di riso avvolta da zucchina con salsa avocado, leggermente piccante.' },
      { code: '36A', title: 'Tuna out', description: 'Polpetta di riso, maionese, avvolta da tonno.' },
      { code: '37A', title: 'Sake out', description: 'Polpetta di riso, maionese, avvolta da salmone.' },
      { code: '37B', title: 'Bianco', description: "Polpetta di riso avvolta all'esterno da salmone e ricoperta con philadelphia e salsa teriyaki." },
      { code: '37C', title: 'Zucchine e gamberetti', description: "Polpetta di riso avvolta all'esterno da zucchina e ricoperta con tartare di gamberetti." },
      { code: '37D', title: 'Gunkan amaebi', description: 'Polpetta di riso avvolta da salmone, ricoperta da gamberi crudi.' },
      { code: '38', title: 'Gunkan pistacchio', description: 'Polpetta di riso avvolta da salmone scottato, con sopra philadelphia, granelle di pistacchio.' },
      { code: '39', title: 'Gunkan mango', description: 'Polpetta di riso avvolta da salmone, con sopra mango, philadelphia e salsa mango.' },
    ],
  },
  {
    key: 'chirashi',
    title: 'Chirashi e Sashimi',
    items: [
      { code: '40', title: 'Gohan', description: 'Riso bianco.' },
      { code: '40B', title: 'Sake don', description: 'Riso bianco con carpaccio di salmone.' },
      { code: '40C', title: 'Tekka don', description: 'Riso bianco con carpaccio di tonno.' },
      { code: '41', title: 'Sashimi moriawase', description: 'Sashimi misto.' },
      { code: '42', title: 'Sake sashimi', description: 'Salmone.' },
    ],
  },
  {
    key: 'zensai',
    title: 'Zensai',
    subtitle: 'Antipasti',
    items: [
      { code: '48', title: 'Polpette di takoyaki', description: 'Polpette con polpo, patate fritte e salsa teriyaki.' },
      { code: '49', title: 'Alette di pollo' },
      { code: '50', title: 'Nuvole di gamberi' },
      { code: '50A', title: 'Crocchette di patate', description: 'Con bacon e cheddar.' },
      { code: '50B', title: 'Stick di gamberi (2 pz.)' },
      { code: '51', title: 'Pane orientale al vapore', description: 'Con latte condensato (2 pz.).' },
      { code: '51A', title: 'Pane orientale fritto (2 pz.)' },
      { code: '51B', title: 'Patatine fritte' },
      { code: '51C', title: 'Pane dolce al vapore', description: 'Pane orientale al vapore con crema all\'uovo (2 pz.).' },
      { code: '52', title: 'Miso', description: 'Zuppa di soia.' },
      { code: '53', title: 'Edamame', description: 'Fagioli di soia verdi bolliti.' },
      { code: '54', title: 'Ebi shumai', description: 'Ravioli di gamberi al nero di seppia.' },
      { code: '54B', title: 'Ravioli di cristallo', description: 'Ravioli di gamberi.' },
      { code: '55', title: 'Harumaki', description: 'Involtino con verdure.' },
      { code: '56', title: 'Ravioli di carne' },
      { code: '56A', title: 'Ravioli brasati', description: 'Ravioli di pollo brasati.' },
      { code: '56B', title: 'Ravioli di pollo fritto' },
      { code: '57', title: 'Fagottino orientale', description: 'Fagottino con tartare di gamberi (4 pz.).' },
      { code: '58', title: 'Moyashi itame', description: 'Germogli di soia saltati.' },
      { code: '59', title: 'Pak choi', description: 'Verdura cotta.' },
      { code: '60A', title: 'Cocktail di gamberi in salsa rosa' },
    ],
  },
  {
    key: 'salad',
    title: 'Salad',
    subtitle: 'Insalata',
    items: [
      { code: '61', title: 'Yasai salad', description: 'Insalata mista.' },
      { code: '62', title: 'Kaisen salad', description: 'Insalata con carpaccio misto.' },
      { code: '62A', title: 'Insalata esotica', description: 'Insalata mista, mango, avocado, salsa mango.' },
      { code: '63', title: 'Japanese salad', description: 'Insalata di alghe piccanti.' },
      { code: '64', title: 'Wakame', description: 'Insalata di alghe.' },
      { code: '65', title: 'Kaisen wakame', description: 'Insalata di alghe con carpaccio misto.' },
    ],
  },
  {
    key: 'agemono',
    title: 'Agemono',
    subtitle: 'Fritto',
    items: [
      { code: '67', title: 'Yasai tempura', description: 'Cipolla, carote e zucchine.' },
      { code: '68', title: 'Ebi tempura', description: 'Gamberi.' },
      { code: '69', title: 'Tori no karaaghe', description: 'Pollo fritto.' },
      { code: '70', title: 'Calamari fritti' },
    ],
  },
  {
    key: 'wok',
    title: 'Wok',
    subtitle: 'Pasta e riso saltati',
    items: [
      { code: '71', title: 'Pasta udon', description: 'Pasta di grano saltata con verdure e gamberi.' },
      { code: '72', title: 'Yasai meshi', description: 'Riso saltato con verdure e uova.' },
      { code: '73', title: 'Riso alla thailandese', description: 'Riso speziato con verdure, uova e gamberi.' },
      { code: '74', title: 'Noodles', description: 'Spaghetti di riso con verdure e uova.' },
      { code: '75', title: 'Noodles Singapore', description: 'Spaghetti di riso con gamberi, uova, verdure.' },
      { code: '76', title: 'Riso alla cantonese', description: 'Riso con verdure, uova, prosciutto e salsa di soia.' },
      { code: '76A', title: 'Gnocchi di riso', description: 'Gnocchi di riso con pollo e verdure.' },
      { code: '77', title: 'Spaghetti di soia', description: 'Con verdure e gamberi.' },
      { code: '77A', title: 'Ramen in brodo', description: 'Gamberi, verdure e frittata.' },
      { code: '77B', title: 'Spaghetti di soia piccanti', description: 'Spaghetti di soia con pollo e peperoni.' },
    ],
  },
  {
    key: 'teppanyaki',
    title: 'Cooking / Teppanyaki',
    subtitle: 'Piatti cucinati in padella',
    items: [
      { code: '78', title: 'Ooebi no shioyaki', description: 'Gamberoni alla griglia.' },
      { code: '79', title: 'Salmone wok', description: 'Salmone cotto con verdure.' },
      { code: '80', title: 'Yaki ebi', description: 'Spiedini di gamberi.' },
      { code: '81', title: 'Yaki tori', description: 'Spiedini di pollo in salsa saté.' },
      { code: '81A', title: 'Pollo alla griglia', description: 'Con salsa teriyaki.' },
      { code: '82', title: 'Salmone scottato', description: 'Con crosta di sesamo.' },
      { code: '83', title: 'Salmone alla griglia', description: 'Con salsa teriyaki.' },
      { code: '85', title: 'Pollo in salsa al limone' },
      { code: '86', title: 'Pollo in salsa thailandese', description: 'Pollo e verdure in salsa thai.' },
      { code: '87', title: 'Pollo con le mandorle' },
      { code: '88', title: 'Gamberi in salsa al limone' },
      { code: '89', title: 'Gamberi in salsa thailandese', description: 'Gamberi e verdure in salsa thai.' },
      { code: '90', title: 'Gamberi sale e pepe' },
      { code: '92', title: 'Gamberoni in salsa piccante' },
      { code: '93', title: 'Gamberi in salsa piccante' },
      { code: '95', title: 'Pollo in salsa piccante' },
      { code: '97', title: 'Anatra alla pechinese' },
    ],
  },
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
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { takeAwayCatalog } from '../data/takeAwayCatalog'
import { trackEvent } from '../lib/tracking'
import { useMenuOrderCart } from '../lib/useMenuOrderCart'

type TakeAwayProduct = {
  slug: string
  title: string
  description?: string
  price: string
  image: string
}

const cleanPrice = (value: string) => value.replace(/&euro;/gi, 'EUR').replace(/\s+/g, ' ').trim()

const takeAwayProducts: TakeAwayProduct[] = takeAwayCatalog.map((item) => ({
  slug: item.slug,
  title: item.title,
  description: item.description,
  price: cleanPrice(item.price),
  image: item.image || item.remoteImage,
}))

const CATEGORY_ORDER = [
  'Poke',
  'Tartare',
  'Hosomaki & Involtini',
  'Nigiri',
  'Temaki',
  'Uramaki',
  'Futomaki',
  'Gunkan',
  'Don & Sashimi',
  'Antipasti',
  'Insalate',
  'Tempura & Fritture',
  'Noodles & Riso',
  'Wok & Grigliati',
  'Uramaki Black',
  'Box',
  'Dessert',
]

function getCategoryFromProduct(title: string): string {
  if (/\bbox\b/i.test(title)) return 'Box'
  const match = title.match(/^(\d+)/)
  if (!match) return 'Dessert'
  const n = parseInt(match[1], 10)
  if (n <= 2) return 'Poke'
  if (n <= 4) return 'Tartare'
  if (n <= 8) return 'Hosomaki & Involtini'
  if (n <= 12) return 'Nigiri'
  if (n <= 19) return 'Temaki'
  if (n <= 31) return 'Uramaki'
  if (n <= 35) return 'Futomaki'
  if (n <= 39) return 'Gunkan'
  if (n <= 42) return 'Don & Sashimi'
  if (n <= 57) return 'Antipasti'
  if (n <= 65) return 'Insalate'
  if (n <= 70) return 'Tempura & Fritture'
  if (n <= 77) return 'Noodles & Riso'
  if (n <= 97) return 'Wok & Grigliati'
  if (n <= 109) return 'Antipasti'
  if (n <= 113) return 'Uramaki Black'
  return 'Dessert'
}

const productsByCategory = takeAwayProducts.reduce<Record<string, TakeAwayProduct[]>>((acc, item) => {
  const cat = getCategoryFromProduct(item.title)
  if (!acc[cat]) acc[cat] = []
  acc[cat].push(item)
  return acc
}, {})

const presentCategories = CATEGORY_ORDER.filter((cat) => productsByCategory[cat]?.length)

export function MenuTakeAwayPage() {
  const { cart, addItem } = useMenuOrderCart()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [recentlyAdded, setRecentlyAdded] = useState<Record<string, boolean>>({})

  const activeProduct = activeIndex !== null ? takeAwayProducts[activeIndex] : null

  const openModal = (index: number) => setActiveIndex(index)
  const closeModal = () => setActiveIndex(null)
  const showPrevious = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex - 1 + takeAwayProducts.length) % takeAwayProducts.length)
  }
  const showNext = () => {
    if (activeIndex === null) return
    setActiveIndex((activeIndex + 1) % takeAwayProducts.length)
  }

  const handleAddToCart = (item: TakeAwayProduct) => {
    addItem(item.title)
    trackEvent('takeaway_menu_add_to_cart', { item: item.slug })
    setRecentlyAdded((prev) => ({ ...prev, [item.slug]: true }))
    window.setTimeout(() => {
      setRecentlyAdded((prev) => ({ ...prev, [item.slug]: false }))
    }, 900)
  }

  useEffect(() => {
    if (activeIndex === null) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeIndex])

  return (
    <main className="page-shell page-shell--inner">
      <header className="menu-formula-header">
        <p className="section-kicker">Take Away</p>
        <h1>Menu con prezzi</h1>
        <p className="menu-formula-header__note">Scegli i piatti, aggiungili al carrello e poi completa l'ordine al checkout.</p>
      </header>

      <nav className="menu-category-nav" aria-label="Categorie menu">
        {presentCategories.map((cat) => (
          <a key={cat} href={`#cat-${cat.replace(/[^a-z0-9]/gi, '-')}`} className="menu-category-nav__tab">
            {cat}
          </a>
        ))}
      </nav>

      {presentCategories.map((cat) => (
        <section key={cat} id={`cat-${cat.replace(/[^a-z0-9]/gi, '-')}`} className="menu-category-section">
          <div className="menu-category-section__header">
            <h2>{cat}</h2>
          </div>
          <div className="menu-item-grid">
            {productsByCategory[cat].map((item) => {
              const index = takeAwayProducts.indexOf(item)
              return (
                <article key={item.slug} className="menu-item-card">
                  <img className="menu-item-card__image" src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  <h3 className="menu-item-card__title">{item.title}</h3>
                  {item.description && <p className="menu-item-card__desc">{item.description}</p>}
                  <span className="menu-item-card__price">{item.price}</span>
                  <button
                    type="button"
                    className={recentlyAdded[item.slug] ? 'button button--primary menu-item-card__cta menu-item-card__cta--added' : 'button button--primary menu-item-card__cta'}
                    onClick={() => handleAddToCart(item)}
                  >
                    {recentlyAdded[item.slug]
                      ? `Aggiunto ✓ (${cart[item.title] ?? 1})`
                      : cart[item.title]
                        ? `Aggiungi al carrello (${cart[item.title]})`
                        : 'Aggiungi al carrello'}
                  </button>
                  <button type="button" className="button button--ghost menu-item-card__details" onClick={() => openModal(index)}>
                    Vedi descrizione
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      ))}

      {activeProduct && (
        <div className="product-modal-backdrop" role="dialog" aria-modal="true" aria-label={`Dettagli ${activeProduct.title}`} onClick={closeModal}>
          <button type="button" className="product-modal__nav" aria-label="Prodotto precedente" onClick={(e) => { e.stopPropagation(); showPrevious() }}>
            ←
          </button>
          <article className="product-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="product-modal__close" aria-label="Chiudi" onClick={closeModal}>
              X
            </button>
            <img className="product-modal__image" src={activeProduct.image} alt={activeProduct.title} loading="lazy" decoding="async" />
            <p className="section-kicker">Dettaglio prodotto</p>
            <h3 className="product-modal__title">{activeProduct.title}</h3>
            <p className="product-modal__price">{activeProduct.price}</p>
            <p className="product-modal__desc">{activeProduct.description || 'Descrizione non disponibile al momento.'}</p>
          </article>
          <button type="button" className="product-modal__nav" aria-label="Prodotto successivo" onClick={(e) => { e.stopPropagation(); showNext() }}>
            →
          </button>
        </div>
      )}

      <div className="menu-dish-back">
        <Link className="button button--ghost" to="/menu">← Torna al menu</Link>
      </div>
    </main>
  )
}

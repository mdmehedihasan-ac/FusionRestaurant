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

export function MenuTakeAwayPage() {
  const { cart, addItem } = useMenuOrderCart()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [recentlyAdded, setRecentlyAdded] = useState<Record<string, boolean>>({})

  const activeProduct = activeIndex !== null ? takeAwayProducts[activeIndex] : null

  const openModal = (index: number) => setActiveIndex(index)
  const closeModal = () => setActiveIndex(null)
  const showPrevious = () => {
    if (activeIndex === null) {
      return
    }
    setActiveIndex((activeIndex - 1 + takeAwayProducts.length) % takeAwayProducts.length)
  }
  const showNext = () => {
    if (activeIndex === null) {
      return
    }
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
    if (activeIndex === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
      }
      if (event.key === 'ArrowLeft') {
        showPrevious()
      }
      if (event.key === 'ArrowRight') {
        showNext()
      }
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

      <section className="menu-section">
        <div className="menu-section__heading">
          <h2>Menu completo Take Away</h2>
          <span className="menu-section__subtitle">Prodotti singoli con dati aggiornati e immagini locali</span>
        </div>

        <div className="menu-item-grid">
          {takeAwayProducts.map((item, index) => (
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
          ))}
        </div>
      </section>

      {activeProduct && (
        <div className="product-modal-backdrop" role="dialog" aria-modal="true" aria-label={`Dettagli ${activeProduct.title}`} onClick={closeModal}>
          <article className="product-modal" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="product-modal__close" aria-label="Chiudi" onClick={closeModal}>
              X
            </button>
            <button type="button" className="product-modal__nav product-modal__nav--prev" aria-label="Prodotto precedente" onClick={showPrevious}>
              ←
            </button>
            <button type="button" className="product-modal__nav product-modal__nav--next" aria-label="Prodotto successivo" onClick={showNext}>
              →
            </button>

            <img className="product-modal__image" src={activeProduct.image} alt={activeProduct.title} loading="lazy" decoding="async" />
            <p className="section-kicker">Dettaglio prodotto</p>
            <h3 className="product-modal__title">{activeProduct.title}</h3>
            <p className="product-modal__price">{activeProduct.price}</p>
            <p className="product-modal__desc">{activeProduct.description || 'Descrizione non disponibile al momento.'}</p>
          </article>
        </div>
      )}

      <div className="menu-dish-back">
        <Link className="button button--ghost" to="/menu">← Torna al menu</Link>
      </div>
    </main>
  )
}

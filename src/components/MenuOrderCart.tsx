import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { menuCategories } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'
import { useMenuOrderCart } from '../lib/menuOrderCart'

export function MenuOrderCart() {
  const location = useLocation()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { cart, addItem, decreaseItem, removeItem, clearCart } = useMenuOrderCart()

  const isMenuRoute = location.pathname === '/menu' || location.pathname.startsWith('/menu/')
  if (!isMenuRoute) {
    return null
  }

  const entries = menuCategories
    .filter((item) => (cart[item.title] ?? 0) > 0)
    .map((item) => ({
      title: item.title,
      qty: cart[item.title],
      priceRange: item.priceRange ?? 'Prezzo su richiesta',
      image: item.image,
    }))

  const itemsCount = entries.reduce((total, item) => total + item.qty, 0)

  return (
    <>
      <button
        type="button"
        className="button button--primary cart-fab"
        onClick={() => setDrawerOpen((open) => !open)}
      >
        Carrello ({itemsCount})
      </button>

      <button
        type="button"
        className={drawerOpen ? 'cart-drawer-backdrop cart-drawer-backdrop--open' : 'cart-drawer-backdrop'}
        aria-label="Chiudi carrello"
        onClick={() => setDrawerOpen(false)}
      />

      <aside className={drawerOpen ? 'cart-drawer cart-drawer--open' : 'cart-drawer'} aria-label="Carrello menu">
        <div className="cart-drawer__head">
          <div>
            <h2>Il tuo ordine</h2>
            <p className="page-lead">Aggiungi prodotti e invia tutto su WhatsApp.</p>
          </div>
          <button type="button" className="cart-drawer__close" onClick={() => setDrawerOpen(false)}>
            x
          </button>
        </div>

        <div className="cart-list">
          {entries.length === 0 && <p className="cart-empty">Il carrello e vuoto.</p>}
          {entries.map((item) => (
            <div key={item.title} className="cart-row">
              <div className="cart-row__main">
                <img className="cart-row__thumb" src={item.image} alt={item.title} loading="lazy" />
                <div>
                  <strong>{item.title}</strong>
                  <p className="cart-row__meta">{item.priceRange}</p>
                </div>
              </div>
              <div className="cart-row__controls">
                <button type="button" className="cart-row__btn" onClick={() => decreaseItem(item.title)}>
                  -
                </button>
                <span className="cart-row__qty">{item.qty}</span>
                <button type="button" className="cart-row__btn" onClick={() => addItem(item.title)}>
                  +
                </button>
                <button type="button" className="cart-row__btn cart-row__btn--danger" onClick={() => removeItem(item.title)}>
                  x
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="stack-actions">
          <Link
            className="button button--primary"
            to="/checkout"
            onClick={() => trackEvent('menu_cart_whatsapp_click', { items: itemsCount })}
          >
            Checkout
          </Link>
          <button type="button" className="button button--ghost" onClick={clearCart}>
            Svuota
          </button>
          <button type="button" className="button button--ghost" onClick={() => setDrawerOpen(false)}>
            Chiudi
          </button>
        </div>
      </aside>
    </>
  )
}

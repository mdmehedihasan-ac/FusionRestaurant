import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { menuCategories } from '../data/siteContent'
import { takeAwayCatalog } from '../data/takeAwayCatalog'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { getEntriesCount, getShopCartEntries } from '../lib/cartEntries'
import { trackEvent } from '../lib/tracking'
import { useMenuOrderCart } from '../lib/useMenuOrderCart'
import { slugify } from '../lib/slugify'

const cleanPrice = (value: string) => value.replace(/&euro;/gi, 'EUR').replace(/\s+/g, ' ').trim()

export function ShopPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { cart, addItem, decreaseItem, removeItem } = useMenuOrderCart()

  const cartEntries = useMemo(() => getShopCartEntries(cart), [cart])
  const itemsCount = getEntriesCount(cartEntries)

  const subtotal = useMemo(
    () => cartEntries.reduce((total, item) => total + (item.unitPrice ?? 0) * item.qty, 0),
    [cartEntries],
  )

  const checkoutMessage = useMemo(() => {
    if (cartEntries.length === 0) {
      return 'Ciao, vorrei informazioni sul vostro shop.'
    }

    const lines = cartEntries.map((item) => `- ${item.qty}x ${item.title} (${item.priceRange})`)
    return `Ciao, vorrei ordinare:\n${lines.join('\n')}\nTotale stimato dal catalogo: EUR ${subtotal.toFixed(2)}.`
  }, [cartEntries, subtotal])

  const addToCart = (name: string) => {
    addItem(name)
    setDrawerOpen(true)
    trackEvent('shop_add_to_cart', { product: name })
  }

  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero page-hero--split">
        <div>
          <p className="section-kicker">Catalogo piatti</p>
          <h1>I nostri piatti, da scoprire e ordinare online.</h1>
          <p className="page-lead">
            Sfoglia le categorie principali, aggiungi al carrello e invia l’ordine via WhatsApp. Pronto in pochi minuti per il ritiro o la consegna.
          </p>
        </div>
        <article className="detail-panel detail-panel--accent">
          <p className="section-kicker">Ordine rapido</p>
          <h2>Scegli, aggiungi e ordina in pochi tap.</h2>
          <p>Seleziona i piatti che vuoi, imposta le quantità e invia il riepilogo direttamente su WhatsApp.</p>
          <Link className="button button--primary" to="/menu">
            Apri menu completo
          </Link>
        </article>
      </section>

      <section className="shop-grid" aria-label="Prodotti shop">
        {takeAwayCatalog.map((product) => (
          <article key={product.slug} className="shop-card">
            <img src={product.image || product.remoteImage} alt={product.title} loading="lazy" decoding="async" />
            <p className="section-kicker">Take Away</p>
            <h3>{product.title}</h3>
            <p>{cleanPrice(product.price)}</p>
            {product.description && <p className="shop-card__desc">{product.description}</p>}
            <div className="stack-actions">
              <button type="button" className="button button--primary" onClick={() => addToCart(product.title)}>
                Aggiungi
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="menu-grid">
        {menuCategories.map((item) => (
          <article key={item.title} className="menu-card">
            <div className="img-ph" role="img" aria-label={item.title}>img</div>
            <div className="menu-card__body">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="menu-card__actions">
                <Link className="button button--ghost" to={`/menu/${slugify(item.title)}`}>
                  Apri categoria
                </Link>
                <WhatsAppButton
                  className="button button--primary"
                  message={`Ciao, vorrei ordinare ${item.title}.`}
                  eventName="shop_category_whatsapp_click"
                  eventPayload={{ category: item.title }}
                >
                  Ordina rapido
                </WhatsAppButton>
              </div>
            </div>
          </article>
        ))}
      </section>

      <button type="button" className="button button--primary cart-fab" onClick={() => setDrawerOpen((open) => !open)}>
        Carrello ({itemsCount})
      </button>

      <aside className={drawerOpen ? 'cart-drawer cart-drawer--open' : 'cart-drawer'} aria-label="Carrello">
        <h2>Mini cart</h2>
        <p className="page-lead">Controlla articoli e invia al team per conferma disponibilita.</p>
        <div className="cart-list">
          {cartEntries.length === 0 && <p>Il carrello e vuoto.</p>}
          {cartEntries.map((item) => (
            <div key={item.title} className="cart-row">
              <div>
                <span>
                  {item.qty}x {item.title}
                </span>
                <strong>{item.priceRange}</strong>
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
        <p>
          Totale stimato dal catalogo <strong>EUR {subtotal.toFixed(2)}</strong>
        </p>
        <div className="stack-actions">
          <WhatsAppButton
            className="button button--primary"
            message={checkoutMessage}
            eventName="shop_checkout_whatsapp_click"
            eventPayload={{ items: itemsCount }}
          >
            Invia ordine
          </WhatsAppButton>
          <button type="button" className="button button--ghost" onClick={() => setDrawerOpen(false)}>
            Chiudi
          </button>
        </div>
      </aside>
    </main>
  )
}
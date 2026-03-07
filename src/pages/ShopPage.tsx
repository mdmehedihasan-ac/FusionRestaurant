import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { buildWhatsAppLink, menuCategories, shopProducts } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function ShopPage() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [cart, setCart] = useState<Record<string, number>>({})

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const cartEntries = useMemo(() => {
    return shopProducts
      .filter((product) => (cart[product.name] ?? 0) > 0)
      .map((product) => ({
        ...product,
        qty: cart[product.name],
      }))
  }, [cart])

  const subtotal = useMemo(
    () => cartEntries.reduce((total, item) => total + item.price * item.qty, 0),
    [cartEntries],
  )

  const checkoutMessage = useMemo(() => {
    if (cartEntries.length === 0) {
      return 'Ciao, vorrei informazioni sul vostro shop.'
    }

    const lines = cartEntries.map((item) => `${item.qty}x ${item.name}`)
    return `Ciao, vorrei ordinare: ${lines.join(', ')}. Totale stimato EUR ${subtotal.toFixed(2)}.`
  }, [cartEntries, subtotal])

  const addToCart = (name: string) => {
    setCart((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }))
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
        {shopProducts.map((product) => (
          <article key={product.name} className="shop-card">
            <div className="img-ph" role="img" aria-label={product.name}>img</div>
            <p className="section-kicker">{product.category}</p>
            <h3>{product.name}</h3>
            <p>EUR {product.price.toFixed(2)}</p>
            <div className="stack-actions">
              <button type="button" className="button button--primary" onClick={() => addToCart(product.name)}>
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
                <a
                  className="button button--primary"
                  href={buildWhatsAppLink(`Ciao, vorrei ordinare ${item.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => trackEvent('shop_category_whatsapp_click', { category: item.title })}
                >
                  Ordina rapido
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <button type="button" className="button button--primary cart-fab" onClick={() => setDrawerOpen((open) => !open)}>
        Carrello ({cartEntries.length})
      </button>

      <aside className={drawerOpen ? 'cart-drawer cart-drawer--open' : 'cart-drawer'} aria-label="Carrello">
        <h2>Mini cart</h2>
        <p className="page-lead">Controlla articoli e invia al team per conferma disponibilita.</p>
        <div className="cart-list">
          {cartEntries.length === 0 && <p>Il carrello e vuoto.</p>}
          {cartEntries.map((item) => (
            <div key={item.name} className="cart-row">
              <span>
                {item.qty}x {item.name}
              </span>
              <strong>EUR {(item.qty * item.price).toFixed(2)}</strong>
            </div>
          ))}
        </div>
        <p>
          Totale stimato <strong>EUR {subtotal.toFixed(2)}</strong>
        </p>
        <div className="stack-actions">
          <a
            className="button button--primary"
            href={buildWhatsAppLink(checkoutMessage)}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('shop_checkout_whatsapp_click', { items: cartEntries.length })}
          >
            Invia ordine
          </a>
          <button type="button" className="button button--ghost" onClick={() => setDrawerOpen(false)}>
            Chiudi
          </button>
        </div>
      </aside>
    </main>
  )
}
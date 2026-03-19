import { Link, useParams } from 'react-router-dom'
import { buildWhatsAppLink, menuCategories } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'
import { useMenuOrderCart } from '../lib/useMenuOrderCart'
import { slugify } from '../lib/slugify'

export function MenuItemPage() {
  const { slug } = useParams<{ slug: string }>()
  const { addItem, cart } = useMenuOrderCart()
  const selected = menuCategories.find((item) => slugify(item.title) === slug)

  if (!selected) {
    return (
      <main className="page-shell page-shell--inner">
        <section className="detail-panel">
          <p className="section-kicker">Prodotto non trovato</p>
          <h1>Questo prodotto non esiste nel menu.</h1>
          <div className="stack-actions">
            <Link className="button button--primary" to="/menu">
              Torna al menu
            </Link>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="page-shell page-shell--inner">
      <section className="menu-item-hero">
        <img src={selected.image} alt={selected.title} />
        <div>
          <p className="section-kicker">Scheda prodotto</p>
          <h1>{selected.title}</h1>
          <p className="menu-item-price">{selected.priceRange ?? 'Prezzo su richiesta'}</p>
          <p className="page-lead">{selected.description}</p>
          <div className="pill-row">
            {(selected.allergens ?? []).map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
            {(selected.dietary ?? []).map((tag) => (
              <span key={tag} className="pill">
                {tag}
              </span>
            ))}
          </div>
          <div className="stack-actions">
            <button
              type="button"
              className="button button--primary"
              onClick={() => {
                addItem(selected.title)
                trackEvent('menu_item_add_to_cart', { item: selected.title })
              }}
            >
              Aggiungi al carrello ({cart[selected.title] ?? 0})
            </button>
            <Link className="button button--primary" to="/menu">
              Vai alla categoria
            </Link>
            <a
              className="button button--ghost"
              href={buildWhatsAppLink(`Ciao, vorrei informazioni su ${selected.title}.`)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('menu_whatsapp_click', { item: selected.title })}
            >
              Chiedi su WhatsApp
            </a>
            <Link className="button button--ghost" to="/menu">
              Torna al menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

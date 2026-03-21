import { Link, useParams } from 'react-router-dom'
import { menuCategories } from '../data/siteContent'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { slugify } from '../lib/slugify'

export function MenuItemPage() {
  const { slug } = useParams<{ slug: string }>()
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
            <WhatsAppButton
              className="button button--ghost"
              message={`Ciao, vorrei informazioni su ${selected.title}.`}
              eventName="menu_whatsapp_click"
              eventPayload={{ item: selected.title }}
            >
              Chiedi su WhatsApp
            </WhatsAppButton>
            <Link className="button button--ghost" to="/menu">
              Torna al menu
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

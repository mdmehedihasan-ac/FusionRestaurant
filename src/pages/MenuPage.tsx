import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { buildWhatsAppLink, menuCategories, menuSections } from '../data/siteContent'
import { useMenuOrderCart } from '../lib/useMenuOrderCart'
import { trackEvent } from '../lib/tracking'

const filters = [
  { label: 'Tutto', value: 'all' },
  { label: 'Sushi', value: 'sushi' },
  { label: 'Signature', value: 'signature' },
  { label: 'Cucina calda', value: 'hot' },
  { label: 'Dessert', value: 'dessert' },
] as const

export function MenuPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]['value']>('all')
  const [selectedSection, setSelectedSection] = useState<string>('all')
  const { addItem, cart } = useMenuOrderCart()

  const relatedCategoryBySection: Record<string, string> = {
    'Sushi Box': 'Sushi box',
    'Usuzukuri (Carpacci)': 'Tartare e crudi',
    Nighiri: 'Nigiri e sashimi',
    Uramaki: 'Uramaki signature',
    Sashimi: 'Sashimi moriawase',
    'Zensai (Antipasti)': 'Fagottino orientale',
    Salad: 'Kaisen salad',
    Dolci: 'Souffle al cioccolato',
  }

  const visibleSections = useMemo(() => {
    if (selectedSection === 'all') {
      return menuSections
    }

    return menuSections.filter((section) => section.label === selectedSection)
  }, [selectedSection])

  const visibleItems = useMemo(() => {
    if (filter === 'all') {
      return menuCategories
    }

    return menuCategories.filter((item) => item.group === filter)
  }, [filter])

  return (
    <main className="page-shell page-shell--inner">
      <section className="filter-bar filter-bar--sticky" aria-label="Filtri menu">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            className={filter === item.value ? 'filter-chip filter-chip--active' : 'filter-chip'}
            onClick={() => {
              setFilter(item.value)
              trackEvent('menu_filter_click', { filter: item.value })
            }}
          >
            {item.label}
          </button>
        ))}
      </section>

      <section className="section-block" aria-label="Sezioni complete menu">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Menu completo</p>
            <h2>Tutte le sezioni richieste del menu.</h2>
          </div>
        </div>

        <div className="filter-bar" role="tablist" aria-label="Filtra per sezione menu completa">
          <button
            type="button"
            className={selectedSection === 'all' ? 'filter-chip filter-chip--active' : 'filter-chip'}
            onClick={() => {
              setSelectedSection('all')
              trackEvent('menu_section_filter_click', { section: 'all' })
            }}
          >
            Tutte ({menuSections.length})
          </button>

          {menuSections.map((section) => (
            <button
              key={section.label}
              type="button"
              className={selectedSection === section.label ? 'filter-chip filter-chip--active' : 'filter-chip'}
              onClick={() => {
                setSelectedSection(section.label)
                trackEvent('menu_section_filter_click', { section: section.label })
              }}
            >
              {section.label}
              {section.count ? ` (${section.count})` : ''}
            </button>
          ))}
        </div>

        <div className="panel-grid panel-grid--three">
          {visibleSections.map((section) => {
            const relatedTitle = relatedCategoryBySection[section.label]
            const relatedCategory = relatedTitle
              ? menuCategories.find((item) => item.title === relatedTitle)
              : null

            return (
              <article key={section.label} className="detail-panel">
                <p className="section-kicker">{section.count ? `${section.count} piatti` : 'Sezione menu'}</p>
                <h3>{section.label}</h3>
                {relatedCategory ? (
                  <>
                    <p>{relatedCategory.description}</p>
                    <div className="stack-actions">
                      <button
                        type="button"
                        className="button button--primary"
                        onClick={() => {
                          addItem(relatedCategory.title)
                          trackEvent('menu_section_quick_add', { section: section.label, item: relatedCategory.title })
                        }}
                      >
                        Aggiungi ({cart[relatedCategory.title] ?? 0})
                      </button>
                      <a
                        className="button button--ghost"
                        href={relatedCategory.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackEvent('menu_section_open_original', { section: section.label })}
                      >
                        Apri categoria
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <p>
                      Sezione prevista nel menu completo. Contenuti dettagliati in caricamento nella prossima release catalogo.
                    </p>
                    <a
                      className="button button--primary"
                      href={buildWhatsAppLink(`Ciao, vorrei il menu completo della sezione ${section.label}.`)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Richiedi su WhatsApp
                    </a>
                  </>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="menu-products-grid" aria-label="Prodotti menu">
        {visibleItems.map((item) => (
          <article key={item.title} className="menu-product-card">
            <div className="menu-product-card__media">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="menu-product-card__actions" aria-label={`Azioni ${item.title}`}>
                <Link
                  className="button button--ghost menu-product-card__action menu-product-card__action--view"
                  to="/menu"
                  onClick={() => trackEvent('menu_open_detail', { item: item.title, source: 'view_button' })}
                >
                  Visualizza
                </Link>
                <button
                  type="button"
                  className="button button--primary menu-product-card__action"
                  onClick={() => {
                    addItem(item.title)
                    trackEvent('menu_add_to_cart', { item: item.title })
                  }}
                >
                  Aggiungi ({cart[item.title] ?? 0})
                </button>
              </div>
            </div>
            <h2>{item.title}</h2>
            <p>{item.priceRange ?? 'Prezzo su richiesta'}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
import { useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { menuCategories } from '../data/siteContent'
import { useMenuOrderCart } from '../lib/menuOrderCart'
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
  const { addItem, cart } = useMenuOrderCart()
  const navigate = useNavigate()

  const visibleItems = useMemo(() => {
    if (filter === 'all') {
      return menuCategories
    }

    return menuCategories.filter((item) => item.group === filter)
  }, [filter])

  const slugify = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

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

      <section className="menu-products-grid" aria-label="Prodotti menu">
        {visibleItems.map((item) => {
          const productPath = `/menu/${slugify(item.title)}`
          const openDetail = (source: string) => {
            trackEvent('menu_open_detail', { item: item.title, source })
            navigate(productPath)
          }

          return (
          <article
            key={item.title}
            className="menu-product-card"
            role="link"
            tabIndex={0}
            onClick={() => openDetail('card')}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                openDetail('card_keyboard')
              }
            }}
          >
            <div className="menu-product-card__media">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="menu-product-card__actions" aria-label={`Azioni ${item.title}`}>
                <button
                  type="button"
                  className="button button--ghost menu-product-card__action menu-product-card__action--view"
                  onClick={(event) => {
                    event.stopPropagation()
                    openDetail('view_button')
                  }}
                >
                  Visualizza
                </button>
                <button
                  type="button"
                  className="button button--primary menu-product-card__action"
                  onClick={(event) => {
                    event.stopPropagation()
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
          )
        })}
      </section>
    </main>
  )
}
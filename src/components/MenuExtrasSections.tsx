import type { PricedItem } from '../data/siteContent'
import { findProductMedia } from '../lib/productMedia'

type ExtrasGroup = {
  section: string
  items: PricedItem[]
}

type MenuExtrasSectionsProps = {
  desserts: PricedItem[]
  groups: ExtrasGroup[]
}

export function MenuExtrasSections({ desserts, groups }: MenuExtrasSectionsProps) {
  return (
    <>
      <section className="menu-section menu-section--extras">
        <div className="menu-section__heading">
          <h2>Dolci &amp; Dessert</h2>
          <span className="menu-section__subtitle menu-section__subtitle--excluded">Esclusi dalla formula — a pagamento</span>
        </div>
        <div className="menu-item-grid">
          {desserts.map((item) => {
            const media = findProductMedia({ title: item.title })

            return (
              <article key={item.title} className="menu-item-card menu-item-card--extra">
                {media?.image && <img className="menu-item-card__image" src={media.image} alt={item.title} loading="lazy" decoding="async" />}
                <h3 className="menu-item-card__title">{item.title}</h3>
                {item.description && <p className="menu-item-card__desc">{item.description}</p>}
                <span className="menu-item-card__price">{item.price}</span>
              </article>
            )
          })}
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.section} className="menu-section menu-section--extras">
          <div className="menu-section__heading">
            <h2>{group.section}</h2>
            <span className="menu-section__subtitle menu-section__subtitle--excluded">Escluso dalla formula — a pagamento</span>
          </div>
          <div className="menu-item-grid">
            {group.items.map((item) => {
              const media = findProductMedia({ title: item.title })

              return (
                <article key={item.title} className="menu-item-card menu-item-card--extra">
                  {media?.image && <img className="menu-item-card__image" src={media.image} alt={item.title} loading="lazy" decoding="async" />}
                  <h3 className="menu-item-card__title">{item.title}</h3>
                  {item.description && <p className="menu-item-card__desc">{item.description}</p>}
                  <span className="menu-item-card__price">{item.price}</span>
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </>
  )
}

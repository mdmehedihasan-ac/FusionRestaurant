import { Link } from 'react-router-dom'
import {
  pranzoFerialeInfo,
  pranzoFerialeSections,
  pranzoFestivoDolci,
  pranzoFestivoBevande,
  pranzoFestivoCantina,
} from '../data/siteContent'
import { useMenuOrderCart } from '../lib/menuOrderCart'
import { trackEvent } from '../lib/tracking'

export function MenuPranzoPage() {
  const { addItem, cart } = useMenuOrderCart()

  return (
    <main className="page-shell page-shell--inner">
      <div className="menu-pdf-bar">
        <a className="button button--ghost menu-pdf-bar__btn" href="/menu-pranzo.pdf" download>
          ↓ Scarica il menu PDF
        </a>
      </div>

      <header className="menu-formula-header">
        <p className="section-kicker">Formula Open — Dal Martedì al Venerdì</p>
        <h1>Menu Pranzo</h1>
        <div className="menu-formula-header__prices">
          <span className="menu-formula-header__price">Adulti <strong>{pranzoFerialeInfo.formulaPrice}</strong></span>
          <span className="menu-formula-header__price">Bambini {pranzoFerialeInfo.childNote} <strong>{pranzoFerialeInfo.childPrice}</strong></span>
        </div>
        <p className="menu-formula-header__note">{pranzoFerialeInfo.note}</p>
      </header>

      {pranzoFerialeSections.map((section) => (
        <section key={section.key} className="menu-section">
          <div className="menu-section__heading">
            <h2>{section.title}</h2>
            {section.subtitle && <span className="menu-section__subtitle">{section.subtitle}</span>}
          </div>
          <div className="menu-item-grid">
            {section.items.map((item) => {
              const cartKey = `${item.code}. ${item.title}`
              return (
                <article key={item.code} className="menu-item-card">
                  <span className="menu-item-card__code">{item.code}</span>
                  <h3 className="menu-item-card__title">{item.title}</h3>
                  {item.description && <p className="menu-item-card__desc">{item.description}</p>}
                  <button
                    type="button"
                    className="button button--primary menu-item-card__cta"
                    onClick={() => {
                      addItem(cartKey)
                      trackEvent('menu_add_to_cart', { item: cartKey, page: 'pranzo' })
                    }}
                  >
                    {cart[cartKey] ? `Nel carrello (${cart[cartKey]})` : 'Aggiungi'}
                  </button>
                </article>
              )
            })}
          </div>
        </section>
      ))}

      <section className="menu-section menu-section--extras">
        <div className="menu-section__heading">
          <h2>Dolci &amp; Dessert</h2>
          <span className="menu-section__subtitle menu-section__subtitle--excluded">Esclusi dalla formula — a pagamento</span>
        </div>
        <div className="menu-item-grid">
          {pranzoFestivoDolci.map((item) => (
            <article key={item.title} className="menu-item-card menu-item-card--extra">
              <h3 className="menu-item-card__title">{item.title}</h3>
              {item.description && <p className="menu-item-card__desc">{item.description}</p>}
              <span className="menu-item-card__price">{item.price}</span>
            </article>
          ))}
        </div>
      </section>

      {[...pranzoFestivoBevande, ...pranzoFestivoCantina].map((group) => (
        <section key={group.section} className="menu-section menu-section--extras">
          <div className="menu-section__heading">
            <h2>{group.section}</h2>
            <span className="menu-section__subtitle menu-section__subtitle--excluded">Escluso dalla formula — a pagamento</span>
          </div>
          <div className="menu-item-grid">
            {group.items.map((item) => (
              <article key={item.title} className="menu-item-card menu-item-card--extra">
                <h3 className="menu-item-card__title">{item.title}</h3>
                {item.description && <p className="menu-item-card__desc">{item.description}</p>}
                <span className="menu-item-card__price">{item.price}</span>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="menu-dish-back">
        <Link className="button button--ghost" to="/menu">← Torna al menu</Link>
      </div>
    </main>
  )
}

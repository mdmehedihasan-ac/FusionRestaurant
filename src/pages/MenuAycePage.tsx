import { Link } from 'react-router-dom'
import {
  ayceMenuInfo,
  ayceMenuSections,
  pranzoFestivoDolci,
  pranzoFestivoBevande,
  pranzoFestivoCantina,
} from '../data/siteContent'

export function MenuAycePage() {
  return (
    <main className="page-shell page-shell--inner">
      <div className="menu-pdf-bar">
        <a className="button button--ghost menu-pdf-bar__btn" href="/menu-ayce.pdf" download>
          ↓ Scarica il menu PDF
        </a>
      </div>

      <header className="menu-formula-header">
        <p className="section-kicker">Formula All You Can Eat — Tutti i giorni</p>
        <h1>Cena All You Can Eat</h1>
        <div className="menu-formula-header__prices">
          <span className="menu-formula-header__price">Adulti <strong>{ayceMenuInfo.formulaPrice}</strong></span>
          <span className="menu-formula-header__price">Bambini {ayceMenuInfo.childNote} <strong>{ayceMenuInfo.childPrice}</strong></span>
        </div>
        <p className="menu-formula-header__note">{ayceMenuInfo.note}</p>
      </header>

      {ayceMenuSections.map((section) => (
        <section key={section.key} className="menu-section">
          <div className="menu-section__heading">
            <h2>{section.title}</h2>
            {section.subtitle && <span className="menu-section__subtitle">{section.subtitle}</span>}
          </div>
          <div className="menu-item-grid">
            {section.items.map((item) => (
              <article key={item.code} className="menu-item-card">
                <span className="menu-item-card__code">{item.code}</span>
                <h3 className="menu-item-card__title">{item.title}</h3>
                {item.description && <p className="menu-item-card__desc">{item.description}</p>}
              </article>
            ))}
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

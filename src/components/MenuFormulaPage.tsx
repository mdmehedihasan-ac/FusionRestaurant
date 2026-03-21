import type { DishSection } from '../data/siteContent'
import { findProductMedia } from '../lib/productMedia'

type FormulaInfo = {
  formulaPrice: string
  childPrice: string
  childNote: string
  note: string
}

type MenuFormulaPageProps = {
  pdfHref: string
  kicker: string
  title: string
  info: FormulaInfo
  sections: DishSection[]
}

export function MenuFormulaPage({ pdfHref, kicker, title, info, sections }: MenuFormulaPageProps) {
  return (
    <>
      <div className="menu-pdf-bar">
        <a className="button button--ghost menu-pdf-bar__btn" href={pdfHref} download>
          ↓ Scarica il menu PDF
        </a>
      </div>

      <header className="menu-formula-header">
        <p className="section-kicker">{kicker}</p>
        <h1>{title}</h1>
        <div className="menu-formula-header__prices">
          <span className="menu-formula-header__price">Adulti <strong>{info.formulaPrice}</strong></span>
          <span className="menu-formula-header__price">Bambini {info.childNote} <strong>{info.childPrice}</strong></span>
        </div>
        <p className="menu-formula-header__note">{info.note}</p>
      </header>

      {sections.map((section) => (
        <section key={section.key} className="menu-section">
          <div className="menu-section__heading">
            <h2>{section.title}</h2>
            {section.subtitle && <span className="menu-section__subtitle">{section.subtitle}</span>}
          </div>
          <div className="menu-item-grid">
            {section.items.map((item) => {
              const media = findProductMedia({ code: item.code, title: item.title })

              return (
                <article key={item.code} className="menu-item-card">
                  {media?.image && <img className="menu-item-card__image" src={media.image} alt={item.title} loading="lazy" decoding="async" />}
                  <span className="menu-item-card__code">{item.code}</span>
                  <h3 className="menu-item-card__title">{item.title}</h3>
                  {item.description && <p className="menu-item-card__desc">{item.description}</p>}
                </article>
              )
            })}
          </div>
        </section>
      ))}
    </>
  )
}

import { Link } from 'react-router-dom'
import { aycePlans, ayceRules, buildWhatsAppLink, contacts } from '../data/siteContent'

export function AycePage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero page-hero--split">
        <div>
          <p className="section-kicker">All You Can Eat</p>
          <h1>Mangia quanto vuoi, a pranzo e a cena.</h1>
          <p className="page-lead">
            La formula All You Can Eat di Fusion Restaurant ti permette di scoprire il menu completo in un'unica esperienza: sushi, cucina calda e piatti signature serviti al tavolo a volontà.
          </p>
          <div className="stack-actions">
            <a className="button button--primary" href={contacts.phoneHref}>
              Prenota tavolo
            </a>
            <a
              className="button button--ghost"
              href={buildWhatsAppLink('Ciao, vorrei info sulla formula All You Can Eat.')}
              target="_blank"
              rel="noreferrer"
            >
              Info su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-block" aria-label="Regole anti spreco">
        <details className="ayce-rules-dropdown">
          <summary>Regole AYCE</summary>
          <div className="ayce-rules-dropdown__content">
            {ayceRules.map((rule, index) => (
              <p key={rule}>
                <strong>Regola 0{index + 1}:</strong> {rule}
              </p>
            ))}
          </div>
        </details>
      </section>

      <section className="menu-grid">
        {aycePlans.map((plan) => (
          <article key={plan.title} className="menu-card menu-card--no-image">
            <div className="menu-card__body">
              <p className="section-kicker">{plan.badge}</p>
              <h2>{plan.title}</h2>
              <strong className="ayce-plan-price">{plan.price}</strong>
              <p>{plan.description}</p>
              <div className="menu-card__actions">
                <Link className="button button--ghost" to={plan.formulaHref}>
                  Vedi il menu
                </Link>
                <a
                  className="button button--primary"
                  href={buildWhatsAppLink(`Ciao, voglio prenotare per la formula ${plan.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Prenota ora
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
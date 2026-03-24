import { Link } from 'react-router-dom'
import { ayceOffersByPeriod, aycePlans, ayceRules, buildWhatsAppLink, contacts } from '../data/siteContent'

export function AycePage() {
  const offers = [...ayceOffersByPeriod.pranzo, ...ayceOffersByPeriod.cena]

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
        <article className="detail-panel detail-panel--accent">
          <p className="section-kicker">Il servizio</p>
          <h2>Ordini a turni, sempre freschi e curati</h2>
          <p>
            Ogni turno di ordinazione garantisce freschezza e un servizio attento. Il personale ti guida tra le proposte e cura ogni dettaglio del tuo pasto.
          </p>
        </article>
      </section>

      <section className="offers-grid" aria-label="Offerte AYCE">
        {offers.map((offer) => (
          <article key={offer.title} className="offer-card">
            <p className="section-kicker">{offer.subtitle}</p>
            <h3>{offer.title}</h3>
            <strong>{offer.price}</strong>
            <p>{offer.notes}</p>
          </article>
        ))}
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
          <article key={plan.title} className="menu-card">
            <img src={plan.image} alt={plan.title} loading="lazy" />
            <div className="menu-card__body">
              <h2>{plan.title}</h2>
              <p>{plan.description}</p>
              <div className="menu-card__actions">
                <Link className="button button--ghost" to="/menu">
                  Dettagli formula
                </Link>
                <a
                  className="button button--primary"
                  href={buildWhatsAppLink(`Ciao, voglio prenotare AYCE per ${plan.title}.`)}
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
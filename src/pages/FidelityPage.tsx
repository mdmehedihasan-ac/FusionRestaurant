import { buildWhatsAppLink, contacts, fidelityBenefits, fidelityTiers } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function FidelityPage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero">
        <p className="section-kicker">Fidelity Card</p>
        <h1>Vantaggi esclusivi per i nostri ospiti più fedeli.</h1>
        <p className="page-lead">
          Il programma Fidelity Card di Fusion Restaurant ti premia con benefit concreti: accesso anticipato alle novità, promozioni dedicate e priorità nei momenti più richiesti.
        </p>
      </section>

      <section className="panel-grid panel-grid--two">
        <article className="detail-panel">
          <p className="section-kicker">Vantaggi</p>
          <ul className="feature-list">
            {fidelityBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel detail-panel--accent">
          <p className="section-kicker">Attivazione veloce</p>
          <h2>Parla direttamente con il team</h2>
          <p>
            Nessun form complesso: richiesta rapida, conferma canale preferito e risposta immediata dal ristorante.
          </p>
          <div className="stack-actions">
            <a className="button button--primary" href={buildWhatsAppLink('Ciao, vorrei aderire alla Fidelity Card Fusion.')} target="_blank" rel="noreferrer">
              Attiva via WhatsApp
            </a>
            <a className="button button--ghost" href={contacts.phoneHref}>
              Chiama il ristorante
            </a>
          </div>
        </article>
      </section>

      <section className="tiers-grid" aria-label="Livelli fidelity">
        {fidelityTiers.map((tier) => (
          <article key={tier.name} className="tier-card">
            <p className="section-kicker">Tier</p>
            <h3>{tier.name}</h3>
            <p>{tier.benefit}</p>
            <div className="tier-meter" aria-label={`Progress tier ${tier.name}`}>
              <span style={{ width: `${tier.progress}%` }} />
            </div>
          </article>
        ))}
      </section>

      <section className="cta-banner">
        <div>
          <p className="section-kicker">Join now</p>
          <h2>Passa al tuo livello successivo in modo guidato.</h2>
        </div>
        <div className="cta-banner__actions">
          <a
            className="button button--primary"
            href={buildWhatsAppLink('Ciao, voglio entrare subito nel programma Fidelity Fusion.')}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('fidelity_join_click')}
          >
            Inizia adesione
          </a>
        </div>
      </section>
    </main>
  )
}
import { Link } from 'react-router-dom'
import { buildWhatsAppLink, deliveryAreas, deliveryMapEmbed } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function DeliveryZonesPage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero">
        <p className="section-kicker">Zone di consegna</p>
        <h1>Consegna a domicilio nelle zone limitrofe di Parabiago.</h1>
        <p className="page-lead">
          Portiamo Fusion a casa tua. Controlla se la tua zona è coperta, scopri i tempi medi di consegna e ordina direttamente su WhatsApp.
        </p>
      </section>

      <section className="panel-grid panel-grid--three">
        {deliveryAreas.map((zone) => (
          <article key={zone.area} className="detail-panel">
            <p className="section-kicker">{zone.eta}</p>
            <h2>{zone.area}</h2>
            <p>{zone.note}</p>
          </article>
        ))}
      </section>

      <section className="map-frame" aria-label="Mappa zone consegna">
        <iframe
          title="Mappa Fusion Restaurant"
          src={deliveryMapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <section className="cta-banner">
        <div>
          <p className="section-kicker">Conferma rapida</p>
          <h2>Verifica disponibilita e tempi in pochi secondi.</h2>
        </div>
        <div className="cta-banner__actions">
          <a
            className="button button--primary"
            href={buildWhatsAppLink('Ciao, vorrei verificare se la mia zona e coperta dalla consegna.')}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('delivery_zone_whatsapp_click')}
          >
            Verifica su WhatsApp
          </a>
          <Link className="button button--ghost" to="/take-away">
            Vai al take away
          </Link>
        </div>
      </section>
    </main>
  )
}
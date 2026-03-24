import { Link } from 'react-router-dom'
import { contacts, menuCategories, orderingSteps } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'
import { slugify } from '../lib/slugify'

export function TakeAwayPage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero page-hero--split">
        <div>
          <p className="section-kicker">Take away e delivery</p>
          <h1>Ordina e ritira, oppure te lo portiamo a casa.</h1>
          <p className="page-lead">
            Scegli tra ritiro in sede e consegna a domicilio. Configura il tuo ordine, invialo via WhatsApp e ricevi conferma in pochi minuti.
          </p>
        </div>
        <div className="planner-card">
          <h2>Apri menu completo</h2>
          <p>
            Consulta il menu completo e poi vai al checkout per inviare l'ordine con i tuoi dati.
          </p>
          <div className="stack-actions">
            <Link
              to="/menu/take-away"
              className="button button--primary"
              onClick={() => trackEvent('takeaway_menu_click')}
            >
              Apri menu con carrello
            </Link>
            <Link
              to="/checkout"
              className="button button--ghost"
              onClick={() => trackEvent('takeaway_checkout_click')}
            >
              Vai al checkout
            </Link>
          </div>
        </div>
      </section>

      <section className="steps-grid">
        {orderingSteps.map((step, index) => (
          <article key={step} className="step-card">
            <span className="step-card__index">0{index + 1}</span>
            <p>{step}</p>
          </article>
        ))}
      </section>

      <section className="panel-grid panel-grid--two">
        <article className="detail-panel">
          <p className="section-kicker">Categorie utili</p>
          <div className="compact-list">
            {menuCategories.slice(0, 5).map((item) => (
              <Link key={item.title} to={`/menu/${slugify(item.title)}`} className="compact-list__item">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </article>

        <article className="detail-panel takeaway-quick-actions">
          <p className="section-kicker">Azioni rapide</p>
          <p>
            Ordine minimo per consegna: <strong>30EUR</strong>. Per richieste rapide puoi scegliere subito il canale piu adatto.
          </p>
          <div className="stack-actions">
            <a
              className="button button--primary"
              href={contacts.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('takeaway_whatsapp_click')}
            >
              Scrivi su WhatsApp
            </a>
            <a className="button button--ghost" href={contacts.phoneHref} onClick={() => trackEvent('takeaway_phone_click')}>
              Telefona al ristorante
            </a>
            <Link className="button button--ghost" to="/menu/take-away" onClick={() => trackEvent('takeaway_menu_click', { area: 'quick_actions' })}>
              Apri menu con carrello
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
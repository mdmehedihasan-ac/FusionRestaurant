import { Link } from 'react-router-dom'
import { contacts, menuCategories, orderingSteps } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function TakeAwayPage() {
  const slugify = (value: string) =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

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
          <h2>Vai al checkout</h2>
          <p>
            Seleziona i tuoi prodotti dal menu, poi completa il checkout con i tuoi dati per inviare l'ordine su WhatsApp.
          </p>
          <Link
            to="/checkout"
            className="button button--primary"
            onClick={() => trackEvent('takeaway_checkout_click')}
          >
            Apri checkout
          </Link>
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
                <div className="img-ph" role="img" aria-label={item.title}>img</div>
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
            <Link className="button button--ghost" to="/menu">
              Apri menu
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
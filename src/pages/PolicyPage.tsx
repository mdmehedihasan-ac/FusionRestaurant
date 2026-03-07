import { policyLinks } from '../data/siteContent'

export function PolicyPage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero">
        <p className="section-kicker">Policy</p>
        <h1>Area legale chiara, completa e facilmente raggiungibile.</h1>
        <p className="page-lead">
          Ho raccolto in un unico spazio i documenti legali principali per migliorare fiducia, trasparenza e accessibilita.
        </p>
      </section>

      <section className="panel-grid panel-grid--three">
        {policyLinks.map((item) => (
          <article key={item.href} className="detail-panel">
            <p className="section-kicker">Documento</p>
            <h2>{item.label}</h2>
            <a className="text-link" href={item.href} target="_blank" rel="noreferrer">
              Apri documento
            </a>
          </article>
        ))}
      </section>
    </main>
  )
}
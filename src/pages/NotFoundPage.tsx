import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero page-hero--centered">
        <p className="section-kicker">404</p>
        <h1>Pagina non trovata.</h1>
        <p className="page-lead">Il nuovo sito mantiene una struttura piu chiara anche per i percorsi non validi.</p>
        <Link className="button button--primary" to="/">
          Torna alla home
        </Link>
      </section>
    </main>
  )
}
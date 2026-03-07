import { useState } from 'react'
import { contacts, experiencePoints, fusionTimeline, galleryImages, openingHours } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function FusionPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <main className="page-shell page-shell--inner">
      <section className="page-hero page-hero--split">
        <div>
          <p className="section-kicker">Fusion experience</p>
          <h1>Un ristorante pensato per la qualità e l’esperienza.</h1>
          <p className="page-lead">
            Atmosfera curata, ingredienti selezionati ogni giorno e uno staff appassionato. Scopri la storia di Fusion Restaurant a Parabiago, dal 2019.
          </p>
        </div>
        <div className="image-stack">
          <div className="img-ph" role="img" aria-label={galleryImages[0].title}>img</div>
          <div className="img-ph" role="img" aria-label={galleryImages[1].title}>img</div>
        </div>
      </section>

      <section className="panel-grid panel-grid--two">
        <article className="detail-panel">
          <p className="section-kicker">Perché sceglierci</p>
          <ul className="feature-list">
            {experiencePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <article className="detail-panel">
          <p className="section-kicker">Operativita</p>
          <div className="hours-list">
            {openingHours.map((slot) => (
              <div key={slot.label} className="hours-item">
                <span>{slot.label}</span>
                <strong>{slot.value}</strong>
              </div>
            ))}
          </div>
          <a className="button button--primary fusion-book-button" href={contacts.phoneHref}>
            Prenota tavolo
          </a>
        </article>
      </section>

      <section className="timeline" aria-label="Timeline ristorante">
        {fusionTimeline.map((item) => (
          <article key={item.year} className="timeline-item">
            <span className="timeline-item__year">{item.year}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </section>

      <section className="gallery-grid">
        {galleryImages.map((item) => (
          <article
            key={item.title}
            className="gallery-card"
            role="button"
            tabIndex={0}
            onClick={() => {
              setLightboxImage(item.image)
              trackEvent('fusion_gallery_open', { item: item.title })
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setLightboxImage(item.image)
              }
            }}
          >
            <div className="img-ph" role="img" aria-label={item.title}>img</div>
            <div className="gallery-card__overlay">
              <h2>{item.title}</h2>
            </div>
          </article>
        ))}
      </section>

      {lightboxImage && (
        <button type="button" className="lightbox" onClick={() => setLightboxImage(null)} aria-label="Chiudi immagine">
          <div className="img-ph" role="img" aria-label="Galleria Fusion ingrandita">img</div>
        </button>
      )}
    </main>
  )
}
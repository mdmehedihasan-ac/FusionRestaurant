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
          <img src="/fusion-foto-1.jpg" alt={galleryImages[0].title} loading="eager" />
          <img src="/fusion-foto-2.jpg" alt={galleryImages[1].title} loading="eager" />
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
        {[galleryImages[0], galleryImages[1], galleryImages[2], galleryImages[3],
          { title: 'Ingredienti di qualit\u00e0', image: '/fusion-ingredienti.jpg' },
          { title: 'Fusion experience', image: '/fusion-experience.jpg' }].map((item) => (
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
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="gallery-card__overlay">
              <h2>{item.title}</h2>
            </div>
          </article>
        ))}
      </section>

      {lightboxImage && (
        <button type="button" className="lightbox" onClick={() => setLightboxImage(null)} aria-label="Chiudi immagine">
          <img src={lightboxImage} alt="Galleria Fusion ingrandita" />
        </button>
      )}
    </main>
  )
}
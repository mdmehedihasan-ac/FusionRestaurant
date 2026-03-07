import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  galleryImages,
  heroVisuals,
  menuCategories,
  serviceHighlights,
} from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function HomePage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <main className="page-shell">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="hero hero--home">
        <img
          className="hero__bg-image"
          src={heroVisuals.heroPrimary}
          alt="Fusion Restaurant Parabiago – Sushi e cucina orientale"
        />
        <div className="hero__overlay" aria-hidden="true" />
        <motion.div
          className="hero__content"
          variants={{ visible: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="section-kicker" variants={itemVariants}>
            Sushi · Fusion · Parabiago
          </motion.p>
          <motion.h1 variants={itemVariants}>
            Sapori d'Oriente, nel cuore di Parabiago.
          </motion.h1>
          <p className="page-lead">
            Cucina fusion giapponese con ingredienti freschi, atmosfera contemporanea e un menu che unisce tradizione orientale e creativit&agrave; di stagione.
          </p>
        </motion.div>
      </section>

      {/* ── 3 Service cards ──────────────────────────────────── */}
      <section className="service-cards" aria-label="Le nostre formule">
        <Link className="service-card" to="/all-you-can-eat">
          <div className="service-card__icon">AYCE</div>
          <h3 className="service-card__title">All You Can Eat</h3>
          <p className="service-card__body">Mangia quanto vuoi tra sushi, nigiri, uramaki e cucina calda. Formula pranzo e cena a prezzo fisso.</p>
          <span className="text-link">Scopri la formula →</span>
        </Link>
        <Link className="service-card" to="/menu">
          <div className="service-card__icon">MENU</div>
          <h3 className="service-card__title">Menu à la Carte</h3>
          <p className="service-card__body">Scegli liberamente dalla nostra selezione signature, sushi, tartare e cucina orientale calda.</p>
          <span className="text-link">Sfoglia il menu →</span>
        </Link>
        <Link className="service-card" to="/take-away">
          <div className="service-card__icon">DELIVERY</div>
          <h3 className="service-card__title">Take Away &amp; Delivery</h3>
          <p className="service-card__body">Ordina via WhatsApp, ritira in sede o ricevi a domicilio nelle zone limitrofe di Parabiago.</p>
          <span className="text-link">Ordina ora →</span>
        </Link>
      </section>

      {/* ── Promo carousel ───────────────────────────────────── */}
      <section className="promo-carousel section-block" aria-label="Promozioni in corso">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Offerte &amp; Promozioni</p>
            <h2>Le nostre proposte del momento.</h2>
          </div>
        </div>
        <Swiper slidesPerView={1.1} spaceBetween={16} breakpoints={{ 700: { slidesPerView: 2.1 }, 1100: { slidesPerView: 3 } }}>
          {galleryImages.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="promo-slide">
                <img src={item.image} alt={item.title} />
                <div className="promo-slide__content">
                  <h3>{item.title}</h3>
                  <p>Scopri le nostre promozioni e offerte speciali.</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="feature-grid" aria-label="Service highlights">
        {serviceHighlights.map((section) => (
          <article key={section.title} className="feature-card">
            <p className="section-kicker">Servizio</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
            <a className="text-link" href={section.ctaHref} target={section.ctaHref.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {section.ctaLabel}
            </a>
          </article>
        ))}
      </section>

      <section className="editorial-grid">
        <article className="editorial-copy">
          <p className="section-kicker">La nostra cucina</p>
          <h2>Ogni piatto racconta una storia di sapori e tecnica.</h2>
          <p>
            Dal sushi tradizionale agli uramaki signature, dai crudi di pesce alle composizioni stagionali: ogni preparazione nasce da ingredienti selezionati e dall&apos;esperienza di uno chef appassionato.
          </p>
          <div className="stack-actions">
            <Link className="button button--primary" to="/menu">
              Esplora il menu
            </Link>
            <Link className="button button--ghost" to="/fusion">
              Scopri il locale
            </Link>
          </div>
        </article>
        <article className="editorial-gallery">
          {galleryImages.slice(0, 3).map((item) => (
            <div key={item.title} className="editorial-gallery__item">
              <div className="img-ph" role="img" aria-label={item.title}>img</div>
            </div>
          ))}
        </article>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <div>
            <p className="section-kicker">I nostri signature</p>
            <h2>I piatti pi&ugrave; amati dai nostri ospiti.</h2>
          </div>
          <Link className="button button--ghost" to="/menu">
            Tutto il menu
          </Link>
        </div>

        <Swiper slidesPerView={1.1} spaceBetween={16} breakpoints={{ 900: { slidesPerView: 2.2 } }}>
          {menuCategories
            .filter((item) => item.spotlight)
            .map((item) => (
              <SwiperSlide key={item.title}>
                <article className="menu-card">
                  <div className="img-ph" role="img" aria-label={item.title}>img</div>
                  <div className="menu-card__body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <a
                      className="text-link"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackEvent('home_bestseller_click', { item: item.title })}
                    >
                      Apri categoria originale
                    </a>
                  </div>
                </article>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>

    </main>
  )
}
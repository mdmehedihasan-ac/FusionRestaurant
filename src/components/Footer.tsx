import { Link } from 'react-router-dom'
import { contacts, navItems, openingHours, policyLinks, utilityLinks } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <section>
          <p className="section-kicker">Fusion Restaurant · Parabiago</p>
          <h2>Sapori d&apos;Oriente dal 2019, a Parabiago.</h2>
          <p className="footer-copy">
            Cucina fusion giapponese con ingredienti freschi, atmosfera contemporanea e un menu tra sushi, piatti signature e cucina calda orientale.
          </p>
        </section>

        <section>
          <p className="section-kicker">Navigazione</p>
          <div className="footer-links">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                {item.label}
              </Link>
            ))}
            {utilityLinks.map((item) => (
              <Link key={item.href} to={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="section-kicker">Contatti</p>
          <div className="footer-links">
            <a href={contacts.mapsHref} target="_blank" rel="noreferrer">
              {contacts.address}
            </a>
            <a href={contacts.phoneHref}>{contacts.phoneLabel}</a>
            <a href={contacts.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackEvent('footer_whatsapp_click')}>
              WhatsApp {contacts.whatsappLabel}
            </a>
            <a href={contacts.emailHref}>{contacts.email}</a>
            <a href={contacts.facebookHref} target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </section>

        <section>
          <p className="section-kicker">Orari</p>
          <div className="hours-list">
            {openingHours.map((slot) => (
              <div key={slot.label} className="hours-item">
                <span>{slot.label}</span>
                <strong>{slot.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section>
          <p className="section-kicker">Legal</p>
          <div className="footer-links">
            {policyLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </footer>
  )
}
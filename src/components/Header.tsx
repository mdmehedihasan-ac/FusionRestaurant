import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contacts, navItems, utilityLinks } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header site-header--scrolled' : 'site-header'}>
      <div className="top-strip">
        <p>{contacts.address}</p>
        <div className="top-strip__actions">
          {utilityLinks.slice(0, 2).map((item) => (
            <NavLink key={item.href} to={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <a href={contacts.phoneHref} onClick={() => trackEvent('header_phone_click', { area: 'top_strip' })}>
            {contacts.phoneLabel}
          </a>
          <a
            href={contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('header_whatsapp_click', { area: 'top_strip' })}
          >
            WhatsApp {contacts.whatsappLabel}
          </a>
        </div>
      </div>

      <div className="nav-shell">
        <NavLink to="/" className="brand-mark" aria-label="Fusion Restaurant home" onClick={() => setMenuOpen(false)}>
          <img src="/Logo-Fusion-Restaurant-Parabiago.jpg" alt="Fusion Restaurant Parabiago" className="brand-logo" />
        </NavLink>

        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link nav-link--active' : 'nav-link')}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <a className="button button--ghost" href={contacts.phoneHref} onClick={() => trackEvent('header_phone_click', { area: 'main_cta' })}>
            Chiama
          </a>
          <a
            className="button button--primary"
            href={contacts.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('header_whatsapp_click', { area: 'main_cta' })}
          >
            Ordina su WhatsApp
          </a>
        </div>

        <button
          type="button"
          className={menuOpen ? 'menu-toggle menu-toggle--open' : 'menu-toggle'}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="Apri menu"
        >
          <span className="menu-toggle__line menu-toggle__line--top" />
          <span className="menu-toggle__line menu-toggle__line--middle" />
          <span className="menu-toggle__line menu-toggle__line--bottom" />
        </button>
      </div>

      <div className={menuOpen ? 'mobile-panel mobile-panel--open' : 'mobile-panel'} id="mobile-navigation">
        <div className="mobile-panel__links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'mobile-link mobile-link--active' : 'mobile-link')}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}
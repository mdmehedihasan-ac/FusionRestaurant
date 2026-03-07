import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import { MenuOrderCart } from './MenuOrderCart'
import { contacts } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="site-shell">
      <Header />
      {children}
      <Footer />

      <div className="floating-actions" aria-label="Quick actions">
        <a className="floating-actions__item" href={contacts.phoneHref} onClick={() => trackEvent('floating_phone_click')}>
          Chiama
        </a>
        <a
          className="floating-actions__item floating-actions__item--primary"
          href={contacts.whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackEvent('floating_whatsapp_click')}
        >
          WhatsApp
        </a>
      </div>

      <MenuOrderCart />
    </div>
  )
}
import type { ReactNode } from 'react'
import { buildWhatsAppLink } from '../data/siteContent'
import { trackEvent } from '../lib/tracking'

type TrackingPayload = Record<string, string | number | boolean>

type WhatsAppButtonProps = {
  message: string
  className: string
  children: ReactNode
  eventName?: string
  eventPayload?: TrackingPayload
}

export function WhatsAppButton({ message, className, children, eventName, eventPayload }: WhatsAppButtonProps) {
  const handleClick = () => {
    if (eventName) {
      trackEvent(eventName, eventPayload)
    }
  }

  return (
    <a className={className} href={buildWhatsAppLink(message)} target="_blank" rel="noreferrer" onClick={handleClick}>
      {children}
    </a>
  )
}

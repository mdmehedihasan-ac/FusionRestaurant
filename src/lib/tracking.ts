type TrackingPayload = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (command: 'event', eventName: string, payload?: TrackingPayload) => void
  }
}

export function trackEvent(eventName: string, payload: TrackingPayload = {}) {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, payload)
    return
  }

  // Fallback for local development without analytics snippet.
  console.info('[tracking]', eventName, payload)
}

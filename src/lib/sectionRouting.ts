export const sectionByPath: Record<string, string> = {
  '/': 'home',
  '/home': 'home',
  '/fusion': 'fusion',
  '/fusion-restaurant-parabiago': 'fusion',
  '/all-you-can-eat': 'all-you-can-eat',
  '/all-you-can-eat-fusion-parabiago': 'all-you-can-eat',
  '/menu': 'menu',
  '/menu/': 'menu',
  '/take-away': 'take-away',
  '/checkout': 'checkout',
  '/fidelity': 'fidelity',
  '/zone-consegna': 'zone-consegna',
  '/zone-di-consegna': 'zone-consegna',
  '/shop': 'shop',
  '/policy': 'policy',
  '/contatti': 'contatti',
  '/ristorante-giapponese-parabiago-provincia-milano': 'contatti',
}

export const canonicalPathByPath: Record<string, string> = {
  '/home': '/',
  '/fusion-restaurant-parabiago': '/fusion',
  '/all-you-can-eat-fusion-parabiago': '/all-you-can-eat',
  '/zone-di-consegna': '/zone-consegna',
  '/ristorante-giapponese-parabiago-provincia-milano': '/contatti',
}

export function getSectionIdForPath(pathname: string) {
  if (pathname.startsWith('/menu/')) {
    return 'menu'
  }

  return sectionByPath[pathname]
}

export function getCanonicalPath(pathname: string) {
  if (pathname.startsWith('/menu/')) {
    return '/menu'
  }

  return canonicalPathByPath[pathname] ?? pathname
}

export function toSectionHref(path: string) {
  const section = sectionByPath[path]
  return section ? `#${section}` : '#home'
}
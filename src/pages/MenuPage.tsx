import { Link } from 'react-router-dom'

const sections = [
  {
    key: 'pranzo',
    title: 'Menu Pranzo',
    badge: 'OPEN',
    image: '/menu-pranzo.jpg',
    alt: 'Menu pranzo Fusion Restaurant',
    href: '/menu/pranzo',
  },
  {
    key: 'pranzo-festivo',
    title: 'Pranzo Festivo',
    badge: 'OPEN',
    image: '/menu-pranzo-festivo.jpg',
    alt: 'Pranzo festivo Fusion Restaurant',
    href: '/menu/pranzo-festivo',
  },
  {
    key: 'ayce',
    title: 'All You Can Eat',
    badge: 'AYCE',
    image: '/menu-ayce.jpg',
    alt: 'All You Can Eat Fusion Restaurant',
    href: '/menu/ayce',
  },
]

export function MenuPage() {
  return (
    <main className="page-shell page-shell--inner">
      <div className="menu-sections-grid">
        {sections.map((section) => (
          <Link key={section.key} to={section.href} className="menu-section-card">
            <div className="menu-section-card__image">
              <img src={section.image} alt={section.alt} loading="lazy" />
            </div>
            <div className="menu-section-card__body">
              <span className="menu-section-card__badge">{section.badge}</span>
              <h2 className="menu-section-card__title">{section.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
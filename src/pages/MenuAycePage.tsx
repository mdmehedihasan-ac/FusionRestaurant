import { Link } from 'react-router-dom'
import {
  ayceMenuInfo,
  ayceMenuSections,
  pranzoFestivoDolci,
  pranzoFestivoBevande,
  pranzoFestivoCantina,
} from '../data/siteContent'
import { MenuExtrasSections } from '../components/MenuExtrasSections'
import { MenuFormulaPage } from '../components/MenuFormulaPage'

export function MenuAycePage() {
  return (
    <main className="page-shell page-shell--inner">
      <MenuFormulaPage
        pdfHref="/menu-ayce.pdf"
        kicker="Formula All You Can Eat — Tutti i giorni"
        title="Cena All You Can Eat"
        info={ayceMenuInfo}
        sections={ayceMenuSections}
      />

      <MenuExtrasSections desserts={pranzoFestivoDolci} groups={[...pranzoFestivoBevande, ...pranzoFestivoCantina]} />

      <div className="menu-dish-back">
        <Link className="button button--ghost" to="/menu">← Torna al menu</Link>
      </div>
    </main>
  )
}

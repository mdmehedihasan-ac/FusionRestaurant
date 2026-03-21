import { Link } from 'react-router-dom'
import {
  pranzoFerialeInfo,
  pranzoFerialeSections,
  pranzoFestivoDolci,
  pranzoFestivoBevande,
  pranzoFestivoCantina,
} from '../data/siteContent'
import { MenuExtrasSections } from '../components/MenuExtrasSections'
import { MenuFormulaPage } from '../components/MenuFormulaPage'

export function MenuPranzoPage() {
  return (
    <main className="page-shell page-shell--inner">
      <MenuFormulaPage
        pdfHref="/menu-pranzo.pdf"
        kicker="Formula Open — Dal Martedì al Venerdì"
        title="Menu Pranzo"
        info={pranzoFerialeInfo}
        sections={pranzoFerialeSections}
      />

      <MenuExtrasSections desserts={pranzoFestivoDolci} groups={[...pranzoFestivoBevande, ...pranzoFestivoCantina]} />

      <div className="menu-dish-back">
        <Link className="button button--ghost" to="/menu">← Torna al menu</Link>
      </div>
    </main>
  )
}

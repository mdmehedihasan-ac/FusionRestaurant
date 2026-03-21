import { Link } from 'react-router-dom'
import {
  pranzoFestivoInfo,
  pranzoFestivoSections,
  pranzoFestivoDolci,
  pranzoFestivoBevande,
  pranzoFestivoCantina,
} from '../data/siteContent'
import { MenuExtrasSections } from '../components/MenuExtrasSections'
import { MenuFormulaPage } from '../components/MenuFormulaPage'

export function MenuPranzoFestivoPage() {
  return (
    <main className="page-shell page-shell--inner">
      <MenuFormulaPage
        pdfHref="/menu-pranzo-festivo.pdf"
        kicker="Formula Open — Sabato, Domenica e Festivi"
        title="Pranzo Festivo"
        info={pranzoFestivoInfo}
        sections={pranzoFestivoSections}
      />

      <MenuExtrasSections desserts={pranzoFestivoDolci} groups={[...pranzoFestivoBevande, ...pranzoFestivoCantina]} />

      <div className="menu-dish-back">
        <Link className="button button--ghost" to="/menu">← Torna al menu</Link>
      </div>
    </main>
  )
}

import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { SiteLayout } from './components/SiteLayout'
import { Seo } from './components/Seo'
import { AycePage } from './pages/AycePage'
import { ContactPage } from './pages/ContactPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { DeliveryZonesPage } from './pages/DeliveryZonesPage'
import { FidelityPage } from './pages/FidelityPage'
import { FusionPage } from './pages/FusionPage'
import { HomePage } from './pages/HomePage'
import { MenuItemPage } from './pages/MenuItemPage'
import { MenuPage } from './pages/MenuPage'
import { MenuPranzoPage } from './pages/MenuPranzoPage'
import { MenuPranzoFestivoPage } from './pages/MenuPranzoFestivoPage'
import { MenuAycePage } from './pages/MenuAycePage'
import { MenuTakeAwayPage } from './pages/MenuTakeAwayPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PolicyPage } from './pages/PolicyPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { CookiePage } from './pages/CookiePage'
import { TermsPage } from './pages/TermsPage'
import { ShopPage } from './pages/ShopPage'
import { TakeAwayPage } from './pages/TakeAwayPage'

function App() {
  const location = useLocation()

  return (
    <SiteLayout>
      <Seo />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/fusion" element={<FusionPage />} />
            <Route path="/all-you-can-eat" element={<AycePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/pranzo" element={<MenuPranzoPage />} />
            <Route path="/menu/pranzo-festivo" element={<MenuPranzoFestivoPage />} />
            <Route path="/menu/ayce" element={<MenuAycePage />} />
            <Route path="/menu/take-away" element={<MenuTakeAwayPage />} />
            <Route path="/menu/:slug" element={<MenuItemPage />} />
            <Route path="/take-away" element={<TakeAwayPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/fidelity" element={<FidelityPage />} />
            <Route path="/zone-consegna" element={<DeliveryZonesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/policy" element={<PolicyPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookie-policy" element={<CookiePage />} />
            <Route path="/termini-e-condizioni" element={<TermsPage />} />
            <Route path="/contatti" element={<ContactPage />} />

            <Route path="/all-you-can-eat-fusion-parabiago" element={<Navigate to="/all-you-can-eat" replace />} />
            <Route path="/fusion-restaurant-parabiago" element={<Navigate to="/fusion" replace />} />
            <Route path="/ristorante-giapponese-parabiago-provincia-milano" element={<Navigate to="/contatti" replace />} />
            <Route path="/zone-di-consegna" element={<Navigate to="/zone-consegna" replace />} />

            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </SiteLayout>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { Seo } from './components/Seo'
import { AycePage } from './pages/AycePage'
import { ContactPage } from './pages/ContactPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { DeliveryZonesPage } from './pages/DeliveryZonesPage'
import { FidelityPage } from './pages/FidelityPage'
import { FusionPage } from './pages/FusionPage'
import { HomePage } from './pages/HomePage'
import { MenuPage } from './pages/MenuPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PolicyPage } from './pages/PolicyPage'
import { ShopPage } from './pages/ShopPage'
import { TakeAwayPage } from './pages/TakeAwayPage'

function App() {
  return (
    <SiteLayout>
      <Seo />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fusion" element={<FusionPage />} />
        <Route path="/all-you-can-eat" element={<AycePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/menu/:slug" element={<Navigate to="/menu" replace />} />
        <Route path="/take-away" element={<TakeAwayPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/fidelity" element={<FidelityPage />} />
        <Route path="/zone-consegna" element={<DeliveryZonesPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/policy" element={<PolicyPage />} />
        <Route path="/contatti" element={<ContactPage />} />

        <Route path="/all-you-can-eat-fusion-parabiago" element={<Navigate to="/all-you-can-eat" replace />} />
        <Route path="/fusion-restaurant-parabiago" element={<Navigate to="/fusion" replace />} />
        <Route path="/ristorante-giapponese-parabiago-provincia-milano" element={<Navigate to="/contatti" replace />} />
        <Route path="/zone-di-consegna" element={<Navigate to="/zone-consegna" replace />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SiteLayout>
  )
}

export default App

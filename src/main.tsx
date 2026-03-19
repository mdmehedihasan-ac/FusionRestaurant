import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import './pwa'
import App from './App.tsx'
import { MenuOrderCartProvider } from './lib/menuOrderCart'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <MenuOrderCartProvider>
          <App />
        </MenuOrderCartProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)

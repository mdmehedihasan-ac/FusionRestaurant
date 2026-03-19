import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Fusion Restaurant Parabiago',
        short_name: 'Fusion',
        description: 'Fusion Restaurant Parabiago: menu, ordini e contatti in una single-page ottimizzata.',
        theme_color: '#7B1A38',
        background_color: '#FFFFFF',
        display: 'standalone',
        start_url: '/',
        scope: '/',
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/www\.fusionrestaurant\.it\/.*\.(png|jpg|jpeg|svg|webp)$/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'fusion-external-images',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
            },
          },
          {
            urlPattern: /^https:\/\/(maps\.googleapis\.com|maps\.google\.com)\//i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'fusion-maps-content',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 60 * 60 * 24 * 7,
              },
            },
          },
        ],
      },
    }),
  ],
})

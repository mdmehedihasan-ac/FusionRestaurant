import { menuCategories, shopProducts } from '../data/siteContent'
import { takeAwayCatalog } from '../data/takeAwayCatalog'
import { normalizeCartQuantity } from './cartSecurity'
import type { MenuCartMap } from './menuOrderCartContext'

export type ResolvedCartEntry = {
  title: string
  qty: number
  priceRange: string
  image?: string
  source: 'menu' | 'shop' | 'custom'
  unitPrice?: number
}

const menuCategoryByTitle = new Map(menuCategories.map((item) => [item.title, item]))
const shopProductByName = new Map(shopProducts.map((item) => [item.name, item]))
const takeAwayProductByTitle = new Map(takeAwayCatalog.map((item) => [item.title, item]))

function parseCatalogPrice(value: string) {
  const normalized = value.replace(/&euro;/gi, '').replace(/[^\d,.-]/g, '').replace(',', '.').trim()
  const parsed = Number.parseFloat(normalized)
  return Number.isFinite(parsed) ? parsed : undefined
}

function cleanCatalogPrice(value: string) {
  return value.replace(/&euro;/gi, 'EUR').replace(/\s+/g, ' ').trim()
}

export function resolveCartEntries(cart: MenuCartMap): ResolvedCartEntry[] {
  const entries = Object.entries(cart).reduce<ResolvedCartEntry[]>((accumulator, [title, rawQty]) => {
      const qty = normalizeCartQuantity(rawQty)
      if (qty === 0) {
        return accumulator
      }

      const takeAwayItem = takeAwayProductByTitle.get(title)
      if (takeAwayItem) {
        const unitPrice = parseCatalogPrice(takeAwayItem.price)
        accumulator.push({
          title,
          qty,
          priceRange: cleanCatalogPrice(takeAwayItem.price),
          image: takeAwayItem.image || takeAwayItem.remoteImage,
          source: 'shop',
          unitPrice,
        })
        return accumulator
      }

      const shopItem = shopProductByName.get(title)
      if (shopItem) {
        accumulator.push({
          title,
          qty,
          priceRange: `EUR ${shopItem.price.toFixed(2)}`,
          image: shopItem.image,
          source: 'shop',
          unitPrice: shopItem.price,
        })
        return accumulator
      }

      const menuItem = menuCategoryByTitle.get(title)
      if (menuItem) {
        accumulator.push({
          title,
          qty,
          priceRange: menuItem.priceRange ?? 'Prezzo su richiesta',
          image: menuItem.image,
          source: 'menu',
        })
        return accumulator
      }

      accumulator.push({
        title,
        qty,
        priceRange: 'Prezzo da confermare',
        source: 'custom',
      })

      return accumulator
    }, [])

  return entries.sort((a, b) => a.title.localeCompare(b.title, 'it'))
}

export function getShopCartEntries(cart: MenuCartMap) {
  return resolveCartEntries(cart).filter((item) => item.source === 'shop')
}

export function getEntriesCount(entries: Array<{ qty: number }>) {
  return entries.reduce((total, item) => total + item.qty, 0)
}

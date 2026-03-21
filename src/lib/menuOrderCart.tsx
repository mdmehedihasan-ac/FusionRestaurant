import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { MenuOrderCartContext, type MenuCartMap, type MenuOrderCartContextType } from './menuOrderCartContext'
import { sanitizeCartMap } from './cartSecurity'

const STORAGE_KEY = 'fusion-menu-order-cart-v1'
const STORAGE_TTL_MS = 1000 * 60 * 60 * 24 * 7

type StoredCartPayload = {
  updatedAt: number
  cart: MenuCartMap
}

function getStoredCart(): MenuCartMap {
  if (typeof window === 'undefined') {
    return {}
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return {}
    }

    const parsed = JSON.parse(raw) as unknown

    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && 'cart' in parsed) {
      const payload = parsed as StoredCartPayload
      const isExpired = typeof payload.updatedAt !== 'number' || Date.now() - payload.updatedAt > STORAGE_TTL_MS
      if (isExpired) {
        localStorage.removeItem(STORAGE_KEY)
        return {}
      }

      return sanitizeCartMap(payload.cart)
    }

    // Backward compatibility for old plain cart map format.
    return sanitizeCartMap(parsed)
  } catch {
    return {}
  }
}

export function MenuOrderCartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<MenuCartMap>(() => getStoredCart())

  useEffect(() => {
    const safeCart = sanitizeCartMap(cart)
    if (Object.keys(safeCart).length === 0) {
      localStorage.removeItem(STORAGE_KEY)
      return
    }

    const payload: StoredCartPayload = {
      updatedAt: Date.now(),
      cart: safeCart,
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  }, [cart])

  const value = useMemo<MenuOrderCartContextType>(
    () => ({
      cart,
      addItem: (title: string) => {
        setCart((current) => ({ ...current, [title]: (current[title] ?? 0) + 1 }))
      },
      decreaseItem: (title: string) => {
        setCart((current) => {
          const nextQty = (current[title] ?? 0) - 1
          if (nextQty <= 0) {
            const rest = { ...current }
            delete rest[title]
            return rest
          }

          return { ...current, [title]: nextQty }
        })
      },
      removeItem: (title: string) => {
        setCart((current) => {
          const rest = { ...current }
          delete rest[title]
          return rest
        })
      },
      clearCart: () => setCart({}),
    }),
    [cart],
  )

  return <MenuOrderCartContext.Provider value={value}>{children}</MenuOrderCartContext.Provider>
}

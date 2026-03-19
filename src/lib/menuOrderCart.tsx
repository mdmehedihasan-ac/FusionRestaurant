import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { MenuOrderCartContext, type MenuCartMap, type MenuOrderCartContextType } from './menuOrderCartContext'

const STORAGE_KEY = 'fusion-menu-order-cart-v1'

export function MenuOrderCartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<MenuCartMap>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        return {}
      }

      const parsed = JSON.parse(raw) as MenuCartMap
      return parsed
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart))
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

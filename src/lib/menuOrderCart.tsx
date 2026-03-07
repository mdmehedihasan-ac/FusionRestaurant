import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type MenuCartMap = Record<string, number>

type MenuOrderCartContextType = {
  cart: MenuCartMap
  addItem: (title: string) => void
  decreaseItem: (title: string) => void
  removeItem: (title: string) => void
  clearCart: () => void
}

const STORAGE_KEY = 'fusion-menu-order-cart-v1'

const MenuOrderCartContext = createContext<MenuOrderCartContextType | null>(null)

export function MenuOrderCartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<MenuCartMap>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) {
        return
      }

      const parsed = JSON.parse(raw) as MenuCartMap
      setCart(parsed)
    } catch {
      setCart({})
    }
  }, [])

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
            const { [title]: _removed, ...rest } = current
            return rest
          }

          return { ...current, [title]: nextQty }
        })
      },
      removeItem: (title: string) => {
        setCart((current) => {
          const { [title]: _removed, ...rest } = current
          return rest
        })
      },
      clearCart: () => setCart({}),
    }),
    [cart],
  )

  return <MenuOrderCartContext.Provider value={value}>{children}</MenuOrderCartContext.Provider>
}

export function useMenuOrderCart() {
  const context = useContext(MenuOrderCartContext)
  if (!context) {
    throw new Error('useMenuOrderCart must be used within MenuOrderCartProvider')
  }

  return context
}

import { createContext } from 'react'

export type MenuCartMap = Record<string, number>

export type MenuOrderCartContextType = {
  cart: MenuCartMap
  addItem: (title: string) => void
  decreaseItem: (title: string) => void
  removeItem: (title: string) => void
  clearCart: () => void
}

export const MenuOrderCartContext = createContext<MenuOrderCartContextType | null>(null)
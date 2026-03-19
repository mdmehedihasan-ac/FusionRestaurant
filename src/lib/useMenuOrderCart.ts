import { useContext } from 'react'
import { MenuOrderCartContext } from './menuOrderCartContext'

export function useMenuOrderCart() {
  const context = useContext(MenuOrderCartContext)
  if (!context) {
    throw new Error('useMenuOrderCart must be used within MenuOrderCartProvider')
  }

  return context
}
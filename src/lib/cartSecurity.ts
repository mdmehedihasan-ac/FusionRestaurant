import type { MenuCartMap } from './menuOrderCartContext'

export const MAX_CART_ITEMS = 80
export const MAX_CART_QTY = 30
const MAX_CART_KEY_LENGTH = 140

function isSafeCartKey(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value.length <= MAX_CART_KEY_LENGTH
}

export function normalizeCartQuantity(value: unknown): number {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    return 0
  }

  const normalized = Math.floor(value)
  if (normalized <= 0) {
    return 0
  }

  return Math.min(normalized, MAX_CART_QTY)
}

export function sanitizeCartMap(value: unknown): MenuCartMap {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return {}
  }

  const safeEntries: Array<[string, number]> = []

  for (const [rawKey, rawQty] of Object.entries(value)) {
    if (!isSafeCartKey(rawKey)) {
      continue
    }

    const qty = normalizeCartQuantity(rawQty)
    if (qty === 0) {
      continue
    }

    safeEntries.push([rawKey.trim(), qty])
    if (safeEntries.length >= MAX_CART_ITEMS) {
      break
    }
  }

  return Object.fromEntries(safeEntries)
}

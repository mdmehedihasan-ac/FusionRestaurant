export function sanitizeSingleLine(value: string, maxLength: number): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export function sanitizeTextBlock(value: string, maxLength: number): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export function sanitizePhone(value: string, maxLength = 20): string {
  return value
    .replace(/[^\d+\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

export function sanitizeTime(value: string): string {
  if (value === '') {
    return ''
  }

  return /^([01]\d|2[0-3]):[0-5]\d$/.test(value) ? value : ''
}

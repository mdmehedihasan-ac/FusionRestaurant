import { takeAwayCatalog } from '../data/takeAwayCatalog'

type ProductMedia = {
  image: string
  sourceUrl: string
}

const normalizeText = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&amp;|&/g, ' e ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()

const stripCodePrefix = (value: string) => value.replace(/^[0-9]{1,3}[a-z]?\s*\/\s*/i, '').trim()

const normalizeCode = (value: string) => {
  const raw = value.toUpperCase().replace(/[^A-Z0-9]/g, '')
  const match = raw.match(/^(\d+)([A-Z]?)$/)
  if (!match) {
    return raw
  }

  const [, numberPart, suffix] = match
  const normalizedNumber = String(Number.parseInt(numberPart, 10))
  if (normalizedNumber === 'NaN') {
    return raw
  }

  return `${normalizedNumber}${suffix}`
}

const mediaByCode = new Map<string, ProductMedia>()
const mediaByTitle = new Map<string, ProductMedia>()

for (const item of takeAwayCatalog) {
  const media: ProductMedia = {
    image: item.image || item.remoteImage,
    sourceUrl: item.sourceUrl,
  }

  const codeFromTitle = item.title.match(/^([0-9]{1,3}[a-z]?)/i)?.[1]
  const codeFromSlug = item.slug.match(/^([0-9]{1,3}[a-z]?)/i)?.[1]
  const normalizedCode = normalizeCode(codeFromTitle ?? codeFromSlug ?? '')
  if (normalizedCode && !mediaByCode.has(normalizedCode)) {
    mediaByCode.set(normalizedCode, media)
  }

  const fullTitle = normalizeText(item.title)
  const plainTitle = normalizeText(stripCodePrefix(item.title))
  if (fullTitle && !mediaByTitle.has(fullTitle)) {
    mediaByTitle.set(fullTitle, media)
  }
  if (plainTitle && !mediaByTitle.has(plainTitle)) {
    mediaByTitle.set(plainTitle, media)
  }
}

export function findProductMedia(params: { code?: string; title: string }): ProductMedia | undefined {
  const byCode = params.code ? mediaByCode.get(normalizeCode(params.code)) : undefined
  if (byCode) {
    return byCode
  }

  const normalizedTitle = normalizeText(params.title)
  const byTitle = mediaByTitle.get(normalizedTitle)
  if (byTitle) {
    return byTitle
  }

  for (const [candidateTitle, candidateMedia] of mediaByTitle.entries()) {
    if (candidateTitle.includes(normalizedTitle) || normalizedTitle.includes(candidateTitle)) {
      return candidateMedia
    }
  }

  return undefined
}

const fs = require('fs/promises')
const path = require('path')

const inputPath = '/Users/giacomotronconi/FUSION RSTRNT/tmp/product-details.json'
const outTsPath = '/Users/giacomotronconi/FUSION RSTRNT/src/data/takeAwayCatalog.ts'
const imageDir = '/Users/giacomotronconi/FUSION RSTRNT/public/images/products'

const decodeEntities = (s = '') =>
  s
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))

const cleanText = (value) => decodeEntities(String(value || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim()

const extFromUrl = (url) => {
  try {
    const parsed = new URL(url)
    const ext = path.extname(parsed.pathname).toLowerCase()
    if (ext && ext.length <= 5) return ext
    return '.jpg'
  } catch {
    return '.jpg'
  }
}

const fetchWithTimeout = async (url, ms = 12000) => {
  const ac = new AbortController()
  const timer = setTimeout(() => ac.abort(), ms)
  try {
    return await fetch(url, { signal: ac.signal, headers: { 'user-agent': 'Mozilla/5.0' } })
  } finally {
    clearTimeout(timer)
  }
}

async function downloadImages(products) {
  await fs.mkdir(imageDir, { recursive: true })

  let cursor = 0
  let ok = 0
  let fail = 0
  const workers = 8

  const work = async () => {
    while (true) {
      const i = cursor
      cursor += 1
      if (i >= products.length) return

      const product = products[i]
      if (!product.remoteImage || !product.localImagePath) {
        fail += 1
        continue
      }

      try {
        const res = await fetchWithTimeout(product.remoteImage)
        if (!res.ok) {
          fail += 1
          continue
        }

        const arrayBuffer = await res.arrayBuffer()
        const filePath = path.join('/Users/giacomotronconi/FUSION RSTRNT/public', product.localImagePath)
        await fs.mkdir(path.dirname(filePath), { recursive: true })
        await fs.writeFile(filePath, Buffer.from(arrayBuffer))
        ok += 1
      } catch {
        fail += 1
      }
    }
  }

  await Promise.all(Array.from({ length: workers }, work))
  return { ok, fail }
}

function buildTs(products) {
  const lines = []
  lines.push('export type TakeAwayCatalogProduct = {')
  lines.push('  slug: string')
  lines.push('  title: string')
  lines.push('  price: string')
  lines.push('  description: string')
  lines.push('  sku: string')
  lines.push('  image: string')
  lines.push('  remoteImage: string')
  lines.push('  sourceUrl: string')
  lines.push('}')
  lines.push('')
  lines.push('export const takeAwayCatalog: TakeAwayCatalogProduct[] = [')

  for (const p of products) {
    const payload = {
      slug: p.slug,
      title: p.title,
      price: p.price,
      description: p.description,
      sku: p.sku,
      image: p.image,
      remoteImage: p.remoteImage,
      sourceUrl: p.sourceUrl,
    }
    lines.push(`  ${JSON.stringify(payload)},`)
  }

  lines.push(']')
  lines.push('')
  return lines.join('\n')
}

;(async () => {
  const raw = await fs.readFile(inputPath, 'utf8')
  const parsed = JSON.parse(raw)

  const products = parsed
    .map((item) => {
      const slug = cleanText(item.slug)
      const title = cleanText(item.title || slug)
      const price = cleanText(item.priceText).replace(/\s*€\s*/g, ' €').replace(/\s+/g, ' ').trim() || 'Prezzo da confermare'
      const description = cleanText(item.shortDescription)
      const sku = cleanText(item.sku)
      const remoteImage = cleanText(Array.isArray(item.images) ? item.images[0] || '' : '')
      const ext = extFromUrl(remoteImage)
      const localImagePath = remoteImage ? `images/products/${slug}${ext}` : ''

      return {
        slug,
        title,
        price,
        description,
        sku,
        image: localImagePath ? `/${localImagePath}` : '',
        localImagePath,
        remoteImage,
        sourceUrl: cleanText(item.url),
      }
    })
    .filter((item) => item.slug && item.title)
    .sort((a, b) => a.title.localeCompare(b.title, 'it'))

  const imageStats = await downloadImages(products)
  const tsContent = buildTs(products)
  await fs.writeFile(outTsPath, tsContent, 'utf8')

  console.log(`PRODUCTS ${products.length}`)
  console.log(`TS ${outTsPath}`)
  console.log(`IMAGES_OK ${imageStats.ok}`)
  console.log(`IMAGES_FAIL ${imageStats.fail}`)
})()

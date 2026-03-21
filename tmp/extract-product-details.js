const fs = require('fs/promises');
const path = require('path');

const categories = [
  'https://www.fusionrestaurant.it/product-category/sushi-box/',
  'https://www.fusionrestaurant.it/product-category/uramaki/',
  'https://www.fusionrestaurant.it/product-category/nighiri/',
  'https://www.fusionrestaurant.it/product-category/temaki/',
  'https://www.fusionrestaurant.it/product-category/hosomaki/',
  'https://www.fusionrestaurant.it/product-category/usuzukuri/',
  'https://www.fusionrestaurant.it/product-category/novita/',
  'https://www.fusionrestaurant.it/product-category/nippo-tapas/',
  'https://www.fusionrestaurant.it/product-category/poke/',
  'https://www.fusionrestaurant.it/product-category/futomaki/',
  'https://www.fusionrestaurant.it/product-category/gunkan/',
  'https://www.fusionrestaurant.it/product-category/chirashi/',
  'https://www.fusionrestaurant.it/product-category/uramaki-venere/',
  'https://www.fusionrestaurant.it/product-category/sashimi/',
  'https://www.fusionrestaurant.it/product-category/salad/',
  'https://www.fusionrestaurant.it/product-category/agemono/',
  'https://www.fusionrestaurant.it/product-category/primi/',
  'https://www.fusionrestaurant.it/product-category/secondi/',
  'https://www.fusionrestaurant.it/product-category/zensai-antipasti/',
  'https://www.fusionrestaurant.it/product-category/dolci/'
];

const headers = { 'user-agent': 'Mozilla/5.0' };
const outPath = '/Users/giacomotronconi/FUSION RSTRNT/tmp/product-details.json';

const decodeEntities = (s = '') => s
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/&lt;/gi, '<')
  .replace(/&gt;/gi, '>')
  .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
  .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));

const stripTags = (s = '') => decodeEntities(
  s
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
).replace(/\s+/g, ' ').trim();

const normalizeInternal = (u, base) => {
  try {
    const x = new URL(u, base);
    const host = x.hostname.replace(/^www\./, '');
    if (host !== 'fusionrestaurant.it') return null;
    x.hash = '';
    x.search = '';
    const p = x.pathname.replace(/\/+$/, '') || '/';
    return x.origin + p;
  } catch {
    return null;
  }
};

const attrContent = (html, prop, isName = false) => {
  const key = isName ? 'name' : 'property';
  const esc = prop.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `<meta[^>]*${key}=["']${esc}["'][^>]*content=["']([^"']+)["'][^>]*>|<meta[^>]*content=["']([^"']+)["'][^>]*${key}=["']${esc}["'][^>]*>`,
    'i'
  );
  const m = html.match(re);
  return decodeEntities((m && (m[1] || m[2])) || '').trim();
};

const firstMatchText = (html, re) => {
  const m = html.match(re);
  return m ? stripTags(m[1] || '') : '';
};

const fetchWithTimeout = async (url, ms = 7000) => {
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), ms);
  try {
    return await fetch(url, { headers, signal: ac.signal });
  } finally {
    clearTimeout(timer);
  }
};

const extractProduct = (html, url) => {
  const slug = (() => {
    try {
      const p = new URL(url).pathname.replace(/\/+$/, '').split('/').filter(Boolean);
      return p[p.length - 1] || '';
    } catch {
      return '';
    }
  })();

  let title = firstMatchText(html, /<h1[^>]*class=["'][^"']*product_title[^"']*["'][^>]*>([\s\S]*?)<\/h1>/i);
  if (!title) title = attrContent(html, 'og:title');

  let priceText = firstMatchText(html, /<[^>]*class=["'][^"']*price[^"']*["'][^>]*>([\s\S]*?)<\//i);
  if (!priceText) {
    const amt = attrContent(html, 'product:price:amount');
    if (amt) priceText = amt;
  }

  let shortDescription = firstMatchText(
    html,
    /<div[^>]*class=["'][^"']*woocommerce-product-details__short-description[^"']*["'][^>]*>([\s\S]*?)<\/div>/i
  );
  if (!shortDescription) shortDescription = attrContent(html, 'description', true);

  let sku = firstMatchText(html, /<span[^>]*class=["'][^"']*sku[^"']*["'][^>]*>([\s\S]*?)<\/span>/i);
  if (!sku) {
    const m = html.match(/data-product_sku=["']([^"']+)["']/i);
    sku = m ? decodeEntities(m[1]).trim() : '';
  }

  const images = new Set();
  const ogImage = attrContent(html, 'og:image');
  if (ogImage) images.add(ogImage);

  const reLarge = /data-large_image=["']([^"']+)["']/gi;
  let mm;
  while ((mm = reLarge.exec(html)) !== null) {
    try {
      images.add(new URL(mm[1], url).href);
    } catch {
      // ignore invalid image URL
    }
  }

  return {
    url,
    slug,
    title,
    priceText,
    shortDescription,
    sku,
    images: [...images]
  };
};

(async () => {
  const hrefRe = /href\s*=\s*["']([^"']+)["']/gi;
  const productUrls = new Set();

  for (const cat of categories) {
    try {
      const r = await fetchWithTimeout(cat, 9000);
      const t = await r.text();
      let m;
      while ((m = hrefRe.exec(t)) !== null) {
        const n = normalizeInternal(m[1], cat);
        if (n && n.includes('/product/')) productUrls.add(n);
      }
    } catch {
      // keep going even if one category fails
    }
  }

  const urls = [...productUrls].sort();
  const products = new Array(urls.length);
  let cursor = 0;
  let errors = 0;
  const workers = 10;
  let done = 0;

  const work = async () => {
    while (true) {
      const i = cursor;
      cursor += 1;
      if (i >= urls.length) return;
      const u = urls[i];
      try {
        const r = await fetchWithTimeout(u, 7000);
        const html = await r.text();
        products[i] = extractProduct(html, u);
      } catch (e) {
        errors += 1;
        products[i] = {
          url: u,
          slug: u.split('/').filter(Boolean).pop() || '',
          title: '',
          priceText: '',
          shortDescription: '',
          sku: '',
          images: [],
          error: e && e.name ? e.name : 'fetch_error'
        };
      } finally {
        done += 1;
        if (done % 20 === 0 || done === urls.length) {
          console.log(`PROGRESS ${done}/${urls.length}`);
        }
      }
    }
  };

  await Promise.all(Array.from({ length: workers }, work));

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, JSON.stringify(products, null, 2), 'utf8');

  console.log(`PRODUCTS ${products.length}`);
  console.log(`OUTPUT ${outPath}`);
  console.log(`ERRORS ${errors}`);
  console.log('SAMPLE');
  for (const p of products.slice(0, 5)) {
    console.log(`${p.url} | ${p.title || ''} | ${p.priceText || ''}`);
  }
})();

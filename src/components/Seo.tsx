import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { defaultSeo, seoByPath } from '../data/siteContent'
import { getCanonicalPath } from '../lib/sectionRouting'

type SeoProps = {
  title?: string
  description?: string
}

export function Seo({ title, description }: SeoProps) {
  const location = useLocation()
  const canonicalPath = getCanonicalPath(location.pathname)
  const merged = seoByPath[canonicalPath] ?? defaultSeo
  const seoTitle = title ?? merged.title
  const seoDescription = description ?? merged.description
  const canonical = `https://fusionrestaurant.it${canonicalPath}`

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  )
}

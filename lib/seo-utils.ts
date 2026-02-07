// SEO Utility Functions for The Deck Man

import { Metadata } from 'next'
import { siteConfig } from './seo-config'
import { getKeywordsForService } from './seo-keywords'

interface SEOParams {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
}

export function generateMetadata(params: SEOParams): Metadata {
  const {
    title,
    description,
    keywords,
    image = '/og-image.png',
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors
  } = params

  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.defaultMetadata.title

  const metaDescription = description || siteConfig.defaultMetadata.description
  const metaKeywords = keywords || siteConfig.defaultMetadata.keywords
  const canonicalUrl = url ? `${siteConfig.url}${url}` : siteConfig.url
  const imageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`

  return {
    title: fullTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: authors ? authors.map(name => ({ name })) : [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: title || siteConfig.defaultMetadata.title,
      description: metaDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteConfig.name,
        },
      ],
      locale: 'en_US',
      type: type,
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.defaultMetadata.title,
      description: metaDescription,
      images: [imageUrl],
      creator: '@thedeckman',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  }
}

export function generateServiceMetadata(service: {
  title: string
  description: string
  keywords: string[]
  slug: string
}): Metadata {
  // Combine service-specific keywords with extended keywords from our database
  const extendedKeywords = getKeywordsForService(service.slug)
  const allKeywords = [...new Set([...service.keywords, ...extendedKeywords])]

  return generateMetadata({
    title: service.title,
    description: service.description,
    keywords: allKeywords,
    url: `/services/${service.slug}`,
    type: 'website',
  })
}

export function generateProjectMetadata(project: {
  title: string
  description: string
  keywords: string[]
  slug: string
  image?: string
}): Metadata {
  return generateMetadata({
    title: project.title,
    description: project.description,
    keywords: project.keywords,
    url: `/projects/${project.slug}`,
    image: project.image,
    type: 'article',
  })
}

// JSON-LD Schema Generator
export function generateServiceSchema(service: {
  title: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.business.name,
      telephone: siteConfig.business.phone,
      url: siteConfig.url
    },
    areaServed: {
      '@type': 'State',
      name: siteConfig.serviceArea.state
    },
    serviceType: 'Deck Restoration and Refinishing',
    url: `${siteConfig.url}/services/${service.slug}`
  }
}

export function generateProjectSchema(project: {
  title: string
  description: string
  location: string
  duration: string
  images: { url: string; alt: string }[]
  rating?: string
  testimonial?: {
    name: string
    text: string
    rating: number
  }
}) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: {
      '@type': 'Organization',
      name: siteConfig.business.name
    },
    image: project.images.map(img => ({
      '@type': 'ImageObject',
      url: img.url.startsWith('http') ? img.url : `${siteConfig.url}${img.url}`,
      description: img.alt
    }))
  }

  if (project.testimonial) {
    schema.review = {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: project.testimonial.name
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: project.testimonial.rating,
        bestRating: 5
      },
      reviewBody: project.testimonial.text
    }
  }

  return schema
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`
    }))
  }
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateAggregateRatingSchema(rating: {
  value: number
  count: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: rating.value,
    reviewCount: rating.count,
    bestRating: rating.bestRating || 5,
    worstRating: rating.worstRating || 1
  }
}

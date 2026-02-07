import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/services-content'
import { ServicePageContent } from '@/components/service-page-content'
import { generateServiceMetadata, generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/seo-utils'

const slug = 'deck-restoration'

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return generateServiceMetadata({
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    slug: service.slug,
  })
}

export default function DeckRestorationPage() {
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.longDescription,
    slug: service.slug,
  })

  const faqSchema = generateFAQSchema(service.faq)

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePageContent service={service} />
    </>
  )
}

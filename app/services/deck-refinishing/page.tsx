import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getServiceBySlug } from '@/lib/services-content'
import { ServicePageContent } from '@/components/service-page-content'

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug('deck-refinishing')

  if (!service) {
    return {}
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    keywords: service.seo.keywords,
    openGraph: {
      title: service.seo.title,
      description: service.seo.description,
      type: 'website',
    },
  }
}

export default function DeckRefinishingPage() {
  const service = getServiceBySlug('deck-refinishing')

  if (!service) {
    notFound()
  }

  return <ServicePageContent service={service} />
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects-content'
import { ProjectPageContent } from '@/components/project-page-content'
import { generateProjectMetadata, generateProjectSchema, generateBreadcrumbSchema } from '@/lib/seo-utils'

const slug = 'luxury-hillside-deck'

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return generateProjectMetadata({
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    slug: project.slug,
    image: project.images[0]?.url,
  })
}

export default function LuxuryHillsideDeckPage() {
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const projectSchema = generateProjectSchema({
    title: project.title,
    description: project.shortDescription,
    location: project.location,
    duration: project.duration,
    images: project.images,
    rating: project.rating,
    testimonial: project.testimonial,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: project.title, url: `/projects/${project.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectPageContent project={project} />
    </>
  )
}

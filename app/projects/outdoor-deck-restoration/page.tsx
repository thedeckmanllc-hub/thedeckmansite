import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug } from '@/lib/projects-content'
import { ProjectPageContent } from '@/components/project-page-content'

export async function generateMetadata(): Promise<Metadata> {
  const project = getProjectBySlug('outdoor-deck-restoration')

  if (!project) {
    return {}
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      type: 'website',
      images: [project.images[0].url],
    },
  }
}

export default function OutdoorDeckRestorationPage() {
  const project = getProjectBySlug('outdoor-deck-restoration')

  if (!project) {
    notFound()
  }

  return <ProjectPageContent project={project} />
}

import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo-config'
import { getAllServiceSlugs } from '@/lib/services-content'
import { getAllProjectSlugs } from '@/lib/projects-content'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Home page
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]

  // Service pages
  const serviceSlugs = getAllServiceSlugs()
  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // Project pages
  const projectSlugs = getAllProjectSlugs()
  const projectRoutes: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes, ...projectRoutes]
}

import { Metadata } from 'next'
import { generateMetadata as genMeta } from '@/lib/seo-utils'
import { LandingPageClient } from './page-client'

export const metadata: Metadata = genMeta({
  title: 'Professional Deck Restoration & Refinishing Services',
  description: 'Expert deck restoration, refinishing, staining, and repair services in San Diego County. Transform your outdoor space with professional craftsmanship. Licensed, Insured, 5-Star Rated. Free Estimates.',
  keywords: [
    'deck restoration',
    'deck refinishing',
    'deck staining',
    'deck repair',
    'deck cleaning',
    'deck sealing',
    'wood deck restoration san diego',
    'deck contractor san diego county',
    'redwood deck restoration',
    'cedar deck refinishing',
    'ipe deck maintenance',
    'pressure treated deck repair',
    'composite deck cleaning',
    'professional deck services california',
    'deck maintenance san diego county'
  ],
  url: '/',
})

export default function LandingPage() {
  return <LandingPageClient />
}

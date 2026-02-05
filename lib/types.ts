export interface Service {
  icon: string
  title: string
  description: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  city: string
  state: string
  zip: string
}

export const servicesData: Service[] = [
  {
    icon: 'restoration',
    title: 'Deck Restoration',
    description: 'Complete deck revival including structural assessment, deep cleaning, and repair of damaged boards.',
  },
  {
    icon: 'refinishing',
    title: 'Deck Refinishing',
    description: 'Professional sanding, staining, and sealing to protect and beautify your deck for years to come.',
  },
  {
    icon: 'painting',
    title: 'Deck Staining & Painting',
    description: 'Premium quality stains and paints that enhance natural wood beauty while providing weather protection.',
  },
  {
    icon: 'sealing',
    title: 'Deck Sealing',
    description: 'Advanced waterproofing and UV protection to extend your deck\'s lifespan and maintain its appearance.',
  },
  {
    icon: 'repair',
    title: 'Deck Repair',
    description: 'Expert repair of railings, boards, stairs, and structural components to ensure safety and durability.',
  },
  {
    icon: 'cleaning',
    title: 'Deck Cleaning',
    description: 'Power washing and deep cleaning to remove dirt, mold, mildew, and old finishes safely.',
  },
]

export const contactInfo: ContactInfo = {
  phone: '(760) 555-1234',
  email: 'info@thedeckman.com',
  address: 'Fallbrook',
  city: 'Fallbrook',
  state: 'CA',
  zip: '92028',
}

export const serviceSlugMap: Record<string, string> = {
  'restoration': 'deck-restoration',
  'refinishing': 'deck-refinishing',
  'painting': 'deck-staining-painting',
  'sealing': 'deck-sealing',
  'repair': 'deck-repair',
  'cleaning': 'deck-cleaning',
}

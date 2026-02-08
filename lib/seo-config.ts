// Centralized SEO Configuration for The Deck Man

export const siteConfig = {
  name: 'The Deck Man',
  url: 'https://thedeckmansd.com',
  description: 'Expert deck restoration, sanding, staining, and repair services. Bring your deck back to life with The Deck Man - Licensed, Insured, 5-Star Rated.',

  business: {
    name: 'The Deck Man',
    legalName: 'The Deck Man, LLC',
    phone: '+1 (760) 555-1234',
    email: 'info@thedeckmansd.com',
    address: {
      street: '35165 Citron Ln',
      city: 'Fallbrook',
      state: 'CA',
      zip: '92028',
      country: 'US'
    },
    geo: {
      latitude: 33.3764,
      longitude: -117.2514
    },
    hours: 'Mo-Fr 07:00-18:00, Sa 08:00-16:00',
    priceRange: '$$'
  },

  serviceArea: {
    cities: [
      'Fallbrook',
      'Vista',
      'Oceanside',
      'Temecula',
      'Escondido',
      'Murrieta',
      'San Marcos',
      'Carlsbad',
      'Encinitas',
      'Poway',
      'Rainbow',
      'Bonsall',
      'Valley Center'
    ],
    region: 'San Diego County',
    state: 'California'
  },

  social: {
    facebook: '',
    instagram: 'https://www.instagram.com/thedeckmansd',
    twitter: '',
    linkedin: '',
    youtube: ''
  },

  defaultMetadata: {
    title: 'The Deck Man | Professional Deck Restoration & Refinishing',
    description: 'Expert deck restoration, sanding, staining, and repair services in San Diego County. Licensed, Insured, 5-Star Rated. Free Estimates.',
    keywords: [
      // Основные услуги
      'deck restoration',
      'deck repair',
      'deck refinishing',
      'deck sanding',
      'deck painting',
      'deck staining',
      'deck resurfacing',

      // Шлифовка и покраска
      'deck sanding service',
      'deck painting service',
      'deck staining service',
      'wood deck sanding',
      'deck oiling',
      'deck sealing',
      'deck waterproofing',

      // Материалы
      'wood deck repair',
      'redwood deck restoration',
      'pressure treated deck repair',
      'cedar deck sanding',
      'composite deck repair',

      // Ремонт и конструкция
      'deck board replacement',
      'deck joist repair',
      'deck railing repair',
      'deck stairs repair',
      'deck structural repair',

      // Локальные (San Diego)
      'deck repair San Diego',
      'deck restoration San Diego',
      'deck sanding San Diego',
      'deck painting San Diego',
      'deck contractor San Diego',
      'deck repair near me',

      // Fallbrook специфичные
      'deck repair Fallbrook',
      'deck restoration Fallbrook',
      'deck contractor Fallbrook',

      // Коммерческие + сервисные
      'residential deck repair',
      'exterior deck repair',
      'professional deck service',
      'licensed deck contractor',
      'affordable deck repair',
      'deck maintenance service',

      // Специфичные проблемы
      'deck inspection',
      'deck safety repair',
      'rotten deck boards',
      'deck wood rot repair',
      'deck refinishing contractor',
      'outdoor deck repair',
      'deck cleaning service'
    ],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: 'The Deck Man'
    }
  },

  // Дополнительные категории ключевых слов для разных целей
  keywordCategories: {
    primary: [
      'deck restoration',
      'deck repair',
      'deck refinishing',
      'deck sanding',
      'deck staining',
      'deck painting'
    ],
    materials: [
      'wood deck repair',
      'redwood deck restoration',
      'cedar deck sanding',
      'pressure treated deck repair',
      'composite deck repair',
      'ipe deck refinishing'
    ],
    services: [
      'deck sanding service',
      'deck painting service',
      'deck staining service',
      'deck sealing',
      'deck waterproofing',
      'deck oiling',
      'deck resurfacing'
    ],
    structural: [
      'deck board replacement',
      'deck joist repair',
      'deck beam repair',
      'deck railing repair',
      'deck stairs repair',
      'deck structural repair',
      'deck framing repair'
    ],
    local: [
      'deck repair San Diego',
      'deck restoration San Diego',
      'deck sanding San Diego',
      'deck painting San Diego',
      'deck contractor San Diego',
      'deck repair Fallbrook',
      'deck restoration Fallbrook',
      'deck repair near me'
    ],
    commercial: [
      'residential deck repair',
      'professional deck service',
      'licensed deck contractor',
      'affordable deck repair',
      'deck maintenance service',
      'exterior deck repair'
    ],
    problems: [
      'deck inspection',
      'deck safety repair',
      'rotten deck boards',
      'deck wood rot repair',
      'deck refinishing contractor',
      'outdoor deck repair'
    ]
  }
}

export const jsonLdConfig = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.business.name,
    legalName: siteConfig.business.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    telephone: siteConfig.business.phone,
    email: siteConfig.business.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.state,
      postalCode: siteConfig.business.address.zip,
      addressCountry: siteConfig.business.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00'
    },
    priceRange: siteConfig.business.priceRange,
    areaServed: siteConfig.serviceArea.cities.map(city => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: siteConfig.serviceArea.state
      }
    })),
    sameAs: Object.values(siteConfig.social).filter(Boolean)
  },

  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#organization`
    }
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#localbusiness`,
    name: siteConfig.business.name,
    image: `${siteConfig.url}/og-image.png`,
    telephone: siteConfig.business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.business.address.street,
      addressLocality: siteConfig.business.address.city,
      addressRegion: siteConfig.business.address.state,
      postalCode: siteConfig.business.address.zip,
      addressCountry: siteConfig.business.address.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.business.geo.latitude,
      longitude: siteConfig.business.geo.longitude
    },
    url: siteConfig.url,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '18:00'
    },
    priceRange: siteConfig.business.priceRange
  }
}

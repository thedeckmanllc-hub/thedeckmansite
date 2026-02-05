export interface ServiceContent {
  slug: string
  icon: string
  title: string
  shortDescription: string
  heroTitle: string
  heroSubtitle: string
  longDescription: string
  benefits: string[]
  process: { step: number; title: string; description: string }[]
  faq: { question: string; answer: string }[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const servicesContent: ServiceContent[] = [
  {
    slug: 'deck-restoration',
    icon: 'restoration',
    title: 'Deck Restoration',
    shortDescription: 'Complete deck revival including structural assessment, deep cleaning, and repair of damaged boards.',
    heroTitle: 'Professional Deck Restoration Services',
    heroSubtitle: 'Bring your weathered deck back to life with expert restoration',
    longDescription: 'Our comprehensive deck restoration service transforms old, weathered decks into beautiful outdoor living spaces. We begin with a thorough structural assessment to identify any safety issues or damaged components. Our team then deep cleans the entire surface, removes old finishes, repairs or replaces damaged boards, and applies premium protective coatings. Whether your deck has suffered from years of weather exposure, neglect, or simple wear and tear, we have the expertise to restore it to its former glory.',
    benefits: [
      'Complete structural assessment and safety inspection',
      'Professional deep cleaning and surface preparation',
      'Damaged board repair or replacement',
      'Premium stain and sealant application',
      'Extended deck lifespan by 10-15 years',
      'Increased property value',
      'Expert craftsmanship with attention to detail',
      'Satisfaction guarantee on all work'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Inspection',
        description: 'We thoroughly inspect your deck to assess its condition, identify problem areas, and determine the best restoration approach.'
      },
      {
        step: 2,
        title: 'Deep Cleaning',
        description: 'Professional power washing removes dirt, mold, mildew, and old finishes, preparing the surface for restoration.'
      },
      {
        step: 3,
        title: 'Repairs & Replacement',
        description: 'We repair or replace damaged boards, railings, and structural components to ensure safety and durability.'
      },
      {
        step: 4,
        title: 'Finishing',
        description: 'Application of premium stains, sealants, and protective coatings to enhance beauty and weather resistance.'
      }
    ],
    faq: [
      {
        question: 'How long does deck restoration take?',
        answer: 'Most deck restoration projects take 3-5 days depending on the size and condition of your deck. We provide a detailed timeline during our free estimate.'
      },
      {
        question: 'Is restoration cheaper than replacing a deck?',
        answer: 'Yes, in most cases deck restoration costs 30-50% less than full replacement while extending your deck\'s life by 10-15 years.'
      },
      {
        question: 'What is included in deck restoration?',
        answer: 'Our restoration includes structural assessment, deep cleaning, repairs, board replacement (if needed), sanding, and application of premium stains and sealants.'
      }
    ],
    seo: {
      title: 'Deck Restoration Services in Fallbrook, CA | The Deck Man',
      description: 'Professional deck restoration in Fallbrook, CA. Complete deck revival with structural assessment, repairs, and premium finishes. Free estimates. Call (760) 555-1234.',
      keywords: ['deck restoration fallbrook', 'deck restoration san diego county', 'restore old deck', 'deck revival', 'deck renewal services']
    }
  },
  {
    slug: 'deck-refinishing',
    icon: 'refinishing',
    title: 'Deck Refinishing',
    shortDescription: 'Professional sanding, staining, and sealing to protect and beautify your deck for years to come.',
    heroTitle: 'Expert Deck Refinishing Services',
    heroSubtitle: 'Restore beauty and protection to your deck with professional refinishing',
    longDescription: 'Deck refinishing is essential for maintaining the beauty and integrity of your outdoor space. Our refinishing process begins with thorough surface preparation, including professional sanding to remove old finishes and smooth out imperfections. We then apply premium quality stains that enhance the natural beauty of your wood while providing excellent UV and weather protection. Finally, we seal your deck with advanced waterproofing products that lock in the stain and create a durable, long-lasting finish. Regular refinishing every 2-3 years is the key to keeping your deck looking beautiful and protecting your investment.',
    benefits: [
      'Professional sanding for smooth, even surface',
      'Premium quality stains in various colors',
      'Advanced UV and weather protection',
      'Enhanced natural wood grain and beauty',
      'Long-lasting waterproof sealant',
      'Prevents wood rot and decay',
      'Increases deck lifespan significantly',
      'Free color consultation and samples'
    ],
    process: [
      {
        step: 1,
        title: 'Surface Preparation',
        description: 'We sand the entire deck surface to remove old finishes, smooth imperfections, and prepare for new stain.'
      },
      {
        step: 2,
        title: 'Cleaning & Drying',
        description: 'Thorough cleaning removes all dust and debris, followed by proper drying time for optimal stain absorption.'
      },
      {
        step: 3,
        title: 'Stain Application',
        description: 'Professional application of premium wood stain in your chosen color for beautiful, even coverage.'
      },
      {
        step: 4,
        title: 'Sealing',
        description: 'Application of advanced waterproofing sealant to protect against moisture, UV rays, and weather damage.'
      }
    ],
    faq: [
      {
        question: 'How often should I refinish my deck?',
        answer: 'We recommend refinishing your deck every 2-3 years in California\'s climate to maintain optimal protection and appearance.'
      },
      {
        question: 'Can I choose the stain color?',
        answer: 'Absolutely! We offer a wide range of premium stain colors and provide free samples to help you choose the perfect shade for your home.'
      },
      {
        question: 'How long before I can use my deck after refinishing?',
        answer: 'Most stains and sealants require 24-48 hours of dry time. We\'ll provide specific timing based on the products used and weather conditions.'
      }
    ],
    seo: {
      title: 'Deck Refinishing Services in Fallbrook, CA | The Deck Man',
      description: 'Professional deck refinishing in Fallbrook, CA. Expert sanding, staining, and sealing services. Premium quality finishes. Free estimates. Call (760) 555-1234.',
      keywords: ['deck refinishing fallbrook', 'deck refinishing san diego', 'deck sanding staining', 'refinish deck california', 'deck surface refinishing']
    }
  },
  {
    slug: 'deck-staining-painting',
    icon: 'painting',
    title: 'Deck Staining & Painting',
    shortDescription: 'Premium quality stains and paints that enhance natural wood beauty while providing weather protection.',
    heroTitle: 'Professional Deck Staining & Painting',
    heroSubtitle: 'Transform your deck with beautiful, long-lasting color',
    longDescription: 'Our deck staining and painting services combine aesthetic enhancement with superior protection. We use only premium quality products specifically formulated for outdoor wood surfaces. Whether you prefer the natural look of transparent or semi-transparent stains that showcase wood grain, or the bold statement of solid color stains and paints, we have the expertise to deliver flawless results. Our meticulous surface preparation ensures excellent adhesion and durability, while our application techniques provide even coverage and a professional finish that will enhance your home\'s curb appeal and protect your deck for years to come.',
    benefits: [
      'Wide selection of premium stain and paint colors',
      'Transparent, semi-transparent, and solid color options',
      'Superior UV and weather protection',
      'Enhanced curb appeal and property value',
      'Professional surface preparation',
      'Even, streak-free application',
      'Eco-friendly product options available',
      'Free color consultation and samples'
    ],
    process: [
      {
        step: 1,
        title: 'Color Consultation',
        description: 'We help you choose the perfect color and finish type for your deck, providing samples to ensure satisfaction.'
      },
      {
        step: 2,
        title: 'Surface Prep',
        description: 'Thorough cleaning, sanding, and preparation ensures optimal adhesion and a smooth, professional finish.'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Expert application using professional techniques for even coverage and beautiful, long-lasting results.'
      },
      {
        step: 4,
        title: 'Final Inspection',
        description: 'Complete quality check and cleanup, ensuring every detail meets our high standards before project completion.'
      }
    ],
    faq: [
      {
        question: 'Should I stain or paint my deck?',
        answer: 'Staining is typically preferred as it allows wood to breathe and showcases natural grain. Paint provides more color options but requires more maintenance. We\'ll help you choose the best option for your needs.'
      },
      {
        question: 'How long do deck stains and paints last?',
        answer: 'Quality stains typically last 2-4 years, while paints can last 3-5 years with proper maintenance. Factors include sun exposure, weather, and foot traffic.'
      },
      {
        question: 'Do you offer eco-friendly stain options?',
        answer: 'Yes! We offer low-VOC and eco-friendly stain and paint options that are better for the environment while still providing excellent protection and beauty.'
      }
    ],
    seo: {
      title: 'Deck Staining & Painting Services in Fallbrook, CA | The Deck Man',
      description: 'Professional deck staining and painting in Fallbrook, CA. Premium quality finishes, wide color selection. Expert application. Free estimates. Call (760) 555-1234.',
      keywords: ['deck staining fallbrook', 'deck painting san diego', 'deck color stain', 'paint deck california', 'deck finishing services']
    }
  },
  {
    slug: 'deck-sealing',
    icon: 'sealing',
    title: 'Deck Sealing',
    shortDescription: 'Advanced waterproofing and UV protection to extend your deck\'s lifespan and maintain its appearance.',
    heroTitle: 'Professional Deck Sealing Services',
    heroSubtitle: 'Protect your investment with advanced waterproofing',
    longDescription: 'Deck sealing is your deck\'s first line of defense against California\'s harsh sun, occasional rain, and daily wear and tear. Our professional sealing service uses advanced waterproofing products that penetrate deep into the wood fibers to create a protective barrier against moisture, UV rays, mold, and mildew. Unlike basic sealants, our premium products are specifically formulated for the California climate, providing superior protection without compromising the natural beauty of your wood. Regular sealing is the most cost-effective way to extend your deck\'s lifespan and avoid costly repairs down the line.',
    benefits: [
      'Advanced waterproofing technology',
      'Superior UV protection prevents fading',
      'Prevents mold and mildew growth',
      'Protects against wood rot and decay',
      'Maintains natural wood appearance',
      'Non-slip finish options available',
      'Quick drying time for minimal disruption',
      'Extends deck lifespan by years'
    ],
    process: [
      {
        step: 1,
        title: 'Cleaning & Inspection',
        description: 'We clean the deck surface and inspect for any issues that need addressing before sealing.'
      },
      {
        step: 2,
        title: 'Surface Drying',
        description: 'Ensuring the wood is completely dry is crucial for proper sealant absorption and effectiveness.'
      },
      {
        step: 3,
        title: 'Sealant Application',
        description: 'Professional application of premium sealant using techniques that ensure complete coverage and penetration.'
      },
      {
        step: 4,
        title: 'Curing Time',
        description: 'We provide guidance on proper curing time and when your deck will be ready for full use.'
      }
    ],
    faq: [
      {
        question: 'How often should I seal my deck?',
        answer: 'In California\'s climate, we recommend sealing your deck every 1-2 years for optimal protection, depending on sun exposure and usage.'
      },
      {
        question: 'Can I seal my deck myself?',
        answer: 'While DIY is possible, professional sealing ensures proper surface preparation, product selection, and application techniques that significantly improve longevity and effectiveness.'
      },
      {
        question: 'How long does deck sealing take?',
        answer: 'Most deck sealing projects can be completed in 1-2 days, including preparation and application. Curing typically takes 24-48 hours before normal use.'
      }
    ],
    seo: {
      title: 'Deck Sealing Services in Fallbrook, CA | The Deck Man',
      description: 'Professional deck sealing in Fallbrook, CA. Advanced waterproofing and UV protection for your deck. Expert application. Free estimates. Call (760) 555-1234.',
      keywords: ['deck sealing fallbrook', 'deck waterproofing san diego', 'seal deck california', 'deck protection services', 'waterproof deck coating']
    }
  },
  {
    slug: 'deck-repair',
    icon: 'repair',
    title: 'Deck Repair',
    shortDescription: 'Expert repair of railings, boards, stairs, and structural components to ensure safety and durability.',
    heroTitle: 'Expert Deck Repair Services',
    heroSubtitle: 'Safety first - professional repairs you can trust',
    longDescription: 'A damaged deck isn\'t just unsightly - it\'s a safety hazard. Our expert deck repair services address everything from minor cosmetic issues to serious structural problems. We specialize in repairing loose or damaged railings, replacing rotted or cracked boards, fixing wobbly stairs, and reinforcing structural components. Our team has the experience to identify hidden issues that might not be immediately visible, ensuring your deck is not only beautiful but also safe for your family and guests. We use quality materials that match your existing deck and provide repairs that stand the test of time.',
    benefits: [
      'Comprehensive safety inspections',
      'Expert diagnosis of structural issues',
      'Quality materials matching existing deck',
      'Railing and stair repairs',
      'Rotted board replacement',
      'Structural reinforcement',
      'Fast turnaround times',
      'Warranty on all repair work'
    ],
    process: [
      {
        step: 1,
        title: 'Safety Inspection',
        description: 'Thorough examination of your deck to identify all issues, both visible and hidden, that need repair.'
      },
      {
        step: 2,
        title: 'Repair Plan',
        description: 'We provide a detailed plan and quote outlining all necessary repairs, prioritizing safety concerns.'
      },
      {
        step: 3,
        title: 'Expert Repairs',
        description: 'Professional repair work using quality materials and proven techniques to restore safety and function.'
      },
      {
        step: 4,
        title: 'Final Testing',
        description: 'Complete testing of all repaired components to ensure structural integrity and safety before project completion.'
      }
    ],
    faq: [
      {
        question: 'How do I know if my deck needs repairs?',
        answer: 'Warning signs include loose railings, soft or spongy boards, visible rot, protruding nails, wobbly stairs, or any areas that feel unsafe. We offer free inspections to assess your deck\'s condition.'
      },
      {
        question: 'Can you match my existing deck boards?',
        answer: 'Yes! We work hard to match your existing materials, wood type, and finish. If exact matches aren\'t available, we\'ll discuss the best alternatives with you.'
      },
      {
        question: 'Is it better to repair or replace my deck?',
        answer: 'It depends on the extent of damage. If less than 30% of your deck needs repair, repairs are usually more cost-effective. We\'ll give you an honest assessment and recommendation.'
      }
    ],
    seo: {
      title: 'Deck Repair Services in Fallbrook, CA | The Deck Man',
      description: 'Professional deck repair in Fallbrook, CA. Expert fixing of railings, boards, stairs, and structural issues. Safety first. Free inspection. Call (760) 555-1234.',
      keywords: ['deck repair fallbrook', 'deck repair san diego', 'fix deck boards', 'deck railing repair', 'rotted deck repair california']
    }
  },
  {
    slug: 'deck-cleaning',
    icon: 'cleaning',
    title: 'Deck Cleaning',
    shortDescription: 'Power washing and deep cleaning to remove dirt, mold, mildew, and old finishes safely.',
    heroTitle: 'Professional Deck Cleaning Services',
    heroSubtitle: 'Deep cleaning that reveals your deck\'s natural beauty',
    longDescription: 'Regular professional cleaning is essential for maintaining your deck\'s appearance and preventing long-term damage. Our deck cleaning service uses specialized equipment and techniques to safely remove dirt, grime, mold, mildew, algae, and old finishes without damaging the wood. We understand that different wood types and conditions require different approaches, so we customize our cleaning method for your specific deck. Whether you\'re preparing for refinishing, maintaining your deck\'s current finish, or just want to restore its appearance, our professional cleaning service will leave your deck looking fresh and clean.',
    benefits: [
      'Professional-grade power washing equipment',
      'Safe removal of mold, mildew, and algae',
      'Environmentally friendly cleaning solutions',
      'No damage to wood fibers',
      'Preparation for staining or sealing',
      'Extends life of existing finishes',
      'Brightens and restores natural color',
      'Prevents long-term deterioration'
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'We evaluate your deck\'s wood type, condition, and existing finish to determine the best cleaning approach.'
      },
      {
        step: 2,
        title: 'Pre-Treatment',
        description: 'Application of eco-friendly cleaning solutions to break down stubborn dirt, mold, and mildew.'
      },
      {
        step: 3,
        title: 'Power Washing',
        description: 'Professional power washing at the correct pressure to deep clean without damaging the wood.'
      },
      {
        step: 4,
        title: 'Final Rinse & Inspection',
        description: 'Thorough rinsing and inspection to ensure complete cleaning and customer satisfaction.'
      }
    ],
    faq: [
      {
        question: 'How often should I have my deck professionally cleaned?',
        answer: 'We recommend professional cleaning at least once a year, or twice a year for decks in shaded areas prone to mold and mildew growth.'
      },
      {
        question: 'Will power washing damage my deck?',
        answer: 'When done correctly by professionals, no. We use appropriate pressure levels and techniques for your specific wood type. DIY power washing often causes damage due to excessive pressure.'
      },
      {
        question: 'Should I clean before staining or sealing?',
        answer: 'Absolutely! Professional cleaning is essential before any refinishing work. It ensures proper adhesion and maximizes the lifespan of new stains and sealants.'
      }
    ],
    seo: {
      title: 'Deck Cleaning Services in Fallbrook, CA | The Deck Man',
      description: 'Professional deck cleaning and power washing in Fallbrook, CA. Safe removal of mold, dirt, and old finishes. Expert service. Free estimates. Call (760) 555-1234.',
      keywords: ['deck cleaning fallbrook', 'deck power washing san diego', 'deck pressure washing', 'clean deck california', 'remove deck mold mildew']
    }
  }
]

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return servicesContent.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return servicesContent.map(service => service.slug)
}

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
    longDescription: 'A weathered deck doesn\'t just affect your home\'s appearance it impacts the value and enjoyment of your entire outdoor space. Deck restoration is a comprehensive process that addresses both aesthetic and structural concerns, breathing new life into worn surfaces while ensuring long-term durability. Through careful assessment, expert craftsmanship, and premium materials, professional restoration can transform a tired, faded deck into a stunning feature that enhances your property and provides a safe, inviting space for relaxation and entertainment. From surface-level improvements to deeper structural work, the restoration process is tailored to each deck\'s unique condition and the specific needs of California\'s diverse climate.',
    benefits: [
      'Structural assessment and safety evaluation',
      'Professional cleaning and surface preparation',
      'Damaged component repair or replacement',
      'Quality stain and sealant application',
      'Deck longevity enhancement potential',
      'Property appearance improvement',
      'Skilled craftsmanship and attention to detail',
      'Professional service standards'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Comprehensive inspection to evaluate deck condition, identify concerns, and determine appropriate restoration methods based on specific needs.'
      },
      {
        step: 2,
        title: 'Surface Cleaning',
        description: 'Professional cleaning process removes contaminants, organic growth, and deteriorated finishes, preparing surfaces for restoration work.'
      },
      {
        step: 3,
        title: 'Repairs & Replacement',
        description: 'Addressing damaged boards, railings, and structural elements through repair or replacement as needed for functionality and safety.'
      },
      {
        step: 4,
        title: 'Finishing Application',
        description: 'Applying selected stains, sealants, and protective products to enhance appearance and provide environmental protection.'
      }
    ],
    faq: [
      {
        question: 'How long does deck restoration take?',
        answer: 'Project duration varies based on deck size, current condition, extent of work needed, and weather conditions. Timeline specifics can be discussed after assessing your particular deck and understanding the scope of work required.'
      },
      {
        question: 'Is restoration cheaper than replacing a deck?',
        answer: 'Cost comparisons between restoration and replacement depend on the deck\'s condition, extent of damage, structural integrity, and specific circumstances. Restoration can be a cost-effective option when the underlying structure is sound. We can evaluate your deck and discuss both approaches.'
      },
      {
        question: 'What is included in deck restoration?',
        answer: 'Deck restoration typically encompasses structural evaluation, surface cleaning, necessary repairs, component replacement as needed, surface preparation, and application of protective finishes. The specific scope varies based on individual deck conditions and requirements.'
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
    longDescription: 'Deck refinishing represents one of the most effective approaches to maintaining and enhancing outdoor wood surfaces. The refinishing process involves careful surface preparation, removal of existing finishes, and application of protective coatings designed to withstand California\'s varied climate conditions. This multi-step procedure addresses both aesthetic concerns and functional protection needs, helping to preserve the natural characteristics of wood while providing defense against environmental factors. Professional refinishing work combines technical expertise with quality materials, creating results that reflect attention to detail and understanding of wood care principles. The approach taken can vary based on the deck\'s current condition, wood type, and exposure to elements.',
    benefits: [
      'Professional surface preparation and sanding techniques',
      'Selection of premium quality stains and finishes',
      'UV and weather protection application',
      'Enhancement of natural wood grain characteristics',
      'Waterproof sealant options',
      'Wood preservation approaches',
      'Extended surface longevity potential',
      'Color consultation available'
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
        answer: 'Refinishing frequency depends on various factors including sun exposure, weather conditions, foot traffic, and wood type. Many homeowners in California\'s climate consider refinishing every few years to maintain appearance and protection.'
      },
      {
        question: 'Can I choose the stain color?',
        answer: 'Yes, there are numerous stain color options available. We can provide samples and discuss color choices that complement your home and meet your aesthetic preferences.'
      },
      {
        question: 'How long before I can use my deck after refinishing?',
        answer: 'Drying time varies based on the products used, weather conditions, temperature, and humidity. Specific guidance on timing and deck usage will be provided based on the particular circumstances of your project.'
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
    longDescription: 'Deck staining and painting services focus on enhancing outdoor wood surfaces through color application and protective coatings. These treatments serve dual purposes: improving visual appeal while creating barriers against environmental exposure. The choice between staining and painting depends on various factors including wood type, desired aesthetic, and maintenance preferences. Staining options range from transparent finishes that highlight wood grain to solid colors that provide fuller coverage. Paint offers different characteristics and color possibilities. Professional application involves comprehensive surface preparation, product selection based on specific conditions, and careful technique to achieve even coverage. The right approach considers California\'s climate patterns, sun exposure levels, and individual property characteristics.',
    benefits: [
      'Diverse selection of stain and paint colors',
      'Transparent, semi-transparent, and solid color options',
      'UV and weather protection properties',
      'Aesthetic enhancement potential',
      'Thorough surface preparation methods',
      'Professional application techniques',
      'Low-VOC product options available',
      'Color consultation services'
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
        answer: 'The choice between staining and painting depends on several factors including your aesthetic preferences, wood type, and maintenance approach. Stain allows wood grain to show through and may require different maintenance than paint. Paint offers broader color choices and different coverage characteristics. We can discuss which option aligns better with your specific situation and goals.'
      },
      {
        question: 'How long do deck stains and paints last?',
        answer: 'The longevity of deck finishes varies based on multiple factors including product quality, sun exposure, weather patterns, foot traffic, and maintenance. Different products have different durability characteristics. We can discuss what to expect based on your deck\'s specific conditions.'
      },
      {
        question: 'Do you offer eco-friendly stain options?',
        answer: 'Yes, low-VOC and environmentally conscious stain and paint options are available. These products offer environmental benefits while providing protection and aesthetic qualities. We can discuss eco-friendly alternatives that suit your project needs.'
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
    longDescription: 'Deck sealing provides essential protection for outdoor wood surfaces exposed to California\'s environmental conditions. Professional sealing involves applying specialized products designed to penetrate wood fibers and create protective barriers against moisture, ultraviolet radiation, and organic growth. The sealing process addresses multiple concerns including water damage prevention, UV exposure effects, and surface deterioration. Quality sealants are formulated to work with specific climate conditions while preserving wood\'s natural appearance and texture. The application requires proper surface preparation, appropriate product selection, and careful technique. Sealing represents a proactive maintenance approach that can help preserve deck surfaces and reduce the need for more extensive interventions over time.',
    benefits: [
      'Professional waterproofing applications',
      'UV protection coating options',
      'Moisture barrier properties',
      'Protection against organic growth',
      'Natural wood appearance preservation',
      'Various finish options including non-slip',
      'Efficient application methods',
      'Preventive maintenance approach'
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
        answer: 'Sealing frequency depends on factors including climate conditions, sun exposure, deck usage, and the type of sealant used. In California, many deck owners consider sealing on a regular schedule based on their deck\'s specific exposure and condition. We can assess your deck and discuss an appropriate maintenance approach.'
      },
      {
        question: 'Can I seal my deck myself?',
        answer: 'DIY sealing is an option some homeowners choose. Professional sealing involves specific preparation methods, product knowledge, and application techniques developed through experience. The choice between DIY and professional service depends on your comfort level, available time, and desired results.'
      },
      {
        question: 'How long does deck sealing take?',
        answer: 'Project duration varies based on deck size, condition, preparation needs, and weather. The process includes surface preparation, product application, and curing time. Specific timing and when the deck can be used will depend on the products used and environmental conditions during application.'
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
    longDescription: 'Deck repair addresses both functional and safety concerns that develop in outdoor structures over time. Professional repair work involves careful assessment of visible and potential underlying issues, including damaged railings, compromised boards, stair concerns, and structural elements. The repair approach depends on the extent and nature of damage, wood condition, and overall deck integrity. Experienced repair work includes proper material selection to match existing components, appropriate fastening and reinforcement techniques, and attention to both immediate concerns and contributing factors. California\'s climate creates specific challenges for outdoor wood structures, making knowledgeable assessment important. Professional repair services aim to restore deck function and safety while considering the structure\'s overall condition and future maintenance needs.',
    benefits: [
      'Thorough safety assessments',
      'Structural issue evaluation',
      'Material matching capabilities',
      'Railing and stair repair expertise',
      'Board replacement services',
      'Structural reinforcement options',
      'Efficient project completion',
      'Quality workmanship standards'
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
        answer: 'Common indicators include loose railings, soft or spongy boards, visible deterioration, protruding fasteners, stair movement, or areas that raise safety concerns. A professional inspection can identify both obvious issues and less visible problems. We can assess your deck\'s condition and discuss any concerns found.'
      },
      {
        question: 'Can you match my existing deck boards?',
        answer: 'Material matching involves considering wood type, dimensions, and finish characteristics. We work to find appropriate matches for existing components. When exact matches aren\'t available, we discuss alternative options that work with the existing structure while addressing your needs.'
      },
      {
        question: 'Is it better to repair or replace my deck?',
        answer: 'The repair versus replacement decision depends on factors including damage extent, overall deck condition, structural integrity, and cost considerations. Each situation is different. We can assess your specific deck and discuss which approach makes sense for your circumstances.'
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
    longDescription: 'Professional deck cleaning addresses the accumulation of environmental contaminants and organic growth that affect outdoor wood surfaces. The cleaning process utilizes specialized equipment and appropriate techniques to remove dirt, grime, mold, mildew, algae, and deteriorated finishes while preserving wood integrity. Different wood species and surface conditions require tailored approaches to achieve effective cleaning without causing damage. Cleaning serves multiple purposes: aesthetic improvement, surface preparation for finishing work, and removal of elements that can contribute to deterioration. The service involves assessment of the deck\'s current state, selection of suitable cleaning methods and solutions, and careful execution that considers wood characteristics and environmental factors specific to California conditions.',
    benefits: [
      'Professional cleaning equipment and methods',
      'Organic growth and contaminant removal',
      'Appropriate cleaning solution selection',
      'Wood fiber preservation techniques',
      'Surface preparation for refinishing',
      'Maintenance of existing finishes',
      'Natural wood color restoration',
      'Preventive maintenance approach'
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
        answer: 'Cleaning frequency varies based on factors including environmental conditions, shade exposure, local climate, organic growth patterns, and deck usage. Decks in shaded areas or humid conditions may benefit from more frequent cleaning. We can assess your deck\'s exposure and discuss an appropriate cleaning schedule for your situation.'
      },
      {
        question: 'Will power washing damage my deck?',
        answer: 'Power washing requires proper pressure settings, appropriate techniques, and understanding of wood characteristics. Professional cleaning uses methods suited to specific wood types and conditions. Improper pressure or technique can potentially cause damage. We adjust our approach based on your deck\'s specific needs and condition.'
      },
      {
        question: 'Should I clean before staining or sealing?',
        answer: 'Proper surface preparation, including thorough cleaning, is important before applying finishes. Clean surfaces allow better adhesion and product performance. Professional cleaning before refinishing work addresses contaminants and prepares the surface appropriately for new coatings.'
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

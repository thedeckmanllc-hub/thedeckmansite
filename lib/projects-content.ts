export interface ProjectContent {
  slug: string
  title: string
  category: string
  location: string
  duration: string
  size: string
  rating: string
  featured: boolean
  shortDescription: string
  heroTitle: string
  challenge: string
  solution: string
  results: string[]
  images: {
    url: string
    alt: string
    caption?: string
  }[]
  details: {
    label: string
    value: string
  }[]
  testimonial?: {
    name: string
    text: string
    rating: number
  }
  seo: {
    title: string
    description: string
    keywords: string[]
  }
}

export const projectsContent: ProjectContent[] = [
  {
    slug: 'outdoor-deck-restoration',
    title: 'Outdoor Deck Restoration',
    category: 'Complete Restoration',
    location: 'San Diego County, CA',
    duration: '7 Days',
    size: '800 sq ft',
    rating: '5.0',
    featured: true,
    shortDescription: 'Professional deck restoration bringing new life to outdoor living space with complete refinishing and protective coating.',
    heroTitle: 'Transforming a Weathered Deck into a Beautiful Outdoor Retreat',
    challenge: 'This outdoor deck had endured years of intense California sun exposure, seasonal weather changes, and daily wear that left the wood surface severely compromised. The existing finish had completely deteriorated, leaving the deck vulnerable to moisture penetration and UV damage. Wood fibers showed signs of weathering with visible graying and rough texture that made the surface uncomfortable for barefoot walking. The homeowners recognized that without professional deck restoration services, the structural integrity would continue declining, potentially requiring costly board replacement. Previous attempts at DIY maintenance had proven insufficient to address the deep-seated damage. They needed expert deck refinishing that would not only revive the appearance but provide long-lasting protection against San Diego County\'s demanding climate conditions.',
    solution: 'Our comprehensive deck restoration approach began with detailed surface assessment to identify all problem areas requiring special attention. We employed professional-grade deck cleaning solutions to remove years of accumulated grime, mildew, and deteriorated finish material. The entire deck surface underwent precision sanding using specialized equipment to remove damaged wood fibers and reveal fresh, healthy wood underneath. This critical preparation step ensures optimal stain penetration and adhesion for maximum durability. After thorough cleaning and drying, we applied premium wood conditioner to balance absorption rates across the entire surface. The restoration continued with careful application of high-performance deck stain specifically formulated for California coastal climates. Our multi-layer finishing system includes UV-resistant compounds that protect against sun damage while enhancing the natural wood grain beauty. Final protective sealing creates a moisture barrier that prevents water infiltration while allowing the wood to breathe naturally. Every corner, edge, and detail received meticulous attention to ensure consistent coverage and professional results throughout.',
    results: [
      'Complete surface restoration revealing natural wood beauty',
      'Professional-grade protective finish applied throughout',
      'Enhanced durability against weather and UV exposure',
      'Smooth, renewed surface perfect for outdoor activities',
      'Extended lifespan ensuring years of enjoyment',
      'Transformed appearance creating inviting outdoor space'
    ],
    images: [
      {
        url: '/images/1/1.webp',
        alt: 'Restored outdoor deck',
        caption: 'Beautifully restored deck with professional finish'
      },
      {
        url: '/images/1/2.webp',
        alt: 'Deck restoration detail',
        caption: 'Close-up of expert refinishing work'
      },
      {
        url: '/images/1/3.webp',
        alt: 'Completed deck project',
        caption: 'Finished deck ready for outdoor living'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Complete Restoration' },
      { label: 'Duration', value: '7 Days' },
      { label: 'Deck Size', value: '800 square feet' },
      { label: 'Service', value: 'Surface Preparation & Refinishing' },
      { label: 'Protection', value: 'Premium Weather-Resistant Coating' },
      { label: 'Warranty', value: '5 Years on Workmanship' }
    ],
    testimonial: {
      name: 'Michael S.',
      text: 'The transformation was incredible! The team was professional, efficient, and delivered exceptional results. Our deck looks brand new and we couldn\'t be happier with the quality of work.',
      rating: 5
    },
    seo: {
      title: 'Professional Deck Restoration in San Diego County | The Deck Man',
      description: 'Expert deck restoration services bringing new life to outdoor spaces. Complete refinishing with premium protective coatings for lasting beauty.',
      keywords: ['deck restoration san diego', 'deck refinishing california', 'professional deck staining', 'outdoor deck renovation']
    }
  },
  {
    slug: 'deck-refinishing-project',
    title: 'Deck Refinishing Project',
    category: 'Staining & Refinishing',
    location: 'San Diego County, CA',
    duration: '5 Days',
    size: '600 sq ft',
    rating: '5.0',
    featured: true,
    shortDescription: 'Expert deck refinishing service restoring beauty and protection to outdoor wood surfaces with premium staining techniques.',
    heroTitle: 'Reviving Outdoor Living Space Through Professional Refinishing',
    challenge: 'This expansive outdoor deck and staircase system had suffered from years of California weather exposure, with the large main deck area showing severe finish deterioration across its entire surface. The adjoining wooden staircase connecting multiple levels displayed particularly advanced weathering, with rough splintered treads creating safety concerns for daily use. The original stain had completely faded, leaving bare wood exposed to moisture infiltration and UV damage throughout the deck and stairs. The homeowners faced the challenge of coordinating restoration across both horizontal deck surfaces and vertical stair components, requiring specialized techniques for each element. Previous surface treatments had failed prematurely, creating uneven coloring and patchy protection that detracted from the home\'s curb appeal. They needed comprehensive deck and stair refinishing that would address both aesthetic concerns and long-term durability requirements. The project scope demanded careful attention to every board, railing, and step to achieve consistent, professional results across the entire outdoor structure.',
    solution: 'Our restoration approach addressed the unique challenges of refinishing both the large deck platform and integrated staircase system through systematic surface preparation and application techniques. We began with specialized cleaning methods appropriate for horizontal deck surfaces and vertical stair components, removing years of accumulated weathering and failed finish material. The extensive sanding process required different equipment and techniques for deck boards versus stair treads and risers, ensuring optimal surface preparation throughout. Our team paid meticulous attention to staircase details including treads, risers, stringers, and railings, recognizing that stairs receive different wear patterns than deck surfaces. Premium exterior stain application proceeded in carefully planned stages, allowing proper drying between deck and stair sections to maintain project workflow. The stain system selected provides enhanced traction for stair safety while delivering uniform appearance across both deck and staircase elements. Special focus on high-traffic stair areas included additional protective coatings for extended durability. Final inspection verified consistent color, complete coverage, and proper protection across every surface of this extensive deck and stair restoration project.',
    results: [
      'Restored rich wood color and natural grain visibility',
      'Eliminated rough spots creating smooth walking surface',
      'Applied superior UV protection for long-lasting finish',
      'Enhanced water resistance preventing moisture damage',
      'Completed on schedule for family event deadline',
      'Transformed deck into beautiful entertainment space'
    ],
    images: [
      {
        url: '/images/2/1.webp',
        alt: 'Refinished deck project',
        caption: 'Professional deck refinishing results'
      },
      {
        url: '/images/2/2.webp',
        alt: 'Deck staining detail',
        caption: 'Expert staining technique application'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Staining & Refinishing' },
      { label: 'Duration', value: '5 Days' },
      { label: 'Deck Size', value: '600 square feet' },
      { label: 'Service', value: 'Complete Surface Refinishing' },
      { label: 'Protection', value: 'UV-Resistant Premium Stain' },
      { label: 'Warranty', value: '5 Years on Workmanship' }
    ],
    testimonial: {
      name: 'Sarah M.',
      text: 'Outstanding work! The deck looks absolutely incredible. They completed everything on time and the quality exceeded our expectations. Highly professional service.',
      rating: 5
    },
    seo: {
      title: 'Professional Deck Refinishing Services San Diego | The Deck Man',
      description: 'Expert deck refinishing and staining services in San Diego County. Premium finishes for lasting outdoor beauty and protection.',
      keywords: ['deck refinishing san diego', 'deck staining service', 'wood deck refinishing', 'deck surface restoration']
    }
  },
  {
    slug: 'wood-deck-maintenance',
    title: 'Wood Deck Maintenance',
    category: 'Maintenance & Care',
    location: 'San Diego County, CA',
    duration: '4 Days',
    size: '500 sq ft',
    rating: '5.0',
    featured: true,
    shortDescription: 'Comprehensive deck maintenance service providing protective care and surface treatment for long-term wood preservation.',
    heroTitle: 'Protecting Your Investment With Expert Deck Maintenance',
    challenge: 'This compact front porch deck served as the home\'s primary entrance and first impression for visitors, making its deteriorated appearance particularly concerning for the homeowners. The small but highly visible deck area had suffered from concentrated foot traffic and direct weather exposure in its prominent front-of-home location. Years of seasonal temperature changes and moisture exposure had degraded the protective finish, leaving the wood vulnerable to accelerated weathering. The front porch deck showed uneven fading with darker areas where water pooled and lighter sections suffering from intense sun exposure. Surface roughness had developed across the boards, creating an unwelcoming texture that detracted from the home\'s curb appeal and entry experience. Despite its modest size, the front deck\'s high visibility and daily use made its condition a priority concern. The homeowners wanted professional refinishing that would restore the welcoming appearance befitting their home\'s front entrance while providing durable protection against ongoing weather exposure and foot traffic.',
    solution: 'Our front porch deck refinishing focused on maximizing aesthetic impact and durability for this small but prominent outdoor space. We began with thorough surface preparation specifically suited to the compact area, ensuring every detail received careful attention given the deck\'s high visibility. Professional cleaning removed embedded dirt and traffic patterns that had accumulated in this frequently used entrance area. The sanding process addressed surface roughness while preparing the wood for optimal stain absorption, with special attention to board edges and corners visible from the street. Stain selection emphasized both appearance and practical durability appropriate for a heavily trafficked front entrance exposed to full weather conditions. Application technique ensured even coverage across the entire small deck surface, eliminating any trace of previous uneven weathering or fading. We provided enhanced edge protection where the front deck meets the home\'s siding and foundation areas. The completed front porch deck restoration delivered immediate curb appeal improvement while establishing long-lasting protection for this important home entrance feature.',
    results: [
      'Halted deterioration protecting deck structure',
      'Eliminated mildew and surface discoloration',
      'Restored consistent protective finish coverage',
      'Repaired minor damage preventing larger issues',
      'Established maintenance plan for long-term care',
      'Extended deck lifespan through preventive service'
    ],
    images: [
      {
        url: '/images/3/1.webp',
        alt: 'Deck maintenance service',
        caption: 'Professional deck maintenance and care'
      },
      {
        url: '/images/3/2.webp',
        alt: 'Wood deck treatment',
        caption: 'Protective treatment application'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Maintenance & Care' },
      { label: 'Duration', value: '4 Days' },
      { label: 'Deck Size', value: '500 square feet' },
      { label: 'Service', value: 'Complete Maintenance Service' },
      { label: 'Protection', value: 'Maintenance Coat Application' },
      { label: 'Warranty', value: '3 Years on Workmanship' }
    ],
    testimonial: {
      name: 'Robert K.',
      text: 'Great maintenance service that saved our deck! They were thorough, professional, and explained everything. The deck looks so much better now.',
      rating: 5
    },
    seo: {
      title: 'Deck Maintenance Services San Diego County | The Deck Man',
      description: 'Professional deck maintenance and care services. Protect your wood deck investment with expert treatment and preservation.',
      keywords: ['deck maintenance san diego', 'wood deck care', 'deck preservation service', 'deck cleaning and treatment']
    }
  },
  {
    slug: 'outdoor-deck-renovation',
    title: 'Outdoor Deck Renovation',
    category: 'Complete Renovation',
    location: 'San Diego County, CA',
    duration: '8 Days',
    size: '900 sq ft',
    rating: '5.0',
    featured: true,
    shortDescription: 'Full-scale deck renovation transforming deteriorated outdoor space into stunning entertainment area with modern finishes.',
    heroTitle: 'Complete Deck Transformation Creating Dream Outdoor Space',
    challenge: 'This substantial exterior staircase provided essential access between home levels but had deteriorated to the point of safety concerns requiring immediate professional intervention. The large wooden stair structure showed signs of structural weakness with loose treads, wobbly railings, and compromised support posts that created hazardous conditions for daily use. Years of weather exposure without proper maintenance had resulted in rotted wood components throughout the staircase system, particularly at connection points where moisture accumulates. The existing finish had completely failed, leaving the stair surfaces rough, splintered, and vulnerable to accelerated decay from moisture penetration. Structural instability meant that surface refinishing alone would be insufficient - the staircase required comprehensive reinforcement before any cosmetic work could proceed. The homeowners recognized the urgency of addressing both safety and structural integrity while also restoring the staircase to an attractive appearance. This renovation demanded expertise in both structural carpentry and finish work to transform the failing staircase into a safe, durable, and beautiful architectural element.',
    solution: 'Our staircase renovation project began with thorough structural assessment identifying all components requiring replacement or reinforcement to ensure long-term safety and stability. We systematically replaced compromised stair treads, reinforced wobbly railings, and stabilized support posts using quality materials and proper construction techniques. Structural repairs included upgrading connection hardware, reinforcing stringers, and ensuring the entire staircase system met modern building standards for strength and stability. After completing all structural work, we proceeded with comprehensive surface preparation across every stair component - treads, risers, stringers, posts, and railings. The extensive sanding process restored smooth, safe surfaces while preparing the wood for optimal finish adhesion and penetration. Premium exterior stain application provided both beauty and protection, with special attention to horizontal stair treads that receive maximum wear and weather exposure. We applied enhanced protective coatings to high-stress areas including treads and handrails for extended durability under heavy use conditions. The completed staircase transformation delivered structural integrity, safety, and visual appeal that will serve the home reliably for many years to come.',
    results: [
      'Complete structural renovation ensuring safety and stability',
      'Replaced damaged components with quality materials',
      'Applied premium finish system for lasting beauty',
      'Transformed layout for enhanced functionality',
      'Created stunning outdoor entertainment space',
      'Increased home value through quality renovation'
    ],
    images: [
      {
        url: '/images/4/1.webp',
        alt: 'Renovated outdoor deck',
        caption: 'Complete deck renovation transformation'
      },
      {
        url: '/images/4/2.webp',
        alt: 'Deck renovation progress',
        caption: 'Professional renovation process'
      },
      {
        url: '/images/4/3.webp',
        alt: 'Finished deck renovation',
        caption: 'Beautiful completed renovation'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Complete Renovation' },
      { label: 'Duration', value: '8 Days' },
      { label: 'Deck Size', value: '900 square feet' },
      { label: 'Service', value: 'Full Structural & Surface Renovation' },
      { label: 'Protection', value: 'Premium Multi-Layer Finish System' },
      { label: 'Warranty', value: '7 Years on Workmanship' }
    ],
    testimonial: {
      name: 'Jennifer L.',
      text: 'We are thrilled with our renovated deck! The team handled everything professionally and the results are spectacular. It\'s like having a brand new outdoor room.',
      rating: 5
    },
    seo: {
      title: 'Deck Renovation Services San Diego County | The Deck Man',
      description: 'Complete deck renovation services transforming deteriorated decks into beautiful outdoor spaces. Expert structural and aesthetic improvements.',
      keywords: ['deck renovation san diego', 'deck remodel', 'complete deck renovation', 'deck transformation service']
    }
  },
  {
    slug: 'luxury-hillside-deck',
    title: 'Luxury Hillside Deck Transformation',
    category: 'Complete Restoration',
    location: 'Fallbrook, CA',
    duration: '14 Days',
    size: '2,000 sq ft',
    rating: '5.0',
    featured: true,
    shortDescription: 'Complete restoration of a 2,000 sq ft hillside deck featuring custom railings, premium staining, and advanced waterproofing systems.',
    heroTitle: 'Transforming a Weathered Hillside Deck into a Luxury Outdoor Living Space',
    challenge: 'This stunning hillside property had a large deck that had been severely damaged by years of exposure to California sun and seasonal weather. The deck boards were splitting, the railings were loose and unsafe, and the finish had completely deteriorated. The homeowners wanted to transform this space into a luxury outdoor entertainment area while maintaining the breathtaking valley views.',
    solution: 'Our team began with a comprehensive structural assessment, replacing over 30% of the deck boards and reinforcing the support system. We custom-built new railings using premium materials that complemented the home\'s architecture. The entire surface was professionally sanded and treated with a multi-stage finishing process including deep wood conditioning, premium stain application in a rich mahogany tone, and advanced UV-resistant waterproof sealant. We also installed integrated LED lighting for evening ambiance.',
    results: [
      'Complete structural reinforcement ensuring safety for years to come',
      'Custom-designed railings that enhanced both safety and aesthetics',
      'Premium mahogany stain finish with 10-year durability',
      'Advanced waterproofing system protecting against moisture damage',
      'Integrated LED lighting system for nighttime entertainment',
      'Increased property value by an estimated $35,000'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        alt: 'Luxury hillside deck after transformation',
        caption: 'The completed deck transformation with mahogany staining'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
        alt: 'Hillside deck custom railings',
        caption: 'Custom-built railings with valley views'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        alt: 'Deck LED lighting at night',
        caption: 'Integrated LED lighting creates perfect evening ambiance'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop',
        alt: 'Before deck restoration',
        caption: 'Before: weathered and damaged deck boards'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Complete Restoration & Upgrade' },
      { label: 'Duration', value: '14 Days' },
      { label: 'Deck Size', value: '2,000 square feet' },
      { label: 'Wood Type', value: 'Premium Pressure-Treated Pine' },
      { label: 'Stain Color', value: 'Rich Mahogany' },
      { label: 'Special Features', value: 'LED Lighting, Custom Railings' },
      { label: 'Warranty', value: '10 Years on Materials & Workmanship' }
    ],
    testimonial: {
      name: 'Brendan H.',
      text: 'I had a rotting deck and I had no idea how bad it was. I asked Dennis for his help to assess how bad it was and come up with a plan. He was very transparent and punctual, and his craftsmanship was top notch. He gave me options along the way, which I really appreciate. I very much liked working with him and will continue to do so for all of my future projects.',
      rating: 5
    },
    seo: {
      title: 'Luxury Hillside Deck Restoration in Fallbrook, CA | The Deck Man',
      description: 'See how we transformed a weathered 2,000 sq ft hillside deck in Fallbrook into a luxury outdoor space. Complete restoration with custom railings and premium finishes.',
      keywords: ['deck restoration fallbrook', 'hillside deck repair', 'luxury deck transformation', 'custom deck railings california']
    }
  },
  {
    slug: 'modern-coastal-patio',
    title: 'Modern Coastal Patio',
    category: 'Staining & Refinishing',
    location: 'Vista, CA',
    duration: '8 Days',
    size: '1,200 sq ft',
    rating: '5.0',
    featured: false,
    shortDescription: 'Contemporary deck refinishing with coastal-inspired color palette and weather-resistant finishes.',
    heroTitle: 'Creating a Modern Coastal Oasis with Expert Refinishing',
    challenge: 'This Vista home had a well-maintained deck structure but the previous finish had faded to a dull gray. The homeowners wanted a fresh, modern coastal look that would withstand the Southern California climate while complementing their home\'s contemporary architecture.',
    solution: 'We performed complete surface preparation including deep cleaning and professional sanding to restore the wood\'s natural texture. After treating the wood with a premium conditioning oil, we applied a custom-blended coastal gray stain that perfectly matched the homeowner\'s vision. The project was completed with two coats of marine-grade sealant for superior weather protection.',
    results: [
      'Beautiful coastal gray finish that complements modern architecture',
      'Marine-grade protection against UV rays and moisture',
      'Smooth, splinter-free surface safe for bare feet',
      'Enhanced wood grain visibility and texture',
      'Extended deck lifespan by 8-10 years',
      'Quick 8-day turnaround with minimal disruption'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
        alt: 'Modern coastal patio deck refinishing',
        caption: 'Contemporary coastal gray stain finish'
      },
      {
        url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop',
        alt: 'Deck staining detail',
        caption: 'Close-up of premium stain application'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200&h=800&fit=crop',
        alt: 'Coastal deck with furniture',
        caption: 'Completed deck ready for outdoor living'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Staining & Refinishing' },
      { label: 'Duration', value: '8 Days' },
      { label: 'Deck Size', value: '1,200 square feet' },
      { label: 'Stain Type', value: 'Semi-Transparent Coastal Gray' },
      { label: 'Sealant', value: 'Marine-Grade UV Resistant' },
      { label: 'Warranty', value: '5 Years on Finish' }
    ],
    testimonial: {
      name: 'Joshua B.',
      text: 'Den was exactly what we needed for our deck! We needed everything to be sanded and stained to start fresh. He worked efficiently and with care. Now we have a deck to be proud of!',
      rating: 5
    },
    seo: {
      title: 'Modern Coastal Deck Refinishing in Vista, CA | The Deck Man',
      description: 'Professional deck refinishing in Vista with coastal-inspired finishes. See our modern patio transformation with marine-grade protection.',
      keywords: ['deck refinishing vista', 'coastal deck staining', 'modern deck california', 'deck refinishing san diego']
    }
  },
  {
    slug: 'oceanside-beach-house',
    title: 'Oceanside Beach House Deck',
    category: 'Complete Renovation',
    location: 'Oceanside, CA',
    duration: '12 Days',
    size: '1,800 sq ft',
    rating: '5.0',
    featured: false,
    shortDescription: 'Full deck renovation for a beachfront property with salt-resistant treatments and composite railings.',
    heroTitle: 'Beach House Deck Built to Withstand Coastal Elements',
    challenge: 'This oceanfront property faced unique challenges with salt air, high humidity, and intense sun exposure causing rapid deterioration. The existing deck was only 6 years old but already showing severe wear. The homeowners needed a solution that would last in these harsh coastal conditions.',
    solution: 'We implemented a comprehensive renovation using salt-resistant treatments and materials specifically designed for coastal environments. All structural elements were treated with marine-grade protection, and we installed composite railings that won\'t rot or corrode. The deck surface received our advanced multi-layer finishing system including salt-barrier primer, UV-resistant stain, and waterproof topcoat.',
    results: [
      'Salt-resistant treatment protecting against ocean air',
      'Composite railings eliminating maintenance concerns',
      'Advanced UV protection for lasting color',
      'Waterproof barrier preventing moisture damage',
      'Expected lifespan of 15+ years in coastal environment',
      'Minimal maintenance required going forward'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
        alt: 'Oceanside beach house deck',
        caption: 'Renovated deck with ocean views'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&h=800&fit=crop',
        alt: 'Composite deck railings',
        caption: 'Low-maintenance composite railings'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        alt: 'Beach deck finishing',
        caption: 'Marine-grade finishing application'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Complete Renovation' },
      { label: 'Duration', value: '12 Days' },
      { label: 'Deck Size', value: '1,800 square feet' },
      { label: 'Railing Type', value: 'Composite (Salt-Resistant)' },
      { label: 'Special Treatment', value: 'Marine-Grade Salt Barrier' },
      { label: 'Warranty', value: '10 Years on Materials' }
    ],
    seo: {
      title: 'Oceanside Beach House Deck Renovation | The Deck Man',
      description: 'Complete deck renovation for oceanfront property in Oceanside. Salt-resistant materials and marine-grade finishes for lasting beauty.',
      keywords: ['oceanside deck renovation', 'beach house deck repair', 'salt resistant deck', 'coastal deck restoration']
    }
  },
  {
    slug: 'garden-oasis-temecula',
    title: 'Garden Oasis',
    category: 'Deck Repair',
    location: 'Temecula, CA',
    duration: '5 Days',
    size: '900 sq ft',
    rating: '5.0',
    featured: false,
    shortDescription: 'Structural deck repair and board replacement for a charming garden retreat.',
    heroTitle: 'Restoring Safety and Beauty to a Garden Retreat',
    challenge: 'This lovely garden deck had several safety concerns including loose boards, wobbly railings, and soft spots indicating wood rot. The homeowners used this space daily for morning coffee and evening relaxation, so safety was paramount while maintaining the deck\'s charm.',
    solution: 'We conducted a thorough structural inspection and replaced all compromised boards and support posts. The railings were reinforced and secured with new hardware. After repairs, we refinished the entire deck with a natural cedar tone that enhanced the garden setting. All work was completed in just 5 days to minimize disruption.',
    results: [
      'All structural issues resolved for complete safety',
      '15 boards replaced with matching materials',
      'Reinforced railings exceeding safety codes',
      'Natural cedar finish complementing garden landscape',
      'Extended deck lifespan by 10+ years',
      'Homeowners can enjoy their space worry-free'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=1200&h=800&fit=crop',
        alt: 'Garden deck repair',
        caption: 'Repaired deck with garden surroundings'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=1200&h=800&fit=crop',
        alt: 'Deck board replacement',
        caption: 'New boards seamlessly integrated'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        alt: 'Cedar deck finish',
        caption: 'Natural cedar tone in garden setting'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Structural Repair & Refinish' },
      { label: 'Duration', value: '5 Days' },
      { label: 'Deck Size', value: '900 square feet' },
      { label: 'Boards Replaced', value: '15 deck boards, 3 support posts' },
      { label: 'Finish', value: 'Natural Cedar Semi-Transparent' },
      { label: 'Warranty', value: '5 Years on Repairs' }
    ],
    seo: {
      title: 'Deck Repair in Temecula, CA | Garden Oasis Restoration',
      description: 'Expert deck repair in Temecula. Structural fixes, board replacement, and refinishing for safe, beautiful outdoor spaces.',
      keywords: ['deck repair temecula', 'deck board replacement', 'structural deck repair', 'temecula deck services']
    }
  },
  {
    slug: 'resort-style-escondido',
    title: 'Resort Style Pool Deck',
    category: 'Pool Deck',
    location: 'Escondido, CA',
    duration: '10 Days',
    size: '1,500 sq ft',
    rating: '5.0',
    featured: false,
    shortDescription: 'Luxury pool deck renovation with slip-resistant finish and modern design.',
    heroTitle: 'Creating a Resort-Style Pool Deck Experience',
    challenge: 'The homeowners wanted to transform their basic pool deck into a resort-style entertainment space. The existing deck was plain, slippery when wet, and didn\'t complement their beautiful pool. They needed both safety improvements and aesthetic upgrades.',
    solution: 'We completely renovated the pool deck with a focus on safety and style. The surface was prepared and finished with a slip-resistant coating in a sophisticated sandstone color. We added decorative borders, built-in planters, and a lounge area. The entire project included specialized pool-safe sealants that resist chlorine and water damage.',
    results: [
      'Slip-resistant surface safe for wet conditions',
      'Chlorine-resistant sealant preventing chemical damage',
      'Decorative borders adding visual interest',
      'Built-in planters creating resort atmosphere',
      'Designated lounge area for entertaining',
      'Transformed backyard into private resort'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
        alt: 'Resort style pool deck',
        caption: 'Luxurious pool deck with slip-resistant finish'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&h=800&fit=crop',
        alt: 'Pool deck lounge area',
        caption: 'Designated lounge area for relaxation'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
        alt: 'Pool deck details',
        caption: 'Decorative borders and built-in planters'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Pool Deck Renovation' },
      { label: 'Duration', value: '10 Days' },
      { label: 'Deck Size', value: '1,500 square feet' },
      { label: 'Finish', value: 'Slip-Resistant Sandstone' },
      { label: 'Special Features', value: 'Built-in Planters, Decorative Borders' },
      { label: 'Warranty', value: '7 Years on Pool-Safe Finish' }
    ],
    testimonial: {
      name: 'Daniel W.',
      text: 'We needed to freshen up the deck around our pool. The Deck Man completely transformed it in just one day — I\'m honestly amazed! They replaced the damaged boards, and the rest were restored so well they look brand new. The quality of work for the price was honestly impressive. Highly recommend!',
      rating: 5
    },
    seo: {
      title: 'Pool Deck Renovation in Escondido, CA | Resort Style Design',
      description: 'Professional pool deck renovation in Escondido. Slip-resistant finishes and luxury design for safe, beautiful pool areas.',
      keywords: ['pool deck escondido', 'pool deck renovation', 'slip resistant deck', 'luxury pool deck california']
    }
  },
  {
    slug: 'backyard-paradise-murrieta',
    title: 'Backyard Paradise Retreat',
    category: 'Restoration Project',
    location: 'Murrieta, CA',
    duration: '10 Days',
    size: '1,600 sq ft',
    rating: '5.0',
    featured: false,
    shortDescription: 'Complete backyard deck restoration creating an outdoor living paradise.',
    heroTitle: 'Transforming a Neglected Deck into a Backyard Paradise',
    challenge: 'This large backyard deck had been neglected for years and was in severe disrepair. The wood was splintered and gray, multiple boards needed replacement, and the entire structure needed reinforcement. The homeowners wanted to create their dream outdoor living space for family gatherings.',
    solution: 'Our comprehensive restoration included structural reinforcement, replacement of 40% of deck boards, complete resurfacing, and application of a warm honey-tone stain. We also built a custom pergola section for shade and added integrated benches. The result is a stunning outdoor living space perfect for entertaining.',
    results: [
      'Structural reinforcement ensuring decades of use',
      'Over 60 boards replaced with premium materials',
      'Custom pergola section adding shade and style',
      'Integrated bench seating for gatherings',
      'Warm honey-tone finish enhancing natural beauty',
      'Created dream outdoor living space for family'
    ],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
        alt: 'Backyard paradise deck',
        caption: 'Transformed deck with custom pergola'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
        alt: 'Deck with integrated seating',
        caption: 'Built-in bench seating for entertaining'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        alt: 'Deck refinishing process',
        caption: 'Premium honey-tone stain application'
      }
    ],
    details: [
      { label: 'Project Type', value: 'Complete Restoration & Upgrade' },
      { label: 'Duration', value: '10 Days' },
      { label: 'Deck Size', value: '1,600 square feet' },
      { label: 'Boards Replaced', value: '60+ deck boards' },
      { label: 'Special Features', value: 'Custom Pergola, Integrated Benches' },
      { label: 'Finish', value: 'Warm Honey-Tone Semi-Transparent' },
      { label: 'Warranty', value: '10 Years' }
    ],
    testimonial: {
      name: 'Elena H.',
      text: 'Den and his team were awesome. They did full sanding and painting job on my deck and it came out amazing. Communication was great. Den\'s team exceeded my expectations on the quality of their work and I am going to use them again for expanding my deck.',
      rating: 5
    },
    seo: {
      title: 'Backyard Deck Restoration in Murrieta, CA | Paradise Retreat',
      description: 'Complete deck restoration in Murrieta creating outdoor living paradise. Custom features and premium finishes for family entertaining.',
      keywords: ['deck restoration murrieta', 'backyard deck renovation', 'custom deck features', 'murrieta deck services']
    }
  }
]

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return projectsContent.find(project => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projectsContent.map(project => project.slug)
}

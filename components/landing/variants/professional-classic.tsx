'use client';

import { useState, useEffect } from 'react';

export function ProfessionalClassic() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'sanding',
      title: 'Deck Sanding',
      description: 'Professional sanding removes weathered gray wood, splinters, and surface damage. We use industrial equipment with dust containment to prepare your deck for a flawless finish.',
      details: [
        'Remove gray weathered wood layer',
        'Eliminate splinters and rough spots',
        'Open wood grain for better stain absorption',
        'Dust-free process protects your property'
      ],
      price: '$2.50 - $3.50 per sq ft'
    },
    {
      id: 'staining',
      title: 'Deck Staining',
      description: 'Premium penetrating stains protect your deck from UV damage, moisture, and daily wear. We apply proven products that enhance wood grain while providing long-lasting protection.',
      details: [
        'Premium oil and water-based stains',
        'UV and water resistance',
        'Wide range of colors available',
        '3-5 year protection guarantee'
      ],
      price: '$3.00 - $4.50 per sq ft'
    },
    {
      id: 'rebuild',
      title: 'Deck Reconstruction',
      description: 'Complete deck rebuilding from structural assessment to final finish. We handle permits, design, and construction using quality materials that meet or exceed building codes.',
      details: [
        'Full structural inspection',
        'Custom design consultation',
        'Premium pressure-treated and composite options',
        'All permits and inspections handled'
      ],
      price: 'Free estimate'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1e1b18] text-[#f5f2ed]" style={{ fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif' }}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-4 sm:px-6 lg:px-12 py-3 sm:py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-[rgba(30,27,24,0.98)] border-b border-[#2d2a26]' : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="h-9 sm:h-11 flex items-center text-lg sm:text-xl lg:text-2xl font-bold text-[#b87333]">
          THE DECK MAN
        </div>

        <div className="hidden lg:flex gap-6 xl:gap-10 items-center">
          {['Services', 'Our Work', 'About', 'Contact'].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link text-[#a09787] no-underline text-sm font-medium transition-colors hover:text-[#f5f2ed]">
              {item}
            </a>
          ))}
          <button className="pro-btn bg-[#b87333] border-none text-white px-6 xl:px-8 py-3 xl:py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5 whitespace-nowrap">
            Get Free Quote
          </button>
        </div>

        {/* Mobile CTA Button */}
        <button className="lg:hidden pro-btn bg-[#b87333] border-none text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] whitespace-nowrap">
          Get Quote
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-[120px] pb-12 sm:pb-16 lg:pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-[#b87333] mb-3 sm:mb-4 tracking-wide fade-in delay-1">
              Professional Deck Services
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-[#f5f2ed] fade-in delay-2" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              Quality Deck Restoration & Construction
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#a09787] mb-6 sm:mb-8 fade-in delay-3">
              We specialize in deck sanding, staining, and complete reconstruction.
              Over 15 years of experience delivering lasting results for homeowners
              across the region.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 fade-in delay-4">
              <button className="pro-btn bg-[#b87333] border-none text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5">
                Get Free Estimate
              </button>
              <button className="pro-btn-outline bg-transparent border-2 border-[#4a4239] text-[#c9b99a] px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:border-[#b87333] hover:text-[#b87333]">
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-6 sm:gap-8 lg:gap-10 pt-6 sm:pt-8 border-t border-[#333029] fade-in delay-4">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Done' },
                { value: '5-Star', label: 'Google Rating' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#b87333]" style={{ fontFamily: '"Source Serif 4", serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-[#7a6f62] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-[#2d2a26] to-[#1e1b18] rounded-lg sm:rounded-xl border border-[#333029] flex items-center justify-center relative overflow-hidden">
            <div className="text-center relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#333029] flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-2xl sm:text-3xl">▶</span>
              </div>
              <p className="text-xs sm:text-sm text-[#7a6f62]">Watch Our Process</p>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#b87333] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded text-[10px] sm:text-xs font-semibold">
              Licensed & Insured
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#252220]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#b87333] mb-2 sm:mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              What We Do
            </h2>
            <p className="text-sm sm:text-base text-[#a09787] max-w-[600px] mx-auto leading-relaxed px-4">
              From routine maintenance to complete rebuilds, we provide comprehensive
              deck services with quality workmanship and transparent pricing.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center border-b-2 border-[#333029] mb-8 sm:mb-12 overflow-x-auto">
            {services.map((service, i) => (
              <button
                key={service.id}
                className={`bg-transparent border-none font-medium text-xs sm:text-sm lg:text-[15px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 cursor-pointer transition-all duration-200 border-b-2 -mb-0.5 whitespace-nowrap ${
                  activeService === i
                    ? 'text-[#f5f2ed] border-[#b87333]'
                    : 'text-[#6b5f52] border-transparent hover:text-[#a09787]'
                }`}
                style={{ fontFamily: '"Inter", sans-serif' }}
                onClick={() => setActiveService(i)}
              >
                {service.title}
              </button>
            ))}
          </div>

          {/* Active Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-[#f5f2ed]" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
                {services[activeService].title}
              </h3>

              <p className="text-sm sm:text-base leading-relaxed text-[#a09787] mb-6 sm:mb-8">
                {services[activeService].description}
              </p>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-xs sm:text-sm font-semibold text-[#c9b99a] mb-3 sm:mb-4 uppercase tracking-wide">
                  What's Included:
                </h4>

                {services[activeService].details.map((detail, i) => (
                  <div key={i} className={`flex items-start gap-3 py-2.5 sm:py-3 ${i < services[activeService].details.length - 1 ? 'border-b border-[#333029]' : ''}`}>
                    <span className="text-[#b87333] text-base sm:text-lg leading-none mt-0.5">✓</span>
                    <span className="text-sm sm:text-[15px] text-[#c9b99a] leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-6 bg-[#1e1b18] rounded-lg border border-[#333029]">
                <div>
                  <p className="text-xs text-[#7a6f62] mb-1">Starting at</p>
                  <p className="text-xl sm:text-2xl font-bold text-[#b87333]" style={{ fontFamily: '"Source Serif 4", serif' }}>
                    {services[activeService].price}
                  </p>
                </div>
                <button className="pro-btn bg-[#b87333] border-none text-white px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5 w-full sm:w-auto">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Service Image Placeholder */}
            <div className="aspect-[4/3] bg-[#1e1b18] rounded-lg border border-[#333029] flex items-center justify-center order-first lg:order-last">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl text-[#333029] mb-3">
                  {activeService === 0 ? '⬚' : activeService === 1 ? '◐' : '⌂'}
                </div>
                <p className="text-xs sm:text-sm text-[#4a4239]">
                  {services[activeService].title} Photo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#1e1b18]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#b87333] mb-2 sm:mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              The Deck Man Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: '★',
                title: 'Quality Materials',
                desc: 'We use only premium stains, sealers, and lumber from trusted suppliers.'
              },
              {
                icon: '✓',
                title: 'Licensed & Insured',
                desc: 'Fully licensed contractor with comprehensive liability coverage.'
              },
              {
                icon: '◷',
                title: 'On-Time Completion',
                desc: 'We respect your schedule and complete projects when promised.'
              },
              {
                icon: '☎',
                title: 'Clear Communication',
                desc: 'Detailed quotes, regular updates, and responsive customer service.'
              }
            ].map((item, i) => (
              <div key={i} className="feature-card bg-[#262320] border border-[#333029] rounded-lg p-6 sm:p-8 transition-all duration-200 hover:border-[#4a4239] hover:-translate-y-0.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#333029] flex items-center justify-center mb-4 sm:mb-5 text-lg sm:text-xl text-[#b87333]">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#f5f2ed]">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#8a7d70]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#252220]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <p className="text-xs sm:text-sm font-semibold text-[#b87333] mb-2 sm:mb-3">Our Process</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { num: '1', title: 'Free Consultation', desc: 'We visit your property, assess the deck, and discuss your goals.' },
              { num: '2', title: 'Detailed Quote', desc: 'Receive a written estimate with clear pricing and timeline.' },
              { num: '3', title: 'Professional Work', desc: 'Our crew completes the job with attention to every detail.' },
              { num: '4', title: 'Final Walkthrough', desc: 'We review the work together and ensure your satisfaction.' }
            ].map((step, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="absolute top-7 left-14 right-[-16px] h-0.5 bg-[#333029] hidden lg:block" />
                )}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#b87333] flex items-center justify-center mb-4 sm:mb-5 relative z-10">
                  <span className="text-lg sm:text-xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-[#f5f2ed]">{step.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#8a7d70]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#1e1b18]">
        <div className="max-w-[800px] mx-auto text-center p-8 sm:p-12 lg:p-16 bg-[#252220] rounded-lg sm:rounded-xl border border-[#333029]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-sm sm:text-base text-[#a09787] mb-6 sm:mb-8 max-w-[500px] mx-auto leading-relaxed px-4">
            Get a free, no-obligation estimate. We'll assess your deck and
            provide a detailed quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="pro-btn bg-[#b87333] border-none text-white px-8 sm:px-10 py-3 sm:py-[18px] text-sm sm:text-[15px] font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5">
              Get Free Estimate
            </button>
            <button className="pro-btn-outline bg-transparent border-2 border-[#4a4239] text-[#c9b99a] px-8 sm:px-10 py-3 sm:py-[18px] text-sm sm:text-[15px] font-semibold cursor-pointer transition-all duration-200 rounded hover:border-[#b87333] hover:text-[#b87333]">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 border-t border-[#2d2a26] bg-[#1a1714]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="h-8 sm:h-9 flex items-center text-base sm:text-lg font-bold text-[#b87333] opacity-80">
              THE DECK MAN
            </div>
            <span className="text-[10px] sm:text-xs text-[#5c5347] text-center sm:text-left">
              © 2024 The Deck Man. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
              <a key={i} href="#" className="text-[10px] sm:text-xs text-[#5c5347] no-underline hover:text-[#7a6f62] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

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
      <nav className={`fixed top-0 left-0 right-0 z-[100] px-12 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled ? 'bg-[rgba(30,27,24,0.98)] border-b border-[#2d2a26]' : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="h-11 flex items-center text-2xl font-bold text-[#b87333]">
          THE DECK MAN
        </div>

        <div className="flex gap-10 items-center">
          {['Services', 'Our Work', 'About', 'Contact'].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link text-[#a09787] no-underline text-sm font-medium transition-colors hover:text-[#f5f2ed]">
              {item}
            </a>
          ))}
          <button className="pro-btn bg-[#b87333] border-none text-white px-8 py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5">
            Get Free Quote
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-12 pt-[120px] pb-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <div>
            <p className="text-sm font-semibold text-[#b87333] mb-4 tracking-wide fade-in delay-1">
              Professional Deck Services
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[#f5f2ed] fade-in delay-2" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              Quality Deck Restoration & Construction
            </h1>

            <p className="text-lg leading-relaxed text-[#a09787] mb-8 max-w-[520px] fade-in delay-3">
              We specialize in deck sanding, staining, and complete reconstruction.
              Over 15 years of experience delivering lasting results for homeowners
              across the region.
            </p>

            <div className="flex gap-4 mb-12 fade-in delay-4">
              <button className="pro-btn bg-[#b87333] border-none text-white px-8 py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5">
                Get Free Estimate
              </button>
              <button className="pro-btn-outline bg-transparent border-2 border-[#4a4239] text-[#c9b99a] px-8 py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:border-[#b87333] hover:text-[#b87333]">
                View Our Work
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-10 pt-8 border-t border-[#333029] fade-in delay-4">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Done' },
                { value: '5-Star', label: 'Google Rating' }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-[#b87333]" style={{ fontFamily: '"Source Serif 4", serif' }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#7a6f62] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="aspect-[4/3] bg-gradient-to-br from-[#2d2a26] to-[#1e1b18] rounded-xl border border-[#333029] flex items-center justify-center relative overflow-hidden">
            <div className="text-center relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#333029] flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">▶</span>
              </div>
              <p className="text-sm text-[#7a6f62]">Watch Our Process</p>
            </div>

            {/* Badge */}
            <div className="absolute top-6 right-6 bg-[#b87333] text-white px-4 py-2 rounded text-xs font-semibold">
              Licensed & Insured
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-12 bg-[#252220]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#b87333] mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              What We Do
            </h2>
            <p className="text-base text-[#a09787] max-w-[600px] mx-auto leading-relaxed">
              From routine maintenance to complete rebuilds, we provide comprehensive
              deck services with quality workmanship and transparent pricing.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="flex justify-center border-b-2 border-[#333029] mb-12">
            {services.map((service, i) => (
              <button
                key={service.id}
                className={`bg-transparent border-none font-medium text-[15px] px-6 py-4 cursor-pointer transition-all duration-200 border-b-2 -mb-0.5 ${
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="text-3xl font-bold mb-5 text-[#f5f2ed]" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
                {services[activeService].title}
              </h3>

              <p className="text-base leading-relaxed text-[#a09787] mb-8">
                {services[activeService].description}
              </p>

              <div className="mb-8">
                <h4 className="text-sm font-semibold text-[#c9b99a] mb-4 uppercase tracking-wide">
                  What's Included:
                </h4>

                {services[activeService].details.map((detail, i) => (
                  <div key={i} className={`flex items-start gap-3 py-3 ${i < services[activeService].details.length - 1 ? 'border-b border-[#333029]' : ''}`}>
                    <span className="text-[#b87333] text-lg leading-none">✓</span>
                    <span className="text-[15px] text-[#c9b99a] leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-6 bg-[#1e1b18] rounded-lg border border-[#333029]">
                <div>
                  <p className="text-xs text-[#7a6f62] mb-1">Starting at</p>
                  <p className="text-2xl font-bold text-[#b87333]" style={{ fontFamily: '"Source Serif 4", serif' }}>
                    {services[activeService].price}
                  </p>
                </div>
                <button className="pro-btn bg-[#b87333] border-none text-white px-8 py-4 text-sm font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Service Image Placeholder */}
            <div className="aspect-[4/3] bg-[#1e1b18] rounded-lg border border-[#333029] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-[#333029] mb-3">
                  {activeService === 0 ? '⬚' : activeService === 1 ? '◐' : '⌂'}
                </div>
                <p className="text-sm text-[#4a4239]">
                  {services[activeService].title} Photo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-12 bg-[#1e1b18]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#b87333] mb-3">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              The Deck Man Difference
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div key={i} className="feature-card bg-[#262320] border border-[#333029] rounded-lg p-8 transition-all duration-200 hover:border-[#4a4239] hover:-translate-y-0.5">
                <div className="w-12 h-12 rounded-lg bg-[#333029] flex items-center justify-center mb-5 text-xl text-[#b87333]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#f5f2ed]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#8a7d70]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-12 bg-[#252220]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-[#b87333] mb-3">Our Process</p>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              How We Work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-14 h-14 rounded-full bg-[#b87333] flex items-center justify-center mb-5 relative z-10">
                  <span className="text-xl font-bold text-white">{step.num}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-[#f5f2ed]">{step.title}</h3>
                <p className="text-sm leading-relaxed text-[#8a7d70]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-12 bg-[#1e1b18]">
        <div className="max-w-[800px] mx-auto text-center p-16 bg-[#252220] rounded-xl border border-[#333029]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
            Ready to Start Your Project?
          </h2>
          <p className="text-base text-[#a09787] mb-8 max-w-[500px] mx-auto leading-relaxed">
            Get a free, no-obligation estimate. We'll assess your deck and
            provide a detailed quote within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="pro-btn bg-[#b87333] border-none text-white px-10 py-[18px] text-[15px] font-semibold cursor-pointer transition-all duration-200 rounded hover:bg-[#a06229] hover:-translate-y-0.5">
              Get Free Estimate
            </button>
            <button className="pro-btn-outline bg-transparent border-2 border-[#4a4239] text-[#c9b99a] px-10 py-[18px] text-[15px] font-semibold cursor-pointer transition-all duration-200 rounded hover:border-[#b87333] hover:text-[#b87333]">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-12 py-12 border-t border-[#2d2a26] bg-[#1a1714]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-9 flex items-center text-lg font-bold text-[#b87333] opacity-80">
              THE DECK MAN
            </div>
            <span className="text-xs text-[#5c5347]">
              © 2024 The Deck Man. All rights reserved.
            </span>
          </div>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, i) => (
              <a key={i} href="#" className="text-xs text-[#5c5347] no-underline hover:text-[#7a6f62]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

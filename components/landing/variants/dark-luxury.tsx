'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { servicesData, contactInfo } from '@/lib/types'
import { ServiceIcon } from '@/components/service-icon'
import { useState } from 'react'

export function DarkLuxury() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    zipCode: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFieldActive = (field: keyof typeof formData) => {
    return focusedField === field || formData[field] !== ''
  }

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' },
  ]

  const testimonials = [
    {
      name: 'Michael R.',
      location: 'Fallbrook, CA',
      text: 'Outstanding work! They transformed our weathered deck into a beautiful outdoor living space.',
      rating: 5,
    },
    {
      name: 'Sarah T.',
      location: 'Temecula, CA',
      text: 'Professional, punctual, and the quality is exceptional. Highly recommend!',
      rating: 5,
    },
    {
      name: 'David K.',
      location: 'Oceanside, CA',
      text: 'Best deck restoration service in San Diego County. Worth every penny.',
      rating: 5,
    },
  ]

  const faqs = [
    {
      question: 'How long does deck restoration take?',
      answer: 'Most deck restoration projects take 2-4 days depending on the size and condition of your deck. We provide a detailed timeline during our free estimate.'
    },
    {
      question: 'Do you offer warranties on your work?',
      answer: 'Yes! All our deck restoration work comes with a satisfaction guarantee and warranty on materials and workmanship. Specific warranty terms vary by service and will be detailed in your quote.'
    },
    {
      question: 'What is the best time of year to restore a deck?',
      answer: 'Spring and fall are ideal for deck restoration in California due to moderate temperatures and lower humidity. However, we work year-round and can schedule your project at your convenience.'
    },
    {
      question: 'How often should I have my deck restored?',
      answer: 'We recommend professional deck maintenance every 2-3 years, depending on weather exposure and deck usage. Regular maintenance extends the life of your deck significantly.'
    },
    {
      question: 'Do I need to be home during the restoration?',
      answer: 'Not necessarily. As long as we have access to the deck area and water source, you don\'t need to be present. We\'ll communicate with you throughout the process.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. Payment is typically due upon completion, and we never require full payment upfront.'
    }
  ]

  return (
    <div className="bg-dark">
      {/* Header */}
      <header className="bg-dark/95 backdrop-blur-sm border-b border-accent/20 sticky top-0 z-50">
        <nav className="container-custom py-4">
          <div className="flex justify-between items-center">
            <Image
              src="/logo.svg"
              alt="The Deck Man"
              width={100}
              height={50}
              className="h-12 w-auto brightness-0 invert"
              priority
            />
            <div className="hidden md:flex gap-8 items-center">
              <Link href="#gallery" className="text-wood-light font-montserrat font-medium hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link href="#services" className="text-wood-light font-montserrat font-medium hover:text-accent transition-colors">
                Services
              </Link>
              <Link href="#areas" className="text-wood-light font-montserrat font-medium hover:text-accent transition-colors">
                Areas
              </Link>
              <Link href="#testimonials" className="text-wood-light font-montserrat font-medium hover:text-accent transition-colors">
                Reviews
              </Link>
              <Link href="#faq" className="text-wood-light font-montserrat font-medium hover:text-accent transition-colors">
                FAQ
              </Link>
              <Link
                href="#contact"
                className="bg-accent text-white px-6 py-3 rounded font-medium hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/50"
              >
                Free Estimate
              </Link>
            </div>
            <button className="md:hidden text-2xl text-wood-light">☰</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark via-charcoal to-brown-primary">
        <div className="absolute inset-0 bg-pattern opacity-10" />

        {/* Background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-wood-dark/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white w-full px-6 py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-montserrat text-sm font-semibold tracking-wider">
                PREMIUM DECK RESTORATION
              </span>
            </div>
          </motion.div>

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-none max-w-7xl mx-auto text-center px-4">
            <span className="block text-wood-light">Transform Your</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-wood-light to-accent">
              Outdoor Living
            </span>
            <span className="block text-white">Experience</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 text-wood-light/90 max-w-4xl mx-auto leading-relaxed font-light text-center px-4">
            Expert deck restoration, refinishing, and maintenance services in Fallbrook, CA.
            <span className="block mt-2 text-accent">Where craftsmanship meets elegance.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-12 sm:mb-16 px-4">
            <Link
              href="#contact"
              className="group bg-accent text-white px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 inline-block"
            >
              <span className="flex items-center gap-2 justify-center">
                Get Your Free Quote
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
            <Link
              href={`tel:${contactInfo.phone}`}
              className="bg-transparent border-2 border-wood-light text-wood-light px-6 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg hover:bg-wood-light hover:text-dark transition-all inline-block"
            >
              <span className="flex items-center gap-2 justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactInfo.phone}
              </span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 sm:p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border-2 border-accent/30 hover:border-accent transition-all"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light mb-2 sm:mb-3">{stat.number}</div>
                <div className="text-sm sm:text-base font-semibold text-wood-light uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding bg-gradient-to-b from-charcoal via-dark to-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Our Work
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 sm:mb-8 px-4">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-wood-light/80 max-w-4xl mx-auto leading-relaxed px-4">
              See the transformation we bring to outdoor spaces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-wood-dark/40 border-2 border-accent/30 group-hover:border-accent transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-white font-montserrat font-bold text-xl mb-2">
                    Project {item}
                  </div>
                  <div className="text-wood-light/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Deck Restoration • Fallbrook, CA
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-accent/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="section-padding bg-gradient-to-br from-charcoal via-dark to-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-wood-dark/10 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-transparent" />
                <span className="text-accent font-montserrat font-bold text-sm tracking-widest uppercase">
                  WHY CHOOSE US
                </span>
              </div>
              <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                The Deck Man <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Difference</span>
              </h2>
              <p className="text-wood-light/80 text-lg leading-relaxed mb-8">
                We&apos;re not just deck contractors – we&apos;re craftsmen who take pride in every project.
                Our commitment to quality and customer satisfaction sets us apart.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Licensed & Insured', desc: 'Full licensing and comprehensive insurance for your protection' },
                  { title: 'Quality Materials', desc: 'Premium products from trusted manufacturers' },
                  { title: 'Expert Team', desc: '15+ years of combined experience in deck restoration' },
                  { title: 'Warranty Backed', desc: 'All work comes with our satisfaction guarantee' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-montserrat font-bold mb-1">{item.title}</h4>
                      <p className="text-wood-light/70 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-wood-dark/20 rounded-2xl border border-accent/30 p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light mb-4">
                    500+
                  </div>
                  <div className="text-2xl font-montserrat font-bold text-white mb-2">
                    Happy Customers
                  </div>
                  <div className="text-wood-light/70">
                    And counting...
                  </div>
                  <div className="flex justify-center gap-1 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gradient-to-b from-dark via-charcoal to-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Our Services
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8">
              Expert Deck Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Solutions</span>
            </h2>
            <p className="text-2xl text-wood-light/80 max-w-4xl mx-auto leading-relaxed">
              Comprehensive services to restore, protect, and enhance your outdoor living space
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative p-10 bg-gradient-to-br from-charcoal via-dark to-charcoal rounded-2xl border-2 border-accent/20 hover:border-accent transition-all cursor-pointer overflow-hidden"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/10 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-8 transform group-hover:scale-110 transition-transform duration-300 text-accent">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-5 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-wood-light/70 text-lg leading-relaxed group-hover:text-wood-light/90 transition-colors">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center text-accent opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <span className="text-sm font-bold uppercase tracking-wider">Explore Service</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas with Map Section */}
      <section id="areas" className="section-padding bg-gradient-to-b from-dark via-charcoal to-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Service Areas
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8">
              Serving <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">San Diego County</span>
            </h2>
            <p className="text-2xl text-wood-light/80 max-w-4xl mx-auto leading-relaxed">
              Professional deck restoration services throughout the region
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                'Fallbrook', 'Temecula', 'Oceanside', 'Vista',
                'Bonsall', 'Rainbow', 'Escondido', 'Murrieta'
              ].map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-r from-charcoal/80 to-dark/80 rounded-xl border border-accent/20 hover:border-accent/50 transition-all group"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors flex-shrink-0">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-montserrat font-bold text-xl">{city}</div>
                    <div className="text-wood-light/70 text-sm">California</div>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-charcoal/80 to-dark/80 rounded-2xl border-2 border-accent/30 p-8 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-32 h-32 mx-auto mb-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <div className="text-4xl font-montserrat font-black text-white mb-4">
                    25+ Mile Radius
                  </div>
                  <div className="text-wood-light/80 text-lg">
                    From Fallbrook, CA
                  </div>
                  <div className="mt-8 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 rounded-full">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span className="text-accent text-sm font-semibold">
                      Free Estimates Available
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-6">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Clients</span> Say
            </h2>
            <p className="text-2xl text-wood-light/80 max-w-3xl mx-auto">
              Don&apos;t just take our word for it
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-charcoal/80 to-dark/80 rounded-xl border border-accent/30 hover:border-accent/50 transition-all"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-wood-light/90 mb-6 leading-relaxed italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-accent/20">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-accent text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gradient-to-b from-charcoal via-dark to-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                FAQ
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8">
              Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Questions</span>
            </h2>
            <p className="text-2xl text-wood-light/80 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about our deck restoration services
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-gradient-to-br from-charcoal/80 to-dark/80 rounded-xl border border-accent/20 hover:border-accent/50 transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-6 cursor-pointer flex items-center justify-between text-white font-montserrat font-semibold text-lg hover:text-accent transition-colors text-left"
                  >
                    <span>{faq.question}</span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="w-6 h-6 text-accent flex-shrink-0 ml-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.4,
                              ease: [0.04, 0.62, 0.23, 0.98]
                            },
                            opacity: {
                              duration: 0.3,
                              delay: 0.1
                            }
                          }
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.3,
                              ease: [0.04, 0.62, 0.23, 0.98]
                            },
                            opacity: {
                              duration: 0.2
                            }
                          }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-wood-light/80 leading-relaxed border-t border-accent/10 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gradient-to-b from-dark via-charcoal to-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-dark rounded-full blur-3xl" />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Get in Touch
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8">
              Request Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Free Quote</span>
            </h2>
            <p className="text-2xl text-wood-light/80 max-w-3xl mx-auto leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within 24 hours
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 bg-gradient-to-br from-charcoal/80 to-dark/80 rounded-2xl border border-accent/30">
                <h3 className="font-montserrat text-3xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-wood-light/60 text-sm mb-1">Phone</div>
                      <a href={`tel:${contactInfo.phone}`} className="text-white text-lg font-semibold hover:text-accent transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-wood-light/60 text-sm mb-1">Email</div>
                      <a href={`mailto:${contactInfo.email}`} className="text-white text-lg font-semibold hover:text-accent transition-colors">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-wood-light/60 text-sm mb-1">Location</div>
                      <div className="text-white text-lg font-semibold">
                        {contactInfo.city}, {contactInfo.state}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-accent/20">
                  <div className="text-wood-light/80 mb-4">Business Hours</div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-wood-light/60">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-gradient-to-br from-charcoal/90 to-dark/90 rounded-3xl border-2 border-accent/40 shadow-2xl shadow-accent/10"
            >
              <p className="text-wood-light/70 mb-10 text-center text-lg">
                Fill out the form below and we&apos;ll contact you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Full Name */}
                <div className="relative h-16">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-accent z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full pl-14 pr-5 bg-dark/70 border-2 border-accent/30 rounded-xl text-white text-base focus:border-accent focus:outline-none transition-all"
                  />
                  <motion.label
                    htmlFor="fullName"
                    initial={false}
                    animate={{
                      top: isFieldActive('fullName') ? '8px' : '50%',
                      translateY: isFieldActive('fullName') ? 0 : '-50%',
                      fontSize: isFieldActive('fullName') ? '12px' : '16px',
                      color: isFieldActive('fullName') ? '#D4A574' : '#A8957A'
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute left-14 pointer-events-none font-medium"
                  >
                    Full Name
                  </motion.label>
                </div>

                {/* Phone Number */}
                <div className="relative h-16">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-accent z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full pl-14 pr-5 bg-dark/70 border-2 border-accent/30 rounded-xl text-white text-base focus:border-accent focus:outline-none transition-all"
                  />
                  <motion.label
                    htmlFor="phone"
                    initial={false}
                    animate={{
                      top: isFieldActive('phone') ? '8px' : '50%',
                      translateY: isFieldActive('phone') ? 0 : '-50%',
                      fontSize: isFieldActive('phone') ? '12px' : '16px',
                      color: isFieldActive('phone') ? '#D4A574' : '#A8957A'
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute left-14 pointer-events-none font-medium"
                  >
                    Phone Number
                  </motion.label>
                </div>

                {/* Email Address */}
                <div className="relative h-16">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-accent z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full pl-14 pr-5 bg-dark/70 border-2 border-accent/30 rounded-xl text-white text-base focus:border-accent focus:outline-none transition-all"
                  />
                  <motion.label
                    htmlFor="email"
                    initial={false}
                    animate={{
                      top: isFieldActive('email') ? '8px' : '50%',
                      translateY: isFieldActive('email') ? 0 : '-50%',
                      fontSize: isFieldActive('email') ? '12px' : '16px',
                      color: isFieldActive('email') ? '#D4A574' : '#A8957A'
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute left-14 pointer-events-none font-medium"
                  >
                    Email Address
                  </motion.label>
                </div>

                {/* Zip Code */}
                <div className="relative h-16">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-accent z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    onFocus={() => setFocusedField('zipCode')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full h-full pl-14 pr-5 bg-dark/70 border-2 border-accent/30 rounded-xl text-white text-base focus:border-accent focus:outline-none transition-all"
                  />
                  <motion.label
                    htmlFor="zipCode"
                    initial={false}
                    animate={{
                      top: isFieldActive('zipCode') ? '8px' : '50%',
                      translateY: isFieldActive('zipCode') ? 0 : '-50%',
                      fontSize: isFieldActive('zipCode') ? '12px' : '16px',
                      color: isFieldActive('zipCode') ? '#D4A574' : '#A8957A'
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute left-14 pointer-events-none font-medium"
                  >
                    Zip Code
                  </motion.label>
                </div>

                {/* Message */}
                <div className="relative">
                  <div className="absolute left-5 top-5 text-accent z-10">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className="w-full pl-14 pr-5 pt-5 pb-5 bg-dark/70 border-2 border-accent/30 rounded-xl text-white text-base focus:border-accent focus:outline-none transition-all resize-none"
                  />
                  <motion.label
                    htmlFor="message"
                    initial={false}
                    animate={{
                      top: isFieldActive('message') ? '8px' : '20px',
                      fontSize: isFieldActive('message') ? '12px' : '16px',
                      color: isFieldActive('message') ? '#D4A574' : '#A8957A'
                    }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    className="absolute left-14 pointer-events-none font-medium"
                  >
                    Tell us about your project or ask any question...
                  </motion.label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white px-8 py-5 rounded-xl font-montserrat font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 flex items-center justify-center gap-3 group mt-8"
                >
                  <span>Send Message</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-black text-white section-padding border-t border-accent/20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Image
                src="/logo.svg"
                alt="The Deck Man"
                width={120}
                height={60}
                className="h-16 w-auto mb-5 brightness-0 invert"
              />
              <p className="text-wood-light/70 mb-6 leading-relaxed">
                Professional deck restoration and refinishing services in Fallbrook, CA.
                Transforming outdoor spaces with quality craftsmanship.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-montserrat font-semibold text-accent mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#gallery" className="text-wood-light/70 hover:text-accent transition-colors">Gallery</Link></li>
                <li><Link href="#services" className="text-wood-light/70 hover:text-accent transition-colors">Services</Link></li>
                <li><Link href="#areas" className="text-wood-light/70 hover:text-accent transition-colors">Service Areas</Link></li>
                <li><Link href="#testimonials" className="text-wood-light/70 hover:text-accent transition-colors">Reviews</Link></li>
                <li><Link href="#faq" className="text-wood-light/70 hover:text-accent transition-colors">FAQ</Link></li>
                <li><Link href="#contact" className="text-wood-light/70 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-montserrat font-semibold text-accent mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-wood-light/70">{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${contactInfo.phone}`} className="text-wood-light/70 hover:text-accent transition-colors">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${contactInfo.email}`} className="text-wood-light/70 hover:text-accent transition-colors">
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent/20 pt-8 text-center text-wood-light/50 text-sm">
            <p>&copy; 2024 The Deck Man. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

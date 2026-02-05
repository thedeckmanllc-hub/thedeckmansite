'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { servicesData, contactInfo, serviceSlugMap } from '@/lib/types'
import { ServiceIcon } from '@/components/service-icon'
import { useState, useEffect } from 'react'

export function DarkLuxury() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(2)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    zipCode: '',
    message: ''
  })

  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFieldActive = (field: keyof typeof formData) => {
    return focusedField === field || formData[field] !== ''
  }

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '4+', label: 'Years Experience' },
    { number: '100%', label: 'Satisfaction' },
  ]

  const testimonials = [
    {
      name: 'Brendan H.',
      location: 'San Diego County, CA',
      text: 'I had a rotting deck and I had no idea how bad it was. I asked Dennis for his help to assess how bad it was and come up with a plan. He was very transparent and punctual, and his craftsmanship was top notch. He gave me options along the way, which I really appreciate. I very much liked working with him and will continue to do so for all of my future projects.',
      rating: 5,
      platform: 'Google'
    },
    {
      name: 'Joshua B.',
      location: 'San Diego County, CA',
      text: 'Den was exactly what we needed for our deck! We needed everything to be sanded and stained to start fresh. He worked efficiently and with care. Now we have a deck to be proud of!',
      rating: 5,
      platform: 'Yelp'
    },
    {
      name: 'Elena H.',
      location: 'San Diego County, CA',
      text: 'Den and his team were awesome. They did full sanding and painting job on my deck and it came out amazing. Communication was great. Den\'s team exceeded my expectations on the quality of their work and I am going to use them again for expanding my deck.',
      rating: 5,
      platform: 'Google'
    },
    {
      name: 'Daniel W.',
      location: 'San Diego County, CA',
      text: 'We needed to freshen up the deck around our pool — we had just bought some beautiful new loungers, but the old deck was really bringing the vibe down. Some of the boards had swelled from moisture, a few were chipped, and overall it just looked worn out. The Deck Man completely transformed it in just one day — I\'m honestly amazed! They replaced the damaged boards, and the rest were restored so well they look brand new. The whole area looks amazing now, and the quality of work for the price was honestly impressive. Highly recommend!',
      rating: 5,
      platform: 'Thumbtack'
    },
    {
      name: 'Ethan W.',
      location: 'San Diego County, CA',
      text: 'Den did a great job repairing and painting our deck. Our deck had some boards that needed replacing and the whole thing needed a fresh coat. He was prompt, gave us a reasonable price, and stuck to the timeline he promised. The job looked very good when finished - clean lines and even coverage. No complaints at all. Would definitely recommend highly to anyone looking for deck work.',
      rating: 5,
      platform: 'Yelp'
    },
    {
      name: 'Marcus T.',
      location: 'Escondido, CA',
      text: 'I was honestly worried about how much the repair would cost, but Den gave me a fair quote and stuck to it. No hidden fees or surprises. The deck had some serious water damage and a couple of boards that were completely shot. He replaced what needed replacing and refinished the rest. Looks fantastic and feels solid under your feet again.',
      rating: 5,
      platform: 'Google'
    },
    {
      name: 'Amy L.',
      location: 'Carlsbad, CA',
      text: 'We had our deck redone before hosting a family gathering, and I\'m so glad we did! Den worked around our timeline and finished ahead of schedule. Everyone commented on how beautiful it looked. The color we chose turned out perfect, and the finish is really smooth. Great experience overall!',
      rating: 5,
      platform: 'Thumbtack'
    },
    {
      name: 'Chris P.',
      location: 'Fallbrook, CA',
      text: 'Solid work, fair pricing. Den showed up when he said he would and cleaned up after himself each day. Our deck was faded and had some loose boards that were becoming a safety issue. Everything is tight and secure now, and the stain looks even and professional. Would use again.',
      rating: 5,
      platform: 'Yelp'
    },
    {
      name: 'Rebecca M.',
      location: 'San Marcos, CA',
      text: 'I got quotes from three different companies and Den was in the middle price-wise, but his approach and communication made the difference. He actually listened to what we wanted and gave honest advice about what would work best. The deck looks incredible — my husband keeps going out there just to admire it! Den also pointed out some minor issues with our railing that we hadn\'t noticed and fixed those too at no extra charge. That kind of integrity is rare these days.',
      rating: 5,
      platform: 'Google'
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const nextGroup = prev + 3
      return nextGroup >= testimonials.length ? 0 : nextGroup
    })
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => {
      const prevGroup = prev - 3
      return prevGroup < 0 ? Math.floor((testimonials.length - 1) / 3) * 3 : prevGroup
    })
  }

  const reviewPlatforms = [
    { name: 'Google Reviews', icon: 'G', rating: '4.9' },
    { name: 'Yelp', icon: 'Y', rating: '4.8' },
    { name: 'Thumbtack', icon: 'T', rating: '5.0' },
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
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, and all major credit cards. Payment is typically due upon completion, and we never require full payment upfront.'
    }
  ]

  return (
    <div className="bg-dark">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-dark/98 backdrop-blur-md border-b border-accent/30 shadow-xl shadow-accent/10'
            : 'bg-dark/80 backdrop-blur-sm border-b border-accent/10'
        }`}
      >
        <nav className={`container-custom transition-all duration-500 ${isScrolled ? 'py-2' : 'py-1'}`}>
          <div className="flex justify-between items-center">
            {/* Dynamic Logo */}
            <Link href="/#hero">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="cursor-pointer"
              >
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.85 : 1,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <Image
                    src="/logo.svg"
                    alt="The Deck Man"
                    width={isScrolled ? 160 : 240}
                    height={isScrolled ? 80 : 120}
                    className={`brightness-0 invert transition-all duration-500 ${
                      isScrolled ? 'h-16' : 'h-28'
                    } w-auto`}
                    priority
                  />
                </motion.div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              {[
                { href: '#gallery', label: 'Gallery' },
                { href: '#services', label: 'Services' },
                { href: '#areas', label: 'Areas' },
                { href: '#testimonials', label: 'Reviews' },
                { href: '#faq', label: 'FAQ' },
              ].map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`relative text-wood-light font-montserrat font-medium hover:text-accent transition-all group ${
                      isScrolled ? 'text-base' : 'text-lg'
                    }`}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-wood-dark transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="#contact"
                  className={`inline-block bg-gradient-to-r from-accent to-accent/80 text-white rounded-lg font-medium hover:from-accent/90 hover:to-accent/70 hover:shadow-lg hover:shadow-accent/50 transition-all ${
                    isScrolled ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'
                  }`}
                >
                  Free Estimate
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-2xl text-wood-light hover:text-accent transition-colors relative group"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="pt-6 pb-4 flex flex-col gap-4 border-t border-accent/20 mt-4">
                  {[
                    { href: '#gallery', label: 'Gallery' },
                    { href: '#services', label: 'Services' },
                    { href: '#areas', label: 'Areas' },
                    { href: '#testimonials', label: 'Reviews' },
                    { href: '#faq', label: 'FAQ' },
                  ].map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-wood-light font-montserrat font-medium hover:text-accent transition-colors py-2 hover:pl-2"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block bg-gradient-to-r from-accent to-accent/80 text-white px-6 py-3 rounded-lg font-medium text-center hover:shadow-lg hover:shadow-accent/50 transition-all"
                    >
                      Free Estimate
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/bg.webp"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-dark/90" />
        </div>

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

          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight max-w-7xl mx-auto text-center px-4">
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

          {/* Elegant Bento Grid Gallery */}
          <div className="grid grid-cols-12 gap-6 auto-rows-[280px]">
            {/* Project 1 - Large Featured */}
            <Link href="/projects/luxury-hillside-deck" className="group relative col-span-12 md:col-span-7 row-span-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full rounded-3xl overflow-hidden cursor-pointer"
              >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/25 to-wood-dark/40 border border-accent/20 group-hover:border-accent/50 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/50 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="inline-flex items-center gap-2 bg-accent/90 px-4 py-2 rounded-full mb-6">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-montserrat font-bold text-xs uppercase tracking-wider">Featured</span>
                  </div>
                  <h3 className="text-white font-montserrat font-black text-3xl md:text-5xl mb-4 leading-tight">
                    Luxury Hillside Deck Transformation
                  </h3>
                  <p className="text-wood-light/90 text-lg mb-6 leading-relaxed max-w-2xl">
                    Complete restoration of a 2,000 sq ft hillside deck featuring custom railings, premium staining, and advanced waterproofing systems.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium">Fallbrook, CA</span>
                    <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-lg text-wood-light text-sm">14 Days</span>
                    <span className="bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-lg text-accent text-sm font-bold border border-accent/30">★ 5.0 Rating</span>
                  </div>
                </motion.div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </motion.div>
            </Link>

            {/* Project 2 - Vertical */}
            <Link href="/projects/modern-coastal-patio" className="group relative col-span-12 md:col-span-5 row-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="h-full rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-wood-dark/30 border border-accent/20 group-hover:border-accent/50 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-accent font-montserrat text-xs font-bold uppercase tracking-wider mb-4">Staining & Refinishing</span>
                  <h4 className="text-white font-montserrat font-bold text-2xl md:text-3xl mb-3 leading-tight">
                    Modern Coastal Patio
                  </h4>
                  <p className="text-wood-light/80 text-sm mb-4">Vista, CA • 8 Days</p>
                  <div className="flex gap-2">
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-accent text-xs font-semibold">★ 5.0</span>
                    <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-wood-light/90 text-xs">1,200 sq ft</span>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-12 h-12 bg-accent/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </motion.div>
            </Link>

            {/* Project 3 - Wide */}
            <Link href="/projects/oceanside-beach-house" className="group relative col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="h-full rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-wood-dark/30 border border-accent/20 group-hover:border-accent/50 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-accent font-montserrat text-xs font-bold uppercase tracking-wider mb-3">Complete Renovation</span>
                  <h4 className="text-white font-montserrat font-bold text-xl md:text-2xl mb-2">Oceanside Beach House Deck</h4>
                  <p className="text-wood-light/80 text-sm">Oceanside, CA • 12 Days • ★ 5.0</p>
                </div>
              </motion.div>
            </Link>

            {/* Project 4 - Square */}
            <Link href="/projects/garden-oasis-temecula" className="group relative col-span-12 md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="h-full rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-wood-dark/30 border border-accent/20 group-hover:border-accent/50 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-accent font-montserrat text-xs font-bold uppercase tracking-wider mb-2">Deck Repair</span>
                  <h4 className="text-white font-montserrat font-bold text-xl mb-2">Garden Oasis</h4>
                  <p className="text-wood-light/80 text-sm">Temecula, CA</p>
                </div>
              </motion.div>
            </Link>

            {/* Project 5 - Square */}
            <Link href="/projects/resort-style-escondido" className="group relative col-span-6 md:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="h-full rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-wood-dark/30 border border-accent/20 group-hover:border-accent/50 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-accent font-montserrat text-xs font-bold uppercase tracking-wider mb-2">Pool Deck</span>
                  <h4 className="text-white font-montserrat font-bold text-lg mb-2">Resort Style</h4>
                  <p className="text-wood-light/80 text-xs">Escondido, CA</p>
                </div>
              </motion.div>
            </Link>

            {/* Project 6 - Wide */}
            <Link href="/projects/backyard-paradise-murrieta" className="group relative col-span-6 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="h-full rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-wood-dark/30 border border-accent/20 group-hover:border-accent/50 transition-all" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <span className="text-accent font-montserrat text-xs font-bold uppercase tracking-wider mb-3">Restoration Project</span>
                  <h4 className="text-white font-montserrat font-bold text-xl md:text-2xl mb-2">Backyard Paradise Retreat</h4>
                  <p className="text-wood-light/80 text-sm">Murrieta, CA • 10 Days • ★ 5.0</p>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="section-padding bg-gradient-to-br from-charcoal via-dark to-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-gradient-radial from-accent/10 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm tracking-widest uppercase">
                WHY CHOOSE US
              </span>
              <div className="w-20 h-1 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              The Deck Man <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Difference</span>
            </h2>
            <p className="text-wood-light/80 text-xl leading-relaxed mb-16 max-w-3xl mx-auto">
              We&apos;re not just deck contractors – we&apos;re craftsmen who take pride in every project.
              Our commitment to quality and customer satisfaction sets us apart.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Licensed & Insured', desc: 'Full licensing and comprehensive insurance for your protection' },
                { title: 'Quality Materials', desc: 'Premium products from trusted manufacturers' },
                { title: 'Expert Team', desc: '15+ years of combined experience in deck restoration' },
                { title: 'Warranty Backed', desc: 'All work comes with our satisfaction guarantee' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-wood-dark/20 to-charcoal/20 border border-accent/20 rounded-xl p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-white font-montserrat font-bold mb-3 text-xl">{item.title}</h4>
                  <p className="text-wood-light/70 text-base leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            {servicesData.map((service, index) => {
              const serviceSlug = serviceSlugMap[service.icon]
              return (
                <Link
                  key={index}
                  href={`/services/${serviceSlug}`}
                  scroll={false}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -15, scale: 1.02 }}
                    className="group relative p-10 bg-gradient-to-br from-charcoal via-dark to-charcoal rounded-2xl border-2 border-accent/20 hover:border-accent transition-all cursor-pointer overflow-hidden h-full"
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
                </Link>
              )
            })}
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

      {/* CTA Strip Section */}
      <section className="relative py-4 bg-gradient-to-r from-accent via-wood-dark to-accent overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Logo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo.svg"
                alt="The Deck Man"
                width={400}
                height={200}
                className="h-40 w-auto brightness-0 invert"
              />
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <h3 className="text-white text-3xl font-bold font-montserrat">
                Transform Your Deck Today
              </h3>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link
                href="#contact"
                className="group relative bg-white text-accent px-10 py-5 rounded-xl font-montserrat font-bold text-xl hover:bg-white/95 transition-all hover:shadow-2xl hover:shadow-white/30 hover:scale-105 inline-flex items-center gap-4 overflow-hidden"
              >
                <span className="relative z-10">Get Free Estimate</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white to-wood-light/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile text - shown below on small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:hidden text-center mt-4"
          >
            <h3 className="text-white text-2xl font-bold font-montserrat">
              Transform Your Deck Today
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-wood-dark/10 rounded-full blur-3xl" />

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
                Testimonials
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8">
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Clients</span> Say
            </h2>
            <p className="text-xl md:text-2xl text-wood-light/80 max-w-3xl mx-auto leading-relaxed">
              Real reviews from real customers
            </p>
          </motion.div>

          {/* Carousel */}
          <div className="relative max-w-[1400px] mx-auto mb-12">
            <div className="overflow-hidden px-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="grid md:grid-cols-3 gap-6"
                >
                  {[0, 1, 2].map((offset) => {
                    const index = currentTestimonial + offset
                    const testimonial = testimonials[index]
                    if (!testimonial) return null
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: offset * 0.05, duration: 0.2 }}
                        className="p-6 bg-gradient-to-br from-charcoal/90 to-dark/90 rounded-2xl border-2 border-accent/30 hover:border-accent/50 transition-all flex flex-col"
                      >
                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>

                        {/* Review Text */}
                        <p className="text-wood-light/90 text-base leading-relaxed mb-auto italic">
                          &quot;{testimonial.text}&quot;
                        </p>

                        {/* Author Info */}
                        <div className="flex items-center gap-3 pt-4 mt-4 border-t border-accent/20">
                          <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-accent/30 flex-shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white font-montserrat font-bold text-sm mb-0.5 truncate">
                              {testimonial.name}
                            </p>
                            <p className="text-wood-light/60 text-xs truncate">
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent/20 backdrop-blur-sm hover:bg-accent border-2 border-accent/30 hover:border-accent rounded-full flex items-center justify-center transition-all hover:scale-110 group z-10"
            >
              <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-accent/20 backdrop-blur-sm hover:bg-accent border-2 border-accent/30 hover:border-accent rounded-full flex items-center justify-center transition-all hover:scale-110 group z-10"
            >
              <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index * 3)}
                  className={`transition-all ${
                    Math.floor(currentTestimonial / 3) === index
                      ? 'w-8 h-2 bg-accent rounded-full'
                      : 'w-2 h-2 bg-accent/30 rounded-full hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Review Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[1000px] mx-auto"
          >
            <p className="text-center text-wood-light/60 text-xs uppercase tracking-wider mb-6 font-semibold">
              Find us on
            </p>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {reviewPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-gradient-to-br from-charcoal/50 to-dark/50 rounded-xl border border-accent/20 hover:border-accent/40 transition-all group"
                >
                  {/* Platform Icon */}
                  {platform.name === 'Google Reviews' && (
                    <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 48 48" fill="none">
                      <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                      <path d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                      <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                      <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                    </svg>
                  )}
                  {platform.name === 'Yelp' && (
                    <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 48 48" fill="none">
                      <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z" fill="#D32323"/>
                      <path d="M24.315 30.26c-.075.045-3.09 1.83-3.42 2.025-.66.39-1.455.45-2.16.165-.69-.285-1.185-.885-1.335-1.62-.06-.3-.03-.615.09-.9.315-.75 3.255-7.26 3.42-7.59.165-.33.45-.555.795-.63.345-.075.705 0 .99.21l2.895 1.92c.465.315.615.945.33 1.425-.285.48-3.42 5.16-3.42 5.16s.105-.075.045-.03l2.76-1.635zm-3.21-13.62c.06-.33.21-.63.45-.87.51-.51 1.32-.6 1.92-.21.3.195.54.48.66.81.36.975.795 2.595 1.065 3.405.15.45.12.945-.075 1.38-.195.435-.555.78-.99.945-.99.39-3.84 1.35-4.23 1.5-.615.24-1.32.12-1.815-.315-.495-.435-.705-1.11-.54-1.725.375-1.395 3.195-3.945 3.555-4.92zm12.72 6.69c-.69-.12-1.35-.345-1.98-.675-.63-.33-1.185-.75-1.68-1.26-.495-.51-.915-1.08-1.26-1.695-.345-.615-.6-1.275-.765-1.965-.165-.69-.24-1.41-.225-2.13.015-.72.12-1.44.315-2.13.195-.69.48-1.35.855-1.965.375-.615.825-1.17 1.35-1.665.525-.495 1.11-.915 1.74-1.26.63-.345 1.305-.6 2.01-.765.705-.165 1.44-.24 2.175-.225.735.015 1.47.12 2.175.315.705.195 1.38.48 2.01.855.63.375 1.2.825 1.71 1.35.51.525.945 1.11 1.305 1.74.36.63.63 1.305.81 2.01.18.705.27 1.44.27 2.175s-.09 1.47-.27 2.175c-.18.705-.45 1.38-.81 2.01-.36.63-.795 1.215-1.305 1.74-.51.525-1.08.975-1.71 1.35-.63.375-1.305.66-2.01.855-.705.195-1.44.3-2.175.315-.735.015-1.47-.06-2.175-.225-.705-.165-1.38-.42-2.01-.765z" fill="white"/>
                    </svg>
                  )}
                  {platform.name === 'Thumbtack' && (
                    <svg className="w-10 h-10 flex-shrink-0" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="20" fill="#009FD4"/>
                      <path d="M24 14c-1.657 0-3 1.343-3 3v5h-2c-.552 0-1 .448-1 1 0 .552.448 1 1 1h2v8c0 1.105.895 2 2 2s2-.895 2-2v-8h2c.552 0 1-.448 1-1 0-.552-.448-1-1-1h-2v-5c0-1.657-1.343-3-3-3z" fill="white"/>
                    </svg>
                  )}

                  {/* Platform Info */}
                  <div className="flex flex-col">
                    <p className="text-white font-montserrat font-bold text-sm mb-0.5">
                      {platform.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-accent text-xs font-bold">{platform.rating}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-gradient-to-b from-dark via-charcoal to-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        {/* Decorative background elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-wood-dark/10 rounded-full blur-3xl" />

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
                Frequently Asked Questions
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-5xl md:text-7xl font-black text-white mb-8">
              Got <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Questions?</span>
            </h2>
            <p className="text-xl md:text-2xl text-wood-light/80 max-w-3xl mx-auto leading-relaxed">
              Find answers to the most common questions about our deck restoration services
            </p>
          </motion.div>

          <div className="space-y-6 max-w-[900px] mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className={`group relative bg-gradient-to-br from-charcoal/90 to-dark/90 rounded-2xl border-2 transition-all overflow-hidden ${
                    isOpen
                      ? 'border-accent shadow-2xl shadow-accent/20'
                      : 'border-accent/20 hover:border-accent/40'
                  }`}
                >
                  {/* Glow effect when open */}
                  {isOpen && (
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                  )}

                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full px-6 py-5 cursor-pointer flex items-center gap-4 text-left relative z-10"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen
                        ? 'bg-accent shadow-lg shadow-accent/30'
                        : 'bg-accent/20 group-hover:bg-accent/30'
                    }`}>
                      <motion.svg
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className={`w-5 h-5 transition-colors ${
                          isOpen ? 'text-white' : 'text-accent'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </motion.svg>
                    </div>

                    <div className="flex-1">
                      <h3 className={`font-montserrat font-bold text-lg leading-tight transition-colors ${
                        isOpen
                          ? 'text-accent'
                          : 'text-white group-hover:text-accent'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
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
                        className="overflow-hidden relative z-10"
                      >
                        <div className="px-6 pb-6 pl-[70px] pr-8">
                          <div className="pt-5 border-t border-accent/20">
                            <p className="text-wood-light leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* CTA at the bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <p className="text-wood-light/80 text-xl mb-8">
              Still have questions?
            </p>
            <Link
              href="#contact"
              className="group bg-accent text-white px-12 py-6 rounded-2xl font-montserrat font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-2xl hover:shadow-accent/50 hover:-translate-y-1 inline-flex items-center gap-4"
            >
              <span>Contact Us for Free Consultation</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
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
      <footer className="relative bg-gradient-to-b from-dark via-charcoal to-dark text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-wood-dark/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-[1600px] mx-auto px-6 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              {/* Enhanced Logo in Footer */}
              <div className="relative inline-block group mb-8">
                {/* Glowing background */}
                <div className="absolute -inset-6 bg-gradient-to-br from-accent/20 via-wood-dark/10 to-accent/20 rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Logo container */}
                <div className="relative bg-gradient-to-br from-dark/80 to-charcoal/80 backdrop-blur-sm p-6 rounded-2xl transition-all duration-300 shadow-xl shadow-accent/10">
                  <Image
                    src="/logo.svg"
                    alt="The Deck Man"
                    width={280}
                    height={140}
                    className="h-32 w-auto brightness-0 invert drop-shadow-[0_0_15px_rgba(217,156,107,0.4)] group-hover:drop-shadow-[0_0_20px_rgba(217,156,107,0.6)] transition-all duration-300"
                  />
                </div>
              </div>

              <p className="text-wood-light/70 mb-6 leading-relaxed text-base max-w-sm">
                Professional deck restoration and refinishing services in Fallbrook, CA.
                Transforming outdoor spaces with quality craftsmanship since 2009.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                <a
                  href="#"
                  className="group w-11 h-11 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center hover:from-accent hover:to-accent/80 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                >
                  <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-11 h-11 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center hover:from-accent hover:to-accent/80 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                >
                  <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  className="group w-11 h-11 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center hover:from-accent hover:to-accent/80 transition-all hover:scale-110 hover:shadow-lg hover:shadow-accent/30"
                >
                  <svg className="w-5 h-5 text-accent group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-lg font-montserrat font-bold text-white mb-5 flex items-center gap-2">
                <div className="w-1 h-6 bg-accent rounded-full" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Gallery', 'Services', 'Service Areas', 'Reviews', 'FAQ', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-wood-light/70 hover:text-accent transition-colors flex items-center gap-2 group text-sm"
                    >
                      <svg className="w-4 h-4 text-accent/50 group-hover:text-accent transition-all group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h4 className="text-lg font-montserrat font-bold text-white mb-5 flex items-center gap-2">
                <div className="w-1 h-6 bg-accent rounded-full" />
                Our Services
              </h4>
              <ul className="space-y-3">
                <li className="text-wood-light/70 text-sm flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Deck Restoration
                </li>
                <li className="text-wood-light/70 text-sm flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Deck Refinishing
                </li>
                <li className="text-wood-light/70 text-sm flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Deck Staining
                </li>
                <li className="text-wood-light/70 text-sm flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Deck Repair
                </li>
                <li className="text-wood-light/70 text-sm flex items-start gap-2">
                  <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Maintenance Services
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="text-lg font-montserrat font-bold text-white mb-5 flex items-center gap-2">
                <div className="w-1 h-6 bg-accent rounded-full" />
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 text-wood-light/70 hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{contactInfo.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-wood-light/70 hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{contactInfo.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-wood-light/70">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-white mb-1">Location</div>
                    <div>{contactInfo.city}, {contactInfo.state} {contactInfo.zip}</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-accent/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-wood-light/50 text-sm text-center md:text-left">
                &copy; 2024 The Deck Man. All rights reserved. | Licensed & Insured
              </p>
              <div className="flex items-center gap-6 text-xs text-wood-light/50">
                <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
                <span className="text-accent/30">|</span>
                <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

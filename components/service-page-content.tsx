'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ServiceIcon } from '@/components/service-icon'
import { ServiceContent } from '@/lib/services-content'
import { contactInfo } from '@/lib/types'
import { useEffect } from 'react'

interface ServicePageContentProps {
  service: ServiceContent
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-charcoal to-dark">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          scroll={true}
          className="flex items-center gap-2 px-4 py-2 bg-charcoal/90 border-2 border-accent/30 hover:border-accent rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm group"
        >
          <svg
            className="w-5 h-5 text-wood-light group-hover:text-accent transition-colors"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span className="text-wood-light group-hover:text-accent font-montserrat font-semibold transition-colors">
            Back to Services
          </span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

        <div className="mx-auto px-6 relative z-10" style={{maxWidth: 'var(--container-wide)'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Icon */}
            <div className="flex justify-center" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
              <div className="rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center" style={{width: 'clamp(5rem, 6vw, 6rem)', height: 'clamp(5rem, 6vw, 6rem)'}}>
                <div style={{width: 'clamp(2.5rem, 3vw, 3rem)', height: 'clamp(2.5rem, 3vw, 3rem)'}}>
                  <ServiceIcon icon={service.icon} className="text-accent" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-montserrat text-adaptive-h1 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
              {service.heroTitle.split(' ').map((word, index) => {
                const isHighlight = ['Restoration', 'Refinishing', 'Staining', 'Painting', 'Sealing', 'Repair', 'Cleaning'].includes(word)
                return (
                  <span key={index}>
                    {isHighlight ? (
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">
                        {word}
                      </span>
                    ) : (
                      word
                    )}{' '}
                  </span>
                )
              })}
            </h1>

            {/* Subtitle */}
            <p className="text-adaptive-subtitle text-wood-light/80 mx-auto" style={{maxWidth: 'min(85vw, 900px)', marginBottom: 'clamp(2rem, 2.5vw, 2rem)'}}>
              {service.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center" style={{gap: 'clamp(1rem, 1.5vw, 1rem)'}}>
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent via-accent to-wood-dark text-white font-montserrat font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/50"
                style={{padding: 'clamp(1rem, 1.3vw, 1rem) clamp(2rem, 2.5vw, 2rem)', fontSize: 'clamp(0.95rem, 1.1vw, 1rem)'}}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-wood-dark via-accent to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Free Estimate</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long Description */}
      <section className="bg-gradient-to-b from-charcoal via-dark to-charcoal relative overflow-hidden" style={{padding: 'clamp(4rem, 5vw, 5rem) 0'}}>
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-wood-dark rounded-full blur-3xl" />
        </div>

        <div className="mx-auto px-6 relative z-10" style={{maxWidth: 'var(--container-medium)'}}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-dark via-charcoal to-dark rounded-3xl border border-accent/20 shadow-2xl"
            style={{padding: 'clamp(2rem, 3vw, 3rem)'}}
          >
            {/* Content */}
            <div className="relative">
              {/* Icon or Decorative Element */}
              <div className="flex items-center gap-4 mb-6">
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-wood-light rounded-full" />
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              </div>

              <p className="text-adaptive-body text-wood-light/95 leading-relaxed font-light tracking-wide">
                {service.longDescription}
              </p>

              {/* Bottom Decorative Element */}
              <div className="flex items-center gap-4 mt-6 justify-end">
                <div className="w-3 h-3 rounded-full bg-wood-light/50 animate-pulse" />
                <div className="h-1 w-16 bg-gradient-to-l from-wood-light to-accent rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Process Section */}
      <section className="bg-gradient-to-b from-charcoal to-dark" style={{padding: 'clamp(4rem, 5vw, 5rem) 0'}}>
        <div className="mx-auto px-6" style={{maxWidth: 'var(--container-wide)'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{marginBottom: 'clamp(2.5rem, 4vw, 4rem)'}}
          >
            <div className="inline-flex items-center mb-6" style={{gap: 'clamp(0.75rem, 1vw, 1rem)'}}>
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Our Process
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">
                Work
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{gap: 'clamp(1.5rem, 2vw, 2rem)'}}>
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-charcoal via-dark to-charcoal rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 h-full group hover:shadow-xl hover:shadow-accent/10" style={{padding: 'clamp(1.5rem, 2vw, 2rem)'}}>
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/30">
                      <span className="font-montserrat font-black text-dark text-xl">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <div style={{marginTop: 'clamp(2rem, 2.5vw, 2rem)'}}>
                    <h3 className="font-montserrat font-bold text-white group-hover:text-accent transition-colors" style={{fontSize: 'clamp(1.15rem, 1.25vw, 1.25rem)', marginBottom: 'clamp(1rem, 1.2vw, 1rem)'}}>
                      {step.title}
                    </h3>
                    <p className="text-wood-light/80 leading-relaxed text-adaptive-body">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-accent/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gradient-to-b from-dark to-charcoal" style={{padding: 'clamp(4rem, 5vw, 5rem) 0'}}>
        <div className="mx-auto px-6" style={{maxWidth: 'var(--container-narrow)'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{marginBottom: 'clamp(2.5rem, 4vw, 4rem)'}}
          >
            <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">
                Questions
              </span>
            </h2>
          </motion.div>

          <div style={{display: 'flex', flexDirection: 'column', gap: 'clamp(1.25rem, 1.5vw, 1.5rem)'}}>
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-charcoal to-dark rounded-xl border border-accent/20"
                style={{padding: 'clamp(1.5rem, 2vw, 2rem)'}}
              >
                <h3 className="font-montserrat font-bold text-white" style={{fontSize: 'clamp(1.15rem, 1.25vw, 1.25rem)', marginBottom: 'clamp(1rem, 1.2vw, 1rem)'}}>
                  {item.question}
                </h3>
                <p className="text-wood-light/90 leading-relaxed text-adaptive-body">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-charcoal to-dark" style={{padding: 'clamp(4rem, 5vw, 5rem) 0'}}>
        <div className="mx-auto px-6" style={{maxWidth: 'min(92vw, 1200px)'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/30 text-center"
            style={{padding: 'clamp(2.5rem, 3vw, 3rem)'}}
          >
            <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
              Ready to Transform Your Deck?
            </h2>
            <p className="text-adaptive-subtitle text-wood-light/90 mx-auto" style={{marginBottom: 'clamp(2rem, 2.5vw, 2rem)', maxWidth: 'min(85vw, 800px)'}}>
              Get a free, no-obligation estimate for your {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent via-accent to-wood-dark text-white font-montserrat font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/50 px-8 py-4 text-base"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-wood-dark via-accent to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Free Estimate</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

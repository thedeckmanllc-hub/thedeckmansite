'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ServiceIcon } from '@/components/service-icon'
import { ServiceContent } from '@/lib/services-content'
import { contactInfo } from '@/lib/types'

interface ServicePageContentProps {
  service: ServiceContent
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-charcoal to-dark">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#services"
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

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center">
                <ServiceIcon icon={service.icon} className="w-12 h-12 text-accent" />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
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
            <p className="text-xl md:text-2xl text-wood-light/80 max-w-3xl mx-auto mb-8">
              {service.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-dark font-montserrat font-bold rounded-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
              >
                Get Free Estimate
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-charcoal/50 text-white font-montserrat font-bold rounded-lg border-2 border-accent/30 hover:border-accent hover:bg-charcoal transition-all duration-300"
              >
                Call {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Long Description */}
      <section className="py-16 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <p className="text-lg md:text-xl text-wood-light/90 leading-relaxed">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat text-4xl md:text-5xl font-black text-white mb-6">
              Why Choose Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">
                {service.title}
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-charcoal to-dark p-6 rounded-xl border border-accent/20 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 group-hover:bg-accent/30 transition-colors">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-wood-light/90 text-base leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Our Process
              </span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent" />
            </div>
            <h2 className="font-montserrat text-4xl md:text-5xl font-black text-white mb-6">
              How We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">
                Work
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-charcoal via-dark to-charcoal p-8 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all duration-300 h-full group hover:shadow-xl hover:shadow-accent/10">
                  {/* Step Number */}
                  <div className="absolute -top-6 left-8">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/30">
                      <span className="font-montserrat font-black text-dark text-xl">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-montserrat text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-wood-light/80 leading-relaxed">
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
      <section className="py-20 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-[900px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-montserrat text-4xl md:text-5xl font-black text-white mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">
                Questions
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-charcoal to-dark p-8 rounded-xl border border-accent/20"
              >
                <h3 className="font-montserrat text-xl font-bold text-white mb-4">
                  {item.question}
                </h3>
                <p className="text-wood-light/90 leading-relaxed">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 rounded-3xl border border-accent/30 text-center"
          >
            <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white mb-6">
              Ready to Transform Your Deck?
            </h2>
            <p className="text-xl text-wood-light/90 mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your {service.title.toLowerCase()} project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-accent to-accent/90 text-dark font-montserrat font-bold rounded-lg hover:shadow-xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105"
              >
                Request Free Estimate
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="px-8 py-4 bg-charcoal text-white font-montserrat font-bold rounded-lg border-2 border-accent hover:border-accent hover:bg-charcoal/80 transition-all duration-300"
              >
                Call Now: {contactInfo.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

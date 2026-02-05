'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ProjectContent } from '@/lib/projects-content'
import { contactInfo } from '@/lib/types'

interface ProjectPageContentProps {
  project: ProjectContent
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-charcoal to-dark">
      {/* Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/#gallery"
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
            Back to Gallery
          </span>
        </Link>
      </div>

      {/* Hero Section with Carousel */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {project.featured && (
              <div className="inline-flex items-center gap-2 bg-accent/90 px-6 py-3 rounded-full mb-6">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-montserrat font-bold text-sm uppercase tracking-wider">Featured Project</span>
              </div>
            )}

            <span className="inline-block text-accent font-montserrat font-bold text-sm uppercase tracking-widest mb-4">
              {project.category}
            </span>

            <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
              {project.heroTitle}
            </h1>

            <div className="flex flex-wrap justify-center gap-4 text-wood-light/80">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {project.location}
              </span>
              <span>•</span>
              <span>{project.duration}</span>
              <span>•</span>
              <span>{project.size}</span>
              <span>•</span>
              <span className="text-accent font-bold">★ {project.rating}</span>
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-[1200px] mx-auto"
          >
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-accent/20">
              {/* Main Image */}
              <div className="relative w-full h-full bg-charcoal">
                <Image
                  src={project.images[currentImageIndex].url}
                  alt={project.images[currentImageIndex].alt}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Image Caption */}
                {project.images[currentImageIndex].caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/90 to-transparent p-6">
                    <p className="text-white font-medium text-center">
                      {project.images[currentImageIndex].caption}
                    </p>
                  </div>
                )}
              </div>

              {/* Navigation Arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/90 border-2 border-accent/30 hover:border-accent flex items-center justify-center transition-all hover:scale-110 group"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6 text-wood-light group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal/90 border-2 border-accent/30 hover:border-accent flex items-center justify-center transition-all hover:scale-110 group"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6 text-wood-light group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-charcoal/90 border border-accent/30 px-4 py-2 rounded-full">
                <span className="text-white font-montserrat font-bold text-sm">
                  {currentImageIndex + 1} / {project.images.length}
                </span>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {project.images.length > 1 && (
              <div className="flex gap-4 mt-6 justify-center overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-accent scale-110'
                        : 'border-accent/20 hover:border-accent/50 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {project.details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-charcoal to-dark p-6 rounded-xl border border-accent/20"
              >
                <div className="text-accent font-montserrat text-sm font-bold uppercase tracking-wider mb-2">
                  {detail.label}
                </div>
                <div className="text-white font-montserrat text-lg font-semibold">
                  {detail.value}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Challenge</span>
            </h2>
            <p className="text-lg text-wood-light/90 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-charcoal to-dark">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Solution</span>
            </h2>
            <p className="text-lg text-wood-light/90 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-3xl md:text-4xl font-black text-white mb-8">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Results</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-gradient-to-br from-charcoal to-dark p-6 rounded-xl border border-accent/20"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-wood-light/90 leading-relaxed">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="py-20 bg-gradient-to-b from-charcoal to-dark">
          <div className="max-w-[900px] mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 rounded-3xl border border-accent/30 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(project.testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed italic">
                "{project.testimonial.text}"
              </p>
              <p className="text-accent font-montserrat font-bold text-lg">
                — {project.testimonial.name}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-dark to-charcoal">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 rounded-3xl border border-accent/30 text-center"
          >
            <h2 className="font-montserrat text-3xl md:text-5xl font-black text-white mb-6">
              Ready for Your Deck Transformation?
            </h2>
            <p className="text-xl text-wood-light/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation and estimate for your deck project. Let's create your dream outdoor space.
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

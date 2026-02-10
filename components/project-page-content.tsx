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

        <div className="mx-auto px-6 relative z-10" style={{maxWidth: 'var(--container-ultra)'}}>
          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
            style={{marginBottom: 'clamp(2rem, 3vw, 3rem)'}}
          >
            <span className="inline-block text-accent font-montserrat font-bold text-sm uppercase tracking-widest" style={{marginBottom: 'clamp(1rem, 1.5vw, 1rem)'}}>
              {project.category}
            </span>

            <h1 className="font-montserrat text-adaptive-h1 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
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
            </div>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto"
            style={{maxWidth: 'min(92vw, 1200px)'}}
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

      {/* Challenge & Solution Section */}
      <section className="py-20 bg-gradient-to-b from-dark via-charcoal to-dark relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-wood-light/5 rounded-full blur-3xl -translate-y-1/2" />

        <div className="mx-auto px-6 relative z-10" style={{maxWidth: 'var(--container-wide)'}}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{marginBottom: 'clamp(2.5rem, 4vw, 4rem)'}}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
              <span className="text-accent font-montserrat font-bold text-sm uppercase tracking-widest">
                Project Story
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0 relative">
            {/* Vertical Divider Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 lg:p-12 lg:pr-16"
            >
              <div className="relative">
                {/* Icon */}
                <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-xl flex items-center justify-center border border-red-500/20" style={{width: 'clamp(3rem, 3.5vw, 3.5rem)', height: 'clamp(3rem, 3.5vw, 3.5rem)', marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
                  <svg style={{width: 'clamp(1.5rem, 1.75vw, 1.75rem)', height: 'clamp(1.5rem, 1.75vw, 1.75rem)'}} className="text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>

                <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
                  The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Challenge</span>
                </h2>

                <div className="prose prose-invert max-w-none">
                  <p className="text-adaptive-body text-wood-light/90 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-8 lg:p-12 lg:pl-16 bg-gradient-to-br from-accent/5 to-transparent md:rounded-r-3xl"
            >
              <div className="relative">
                {/* Icon */}
                <div className="bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center border border-accent/30" style={{width: 'clamp(3rem, 3.5vw, 3.5rem)', height: 'clamp(3rem, 3.5vw, 3.5rem)', marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
                  <svg style={{width: 'clamp(1.5rem, 1.75vw, 1.75rem)', height: 'clamp(1.5rem, 1.75vw, 1.75rem)'}} className="text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>

                <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Solution</span>
                </h2>

                <div className="prose prose-invert max-w-none">
                  <p className="text-adaptive-body text-wood-light/90 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-gradient-to-b from-dark to-charcoal" style={{padding: 'clamp(4rem, 5vw, 5rem) 0'}}>
        <div className="mx-auto px-6" style={{maxWidth: 'min(92vw, 1200px)'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(2rem, 2.5vw, 2rem)'}}>
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

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-dark to-charcoal" style={{padding: 'clamp(4rem, 5vw, 5rem) 0'}}>
        <div className="mx-auto px-6" style={{maxWidth: 'min(92vw, 1200px)'}}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl border border-accent/30 text-center"
            style={{padding: 'clamp(2.5rem, 3vw, 3rem)'}}
          >
            <h2 className="font-montserrat text-adaptive-h2 font-black text-white" style={{marginBottom: 'clamp(1.5rem, 2vw, 1.5rem)'}}>
              Ready for Your Deck Transformation?
            </h2>
            <p className="text-adaptive-subtitle text-wood-light/90 mx-auto" style={{marginBottom: 'clamp(2rem, 2.5vw, 2rem)', maxWidth: 'min(85vw, 800px)'}}>
              Get a free consultation and estimate for your deck project. Let's create your dream outdoor space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-accent via-accent to-wood-dark text-white font-montserrat font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/50"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-wood-dark via-accent to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  Request free estimate
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

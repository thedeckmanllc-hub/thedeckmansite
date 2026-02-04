"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroIndustrial() {
  return (
    <section className="relative min-h-screen">
      {/* Video Background Hero */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/deck-hero.jpg"
        >
          <source
            src="https://videos.pexels.com/video-files/5973729/5973729-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-foreground/60" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-primary font-bold uppercase tracking-widest text-sm md:text-base mb-4"
              >
                Professional Deck Restoration
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-serif text-4xl md:text-6xl lg:text-8xl font-black text-background uppercase tracking-tight mb-6"
              >
                Transform Your
                <span className="block text-primary">Outdoor Space</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto mb-8"
              >
                Expert sanding, staining, and restoration services that bring your deck back to life.
                See the difference quality craftsmanship makes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  size="lg"
                  className="text-lg px-10 py-7 rounded-none font-bold uppercase"
                >
                  Get Free Quote
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 rounded-none font-bold uppercase border-2 border-background text-background hover:bg-background hover:text-foreground bg-transparent"
                >
                  View Our Work
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-card py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="flex items-center gap-3"
              >
                <Zap className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-bold uppercase text-sm">Fast Turnaround</p>
                  <p className="text-muted-foreground text-sm">
                    Most jobs 1-3 days
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex items-center gap-3"
              >
                <Clock className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-bold uppercase text-sm">24hr Quotes</p>
                  <p className="text-muted-foreground text-sm">
                    Fast response time
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="h-8 w-8 text-primary" />
                <div>
                  <p className="font-bold uppercase text-sm">Guaranteed</p>
                  <p className="text-muted-foreground text-sm">
                    100% satisfaction
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 rounded-none font-bold uppercase"
              >
                Instant Estimate
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6 rounded-none font-bold uppercase"
              >
                Schedule Sanding
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

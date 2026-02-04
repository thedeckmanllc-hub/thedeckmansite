"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, ArrowRight, Shield, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/types";

export function HeroClassic() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/deck-hero.jpg"
          alt="Beautiful restored wooden deck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-border"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">Licensed & Insured</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-border"
            >
              <Star className="h-4 w-4 text-primary fill-primary" />
              <span className="font-medium text-foreground">5-Star Rated</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm border border-border"
            >
              <Award className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground">15+ Years Experience</span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
          >
            Bring Your Deck
            <span className="text-primary block">Back to Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
          >
            Professional deck restoration, staining, and repair services.
            Transform your weathered deck into a beautiful outdoor living space
            your family will love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="text-lg px-8 font-semibold gap-2">
              Get Your Free Quote
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 gap-2 bg-card/80 backdrop-blur-sm border-border text-foreground"
              asChild
            >
              <a href={`tel:${contactInfo.phone}`}>
                <Phone className="h-5 w-5" />
                {contactInfo.phone}
              </a>
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold text-muted-foreground"
                >
                  {String.fromCharCode(64 + i)}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-primary fill-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span>{" "}
                happy homeowners served
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/landing/header";
import { HeroClassic } from "@/components/landing/hero-classic";
import { HeroIndustrial } from "@/components/landing/hero-industrial";
import { Services } from "@/components/landing/services";
import { Gallery } from "@/components/landing/gallery";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { ServiceAreas } from "@/components/landing/service-areas";
import { FAQ } from "@/components/landing/faq";
import { Reviews } from "@/components/landing/reviews";
import { Contact } from "@/components/landing/contact";
import { Footer } from "@/components/landing/footer";
import { ThemeSwitcher } from "@/components/landing/theme-switcher";
import { DarkLuxury } from "@/components/landing/variants/dark-luxury";
import { cn } from "@/lib/utils";

type Variant = "classic" | "industrial" | "dark-luxury";

export default function LandingPage() {
  const [variant, setVariant] = useState<Variant>("classic");

  // Apply theme class to body
  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-classic",
      "theme-industrial",
      "theme-dark-luxury"
    );
    document.documentElement.classList.add(`theme-${variant}`);
  }, [variant]);

  // Render Dark Luxury as a standalone page
  if (variant === "dark-luxury") {
    return (
      <>
        <DarkLuxury />
        <ThemeSwitcher variant={variant} onVariantChange={setVariant} />
      </>
    );
  }

  return (
    <div
      className={cn(
        "min-h-screen",
        variant === "industrial" && "bg-background"
      )}
    >
      <Header variant={variant} />

      {/* Hero Section - Different for each variant */}
      {variant === "classic" && <HeroClassic />}
      {variant === "industrial" && <HeroIndustrial />}

      {/* Shared Sections with variant-specific styling - Order from Dark Luxury */}
      <Gallery variant={variant} />
      <WhyChooseUs variant={variant} />
      <Services variant={variant} />
      <ServiceAreas variant={variant} />
      <Reviews variant={variant} />
      <FAQ variant={variant} />
      <Contact variant={variant} />
      <Footer variant={variant} />

      {/* Theme Switcher - Fixed at bottom */}
      <ThemeSwitcher variant={variant} onVariantChange={setVariant} />
    </div>
  );
}

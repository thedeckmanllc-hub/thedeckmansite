"use client";

import { useState, useEffect } from "react";
import { ThemeSwitcher } from "@/components/landing/theme-switcher";
import { BrutalistIndustrial } from "@/components/landing/variants/brutalist-industrial";
import { DarkLuxury } from "@/components/landing/variants/dark-luxury";
import { ProfessionalClassic } from "@/components/landing/variants/professional-classic";

type Variant = "brutalist-industrial" | "dark-luxury" | "professional-classic";

export default function LandingPage() {
  const [variant, setVariant] = useState<Variant>("brutalist-industrial");

  // Apply theme class to body
  useEffect(() => {
    document.documentElement.classList.remove(
      "theme-brutalist-industrial",
      "theme-dark-luxury",
      "theme-professional-classic"
    );
    document.documentElement.classList.add(`theme-${variant}`);
  }, [variant]);

  const renderVariant = () => {
    switch (variant) {
      case "brutalist-industrial":
        return <BrutalistIndustrial />;
      case "dark-luxury":
        return <DarkLuxury />;
      case "professional-classic":
        return <ProfessionalClassic />;
      default:
        return <BrutalistIndustrial />;
    }
  };

  return (
    <>
      {renderVariant()}
      <ThemeSwitcher variant={variant} onVariantChange={setVariant} />
    </>
  );
}

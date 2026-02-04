"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/types";

interface HeaderProps {
  variant: "classic" | "premium" | "industrial";
}

export function Header({ variant }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "About", href: "#about" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur-md",
        variant === "classic" && "bg-background/95",
        variant === "premium" && "bg-background/90 border-transparent",
        variant === "industrial" && "bg-card/95 border-border"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex items-center justify-between",
            variant === "premium" ? "h-20" : "h-16"
          )}
        >
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/transparent-logo.png"
              alt="The Deck Man"
              width={variant === "premium" ? 160 : 140}
              height={variant === "premium" ? 60 : 50}
              className={cn(
                "w-auto object-contain",
                variant === "premium" ? "h-14" : "h-12"
              )}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  variant === "premium" && "text-xs uppercase tracking-widest",
                  variant === "industrial" && "text-sm font-bold uppercase"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Section */}
          <div className="hidden md:flex items-center gap-4">
            {variant === "classic" && (
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-primary font-semibold"
              >
                <Phone className="h-4 w-4" />
                <span>{contactInfo.phone}</span>
              </a>
            )}
            <Button
              size={variant === "premium" ? "lg" : "default"}
              className={cn(
                variant === "classic" && "font-semibold",
                variant === "premium" &&
                  "rounded-none px-8 text-xs uppercase tracking-widest",
                variant === "industrial" &&
                  "rounded-none font-bold uppercase text-sm"
              )}
            >
              {variant === "industrial" ? "Instant Estimate" : "Get a Free Quote"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                {variant === "classic" && (
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-2 text-primary font-semibold"
                  >
                    <Phone className="h-4 w-4" />
                    <span>{contactInfo.phone}</span>
                  </a>
                )}
                <Button className="w-full">
                  {variant === "industrial"
                    ? "Instant Estimate"
                    : "Get a Free Quote"}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

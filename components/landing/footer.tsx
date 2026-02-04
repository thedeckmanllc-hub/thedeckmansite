"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { contactInfo } from "@/lib/types";

interface FooterProps {
  variant: "classic" | "premium" | "industrial";
}

export function Footer({ variant }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "py-12 md:py-16",
        variant === "classic" && "bg-foreground text-background",
        variant === "premium" && "bg-foreground text-background",
        variant === "industrial" && "bg-card border-t-4 border-primary"
      )}
    >
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "grid gap-8 mb-12",
            variant === "classic" && "md:grid-cols-4",
            variant === "premium" && "md:grid-cols-3 text-center md:text-left",
            variant === "industrial" && "md:grid-cols-4"
          )}
        >
          {/* Logo & About */}
          <div
            className={cn(
              variant === "premium" && "md:col-span-1"
            )}
          >
            <Image
              src="/images/transparent-logo.png"
              alt="The Deck Man"
              width={120}
              height={45}
              className={cn(
                "h-auto w-auto mb-4",
                variant === "classic" && "brightness-0 invert",
                variant === "premium" && "brightness-0 invert mx-auto md:mx-0",
                variant === "industrial" && ""
              )}
            />
            <p
              className={cn(
                "text-sm leading-relaxed",
                variant === "classic" && "text-background/70",
                variant === "premium" && "text-background/60",
                variant === "industrial" && "text-muted-foreground"
              )}
            >
              Professional deck restoration services. Bringing decks back to
              life since 2009.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className={cn(
                "font-semibold mb-4",
                variant === "classic" && "text-background",
                variant === "premium" &&
                  "text-background text-xs uppercase tracking-widest",
                variant === "industrial" && "uppercase font-bold"
              )}
            >
              Services
            </h4>
            <ul
              className={cn(
                "space-y-2 text-sm",
                variant === "classic" && "text-background/70",
                variant === "premium" && "text-background/60",
                variant === "industrial" && "text-muted-foreground"
              )}
            >
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Deck Restoration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Sanding & Refinishing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Staining & Sealing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Rot Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className={cn(
                "font-semibold mb-4",
                variant === "classic" && "text-background",
                variant === "premium" &&
                  "text-background text-xs uppercase tracking-widest",
                variant === "industrial" && "uppercase font-bold"
              )}
            >
              Contact
            </h4>
            <ul
              className={cn(
                "space-y-3 text-sm",
                variant === "classic" && "text-background/70",
                variant === "premium" && "text-background/60",
                variant === "industrial" && "text-muted-foreground"
              )}
            >
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{contactInfo.city}, {contactInfo.state}</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className={cn(
                "font-semibold mb-4",
                variant === "classic" && "text-background",
                variant === "premium" &&
                  "text-background text-xs uppercase tracking-widest",
                variant === "industrial" && "uppercase font-bold"
              )}
            >
              Hours
            </h4>
            <ul
              className={cn(
                "space-y-2 text-sm",
                variant === "classic" && "text-background/70",
                variant === "premium" && "text-background/60",
                variant === "industrial" && "text-muted-foreground"
              )}
            >
              <li>Monday - Friday: 7AM - 6PM</li>
              <li>Saturday: 8AM - 4PM</li>
              <li>Sunday: By Appointment</li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className={cn(
                  "hover:text-primary transition-colors",
                  variant === "classic" && "text-background/70",
                  variant === "premium" && "text-background/60",
                  variant === "industrial" && "text-muted-foreground"
                )}
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={cn(
                  "hover:text-primary transition-colors",
                  variant === "classic" && "text-background/70",
                  variant === "premium" && "text-background/60",
                  variant === "industrial" && "text-muted-foreground"
                )}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4",
            variant === "classic" && "border-background/20 text-background/50",
            variant === "premium" && "border-background/10 text-background/40",
            variant === "industrial" && "border-border text-muted-foreground"
          )}
        >
          <p className="text-sm">
            © {currentYear} The Deck Man. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

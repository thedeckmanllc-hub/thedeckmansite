"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface ServiceAreasProps {
  variant: "classic" | "premium" | "industrial";
}

const cities = [
  "Fallbrook",
  "Temecula",
  "Oceanside",
  "Vista",
  "Bonsall",
  "Rainbow",
  "Escondido",
  "Murrieta",
];

export function ServiceAreas({ variant }: ServiceAreasProps) {
  return (
    <section id="areas" className="py-20 md:py-32">
      <div className="container mx-auto px-4 max-w-[1600px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {variant === "premium" && (
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Service Areas
            </p>
          )}
          <h2
            className={cn(
              "font-serif font-bold mb-6 text-balance",
              variant === "classic" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl",
              variant === "premium" && "text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light",
              variant === "industrial" && "text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl uppercase"
            )}
          >
            {variant === "premium"
              ? "Serving San Diego County"
              : variant === "industrial"
                ? "Service Coverage"
                : "Serving San Diego County"}
          </h2>
          <p
            className={cn(
              "text-muted-foreground leading-relaxed max-w-3xl mx-auto",
              variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
              variant === "classic" && "text-base md:text-lg xl:text-xl",
              variant === "industrial" && "text-base md:text-lg xl:text-xl"
            )}
          >
            Professional deck restoration services throughout the region
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Cities List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {cities.map((city, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-4 p-4 transition-all group cursor-pointer",
                  variant === "classic" &&
                    "bg-muted/50 rounded-lg hover:bg-muted hover:shadow-md",
                  variant === "premium" &&
                    "border-b border-border hover:border-primary",
                  variant === "industrial" &&
                    "bg-card border-2 border-border hover:border-primary"
                )}
              >
                <div
                  className={cn(
                    "flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform",
                    variant === "classic" &&
                      "w-12 h-12 bg-primary/10 rounded-lg",
                    variant === "premium" &&
                      "w-12 h-12 border border-border",
                    variant === "industrial" &&
                      "w-12 h-12 bg-primary/10"
                  )}
                >
                  <MapPin
                    className={cn(
                      "text-primary",
                      variant === "classic" && "w-6 h-6",
                      variant === "premium" && "w-6 h-6",
                      variant === "industrial" && "w-6 h-6"
                    )}
                  />
                </div>
                <div>
                  <div
                    className={cn(
                      "font-bold",
                      variant === "classic" && "text-lg xl:text-xl 2xl:text-2xl",
                      variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl tracking-wide font-semibold",
                      variant === "industrial" && "text-lg xl:text-xl 2xl:text-2xl uppercase"
                    )}
                  >
                    {city}
                  </div>
                  <div className="text-muted-foreground text-sm xl:text-base">
                    California
                  </div>
                </div>
                <div className="ml-auto">
                  <svg
                    className={cn(
                      "text-primary opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all",
                      variant === "classic" && "w-5 h-5",
                      variant === "premium" && "w-5 h-5",
                      variant === "industrial" && "w-5 h-5"
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map Placeholder */}
          <div className="relative">
            <div
              className={cn(
                "aspect-square p-8 flex items-center justify-center",
                variant === "classic" &&
                  "bg-muted/50 rounded-lg border-2 border-border",
                variant === "premium" &&
                  "bg-muted/30 border border-border",
                variant === "industrial" &&
                  "bg-card border-4 border-primary"
              )}
            >
              <div className="text-center">
                <svg
                  className={cn(
                    "mx-auto mb-6 text-primary",
                    variant === "classic" && "w-28 h-28",
                    variant === "premium" && "w-32 h-32",
                    variant === "industrial" && "w-32 h-32"
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <div
                  className={cn(
                    "font-bold mb-4",
                    variant === "classic" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl",
                    variant === "premium" &&
                      "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-wide",
                    variant === "industrial" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl uppercase"
                  )}
                >
                  25+ Mile Radius
                </div>
                <div
                  className={cn(
                    "text-muted-foreground",
                    variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
                    variant === "classic" && "text-base md:text-lg xl:text-xl",
                    variant === "industrial" && "text-base md:text-lg xl:text-xl"
                  )}
                >
                  From Fallbrook, CA
                </div>
                <div
                  className={cn(
                    "mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full",
                    variant === "classic" &&
                      "bg-primary/10 border border-primary/30",
                    variant === "premium" &&
                      "bg-primary/10 border border-primary/30",
                    variant === "industrial" &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span
                    className={cn(
                      "text-sm font-semibold",
                      variant === "industrial"
                        ? "text-primary-foreground"
                        : "text-primary"
                    )}
                  >
                    Free Estimates Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

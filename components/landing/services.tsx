"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceIcon } from "@/components/service-icon";

interface ServicesProps {
  variant: "classic" | "premium" | "industrial";
}

export function Services({ variant }: ServicesProps) {
  return (
    <section id="services" className="py-20 md:py-32">
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
              Our Services
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
              ? "Exceptional Craftsmanship"
              : variant === "industrial"
                ? "What We Do"
                : "Our Services"}
          </h2>
          <p
            className={cn(
              "text-muted-foreground leading-relaxed max-w-3xl mx-auto",
              variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
              variant === "industrial" && "text-lg xl:text-xl 2xl:text-2xl",
              variant === "classic" && "text-base md:text-lg xl:text-xl"
            )}
          >
            {variant === "premium"
              ? "Each project receives our meticulous attention to detail, utilizing premium materials and time-tested techniques."
              : "Comprehensive services to restore, protect, and enhance your outdoor living space"}
          </p>
        </motion.div>

        {/* Services Grid - 3 columns layout inspired by Dark Luxury */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={cn(
                  "group transition-all duration-300 cursor-pointer overflow-hidden h-full",
                  variant === "classic" &&
                    "hover:shadow-xl hover:border-primary/30",
                  variant === "premium" &&
                    "border-0 shadow-none bg-transparent hover:bg-muted/50 rounded-none",
                  variant === "industrial" &&
                    "rounded-none border-2 hover:border-primary bg-card"
                )}
              >
              <CardContent
                className={cn(
                  variant === "classic" && "p-8",
                  variant === "premium" && "p-8",
                  variant === "industrial" && "p-8"
                )}
              >
                {/* Icon */}
                <div className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 mb-6 transform group-hover:scale-110 transition-transform duration-300 text-primary">
                  <ServiceIcon icon={service.icon} />
                </div>

                {/* Number Badge */}
                <div className="mb-4">
                  <span
                    className={cn(
                      "inline-block px-3 py-1 text-xs xl:text-sm font-bold uppercase tracking-wider rounded-full",
                      variant === "classic" &&
                        "bg-primary/10 text-primary",
                      variant === "premium" &&
                        "bg-primary/10 text-primary",
                      variant === "industrial" &&
                        "bg-primary text-primary-foreground"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={cn(
                    "font-bold mb-4 group-hover:text-primary transition-colors",
                    variant === "classic" && "text-xl xl:text-2xl 2xl:text-3xl",
                    variant === "premium" &&
                      "text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-wide",
                    variant === "industrial" && "text-xl xl:text-2xl 2xl:text-3xl uppercase"
                  )}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={cn(
                    "text-muted-foreground leading-relaxed mb-6",
                    variant === "classic" && "text-sm xl:text-base 2xl:text-lg",
                    variant === "premium" && "text-sm xl:text-base 2xl:text-lg",
                    variant === "industrial" && "text-sm xl:text-base 2xl:text-lg"
                  )}
                >
                  {service.description}
                </p>

                {/* Explore Link */}
                <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <span
                    className={cn(
                      "text-sm font-bold uppercase tracking-wider",
                      variant === "industrial" && "text-xs"
                    )}
                  >
                    Explore Service
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

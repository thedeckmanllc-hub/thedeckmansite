"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface WhyChooseUsProps {
  variant: "classic" | "premium" | "industrial";
}

const features = [
  {
    title: "Licensed & Insured",
    description: "Full licensing and comprehensive insurance for your protection",
  },
  {
    title: "Quality Materials",
    description: "Premium products from trusted manufacturers",
  },
  {
    title: "Expert Team",
    description: "15+ years of combined experience in deck restoration",
  },
  {
    title: "Warranty Backed",
    description: "All work comes with our satisfaction guarantee",
  },
];

export function WhyChooseUs({ variant }: WhyChooseUsProps) {
  return (
    <section
      id="why"
      className={cn(
        "py-20 md:py-32",
        variant === "classic" && "bg-muted/50",
        variant === "industrial" && "bg-card"
      )}
    >
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {variant === "premium" && (
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Why Choose Us
              </p>
            )}
            <h2
              className={cn(
                "font-serif font-bold mb-6 leading-tight text-balance",
                variant === "classic" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl",
                variant === "premium" && "text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light",
                variant === "industrial" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl uppercase"
              )}
            >
              {variant === "premium"
                ? "The Deck Man Difference"
                : variant === "industrial"
                  ? "Why Choose The Deck Man"
                  : "The Deck Man Difference"}
            </h2>
            <p
              className={cn(
                "text-muted-foreground leading-relaxed mb-8",
                variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
                variant === "classic" && "text-base md:text-lg xl:text-xl",
                variant === "industrial" && "text-base md:text-lg xl:text-xl"
              )}
            >
              We're not just deck contractors – we're craftsmen who take pride in every
              project. Our commitment to quality and customer satisfaction sets us apart.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className={cn(
                      "flex-shrink-0 flex items-center justify-center mt-1",
                      variant === "classic" &&
                        "w-6 h-6 rounded-full bg-primary",
                      variant === "premium" &&
                        "w-6 h-6 rounded-full bg-primary",
                      variant === "industrial" &&
                        "w-6 h-6 rounded-none bg-primary"
                    )}
                  >
                    <svg
                      className="w-4 h-4 text-primary-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4
                      className={cn(
                        "font-bold mb-1",
                        variant === "classic" && "text-base xl:text-lg 2xl:text-xl",
                        variant === "premium" && "text-base xl:text-lg 2xl:text-xl tracking-wide font-semibold",
                        variant === "industrial" && "text-base xl:text-lg 2xl:text-xl uppercase"
                      )}
                    >
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground text-sm xl:text-base 2xl:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div
              className={cn(
                "p-12 flex items-center justify-center",
                variant === "classic" &&
                  "aspect-square bg-muted rounded-lg border-2 border-border",
                variant === "premium" &&
                  "aspect-square bg-muted/30 border border-border",
                variant === "industrial" &&
                  "aspect-square bg-background border-4 border-primary"
              )}
            >
              <div className="text-center">
                <div
                  className={cn(
                    "font-bold mb-4",
                    variant === "classic" && "text-6xl xl:text-7xl 2xl:text-8xl text-primary",
                    variant === "premium" &&
                      "text-7xl xl:text-8xl 2xl:text-9xl text-primary font-light",
                    variant === "industrial" && "text-7xl xl:text-8xl 2xl:text-9xl text-primary"
                  )}
                >
                  500+
                </div>
                <div
                  className={cn(
                    "font-bold mb-2",
                    variant === "classic" && "text-xl xl:text-2xl 2xl:text-3xl",
                    variant === "premium" && "text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-wide",
                    variant === "industrial" && "text-xl xl:text-2xl 2xl:text-3xl uppercase"
                  )}
                >
                  Happy Customers
                </div>
                <div className="text-muted-foreground text-base xl:text-lg 2xl:text-xl">And counting...</div>

                {/* Star Rating */}
                <div className="flex justify-center gap-1 mt-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={cn(
                        "text-primary",
                        variant === "classic" && "w-6 h-6",
                        variant === "premium" && "w-7 h-7",
                        variant === "industrial" && "w-8 h-8"
                      )}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

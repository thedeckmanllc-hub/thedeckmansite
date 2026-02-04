"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface ReviewsProps {
  variant: "classic" | "premium" | "industrial";
}

const reviews = [
  {
    name: "Michael R.",
    location: "Fallbrook, CA",
    rating: 5,
    text: "Outstanding work! They transformed our weathered deck into a beautiful outdoor living space.",
  },
  {
    name: "Sarah T.",
    location: "Temecula, CA",
    rating: 5,
    text: "Professional, punctual, and the quality is exceptional. Highly recommend!",
  },
  {
    name: "David K.",
    location: "Oceanside, CA",
    rating: 5,
    text: "Best deck restoration service in San Diego County. Worth every penny.",
  },
];

export function Reviews({ variant }: ReviewsProps) {
  return (
    <section
      id="reviews"
      className={cn(
        "py-20 md:py-32",
        variant === "industrial" && "bg-card"
      )}
    >
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
              Testimonials
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
              ? "Client Experiences"
              : variant === "industrial"
                ? "Real Results"
                : "What Our Customers Say"}
          </h2>
          <p
            className={cn(
              "text-muted-foreground leading-relaxed max-w-2xl mx-auto",
              variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
              variant === "classic" && "text-base md:text-lg xl:text-xl",
              variant === "industrial" && "text-base md:text-lg xl:text-xl"
            )}
          >
            Don't just take our word for it
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className={cn(
                "transition-all duration-300",
                variant === "classic" && "border shadow-sm hover:shadow-lg",
                variant === "premium" && "border-0 shadow-none bg-muted/30",
                variant === "industrial" &&
                  "rounded-none border-2 border-border bg-background hover:border-primary"
              )}
            >
              <CardContent
                className={cn(
                  "p-6",
                  variant === "premium" && "p-8"
                )}
              >
                {/* Quote Icon (Premium only) */}
                {variant === "premium" && (
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                )}

                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "h-5 w-5",
                        i < review.rating
                          ? "text-primary fill-primary"
                          : "text-muted"
                      )}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p
                  className={cn(
                    "text-muted-foreground mb-6 leading-relaxed",
                    variant === "classic" && "text-sm xl:text-base 2xl:text-lg",
                    variant === "premium" && "text-sm xl:text-base 2xl:text-lg italic",
                    variant === "industrial" && "text-sm xl:text-base 2xl:text-lg"
                  )}
                >
                  &quot;{review.text}&quot;
                </p>

                {/* Author */}
                <div
                  className={cn(
                    "flex items-center gap-3",
                    variant === "premium" && "pt-6 border-t border-border"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold",
                      variant === "classic" && "bg-primary/10 text-primary",
                      variant === "premium" && "bg-primary/20 text-primary",
                      variant === "industrial" && "bg-primary/10 text-primary"
                    )}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      className={cn(
                        "font-semibold",
                        variant === "classic" && "text-sm",
                        variant === "premium" && "text-sm tracking-wide",
                        variant === "industrial" &&
                          "text-sm uppercase font-bold"
                      )}
                    >
                      {review.name}
                    </p>
                    <p
                      className={cn(
                        "text-xs",
                        variant === "classic" && "text-muted-foreground",
                        variant === "premium" && "text-primary",
                        variant === "industrial" && "text-primary"
                      )}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

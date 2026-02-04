"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface FAQProps {
  variant: "classic" | "premium" | "industrial";
}

const faqs = [
  {
    question: "How long does deck restoration take?",
    answer:
      "Most deck restoration projects take 2-4 days depending on the size and condition of your deck. We provide a detailed timeline during our free estimate.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes! All our deck restoration work comes with a satisfaction guarantee and warranty on materials and workmanship. Specific warranty terms vary by service and will be detailed in your quote.",
  },
  {
    question: "What is the best time of year to restore a deck?",
    answer:
      "Spring and fall are ideal for deck restoration in California due to moderate temperatures and lower humidity. However, we work year-round and can schedule your project at your convenience.",
  },
  {
    question: "How often should I have my deck restored?",
    answer:
      "We recommend professional deck maintenance every 2-3 years, depending on weather exposure and deck usage. Regular maintenance extends the life of your deck significantly.",
  },
  {
    question: "Do I need to be home during the restoration?",
    answer:
      "Not necessarily. As long as we have access to the deck area and water source, you don't need to be present. We'll communicate with you throughout the process.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, checks, and all major credit cards. Payment is typically due upon completion, and we never require full payment upfront.",
  },
];

export function FAQ({ variant }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className={cn(
        "py-20 md:py-32",
        variant === "industrial" && "bg-card"
      )}
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
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
              FAQ
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
              ? "Common Questions"
              : variant === "industrial"
                ? "Frequently Asked"
                : "Common Questions"}
          </h2>
          <p
            className={cn(
              "text-muted-foreground leading-relaxed max-w-2xl mx-auto",
              variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
              variant === "classic" && "text-base md:text-lg xl:text-xl",
              variant === "industrial" && "text-base md:text-lg xl:text-xl"
            )}
          >
            Everything you need to know about our deck restoration services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "overflow-hidden transition-all",
                  variant === "classic" &&
                    "bg-muted/50 rounded-lg border border-border hover:border-primary/50",
                  variant === "premium" &&
                    "border-b border-border hover:border-primary",
                  variant === "industrial" &&
                    "bg-background border-2 border-border hover:border-primary"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={cn(
                    "w-full p-6 cursor-pointer flex items-center justify-between font-semibold text-left transition-colors hover:text-primary",
                    variant === "classic" && "text-base xl:text-lg 2xl:text-xl",
                    variant === "premium" && "text-base xl:text-lg 2xl:text-xl tracking-wide",
                    variant === "industrial" && "text-base xl:text-lg 2xl:text-xl uppercase"
                  )}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "flex-shrink-0 ml-4 text-primary transition-transform duration-300",
                      variant === "classic" && "w-5 h-5 xl:w-6 xl:h-6",
                      variant === "premium" && "w-6 h-6 xl:w-7 xl:h-7",
                      variant === "industrial" && "w-6 h-6 xl:w-7 xl:h-7",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <div
                    className={cn(
                      "px-6 pb-6 text-muted-foreground leading-relaxed text-sm xl:text-base 2xl:text-lg",
                      variant === "premium" && "border-t border-border pt-4"
                    )}
                  >
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

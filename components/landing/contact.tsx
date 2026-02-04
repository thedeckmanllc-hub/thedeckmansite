"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface ContactProps {
  variant: "classic" | "premium" | "industrial";
}

export function Contact({ variant }: ContactProps) {
  return (
    <section
      id="contact"
      className={cn(
        "py-20 md:py-32",
        variant === "classic" && "bg-muted/50",
        variant === "premium" && "bg-muted/30",
        variant === "industrial" && "bg-background"
      )}
    >
      <div className="container mx-auto px-4 max-w-[1600px]">
        <div
          className={cn(
            "grid gap-12",
            variant === "classic" && "lg:grid-cols-2",
            variant === "premium" && "lg:grid-cols-2 gap-16",
            variant === "industrial" && "lg:grid-cols-2"
          )}
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {variant === "premium" && (
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Get In Touch
              </p>
            )}
            <h2
              className={cn(
                "font-serif font-bold mb-6 text-balance",
                variant === "classic" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl",
                variant === "premium" && "text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-light",
                variant === "industrial" && "text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl uppercase"
              )}
            >
              {variant === "premium"
                ? "Begin Your Transformation"
                : variant === "industrial"
                  ? "Get Your Free Quote"
                  : "Ready to Transform Your Deck?"}
            </h2>

            <p
              className={cn(
                "text-muted-foreground mb-8 leading-relaxed",
                variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
                variant === "classic" && "text-base md:text-lg xl:text-xl",
                variant === "industrial" && "text-base md:text-lg xl:text-xl"
              )}
            >
              {variant === "premium"
                ? "Contact us to schedule a complimentary consultation. Our team will assess your deck and provide a detailed proposal tailored to your vision."
                : "Get a free, no-obligation quote today. We'll come to you, assess your deck, and provide a detailed estimate on the spot."}
            </p>

            {/* Contact Details Card */}
            <Card
              className={cn(
                variant === "classic" && "shadow-lg border",
                variant === "premium" && "border shadow-sm",
                variant === "industrial" && "rounded-none border-2 border-border"
              )}
            >
              <CardContent className="p-8">
                <h3
                  className={cn(
                    "font-bold mb-6",
                    variant === "classic" && "text-xl xl:text-2xl 2xl:text-3xl",
                    variant === "premium" && "text-xl xl:text-2xl 2xl:text-3xl tracking-wide font-semibold",
                    variant === "industrial" && "text-xl xl:text-2xl 2xl:text-3xl uppercase"
                  )}
                >
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <a
                    href="tel:+15551234567"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center flex-shrink-0",
                        variant === "classic" &&
                          "w-12 h-12 rounded-lg bg-primary/10",
                        variant === "premium" && "w-12 h-12 border border-border",
                        variant === "industrial" && "w-12 h-12 bg-primary/10"
                      )}
                    >
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm xl:text-base mb-1">
                        Phone
                      </div>
                      <p className="font-semibold text-base xl:text-lg 2xl:text-xl group-hover:text-primary transition-colors">
                        (555) 123-4567
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@thedeckman.com"
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center flex-shrink-0",
                        variant === "classic" &&
                          "w-12 h-12 rounded-lg bg-primary/10",
                        variant === "premium" && "w-12 h-12 border border-border",
                        variant === "industrial" && "w-12 h-12 bg-primary/10"
                      )}
                    >
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm xl:text-base mb-1">
                        Email
                      </div>
                      <p className="font-semibold text-base xl:text-lg 2xl:text-xl group-hover:text-primary transition-colors break-all">
                        info@thedeckman.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "flex items-center justify-center flex-shrink-0",
                        variant === "classic" &&
                          "w-12 h-12 rounded-lg bg-primary/10",
                        variant === "premium" && "w-12 h-12 border border-border",
                        variant === "industrial" && "w-12 h-12 bg-primary/10"
                      )}
                    >
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-muted-foreground text-sm xl:text-base mb-1">
                        Location
                      </div>
                      <p className="font-semibold text-base xl:text-lg 2xl:text-xl">
                        Fallbrook, CA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="mt-8 pt-8 border-t border-border">
                  <div className="text-muted-foreground mb-4">
                    Business Hours
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-semibold">8:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-semibold">9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <Card
            className={cn(
              variant === "classic" && "shadow-lg",
              variant === "premium" && "border-0 shadow-none bg-background",
              variant === "industrial" && "rounded-none border-2 border-border"
            )}
          >
            <CardContent className={cn("p-6", variant === "premium" && "p-8")}>
              <h3
                className={cn(
                  "font-semibold mb-6",
                  variant === "classic" && "text-xl",
                  variant === "premium" &&
                    "text-xl font-normal tracking-wide",
                  variant === "industrial" && "text-xl uppercase font-bold"
                )}
              >
                {variant === "industrial"
                  ? "Instant Quote Request"
                  : "Request Your Free Quote"}
              </h3>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className={cn(
                        variant === "industrial" && "uppercase text-xs font-bold"
                      )}
                    >
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Smith"
                      className={cn(
                        variant === "premium" && "rounded-none border-border",
                        variant === "industrial" && "rounded-none"
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className={cn(
                        variant === "industrial" && "uppercase text-xs font-bold"
                      )}
                    >
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className={cn(
                        variant === "premium" && "rounded-none border-border",
                        variant === "industrial" && "rounded-none"
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className={cn(
                      variant === "industrial" && "uppercase text-xs font-bold"
                    )}
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className={cn(
                      variant === "premium" && "rounded-none border-border",
                      variant === "industrial" && "rounded-none"
                    )}
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="service"
                    className={cn(
                      variant === "industrial" && "uppercase text-xs font-bold"
                    )}
                  >
                    Service Needed
                  </Label>
                  <select
                    id="service"
                    className={cn(
                      "flex h-10 w-full border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      variant === "classic" && "rounded-md",
                      variant === "premium" && "rounded-none border-border",
                      variant === "industrial" && "rounded-none"
                    )}
                  >
                    <option value="">Select a service</option>
                    <option value="restoration">
                      Deck Restoration & Resurfacing
                    </option>
                    <option value="sanding">Sanding & Refinishing</option>
                    <option value="staining">
                      Staining, Painting & Sealing
                    </option>
                    <option value="repair">Rot Repair & Board Replacement</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className={cn(
                      variant === "industrial" && "uppercase text-xs font-bold"
                    )}
                  >
                    Tell Us About Your Deck
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Approximate deck size, current condition, what you're looking for..."
                    rows={4}
                    className={cn(
                      variant === "premium" && "rounded-none border-border",
                      variant === "industrial" && "rounded-none"
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className={cn(
                    "w-full",
                    variant === "classic" && "font-semibold",
                    variant === "premium" &&
                      "rounded-none text-xs uppercase tracking-widest",
                    variant === "industrial" &&
                      "rounded-none font-bold uppercase text-lg"
                  )}
                >
                  {variant === "industrial" ? (
                    <>
                      Get Instant Quote
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  We typically respond within 24 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

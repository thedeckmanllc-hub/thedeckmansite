"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GalleryProps {
  variant: "classic" | "premium" | "industrial";
}

const projects = [
  {
    title: "Project 1",
    location: "Fallbrook, CA",
  },
  {
    title: "Project 2",
    location: "Fallbrook, CA",
  },
  {
    title: "Project 3",
    location: "Fallbrook, CA",
  },
  {
    title: "Project 4",
    location: "Fallbrook, CA",
  },
  {
    title: "Project 5",
    location: "Fallbrook, CA",
  },
  {
    title: "Project 6",
    location: "Fallbrook, CA",
  },
];

export function Gallery({ variant }: GalleryProps) {
  return (
    <section
      id="gallery"
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
              Our Work
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
              ? "Portfolio"
              : variant === "industrial"
                ? "Before & After"
                : "Our Work"}
          </h2>
          <p
            className={cn(
              "text-muted-foreground leading-relaxed max-w-3xl mx-auto",
              variant === "premium" && "text-lg xl:text-xl 2xl:text-2xl",
              variant === "classic" && "text-base md:text-lg xl:text-xl",
              variant === "industrial" && "text-base md:text-lg xl:text-xl"
            )}
          >
            See the dramatic transformations we create for homeowners just like
            you.
          </p>
        </motion.div>

        {/* Gallery Grid - 3 columns layout inspired by Dark Luxury */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "group relative overflow-hidden cursor-pointer transition-all duration-300",
                variant === "classic" && "rounded-lg hover:shadow-xl",
                variant === "premium" && "rounded-none hover:shadow-2xl",
                variant === "industrial" && "rounded-none hover:shadow-2xl"
              )}
            >
              <div className="relative aspect-[4/3] bg-muted">
                {/* Placeholder for project image */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10" />

                {/* Overlay gradient */}
                <div
                  className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    variant === "classic" &&
                      "bg-gradient-to-t from-foreground/60 to-transparent group-hover:from-foreground/80",
                    variant === "premium" &&
                      "bg-gradient-to-t from-foreground/50 to-transparent group-hover:from-foreground/70",
                    variant === "industrial" &&
                      "bg-gradient-to-t from-foreground/70 to-transparent group-hover:from-foreground/90"
                  )}
                />

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3
                    className={cn(
                      "font-bold mb-2 text-background",
                      variant === "classic" && "text-xl xl:text-2xl 2xl:text-3xl",
                      variant === "premium" && "text-xl xl:text-2xl 2xl:text-3xl tracking-wide font-normal",
                      variant === "industrial" && "text-xl xl:text-2xl 2xl:text-3xl uppercase"
                    )}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm xl:text-base 2xl:text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      variant === "classic" && "text-background/80",
                      variant === "premium" && "text-background/70",
                      variant === "industrial" && "text-background/70"
                    )}
                  >
                    Deck Restoration • {project.location}
                  </p>
                </div>

                {/* View icon that appears on hover */}
                <div
                  className={cn(
                    "absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300",
                    variant === "classic" && "bg-primary/90",
                    variant === "premium" && "bg-primary/80 backdrop-blur-sm",
                    variant === "industrial" && "bg-primary"
                  )}
                >
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

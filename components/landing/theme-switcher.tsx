"use client";

import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  variant: "classic" | "industrial" | "dark-luxury";
  onVariantChange: (variant: "classic" | "industrial" | "dark-luxury") => void;
}

const themes = [
  {
    id: "classic" as const,
    name: "1",
    description: "Warm & Trusted",
  },
  {
    id: "industrial" as const,
    name: "2",
    description: "Bold & Cinematic",
  },
  {
    id: "dark-luxury" as const,
    name: "3",
    description: "Premium & Elegant",
  },
];

export function ThemeSwitcher({ variant, onVariantChange }: ThemeSwitcherProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center gap-1 p-1.5 rounded-full shadow-lg backdrop-blur-md border",
          variant === "industrial"
            ? "bg-card/95 border-border"
            : "bg-background/95 border-border"
        )}
      >
        {themes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => onVariantChange(theme.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-full transition-all",
              variant === theme.id
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <span className="relative z-10">{theme.name}</span>
          </button>
        ))}
      </div>
      <p
        className={cn(
          "text-center text-xs mt-2",
          variant === "industrial" ? "text-muted-foreground" : "text-muted-foreground"
        )}
      >
        {themes.find((t) => t.id === variant)?.description}
      </p>
    </div>
  );
}

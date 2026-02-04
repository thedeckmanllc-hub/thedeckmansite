"use client";

import { cn } from "@/lib/utils";

type Variant = "brutalist-industrial" | "dark-luxury";

interface ThemeSwitcherProps {
  variant: Variant;
  onVariantChange: (variant: Variant) => void;
}

const themes: Array<{
  id: Variant;
  name: string;
  description: string;
}> = [
  {
    id: "brutalist-industrial",
    name: "1",
    description: "Brutalist & Industrial",
  },
  {
    id: "dark-luxury",
    name: "2",
    description: "Premium & Elegant",
  },
];

export function ThemeSwitcher({ variant, onVariantChange }: ThemeSwitcherProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center gap-1 p-1.5 rounded-full shadow-lg backdrop-blur-md border",
          "bg-background/95 border-border"
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
      <p className="text-center text-xs mt-2 text-muted-foreground">
        {themes.find((t) => t.id === variant)?.description}
      </p>
    </div>
  );
}

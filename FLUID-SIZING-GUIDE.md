# Fluid Sizing System Guide

## Overview

This project now uses a **fluid sizing system** that ensures UI elements scale proportionally across different monitor sizes (15", 24", 27", etc.). Elements will appear visually consistent regardless of screen size.

## Key Improvements

### Previous Approach ❌
- Fixed breakpoints with media queries
- Elements jumped in size at breakpoints
- Too large on 15" monitors, too small on some displays

### New Approach ✅
- CSS `clamp()` functions for smooth scaling
- Elements scale continuously with viewport
- Proportional sizing across all screen sizes
- Based on research from major design systems (Material UI, Tailwind, Linear, Vercel)

---

## How It Works

The system uses CSS variables with `clamp()` functions:

```css
--text-hero: clamp(1.75rem, 1rem + 3vw, 4.5rem);
```

**Formula:** `clamp(MIN, PREFERRED, MAX)`
- **MIN**: Size on smallest screens (~1366px / 15")
- **PREFERRED**: Viewport-based calculation (combines fixed + relative)
- **MAX**: Size on largest screens (~2560px / 27")

---

## Using the System

### 1. Typography Classes

Use these Tailwind-style classes in your components:

```tsx
<h1 className="text-hero">Hero Heading</h1>
<h1 className="text-adaptive-h1">Main Heading</h1>
<h2 className="text-adaptive-h2">Section Heading</h2>
<h3 className="text-adaptive-h3">Subsection Heading</h3>
<p className="text-adaptive-subtitle">Subtitle Text</p>
<p className="text-adaptive-body">Body Text</p>
<span className="text-adaptive-small">Small Text</span>
```

**Available Typography:**
- `.text-hero` - 28px → 72px (Hero headings)
- `.text-adaptive-h1` - 24px → 56px (Main headings)
- `.text-adaptive-h2` - 20px → 44px (Section headings)
- `.text-adaptive-h3` - 18px → 36px (Subsection headings)
- `.text-adaptive-subtitle` - 16px → 28px (Subtitles)
- `.text-adaptive-body` - 14px → 18px (Body text)
- `.text-adaptive-small` - 13px → 16px (Small text)

### 2. Spacing Utilities

Use adaptive spacing classes:

```tsx
<div className="p-adaptive">Card with adaptive padding</div>
<div className="px-adaptive py-adaptive">Separate x/y padding</div>
<div className="mb-adaptive">Adaptive margin bottom</div>
<div className="gap-adaptive">Larger gap for grids</div>
<div className="gap-adaptive-inline">Smaller gap for inline elements</div>
```

**Available Spacing:**
- `.p-adaptive` - Adaptive padding all sides
- `.px-adaptive` - Adaptive horizontal padding
- `.py-adaptive` - Adaptive vertical padding
- `.m-adaptive` - Adaptive margin all sides
- `.mb-adaptive` - Adaptive margin bottom
- `.mt-adaptive` - Adaptive margin top
- `.gap-adaptive` - Adaptive gap (12px → 28px)
- `.gap-adaptive-inline` - Smaller adaptive gap (8px → 20px)

### 3. Buttons

Buttons automatically use fluid sizing:

```tsx
<button className="btn btn-primary">Primary Button</button>
<button className="btn btn-secondary">Secondary Button</button>
```

Buttons scale:
- Padding: 10px → 16px (vertical), 20px → 36px (horizontal)
- Font size: 14px → 18px

### 4. CSS Variables (Direct Usage)

For custom inline styles or when you need more control:

```tsx
// Typography
<h1 style={{fontSize: 'var(--text-hero)'}}>Hero</h1>

// Spacing
<div style={{padding: 'var(--spacing-card)'}}>Content</div>
<div style={{gap: 'var(--spacing-gap)'}}>Grid</div>
<div style={{marginBottom: 'var(--spacing-content)'}}>Section</div>

// Icons
<svg style={{width: 'var(--icon-md)', height: 'var(--icon-md)'}}>
  {/* icon */}
</svg>

// Containers
<div style={{maxWidth: 'var(--container-wide)'}}>Content</div>
```

**Available CSS Variables:**

#### Typography
- `--text-hero` - 1.75rem → 4.5rem
- `--text-h1` - 1.5rem → 3.5rem
- `--text-h2` - 1.25rem → 2.75rem
- `--text-h3` - 1.125rem → 2.25rem
- `--text-subtitle` - 1rem → 1.75rem
- `--text-body` - 0.875rem → 1.125rem
- `--text-small` - 0.8125rem → 1rem

#### Spacing
- `--spacing-section` - 3rem → 7rem (48px → 112px)
- `--spacing-content` - 1.5rem → 3.5rem (24px → 56px)
- `--spacing-gap` - 0.75rem → 1.75rem (12px → 28px)
- `--spacing-card` - 1rem → 2.25rem (16px → 36px)
- `--spacing-inline` - 0.5rem → 1.25rem (8px → 20px)

#### Buttons
- `--btn-padding-y` - 0.625rem → 1rem (10px → 16px)
- `--btn-padding-x` - 1.25rem → 2.25rem (20px → 36px)
- `--btn-font-size` - 0.875rem → 1.125rem (14px → 18px)

#### Icons
- `--icon-sm` - 1rem → 1.5rem (16px → 24px)
- `--icon-md` - 1.25rem → 2rem (20px → 32px)
- `--icon-lg` - 1.75rem → 3rem (28px → 48px)

#### Containers
- `--container-narrow` - min(90vw, 900px)
- `--container-medium` - min(92vw, 1100px)
- `--container-wide` - min(95vw, 1400px)
- `--container-ultra` - min(96vw, 1600px)

---

## Migration Guide

### Before (Old Approach):
```tsx
// Inline clamp() everywhere
<h1 style={{fontSize: 'clamp(2.5rem, 5vw, 5rem)'}}>Title</h1>

// Fixed Tailwind sizes
<p className="text-xl lg:text-2xl">Text</p>

// Manual spacing
<div style={{padding: 'clamp(1.5rem, 2.5vw, 2rem)'}}>Content</div>
```

### After (New Approach):
```tsx
// Use utility classes
<h1 className="text-hero">Title</h1>

// Adaptive text
<p className="text-adaptive-subtitle">Text</p>

// Adaptive spacing
<div className="p-adaptive">Content</div>
```

---

## Testing the System

### Local Testing
1. Navigate to `/scale-test` in your browser
2. Open Developer Tools (F12)
3. Use Responsive Design Mode
4. Test these widths:
   - **1366px** (15" monitor typical)
   - **1920px** (24" monitor typical)
   - **2560px** (27" monitor typical)

### What to Look For
✅ Elements scale smoothly as you resize
✅ Typography remains readable at all sizes
✅ Spacing feels proportional
✅ Buttons maintain good click targets
✅ Overall visual hierarchy is consistent

---

## Best Practices

### 1. Always Use Variables for Sizing
❌ **Don't:**
```tsx
<h1 style={{fontSize: 'clamp(2rem, 4vw, 4rem)'}}>Title</h1>
```

✅ **Do:**
```tsx
<h1 className="text-adaptive-h1">Title</h1>
```

### 2. Use Semantic Classes
Choose classes based on semantic meaning, not visual appearance:
```tsx
<h1 className="text-adaptive-h1">Main Page Title</h1>
<h2 className="text-adaptive-h2">Section Title</h2>
<p className="text-adaptive-body">Body paragraph</p>
```

### 3. Container Widths
Always wrap content sections with max-width containers:
```tsx
<section className="section-padding">
  <div style={{maxWidth: 'var(--container-wide)'}} className="mx-auto px-6">
    {/* Content */}
  </div>
</section>
```

### 4. Consistent Gaps
Use adaptive gap utilities for grids and flexbox:
```tsx
<div className="grid grid-cols-3 gap-adaptive">
  {/* Grid items */}
</div>

<div className="flex gap-adaptive-inline">
  {/* Inline items */}
</div>
```

---

## Customizing the System

All fluid sizing values are defined in `app/globals.css`. To adjust:

1. Open `app/globals.css`
2. Find the `:root` block (around line 144)
3. Adjust the `clamp()` values:

```css
:root {
  /* Make hero text smaller on small screens */
  --text-hero: clamp(1.5rem, 1rem + 3vw, 4.5rem);

  /* Adjust spacing to be tighter */
  --spacing-gap: clamp(0.5rem, 0.375rem + 1vw, 1.5rem);
}
```

### Formula Breakdown
```css
clamp(MIN, BASE + VW, MAX)
       │    │    │    │
       │    │    │    └─ Maximum size (large screens)
       │    │    └────── Viewport width scaling factor
       │    └─────────── Base size (affects mid-range)
       └──────────────── Minimum size (small screens)
```

**Tips:**
- Increase `VW` value for more aggressive scaling
- Decrease `MIN` to make elements smaller on 15" monitors
- Adjust `MAX` to change size on 27" monitors
- Keep `BASE` to fine-tune middle range (20"-24")

---

## Technical Details

### Browser Support
- `clamp()`: 96%+ browser support (all modern browsers)
- CSS Custom Properties: 97%+ browser support
- Works in Chrome, Firefox, Safari, Edge (all recent versions)

### Performance
- No JavaScript required (pure CSS)
- Minimal performance overhead
- Scales smoothly during window resize
- No layout shift or jank

### Compatibility
- Works with Tailwind v4
- Compatible with existing utility classes
- Can be mixed with traditional responsive classes if needed

---

## Troubleshooting

### Elements Still Too Large on 15"?
Lower the `MIN` value in `clamp()`:
```css
/* Before */
--text-hero: clamp(1.75rem, 1rem + 3vw, 4.5rem);

/* After - smaller minimum */
--text-hero: clamp(1.25rem, 1rem + 3vw, 4.5rem);
```

### Elements Too Small on 27"?
Increase the `MAX` value:
```css
/* Before */
--text-hero: clamp(1.75rem, 1rem + 3vw, 4.5rem);

/* After - larger maximum */
--text-hero: clamp(1.75rem, 1rem + 3vw, 5.5rem);
```

### Scaling Not Aggressive Enough?
Increase the `vw` coefficient:
```css
/* Before */
--text-hero: clamp(1.75rem, 1rem + 3vw, 4.5rem);

/* After - more aggressive scaling */
--text-hero: clamp(1.75rem, 1rem + 4vw, 4.5rem);
```

### Need Different Behavior for Specific Component?
You can override locally:
```tsx
<h1
  className="text-adaptive-h1"
  style={{fontSize: 'clamp(1.5rem, 2vw, 3rem)'}}
>
  Custom Scaled Heading
</h1>
```

---

## Resources

- [MDN: CSS clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp)
- [Utopia Fluid Type Scale Calculator](https://utopia.fyi/type/calculator/)
- [Modern CSS Solutions for Fluid Typography](https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/)
- Test page: [/scale-test](/scale-test)

---

## Summary

**Before:**
- Elements were too large on 15" monitors
- Acceptable on 24" monitors
- Perfect on 27" monitors

**After:**
- Proportional sizing across all monitors
- Smooth, continuous scaling
- Consistent visual hierarchy
- Maintainable through CSS variables

**Key Takeaway:** Use `.text-adaptive-*` classes and spacing utilities instead of fixed sizes or manual `clamp()` values. This ensures consistency and makes the codebase easier to maintain.

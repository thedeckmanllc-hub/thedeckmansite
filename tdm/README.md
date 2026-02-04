# The Deck Man - Professional Deck Services

Brutalist industrial design website for professional deck restoration and construction services.

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Features

- Brutalist industrial design with dark warm tones
- Responsive layout
- Interactive service tabs
- Smooth scroll animations
- Custom typography (IBM Plex Mono & Bebas Neue)
- Marquee banner with services
- Stats section
- Process timeline

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- CSS-in-JS with inline styles

## Project Structure

```
tdm/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## Customization

### Colors

The color palette is based on warm industrial tones:
- Background: `#1a1512` (deep brown)
- Primary: `#b87333` (copper)
- Secondary: `#c9a87c` (warm tan)
- Text: `#e8e0d5` (light beige)

### Logo

Replace the placeholder logo in the navigation and footer with your actual logo image in the `/public` directory.

### Content

Edit service descriptions, prices, and features in the `services` array in [app/page.tsx](app/page.tsx).

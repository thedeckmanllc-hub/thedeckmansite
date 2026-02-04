import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald, Playfair_Display, Poppins, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "600", "700", "800"] });
const _poppins = Poppins({ subsets: ["latin"], variable: "--font-poppins", weight: ["300", "400", "500", "600", "700"] });
const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: 'The Deck Man | Professional Deck Restoration & Refinishing',
  description: 'Expert deck restoration, sanding, staining, and repair services. Bring your deck back to life with The Deck Man - Licensed, Insured, 5-Star Rated.',
  keywords: 'deck restoration, deck refinishing, deck staining, deck repair, wood deck sanding, deck sealing',
  manifest: '/manifest.json',
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#8B6914',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${_inter.variable} ${_oswald.variable} ${_playfair.variable} ${_poppins.variable} ${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

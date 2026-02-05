import React from "react"
import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", weight: ["300", "400", "500", "600", "700", "800", "900"] });

export const metadata: Metadata = {
  title: 'The Deck Man | Professional Deck Restoration & Refinishing',
  description: 'Expert deck restoration, sanding, staining, and repair services. Bring your deck back to life with The Deck Man - Licensed, Insured, 5-Star Rated.',
  keywords: 'deck restoration, deck refinishing, deck staining, deck repair, wood deck sanding, deck sealing',
  manifest: '/manifest.json',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'The Deck Man | Professional Deck Restoration & Refinishing',
    description: 'Expert deck restoration, sanding, staining, and repair services. Bring your deck back to life with The Deck Man - Licensed, Insured, 5-Star Rated.',
    url: 'https://thedeckman.com',
    siteName: 'The Deck Man',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'The Deck Man - Professional Deck Restoration',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Deck Man | Professional Deck Restoration & Refinishing',
    description: 'Expert deck restoration, sanding, staining, and repair services.',
    images: ['/og-image.png'],
  },
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
      <body className={`${_montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

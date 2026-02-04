import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Deck Man - Professional Deck Services",
  description: "Expert deck restoration and construction services. From precision sanding to complete rebuilds, we transform weathered wood into stunning outdoor living spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

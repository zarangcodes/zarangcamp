import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Tarang Agrawal - Think Big | BITS Pilani Elections 2025",
  description: "Tarang Agrawal for BITS Pilani Elections 2025 - Revolutionary leadership for impactful change",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="antialiased dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

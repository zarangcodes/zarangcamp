import type React from "react"
import type { Metadata } from "next"
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
      <body>{children}</body>
    </html>
  )
}

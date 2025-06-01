import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Imani Frith | Full-Stack Developer & Designer",
  description: "Professional portfolio of Imani Frith, a full-stack web developer and designer.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'
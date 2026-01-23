import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
})

// Get the base URL - use environment variable or default
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://crossview.jaredcox.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Crossview Church | A Place to Belong, Believe, and Become",
    template: "%s | Crossview Church",
  },
  description:
    "Welcome to Crossview Church. Join us for Sunday services at 10:30 a.m. A welcoming community focused on faith, fellowship, and serving others.",
  keywords: ["church", "worship", "community", "faith", "Springfield", "Bible study"],
  icons: {
    icon: "/crossview-logo.png",
    apple: "/crossview-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Crossview Church",
    title: "Crossview Churche",
    description:
      "Welcome to Crossview Church. Join us for Sunday services at 10:30 a.m. A welcoming community focused on faith, fellowship, and serving others.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crossview Church | A Place to Belong, Believe, and Become",
    description:
      "Welcome to Crossview Church. Join us for Sunday services at 10:30 a.m. A welcoming community focused on faith, fellowship, and serving others.",
    images: ["/church-gathering.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ScrollToTop />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}

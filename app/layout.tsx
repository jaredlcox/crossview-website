import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: {
    default: "Crossview Church | A Place to Belong, Believe, and Become",
    template: "%s | Crossview Church",
  },
  description:
    "Welcome to Crossview Church. Join us for Sunday services at 10:30 a.m. A welcoming community focused on faith, fellowship, and serving others.",
  keywords: ["church", "worship", "community", "faith", "Springfield", "Bible study"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Crossview Church",
    title: "Crossview Church | A Place to Belong, Believe, and Become",
    description:
      "Welcome to Crossview Church. Join us for Sunday services at 10:30 a.m. A welcoming community focused on faith, fellowship, and serving others.",
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}

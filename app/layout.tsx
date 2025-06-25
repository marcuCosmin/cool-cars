import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"

import "./globals.css"

import { Header } from "@/components/Header/Header"
import { Banner } from "@/components/Banner"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
}

export const metadata: Metadata = {
  title: "Cool Cars",
  description: "Car Body Repair & Respray Specialists in Swanmore, Hampshire",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  openGraph: {
    title: "Cool Cars",
    description: "Car Body Repair & Respray Specialists in Swanmore, Hampshire",
    url: "https://cool-cars.co.uk",
    siteName: "Cool Cars",
    type: "website",
    images: [
      {
        url: "https://cool-cars.co.uk/background.jpg",
        width: 1536,
        height: 1024,
        alt: "Cool Cars Workshop",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cool Cars",
    description: "Car Body Repair & Respray Specialists in Swanmore, Hampshire",
    images: ["https://cool-cars.co.uk/background.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cool Cars South Coast",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 High Street",
    addressLocality: "Swanmore",
    addressRegion: "Hampshire",
    postalCode: "SO32 2QQ",
    addressCountry: "UK",
  },
  telephone: "+44 07387 267400",
  url: "https://cool-cars.co.uk",
}

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

const RooutLayout = async ({ children }: RootLayoutProps) => (
  <html lang="en">
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        key="jsonld"
      />
      <GoogleAnalytics gaId="G-723ZQPBH3D" />
    </head>
    <body className={`bg-white ${inter.className}`}>
      <Banner />
      <Header />
      {children}
    </body>
  </html>
)

export default RooutLayout


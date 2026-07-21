import { type Metadata } from "next"
import Image from "next/image"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"
import { MainSectionLinks } from "@/components/MainSectionLinks"

import { socialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks.const"

import {
  routes,
  website,
  email,
  geoLatitude,
  geoLongitude,
  googleMapsUrl,
  areaServed,
  businessProvider,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars – Expert Car Body Repairs, Swanmore",
  description:
    "Cool Cars offers expert car bodywork, mechanical repairs and servicing. Trusted local specialists keeping your vehicle looking great and running perfectly.",
  alternates: {
    canonical: "https://cool-cars.co.uk",
  },
}

const offeredServices = [
  "Vehicle Body Repairs",
  "Car Resprays & Paintwork",
  "Accident Repairs",
  "Paint Correction & Polishing",
  "Custom Bodywork & Modifications",
  "Fleet Repair Management",
  "Car Servicing",
  "Brake Pads & Discs",
  "Clutch Repairs & Replacements",
  "Cambelts & Timing Belts",
  "Tyres & Puncture Repairs",
  "Gearbox Repairs & Replacements",
]

const jsonLd = {
  "@context": "https://schema.org",
  ...businessProvider,
  logo: `${website}/logo.svg`,
  image: `${website}/grey-car-front-headlight-bodywork-swanmore.jpg`,
  description:
    "Car body repair and respray specialists in Swanmore, Hampshire. Expert bodyshop and mechanical workshop services including accident repairs, resprays, servicing, brakes, clutch and gearbox repairs.",
  email,
  geo: {
    "@type": "GeoCoordinates",
    latitude: geoLatitude,
    longitude: geoLongitude,
  },
  hasMap: googleMapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  priceRange: "££",
  currenciesAccepted: "GBP",
  paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
  areaServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Car Repair Services",
    itemListElement: offeredServices.map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  sameAs: socialMediaLinks.map(({ href }) => href),
}

const mainSectionCards = [
  {
    title: "Industry Approved Methods",
    description: "Using Thatcham approved processes and repair times.",
    imageSrc: "/thatcham-approved-repair-certificate-icon.webp",
    alt: "Industry approved repair methods certificate icon at Cool Cars, Swanmore, Hampshire",
  },
  {
    title: "We have all the right tools",
    description: "Periodically calibrated and safety certified.",
    imageSrc: "/toolbox.png",
  },
  {
    title: "Get back on the road",
    description: "Every mechanical and aesthetic requirement taken care of.",
    imageSrc: "/wheel-key.webp",
  },
]

const mainSectionLinks = [
  {
    href: routes.contact,
    label: "Get in touch",
  },
  {
    href: routes.finance,
    label: "Get finance",
  },
]

export default function Home() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Fgrey-car-front-headlight-bodywork-swanmore.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fgrey-car-front-headlight-bodywork-swanmore.jpg&w=828&q=75')]">
        <div className="h-full max-w-7xl">
          <div className="first-section-main-content px-2.5 mb-10 pt-10">
            <Animated as="h1">Complete Car Care You Can Trust</Animated>
            <h2 className="text-shadow-black text-shadow-md">
              Bodywork, Mechanical Repairs & Servicing
            </h2>
            <p className="text-base">
              From cosmetic fixes and accident repairs to essential mechanical
              servicing and ongoing vehicle care.
            </p>

            <MainSectionLinks links={mainSectionLinks} />
          </div>

          <ul className="flex flex-col gap-1 md:flex-row">
            {mainSectionCards.map(
              ({ title, description, imageSrc, alt }, index) => (
                <li key={index}>
                  <Animated
                    as="article"
                    className="p-8 flex flex-col md:flex-row items-center gap-4 bg-white/10 h-full"
                  >
                    <Image
                      className="drop-shadow-md drop-shadow-black"
                      src={imageSrc}
                      aria-hidden={alt ? undefined : "true"}
                      alt={alt ?? ""}
                      width={80}
                      height={80}
                    />
                    <div>
                      <h3 className="font-semibold mb-2.5 text-white text-2xl">
                        {title}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </Animated>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden">
        <h2 className="mb-10 text-center">Main Services</h2>

        <div className="flex flex-col mx-auto max-w-2xl md:max-w-7xl md:flex-row gap-10">
          <Animated
            direction="right"
            as="a"
            href="/bodyshop"
            className="flex items-center justify-center text-white text-2xl w-full bg-overlay glass-button h-96 bg-[url('/_next/image?url=%2Ftechnician-spraying-car-bonnet-spray-booth.jpg&w=640&q=75')] bg-cover"
          >
            <span>Bodyshop</span>
          </Animated>

          <Animated
            direction="left"
            as="a"
            href="/workshop"
            className="flex items-center justify-center text-white text-2xl w-full bg-overlay glass-button h-96 bg-[url('/_next/image?url=%2Fengine-valvetrain-rocker-arms-mechanical-repair-southampton.jpg&w=640&q=75')] bg-cover"
          >
            <span> Workshop</span>
          </Animated>
        </div>
      </section>

      <TestimonialsSection />

      <ContactSection />

      <MapLocationSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  )
}

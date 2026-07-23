import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

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
  phoneNumberText,
  phoneNumberValue,
  geoLatitude,
  geoLongitude,
  googleMapsUrl,
  areaServed,
  businessProvider,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Car Body Repair in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Car body repairs, resprays and servicing in Swanmore, Hampshire. Serving Southampton, Fareham and nearby areas. Call 01489 326 750 today!",
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
    itemListElement: offeredServices.map(name => ({
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

const bodyshopSection = {
  title: "Our bodyshop team carries out:",
  services: [
    {
      href: routes.bodyshopServicesVehicleBodyRepairs,
      label: "Vehicle body repairs in Swanmore",
    },
    {
      href: routes.bodyshopServicesRespraysAndPaintwork,
      label: "Car resprays and paintwork",
    },
    {
      href: routes.bodyshopServicesAccidentRepairs,
      label: "Accident repairs",
    },
    {
      href: routes.bodyshopServicesPaintCorrectionAndPolishing,
      label: "Paint correction and polishing",
    },
    {
      href: routes.bodyshopServicesBodyworkAndModifications,
      label: "Custom bodywork and modifications",
    },
    {
      href: routes.bodyshopServicesFleetRepairManagement,
      label: "Fleet repair management",
    },
  ],
}

const workshopSection = {
  title: "Our workshop team handles:",
  services: [
    {
      href: routes.workshopServicesServicing,
      label: "Car servicing",
    },
    {
      href: routes.workshopServicesBrakePadsAndDiscs,
      label: "Brake pad and disc replacement",
    },
    {
      href: routes.workshopServicesClutchRepairsOrReplacements,
      label: "Clutch repairs and replacements",
    },
    {
      href: routes.workshopServicesCambeltsAndTimingBelts,
      label: "Cambelt and timing belt replacement",
    },
    {
      href: routes.workshopServicesTyresAndPunctureRepairs,
      label: "Tyre and puncture repairs",
    },
    {
      href: routes.workshopServicesGearBoxRepairsOrReplacements,
      label: "Gearbox repairs and replacements",
    },
  ],
}

export default function Home() {
  return (
    <main className="gap-10 md:gap-20">
      <section className="bg-[url('/_next/image?url=%2Fgrey-car-front-headlight-bodywork-swanmore.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fgrey-car-front-headlight-bodywork-swanmore.jpg&w=828&q=75')]">
        <div className="h-full max-w-7xl">
          <div className="first-section-main-content px-2.5 mb-10 pt-10">
            <Animated as="h1">
              Car Body Repairs & Servicing
              <br />
              in Swanmore, Hampshire
            </Animated>
            <p className="text-base">
              Cool Cars South Coast is a professional car bodyshop in Swanmore,
              Hampshire, specialising in car body repair, full and partial
              resprays, accident repairs, and mechanical servicing. Based at
              Swanmore Business Park, we provide reliable, high-quality repairs
              for drivers across Southampton, Fareham, Bishops Waltham,
              Eastleigh, Wickham, and the wider Hampshire area.
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

      <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
        <h2>Expert Bodyshop & Mechanical Workshop Under One Roof</h2>

        <p className="text-center">
          Having a fully equipped car bodyshop in Swanmore and mechanical
          workshop in the same premises means we can handle everything your
          vehicle needs, from cosmetic damage and paintwork to clutches,
          gearboxes, and annual servicing.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          {[bodyshopSection, workshopSection].map(
            ({ title, services }, index) => (
              <section key={index}>
                <h3 className="text-primary text-lg font-normal">{title}</h3>
                <ul>
                  {services.map(({ href, label }) => (
                    <li
                      key={href}
                      className="text-center"
                    >
                      <Link href={href}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          )}
        </div>

        <p className="text-center">
          We work on a wide range of vehicles, from everyday cars and commercial
          vans to classics and high-performance vehicles.
        </p>
      </section>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
        <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
          <h2>Thatcham-Approved. Honest Pricing. Every Time.</h2>

          <p className="text-center">
            Every job at Cool Cars is carried out using Thatcham-approved
            processes and repair times, so you can be confident the work meets
            industry standards. Our tools are regularly calibrated and
            safety-certified, and our technicians stay current with the latest
            repair techniques. All estimates are free and no-obligation, and we
            confirm the cost before any work begins. For larger repairs,{" "}
            <Link href={routes.finance}>flexible car repair finance</Link> is
            available to help spread the cost.
          </p>
        </section>

        <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
          <h2>Covering Southampton, Fareham & Hampshire</h2>

          <p className="text-center">
            Our Swanmore car bodyshop is ideally placed to serve drivers across
            Hampshire. We regularly welcome customers from Southampton, Fareham,
            Bishops Waltham, Wickham, and Eastleigh. We work by appointment
            only, so every vehicle gets the dedicated time and attention it
            deserves.
          </p>

          <p className="text-center">
            <Link href={routes.contact}>Contact us</Link> today for a free
            estimate, or call{" "}
            <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link> to
            book your vehicle in!
          </p>
        </section>
      </div>

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

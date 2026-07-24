import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Plus } from "react-bootstrap-icons"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"
import { MainSectionLinks } from "@/components/MainSectionLinks"

import {
  routes,
  website,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Car Bodyshop in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Car bodyshop in Swanmore, Hampshire offering body repairs, resprays, accident repairs and more. Serving Southampton, Fareham & beyond. Call today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/bodyshop",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: website },
    {
      "@type": "ListItem",
      position: 2,
      name: "Bodyshop",
      item: `${website}${routes.bodyshop}`,
    },
  ],
}

const mainSectionLinks = [
  {
    href: "https://www.bodydamagequote.co.uk/#/b?subscriber=c8048290-3b67-462d-9c68-ce498d8e37f9&liteFlow",
    label: "Get an estimate",
    external: true,
  },
  {
    href: routes.finance,
    label: "Get finance",
  },
]

const services = [
  {
    title: "Vehicle Body Repairs",
    description:
      "From small dents to major accident damage, Cool Cars provides quality car body repairs at fair prices.",
    imageSrc: "/paint-correction-polishing-dark-car-bonnet-swanmore.jpg",
    href: routes.bodyshopServicesVehicleBodyRepairs,
    alt: "Technician using orbital polisher on dark car bonnet during paint correction at Cool Cars, Swanmore, SO32 2PB",
  },
  {
    title: "Car Resprays & Paintwork",
    description:
      "From quick touch-ups to full paint jobs, we deliver high-quality finishes at fair prices.",
    imageSrc: "/technician-spraying-white-car-paint-booth.jpg",
    href: routes.bodyshopServicesRespraysAndPaintwork,
    alt: "Technician applying paint to white car in spray booth at Cool Cars, Swanmore, SO32 2PB",
  },
  {
    title: "Accident Repairs",
    description:
      "Cool Cars delivers reliable, high-quality accident repairs that get you back on the road fast",
    imageSrc: "/two-cars-front-end-collision-damage-swanmore.jpg",
    href: routes.bodyshopServicesAccidentRepairs,
    alt: "Two cars with front-end collision damage requiring accident repair at Cool Cars, Swanmore, Hampshire",
  },
  {
    title: "Paint Correction & Car Polishing",
    description:
      "Bring back your car’s shine with professional paint correction and polishing from Cool Cars.",
    imageSrc: "/dual-action-polish-dark-car-detailing-swanmore.jpg",
    href: routes.bodyshopServicesPaintCorrectionAndPolishing,
    alt: "Detailer applying dual-action machine polish to dark car at Cool Cars, Swanmore, Hampshire",
  },
  {
    title: "Custom Bodywork & Modifications",
    description:
      "From subtle upgrades to bold styling changes, we deliver great-looking results at prices that make sense.",
    imageSrc: "/car-dent-inspection-white-panel-repair.jpg",
    href: routes.bodyshopServicesBodyworkAndModifications,
    alt: "Technician inspecting dent on white car door panel before repair at Cool Cars, Hampshire",
  },
  {
    title: "Fleet Repair Management",
    description:
      "Cool Cars keeps your business on the road with expert fleet repair management.",
    imageSrc: "/cars-on-road-vehicle-repair-swanmore.jpg",
    href: routes.bodyshopServicesFleetRepairManagement,
    alt: "Cars in traffic representing vehicle repair and servicing at Cool Cars, Swanmore, SO32 2PB",
  },
]

export default function BodyshopPage() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Ftechnician-spraying-car-bonnet-spray-booth.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ftechnician-spraying-car-bonnet-spray-booth.jpg&w=828&q=75')]">
        <div className="h-full max-w-7xl">
          <div className="first-section-main-content px-2.5 pt-10">
            <Animated as="h1">
              Car Bodyshop in Swanmore, Hampshire — Body Repairs, Resprays &
              Accident Repairs
            </Animated>
            <p className="text-base">
              Cool Cars South Coast is a professional car bodyshop in
              Swanmore, Hampshire, based at Swanmore Business Park. Whether
              your vehicle needs minor dent and body repairs, a full or
              partial respray, or has sustained accident damage, our
              technicians deliver quality, long-lasting results at fair and
              transparent prices.
            </p>
            <p className="text-base">
              Our Swanmore car bodyshop serves drivers from across Hampshire,
              including Southampton, Fareham, Bishops Waltham, Eastleigh, and
              Wickham. We work on all types of vehicles, from everyday family
              cars and commercial vans to classics and high-performance
              vehicles.
            </p>
          </div>

          <MainSectionLinks links={mainSectionLinks} />
        </div>
      </section>

      <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl mx-auto">
        <h2>Our Hampshire Bodyshop Services</h2>

        <p className="text-center">
          From{" "}
          <Link href={routes.bodyshopServicesPaintCorrectionAndPolishing}>
            paint correction and polishing
          </Link>{" "}
          to restore your vehicle&apos;s original shine, to{" "}
          <Link href={routes.bodyshopServicesBodyworkAndModifications}>
            custom bodywork and modifications
          </Link>{" "}
          for something more individual, we cover the full range of car body
          repair and paintwork services. Businesses can also take advantage
          of our{" "}
          <Link href={routes.bodyshopServicesFleetRepairManagement}>
            fleet repair management
          </Link>{" "}
          service to keep commercial vehicles on the road with minimal
          downtime.
        </p>

        <p className="text-center">
          Select a service below for full details and booking information.
        </p>
      </section>

      <section className="flex flex-col gap-5 p-5 md:p-0">
        <ul className="flex flex-col items-center md:grid md:grid-cols-3 gap-10 md:items-start">
          {services.map(
            ({ title, description, imageSrc, href, alt }, index) => (
              <Animated
                as="li"
                key={index}
              >
                <Link
                  href={href}
                  className="flex flex-col gap-5 max-w-2xl w-full"
                >
                  <Image
                    className="w-full h-[350px] object-cover md:w-[400px] md:h-[500px]"
                    src={imageSrc}
                    alt={alt}
                    width={400}
                    height={500}
                  />
                  <hr />
                  <h4 className="text-white text-3xl">{title}</h4>
                  <p>{description}</p>

                  <p className="flex items-center gap-1 uppercase text-primary font-semibold hover:text-white transition-colors duration-300">
                    Read more
                    <Plus className="w-5 h-5" />
                  </p>
                </Link>
              </Animated>
            )
          )}
        </ul>
      </section>

      <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl mx-auto">
        <h2>What to Expect at Our Car Bodyshop</h2>

        <p className="text-center">
          Every repair at Cool Cars follows Thatcham-approved processes and
          repair times, the same standard used by approved insurance
          repairers. Our technicians use precision colour-matching technology
          to ensure every respray and repair blends seamlessly with your
          vehicle&apos;s existing paintwork, whether it&apos;s a standard
          factory colour or a custom finish on a classic or performance car.
        </p>

        <p className="text-center">
          Estimates are always free and no-obligation. We inspect the damage,
          agree the full cost upfront, and only begin once you&apos;re happy
          to proceed. <Link href={routes.finance}>Car repair finance</Link> is
          available if you&apos;d prefer to spread the cost of a larger job.
        </p>

        <p className="text-center">
          We work by appointment to make sure your vehicle gets dedicated time
          and attention rather than a place in a queue. If there are any
          mechanical issues alongside the bodywork, our{" "}
          <Link href={routes.workshop}>workshop team</Link> can often deal
          with both in the same visit.
        </p>

        <p className="text-center">
          <Link href={routes.contact}>Request a free estimate</Link> today, or
          call{" "}
          <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link> to
          book your vehicle in!
        </p>
      </section>

      <TestimonialsSection />

      <ContactSection />

      <MapLocationSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </main>
  )
}

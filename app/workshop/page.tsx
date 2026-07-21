import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Plus } from "react-bootstrap-icons"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"

import { routes, website } from "@/globals/globals.const"
import { MainSectionLinks } from "@/components/MainSectionLinks"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop",
  description:
    "Mechanical repairs, vehicle servicing and diagnostics from a trusted local workshop. Quality workmanship at fair, transparent prices.",
  alternates: {
    canonical: "https://cool-cars.co.uk/workshop",
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
      name: "Workshop",
      item: `${website}${routes.workshop}`,
    },
  ],
}

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

const mainServices = [
  {
    title: "Servicing",
    description:
      "From interim services to full annual servicing, Cool Cars provides expert vehicle care at fair prices.",
    imageSrc: "/mechanical-workshop-tools-spanners-southampton.jpg",
    href: routes.workshopServicesServicing,
    alt: "Spanners and workshop tools representing mechanical repair services at Cool Cars, Southampton, Hampshire",
  },
  {
    title: "Brake Pads & Discs",
    description:
      "From brake checks to full pad and disc changes, we make sure your car stops safely every time.",
    imageSrc: "/brake-disc-caliper-service-hampshire.jpg",
    href: routes.workshopServicesBrakePadsAndDiscs,
    alt: "Brake disc and caliper after brake pad and disc service at Cool Cars, Swanmore, SO32 2PB",
  },
  {
    title: "Clutch Repairs/Replacements",
    description:
      "Expert clutch repairs and replacements to keep you moving smoothly.",
    imageSrc: "/gearstick-gearbox-repair-swanmore.jpg",
    href: routes.workshopServicesClutchRepairsOrReplacements,
    alt: "Manual gear lever close-up representing gearbox repair at Cool Cars, Swanmore, Hampshire",
  },
  {
    title: "Cambelts & Timing Belts",
    description:
      "Keep your engine running smoothly with expert cambelt and timing belt replacement.",
    imageSrc: "/cambelt-tensioner-pulley-timing-belt.jpg",
    href: routes.workshopServicesCambeltsAndTimingBelts,
    alt: "Close-up of timing belt tensioner pulley during cambelt service at Cool Cars, Hampshire",
  },
  {
    title: "Tyres and Puncture Repairs",
    description:
      "From quick puncture fixes to brand-new tyres, we deliver dependable performance you can rely on.",
    imageSrc: "/new-tyres-replacement-service-southampton.jpg",
    href: routes.workshopServicesTyresAndPunctureRepairs,
    alt: "Stack of new tyres representing tyre replacement service at Cool Cars, Southampton, Hampshire",
  },
  {
    title: "Gear Box Repairs/Replacements",
    description:
      "Professional gearbox repairs and replacements that keep you on the road.",
    imageSrc: "/worn-gearbox-internal-components-repair.jpg",
    href: routes.workshopServicesGearBoxRepairsOrReplacements,
    alt: "Close-up of worn gearbox internal components requiring gearbox repair at Cool Cars, Hampshire",
  },
]

const otherServices = [
  {
    title: "Batteries",
  },
  {
    title: "Exhausts",
  },
  { title: "Turbos" },
  {
    title: "Air Con",
  },
  { title: "Winter Safety Check" },
  {
    title: "Engine Diagnostic Scan",
  },
  {
    title: "Wheel Alignment",
  },
]

export default function WorkshopPage() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Fengine-valvetrain-rocker-arms-mechanical-repair-southampton.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fengine-valvetrain-rocker-arms-mechanical-repair-southampton.jpg&w=828&q=75')]">
        <div className="h-full max-w-7xl">
          <div className="first-section-main-content px-2.5 mb-10 pt-10">
            <Animated as="h1">Cool Cars - Workshop</Animated>
            <h2 className="text-shadow-black text-shadow-md">
              Skilled Hands for Every Vehicle
            </h2>
            <p className="text-base">
              From routine servicing to complex mechanical repairs, our
              technicians deliver reliable workmanship that keeps your vehicle
              running at its best.
            </p>

            <MainSectionLinks links={mainSectionLinks} />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 p-5 md:p-0">
        <h2>Our Services</h2>
        <h3 className="mb-10">Complete Solutions for All Your Car Needs</h3>

        <ul className="flex flex-col items-center md:grid md:grid-cols-3 gap-10 md:items-start">
          {mainServices.map(
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

      <section>
        <Animated
          as="h2"
          className="mb-5"
        >
          Other services
        </Animated>

        <ul className="flex flex-wrap justify-center gap-5">
          {otherServices.map(({ title }, index) => (
            <Animated
              as="li"
              key={index}
            >
              <Link
                href="/contact"
                className="block text-center link-button-fill-primary w-[250px]"
              >
                {title}
              </Link>
            </Animated>
          ))}
        </ul>
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

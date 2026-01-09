import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Plus } from "react-bootstrap-icons"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop",
  description:
    "Mechanical repairs, vehicle servicing and diagnostics from a trusted local workshop. Quality workmanship at fair, transparent prices.",
  alternates: {
    canonical: "https://cool-cars.co.uk",
  },
}

const mainServices = [
  {
    title: "Servicing",
    description:
      "From interim services to full annual servicing, Cool Cars provides expert vehicle care at fair prices.",
    imageSrc: "/servicing.jpg",
    href: routes.workshopServicesServicing,
    alt: "Auto technician polishing a car hood inside a workshop",
  },
  {
    title: "Brake Pads & Discs",
    description:
      "From brake checks to full pad and disc changes, we make sure your car stops safely every time.",
    imageSrc: "/brake-pads-and-discs.jpg",
    href: routes.workshopServicesBrakePadsAndDiscs,
    alt: "Workshop technician refinishing a car with a spray gun",
  },
  {
    title: "Clutch Repairs/Replacements",
    description:
      "Expert clutch repairs and replacements to keep you moving smoothly.",
    imageSrc: "/clutch-repairs-or-replacements.jpg",
    href: routes.workshopServicesClutchRepairsOrReplacements,
    alt: "Two cars involved in a crash",
  },
  {
    title: "Cambelts & Timing Belts",
    description:
      "Keep your engine running smoothly with expert cambelt and timing belt replacement.",
    imageSrc: "/cambelts-and-timing-belts.jpg",
    href: routes.workshopServicesCambeltsAndTimingBelts,
    alt: "Paint correction in progress with a polisher applied to a car door",
  },
  {
    title: "Tyres and Puncture Repairs",
    description:
      "From quick puncture fixes to brand-new tyres, we deliver dependable performance you can rely on.",
    imageSrc: "/tyres-and-puncture-repairs.jpg",
    href: routes.workshopServicesTyresAndPunctureRepairs,
    alt: "Custom bodywork in progress with a technician trimming material on a car panel",
  },
  {
    title: "Gear Box Repairs/Replacements",
    description:
      "Professional gearbox repairs and replacements that keep you on the road.",
    imageSrc: "/gear-box-repairs-or-replacements.jpg",
    href: routes.workshopServicesGearBoxRepairsOrReplacements,
    alt: "Fleet of cars in motion",
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
      <section className="bg-[url('/_next/image?url=%2Fworkshop-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fworkshop-banner.jpg&w=828&q=75')]">
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

            <Link
              href="/contact"
              className="link-button-fill-primary"
            >
              Get in touch
            </Link>
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
    </main>
  )
}

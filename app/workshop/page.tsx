import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Plus } from "react-bootstrap-icons"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"

import {
  routes,
  website,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"
import { MainSectionLinks } from "@/components/MainSectionLinks"

export const metadata: Metadata = {
  title: "Car Mechanic in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Mechanical workshop in Swanmore offering servicing, brakes, cambelts, clutches, tyres and gearbox repairs. Book your vehicle in today!",
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
            <Animated as="h1">
              Car Mechanic in Swanmore, Hampshire — Servicing, Brakes &
              Mechanical Repairs
            </Animated>
            <p className="text-base">
              Cool Cars South Coast is a trusted mechanical workshop in
              Swanmore, Hampshire, providing expert vehicle servicing and
              mechanical repairs from our fully equipped workshop at Swanmore
              Business Park.
            </p>
            <p className="text-base">
              Based in Swanmore, our mechanical workshop serves drivers from
              across Hampshire, including Southampton, Fareham, Bishops Waltham,
              Eastleigh, Wickham, and nearby areas.
            </p>
            <p className="text-base">
              Whether you need a routine car service, urgent brake pad and disc
              replacement, or a more complex repair such as a clutch replacement
              or gearbox repair, our experienced mechanics handle it all at
              fair, transparent prices.
            </p>
            <p className="text-base">
              As part of Cool Cars South Coast, our workshop team benefits from
              fully calibrated tools, experienced technicians, and a commitment
              to quality across every job. We work on all vehicle types, from
              everyday cars and commercial vans to performance vehicles and
              classics.
            </p>

            <MainSectionLinks links={mainSectionLinks} />
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl mx-auto">
        <h2>Our Mechanical Workshop Services</h2>

        <p className="text-center">
          Our workshop covers a wide range of car mechanical repairs and
          maintenance. Alongside our main services, including{" "}
          <Link href={routes.workshopServicesCambeltsAndTimingBelts}>
            cambelt and timing belt replacement
          </Link>{" "}
          and{" "}
          <Link href={routes.workshopServicesTyresAndPunctureRepairs}>
            tyre and puncture repairs
          </Link>
          , we also carry out batteries, exhausts, turbos, air conditioning,
          engine diagnostic scans, and wheel alignment.
        </p>

        <p className="text-center">
          Select a service below for full details and booking information.
        </p>
      </section>

      <section className="flex flex-col gap-5 p-5 md:p-0">
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
                    className="w-full h-87.5 object-cover md:w-100 md:h-125"
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
                className="block text-center link-button-fill-primary w-62.5"
              >
                {title}
              </Link>
            </Animated>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl mx-auto">
        <h2>Trusted Mechanics Across Hampshire</h2>

        <p className="text-center">
          Our workshop is equipped with up-to-date diagnostic tools to
          accurately identify mechanical faults, helping us repair the right
          issue first time. We use quality parts on every job and carry out all
          work to manufacturer specifications, regardless of your vehicle&apos;s
          make, model, or age.
        </p>

        <p className="text-center">
          Pricing is always transparent. We diagnose the issue, confirm the full
          cost, and only start work once you have approved it. For larger
          mechanical repairs,{" "}
          <Link href={routes.finance}>car repair finance</Link> is available to
          help spread the cost.
        </p>

        <p className="text-center">
          Our Swanmore workshop also sits alongside our{" "}
          <Link href={routes.bodyshop}>car bodyshop</Link>, so if bodywork is
          needed at the same time, both can often be handled in one visit.
        </p>

        <p className="text-center">
          <Link href={routes.contact}>Book your vehicle in</Link> today, or call{" "}
          <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>!
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

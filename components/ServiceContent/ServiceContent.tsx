import { type ReactNode } from "react"

import { Animated } from "@/components/Animated/Animated"
import { ContactForm } from "@/components/ContactForm/ContactForm"
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"

import { Routes, routes, website, areaServed } from "@/globals/globals.const"

import { ServicePricing } from "./ServicePricing"

import {
  serviceContentBannerClassNames,
  serviceContentSchema,
} from "./ServiceContent.const"

import type { Pricing } from "./ServiceContent.model"
import { mergeClassNames } from "@/utils/mergeClassNames"

type ServicesRoutesKeys =
  | "bodyshopServicesVehicleBodyRepairs"
  | "bodyshopServicesRespraysAndPaintwork"
  | "bodyshopServicesAccidentRepairs"
  | "bodyshopServicesBodyworkAndModifications"
  | "bodyshopServicesFleetRepairManagement"
  | "bodyshopServicesPaintCorrectionAndPolishing"
  | "workshopServicesServicing"
  | "workshopServicesBrakePadsAndDiscs"
  | "workshopServicesCambeltsAndTimingBelts"
  | "workshopServicesClutchRepairsOrReplacements"
  | "workshopServicesGearBoxRepairsOrReplacements"
  | "workshopServicesTyresAndPunctureRepairs"

type ServiceContentProps = {
  title: string
  description: ReactNode
  servicePathname: Routes[ServicesRoutesKeys]
  pricing?: Pricing
  showTestimonials?: boolean
}

export const ServiceContent = ({
  title,
  description,
  servicePathname,
  pricing,
  showTestimonials,
}: ServiceContentProps) => {
  const bannerClassName = serviceContentBannerClassNames[servicePathname]
  const schema = serviceContentSchema[servicePathname]

  const serviceJsonLd = schema && {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: schema.serviceType,
    name: schema.name,
    description: schema.description,
    provider: schema.provider,
    areaServed,
    url: `${website}${servicePathname}`,
  }

  const parentSection = servicePathname.startsWith(routes.bodyshop)
    ? { name: "Bodyshop", pathname: routes.bodyshop }
    : { name: "Workshop", pathname: routes.workshop }

  const breadcrumbJsonLd = schema && {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: website },
      {
        "@type": "ListItem",
        position: 2,
        name: parentSection.name,
        item: `${website}${parentSection.pathname}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: schema.breadcrumbName,
        item: `${website}${servicePathname}`,
      },
    ],
  }

  return (
    <main className="gap-20">
      <section className={mergeClassNames(`bg-center p-2 ${bannerClassName}`)}>
        <Animated
          as="h1"
          className="mb-5 md:mb-10 text-center"
        >
          {title}
        </Animated>
        <div className="text-base [&>p]:text-white">{description}</div>
      </section>

      {!!pricing?.length && (
        <section>
          <Animated
            as="h2"
            className="mb-5"
          >
            Pricing
          </Animated>

          <ServicePricing pricing={pricing} />
        </section>
      )}

      <section className="flex flex-col gap-5 items-center p-5 md:p-0">
        <Animated
          as="h2"
          className="mb-5"
        >
          Contact Us
        </Animated>

        <ContactForm
          title="Get in Touch"
          description="Describe your requirement in as much detail as possible, and feel free to provide images"
        />
      </section>

      {showTestimonials && <TestimonialsSection />}

      {serviceJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      )}

      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
      )}
    </main>
  )
}

import { type Metadata } from "next"

import { BodyshopServicePage } from "@/components/BodyshopServicePage/BodyshopServicePage"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Custom Bodywork & Modifications – Cool Cars",
  description:
    "Upgrade your vehicle’s style with bespoke bodywork modifications, enhancements and tailored exterior styling from Cool Cars.",
  alternates: {
    canonical: "https://cool-cars.co.uk/bodywork-and-modifications",
  },
}

export default function BodyWorkAndModificationsServicePage() {
  return (
    <BodyshopServicePage
      servicePathname={routes.bodyshopServicesBodyworkAndModifications}
      title="Bodywork & Modifications"
      description="Your car should feel personal to you, and at Cool Cars, we make that happen with expert bodywork and bespoke modifications. Whether you want subtle styling tweaks or a full custom transformation, our team delivers precision workmanship and lasting results. From panel smoothing and body kits to spoilers, bumpers, and tailored details, every job is carried out with care and accuracy. No gimmicks or inflated prices, just skilled craftsmanship and a perfect fit."
    />
  )
}

import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Custom Bodywork & Car Modifications in Swanmore | Cool Cars South Coast",
  description:
    "Custom bodywork & car modifications in Swanmore, Hampshire. Styling upgrades, body kits, and more. Serving Southampton & Fareham. Get a free quote!",
  alternates: {
    canonical: "https://cool-cars.co.uk/bodyshop/services/bodywork-and-modifications",
  },
}

export default function BodyWorkAndModificationsServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesBodyworkAndModifications}
      title="Bodywork & Modifications"
      description={
        <>
          <p>
            Your car should feel personal to you, and at Cool Cars, we make that
            happen with expert bodywork and bespoke modifications.
          </p>
          <p>
            Whether you want subtle styling tweaks or a full custom
            transformation, our team delivers precision workmanship and lasting
            results.
          </p>
          <p>
            From panel smoothing and body kits to spoilers, bumpers, and
            tailored details, every job is carried out with care and accuracy.
          </p>
          <p>
            No gimmicks or inflated prices, just skilled craftsmanship and a
            perfect fit.
          </p>
        </>
      }
    />
  )
}

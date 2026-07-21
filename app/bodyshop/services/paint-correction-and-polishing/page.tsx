import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Paint Correction in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Paint correction in Swanmore, Hampshire. Remove swirl marks, scratches & oxidation and restore your paintwork's original shine. Call us today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/bodyshop/services/paint-correction-and-polishing",
  },
}

export default function PaintCorrectionAndPolishingServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesPaintCorrectionAndPolishing}
      title="Paint Correction & Polishing"
      description={
        <>
          <p>
            If your paintwork’s lost its shine, Cool Cars can bring it back to
            life with expert correction and polishing.
          </p>
          <p>
            Our technicians remove swirl marks, light scratches, and dull
            patches to reveal a smooth, deep gloss that lasts.
          </p>
          <p>
            Using specialist tools and premium products, we restore colour and
            clarity without overcharging or overdoing it.
          </p>
          <p>
            Whether it’s a light refresh or full machine polish, every job is
            carried out with care and precision.
          </p>
          <p>Professional results, fair pricing, and a finish you’ll love.</p>
        </>
      }
    />
  )
}

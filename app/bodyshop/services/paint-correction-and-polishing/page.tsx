import { type Metadata } from "next"

import { BodyshopServicePage } from "@/components/BodyshopServicePage/BodyshopServicePage"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Paint Correction & Polishing – Cool Cars",
  description:
    "Bring back your car’s gloss and clarity with professional paint correction and polishing. Remove swirl marks and enhance your vehicle’s shine.",
  alternates: {
    canonical: "https://cool-cars.co.uk/paint-correction-and-polishing",
  },
}

export default function PaintCorrectionAndPolishingServicePage() {
  return (
    <BodyshopServicePage
      servicePathname={routes.bodyshopServicesPaintCorrectionAndPolishing}
      title="Paint Correction & Polishing"
      description="If your paintwork’s lost its shine, Cool Cars can bring it back to life with expert correction and polishing. Our technicians remove swirl marks, light scratches, and dull patches to reveal a smooth, deep gloss that lasts. Using specialist tools and premium products, we restore colour and clarity without overcharging or overdoing it. Whether it’s a light refresh or full machine polish, every job is carried out with care and precision. Professional results, fair pricing, and a finish you’ll love."
    />
  )
}

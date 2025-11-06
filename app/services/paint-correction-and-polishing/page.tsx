import { ServicePage } from "@/components/ServicePage/ServicePage"

import { routes } from "@/globals/globals.const"

export default function PaintCorrectionAndPolishingServicePage() {
  return (
    <ServicePage
      servicePathname={routes.servicesPaintCorrectionAndPolishing}
      title="Paint Correction & Polishing"
      description="If your paintwork’s lost its shine, Cool Cars can bring it back to life with expert correction and polishing. Our technicians remove swirl marks, light scratches, and dull patches to reveal a smooth, deep gloss that lasts. Using specialist tools and premium products, we restore colour and clarity without overcharging or overdoing it. Whether it’s a light refresh or full machine polish, every job is carried out with care and precision. Professional results, fair pricing, and a finish you’ll love."
    />
  )
}

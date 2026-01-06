import { type Metadata } from "next"

import { WorkshopServicePage } from "@/components/WorkshopServicePage/WorkshopServicePage"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop - Clutch Repairs & Replacements",
  description:
    "Clutch repairs and replacements carried out by experienced technicians. Vehicle-specific quotes and transparent pricing.",
  alternates: {
    canonical: "https://cool-cars.co.uk/accident-repairs",
  },
}

export default function ClutchRepairsOrReplacementsServicePage() {
  return (
    <WorkshopServicePage
      servicePathname={routes.workshopServicesClutchRepairsOrReplacements}
      title="Clutch Repairs & Replacements"
      description={
        <>
          <p>
            At Cool Cars, we take the time to understand both your vehicle and
            your budget, so you always know exactly what to expect. We provide
            expert clutch repairs and replacements, with all work quoted
            individually based on your vehicle’s make and model.
          </p>
          <p>
            Because clutch systems vary widely, pricing is subject to inspection
            and quotation.
          </p>
          <p>
            Any costs will always be clearly explained and agreed with you
            upfront, before any work begins.
          </p>
          <p>
            If you’re experiencing clutch issues or would like advice, please
            get in touch with our team, and our experienced technicians will be
            happy to assess your vehicle and talk you through the next steps.
          </p>
        </>
      }
    />
  )
}

import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Gearbox Repair in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Expert gearbox repairs & replacements in Swanmore, Hampshire for all makes & models. Serving Southampton & Fareham. Contact us today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/workshop/services/gearbox-repairs-or-replacements",
  },
}

export default function GearBoxRepairsOrReplacementsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesGearBoxRepairsOrReplacements}
      title="Gear Box Repairs and Replacements"
      description={
        <>
          <p>
            Gearbox problems can affect everything from smooth gear changes to
            overall drivability, so it’s important they’re addressed properly.
          </p>
          <p>
            At Cool Cars, we provide expert gearbox repairs and replacements,
            tailored to your vehicle and how you use it.
          </p>
          <p>
            Every gearbox issue is different, which is why we begin with a
            thorough inspection to diagnose the problem accurately. This allows
            us to recommend the most effective solution, whether that’s a repair
            or a full replacement.
          </p>
          <p>
            Where a repair is possible, we will always explore that option first
            to help minimise disruption and unnecessary expense.
          </p>
          <p>
            If your gearbox doesn’t feel right, get in touch with our team today
            to arrange an inspection and take the first step towards smooth,
            confident driving again.
          </p>
        </>
      }
    />
  )
}

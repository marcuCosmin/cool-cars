import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Gearbox Repair in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Expert gearbox repairs & replacements in Swanmore, Hampshire for all makes & models. Serving Southampton & Fareham. Contact us today!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/workshop/services/gearbox-repairs-or-replacements",
  },
}

export default function GearBoxRepairsOrReplacementsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesGearBoxRepairsOrReplacements}
      title="Gearbox Repair in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars provides expert gearbox repairs and replacements in
          Swanmore, Hampshire, diagnosing and resolving gearbox faults on all
          makes and models. Based at Swanmore Business Park, our workshop team
          can help with anything from minor gearbox issues to full gearbox
          replacement.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Signs of a Gearbox Problem</h2>

            <p className="text-center">
              Common signs of gearbox trouble include difficulty selecting or
              changing gears, gears slipping out of position, grinding or
              whining noises, delayed gear engagement, rough gear changes, a
              burning smell, or a gearbox warning light on the dashboard.
            </p>

            <p className="text-center">
              Gearbox problems rarely fix themselves and can become more
              expensive if ignored, so early diagnosis is recommended.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Our Gearbox Repair & Replacement Service</h2>

              <p className="text-center">
                Our gearbox service includes gearbox diagnosis and fault finding
                using diagnostic equipment, gearbox repair (seals, bearings,
                synchromesh components), reconditioned unit supply and fitting,
                and both manual and automatic gearbox work. We will always
                assess the issue first and explain whether a repair or
                replacement is the most suitable option.
              </p>

              <p className="text-center">
                All work is carried out using quality parts and manufacturer
                specifications where applicable. If your vehicle also has clutch
                issues, our{" "}
                <Link href={routes.workshopServicesClutchRepairsOrReplacements}>
                  clutch repair team
                </Link>{" "}
                can assess both in the same visit. For larger gearbox jobs,{" "}
                <Link href={routes.finance}>car repair finance</Link> is
                available to help spread the cost.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Hampshire & Surrounding Areas</h2>

              <p className="text-center">
                Our Swanmore workshop serves drivers from Southampton, Fareham,
                Bishops Waltham, Eastleigh, Wickham, and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>
                  Get a gearbox repair quote today
                </Link>{" "}
                and our team will confirm availability!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

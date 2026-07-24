import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Clutch Replacement in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Clutch replacement in Swanmore, Hampshire. Expert clutch repairs and replacements for all makes and models. Book your clutch check today!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/workshop/services/clutch-repairs-or-replacements",
  },
}

export default function ClutchRepairsOrReplacementsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesClutchRepairsOrReplacements}
      title="Clutch Replacement in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast provides expert clutch repairs and replacements
          in Swanmore, Hampshire, working on all makes and models from our fully
          equipped workshop. Based at Swanmore Business Park, our mechanics
          diagnose and resolve clutch problems accurately, restoring smooth,
          reliable gear changes and getting you back on the road.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Signs You Need a Clutch Repair or Replacement</h2>

            <p className="text-center">
              Common signs of clutch wear or failure include the clutch slipping
              (engine revs rise without a matching increase in speed),
              difficulty selecting or changing gears, a high or spongy clutch
              biting point, a burning smell when using the clutch, and juddering
              or vibration when pulling away from a standstill.
            </p>

            <p className="text-center">
              Some clutch issues can be repaired while others require a full
              replacement. Our mechanics will diagnose the problem accurately
              and advise you on the most cost-effective solution.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Our Clutch Repair & Replacement Service</h2>

              <p className="text-center">
                Our clutch service covers full clutch kit replacement (clutch
                plate, pressure plate, and release bearing), dual mass flywheel
                inspection and replacement where required, clutch cable or
                hydraulic system repair, and clutch pedal adjustment.
              </p>

              <p className="text-center">
                We use quality parts and carry out work to manufacturer
                specifications. A clear quote is always confirmed before any
                work begins.
              </p>

              <p className="text-center">
                If your vehicle is also showing signs of gearbox issues, our{" "}
                <Link
                  href={routes.workshopServicesGearBoxRepairsOrReplacements}
                >
                  gearbox repair team
                </Link>{" "}
                can assess both in the same visit. For larger clutch replacement
                jobs, <Link href={routes.finance}>car repair finance</Link> is
                available to help spread the cost.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Swanmore, Southampton, Fareham & Hampshire</h2>

              <p className="text-center">
                Our Swanmore workshop serves drivers from Southampton, Fareham,
                Bishops Waltham, Eastleigh, Wickham, and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>
                  Book your clutch inspection today
                </Link>
                , or call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

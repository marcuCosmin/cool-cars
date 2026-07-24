import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Puncture Repair in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Puncture repair in Swanmore, Hampshire, with tyre checks, tyre fitting and replacement options for all vehicles. Book your tyre check today!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/workshop/services/tyres-and-puncture-repairs",
  },
}

export default function GearBoxRepairsOrReplacementsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesTyresAndPunctureRepairs}
      title="Puncture Repair in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast provides puncture repairs and tyre fitting in
          Swanmore, Hampshire, helping keep your vehicle safe, legal, and
          roadworthy. Whether you’ve picked up a puncture, need a new tyre
          fitted, or want your existing tyres inspected, our Swanmore car
          bodyshop and workshop team handles it quickly and professionally.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Our Tyre & Puncture Repair Services</h2>

            <p className="text-center">
              Our tyre services include puncture repairs where the tyre is
              safely repairable, new tyre supply and fitting, tyre condition
              checks, tread depth checks, pressure checks, and inspections for
              sidewall damage or uneven wear.
            </p>

            <p className="text-center">
              We work on cars, vans, and light commercial vehicles, using
              suitable repair methods and replacement tyres based on your
              vehicle and driving needs.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>When Is a Tyre Not Repairable?</h2>

              <p className="text-center">
                Not every puncture can be safely repaired. A tyre cannot be
                fixed if the puncture is in the sidewall or shoulder area, if
                the damage is larger than 6mm in diameter, if the tyre has been
                driven on while severely underinflated, or if there is secondary
                sidewall damage from running flat. In these cases, replacement
                is the only safe option. We’ll always explain why and supply a
                suitable replacement.
              </p>

              <p className="text-center">
                Worn tyres are also a legal and safety issue. The minimum legal
                tread depth in the UK is 1.6mm across the central three-quarters
                of the tyre. We check tread depth as part of every tyre
                inspection. If your{" "}
                <Link href={routes.workshopServicesBrakePadsAndDiscs}>
                  brakes
                </Link>{" "}
                also need attention, we can check both in the same visit.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Swanmore, Southampton, Fareham & Hampshire</h2>

              <p className="text-center">
                Our tyre and puncture repair workshop in Swanmore serves drivers
                from Southampton, Fareham, Bishops Waltham, Eastleigh, Wickham,
                and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>
                  Book a tyre check or puncture repair today
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

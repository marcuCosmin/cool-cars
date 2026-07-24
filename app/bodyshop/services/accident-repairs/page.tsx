import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Accident Repairs in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Accident repair in Swanmore, Hampshire. Thatcham-approved collision repairs restoring your vehicle to pre-accident condition. Contact us today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/bodyshop/services/accident-repairs",
  },
}

export default function AccidentRepairsServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesAccidentRepairs}
      title="Accident Repairs in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast provides professional accident repairs in
          Swanmore, Hampshire, restoring vehicles to their pre-accident
          condition after collisions, bumps, and impact damage. Our Swanmore car
          bodyshop carries out accident repairs on all makes and models — from
          minor bumper scuffs to more significant structural damage — using
          Thatcham-approved processes and repair times.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>What Our Accident Repair Service Includes</h2>

            <p className="text-center">
              Our accident repair team assesses the full extent of the damage —
              both visible and structural — before providing a detailed,
              fixed-price quote. We handle the complete repair process from
              start to finish, including panel repair and replacement,
              structural realignment where required, paintwork and respray to
              match the original colour, and a final quality check before the
              vehicle is returned to you.
            </p>

            <p className="text-center">
              If your vehicle has sustained damage that also requires{" "}
              <Link href={routes.bodyshopServicesVehicleBodyRepairs}>
                body repair work
              </Link>{" "}
              beyond the immediate collision impact, we address everything in a
              single repair.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Thatcham-Approved Accident Repairs</h2>

              <p className="text-center">
                All of our accident repairs follow Thatcham-approved processes,
                which are the industry benchmark for repair quality and safety.
                This means you can be confident the structural integrity of your
                vehicle has been properly restored, not just the cosmetic
                appearance.
              </p>

              <p className="text-center">
                We use precision colour-matching technology to ensure any
                repainted panels blend seamlessly with the rest of the vehicle,
                and we only use quality parts throughout. Estimates are free,
                transparent, and agreed upfront. For larger repairs,{" "}
                <Link href={routes.finance}>car repair finance</Link> is
                available.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Accident Repairs Across Hampshire</h2>

              <p className="text-center">
                Our Swanmore bodyshop serves drivers from Southampton, Fareham,
                Bishops Waltham, Eastleigh, Wickham, and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>Contact us</Link> today for a free
                accident repair estimate!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

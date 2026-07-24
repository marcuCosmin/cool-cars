import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Vehicle Body Repairs in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Vehicle body repairs in Swanmore, Hampshire. Dents, scratches, panel damage & more. Free estimates, Thatcham-approved. Get a quote today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/bodyshop/services/vehicle-body-repairs",
  },
}

export default async function VehicleBodyRepairsServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesVehicleBodyRepairs}
      title="Vehicle Body Repairs in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast provides professional vehicle body repairs in
          Swanmore, Hampshire, covering everything from minor dents and
          scratches to more extensive panel damage. Based at our car bodyshop on
          Swanmore Business Park, we repair everyday cars, vans, classics, and
          performance vehicles to a consistently high standard.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>What We Cover</h2>

            <p className="text-center">
              Our bodyshop team handles a wide range of vehicle body repair
              work, including minor dent and scratch repairs, scrape and scuff
              removal, panel beating and reshaping, bumper repairs, and
              structural body repairs following impact damage. No job is too
              small or too complex — every repair gets the same care and
              attention to detail.
            </p>

            <p className="text-center">
              If the damage is more significant, our{" "}
              <Link href={routes.bodyshopServicesAccidentRepairs}>
                accident repair service
              </Link>{" "}
              covers the full scope of collision damage, including structural
              assessment and insurance-related processes. Where paintwork has
              been affected beyond a simple touch-up, we may recommend a{" "}
              <Link href={routes.bodyshopServicesRespraysAndPaintwork}>
                partial or full respray
              </Link>{" "}
              to achieve a seamless finish.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Our Repair Process</h2>

              <p className="text-center">
                Every vehicle body repair starts with a free, no-obligation
                assessment. We inspect the damage, explain what’s involved, and
                confirm a fixed price before any work begins. All repairs follow
                Thatcham-approved processes, and we use precision
                colour-matching technology to ensure the repair blends perfectly
                with your vehicle’s existing paintwork.
              </p>

              <p className="text-center">
                We work by appointment only, so your car receives dedicated
                attention from our technicians rather than sitting in a queue.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Southampton, Fareham & Hampshire</h2>

              <p className="text-center">
                Our Swanmore bodyshop is well-placed for drivers from
                Southampton, Fareham, Bishops Waltham, Eastleigh, Wickham, and
                across Hampshire. If the cost of a repair is a concern,{" "}
                <Link href={routes.finance}>car repair finance</Link> is
                available to help spread the bill.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>Get a free estimate today</Link>, or
                call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>{" "}
                to discuss your repair!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

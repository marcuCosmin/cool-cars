import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Car Respray Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Car respray in Swanmore, Hampshire. Full and partial resprays, colour changes, paintwork repairs, and more. Serving Southampton & Fareham. Get a quote!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/bodyshop/services/resprays-and-paintwork",
  },
}

export default function RespraysAndPaintworkServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesRespraysAndPaintwork}
      title="Car Respray in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast offers professional car respray and paintwork
          services in Swanmore, Hampshire. Whether you need a full colour
          change, a partial respray to repair localised damage, or a touch-up to
          freshen up faded or chipped paint, our bodyshop team at the Swanmore
          car bodyshop delivers a finish that lasts.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Our Respray & Paintwork Services</h2>

            <p className="text-center">
              We carry out a full range of respray and paintwork services,
              including full vehicle resprays, partial resprays on individual
              panels or sections, colour changes, bumper resprays, paintwork
              repairs for chips and scratches, and touch-up work for faded or
              weathered paint. We work on all vehicle types, including standard
              cars, vans, classics, and performance vehicles.
            </p>

            <p className="text-center">
              Every respray uses precision colour-matching technology to ensure
              the new paint blends seamlessly with the rest of the vehicle,
              whether we’re matching a factory colour or replicating a custom
              finish. If your vehicle has also sustained body damage, we can
              handle the{" "}
              <Link href={routes.bodyshopServicesVehicleBodyRepairs}>
                vehicle body repairs
              </Link>{" "}
              and the respray in the same visit.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Quality Paintwork That Lasts</h2>

              <p className="text-center">
                Our technicians use high-quality paint products and apply them
                using industry-standard spray techniques. Every job is carried
                out in a controlled environment to avoid contamination, and we
                finish with a protective coat to ensure durability and a deep,
                even gloss.
              </p>

              <p className="text-center">
                Estimates are always free and confirmed before work begins. For
                larger jobs such as full resprays or colour changes,{" "}
                <Link href={routes.finance}>car repair finance</Link> is
                available to spread the cost.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Covering Hampshire & Surrounding Areas</h2>

              <p className="text-center">
                Our car respray workshop in Swanmore serves drivers from
                Southampton, Fareham, Bishops Waltham, Eastleigh, Wickham, and
                across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>
                  Get a free respray estimate today
                </Link>
                , or call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>{" "}
                to book your vehicle in!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Fleet Vehicle Repairs in Hampshire | Cool Cars South Coast",
  description:
    "Fleet vehicle repairs in Hampshire for vans, cars and light commercial vehicles. Body repairs, accident damage and maintenance support. Call today!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/bodyshop/services/fleet-repair-management",
  },
}

export default function FleetRepairManagementServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesFleetRepairManagement}
      title="Fleet Vehicle Repairs in Hampshire"
      description={
        <p>
          Cool Cars South Coast provides fleet vehicle repair and management
          services in Hampshire for businesses operating cars, vans, and light
          commercial vehicles. Based at our Swanmore car bodyshop, we help keep
          business vehicles repaired, presentable, and back on the road with
          minimal downtime. We work with companies of different sizes, from sole
          traders with one van to businesses managing multiple vehicles across
          Hampshire.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>What Our Fleet Repair Service Covers</h2>

            <p className="text-center">
              Our fleet repair management service covers{" "}
              <Link href={routes.bodyshopServicesAccidentRepairs}>
                accident damage
              </Link>{" "}
              and bodywork repairs, panel repairs and{" "}
              <Link href={routes.bodyshopServicesRespraysAndPaintwork}>
                resprays
              </Link>{" "}
              to maintain a consistent fleet appearance, routine bodywork
              maintenance, and fast turnaround repairs to minimise time off the
              road. We work on all makes and models of commercial vehicles,
              vans, and fleet cars.
            </p>

            <p className="text-center">
              For businesses that need mechanical repairs alongside the
              bodywork, our{" "}
              <Link href={routes.workshop}>mechanical workshop</Link> can also
              handle servicing, brakes, tyres, and other mechanical work. This
              means bodyshop and workshop work can often be managed in one
              visit.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Why Choose Cool Cars South Coast for Fleet Repairs?</h2>

              <p className="text-center">
                We understand that every day a vehicle is off the road has a
                direct impact on your business. Our fleet repair service is
                built around fast turnarounds, transparent pricing, and
                consistent quality, so you’re not left waiting for quotes or
                chasing progress updates.
              </p>

              <p className="text-center">
                All repairs use Thatcham-approved processes and quality parts.
                Pricing is agreed upfront, and we’ll accommodate your scheduling
                requirements as much as possible to limit disruption to your
                operations.{" "}
                <Link href={routes.finance}>Fleet repair finance</Link> is
                available for larger repair programmes.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Hampshire & Surrounding Areas</h2>

              <p className="text-center">
                Our fleet repair workshop in Swanmore is well-placed for
                businesses based in Southampton, Fareham, Bishops Waltham,
                Eastleigh, Wickham, and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>Get in touch</Link> to discuss your
                fleet requirements, or call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

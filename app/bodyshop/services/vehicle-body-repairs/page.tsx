import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Vehicle Body Repairs – Cool Cars",
  description:
    "From small dents to major collision damage, Cool Cars restores your vehicle with high-quality repairs and a finish that looks like new.",
  alternates: {
    canonical: "https://cool-cars.co.uk/vehicle-body-repairs",
  },
}

export default async function VehicleBodyRepairsServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesVehicleBodyRepairs}
      title="Vehicle Body Repairs"
      description={
        <>
          <p>
            From dents and scratches to major repairs, Cool Cars delivers
            quality work you can count on.
          </p>
          <p>
            Our team combines skill, care, and fair pricing to give you lasting
            results and real value.
          </p>
          <p>
            Using trusted techniques and durable materials, we make sure every
            vehicle leaves looking its best.
          </p>
          <p>
            No jargon or hidden costs, just honest, professional repairs done
            right
          </p>
          <p>
            Whether it’s a minor scrape or serious damage, we treat every job
            with the same attention to detail and pride in our work.
          </p>
        </>
      }
    />
  )
}

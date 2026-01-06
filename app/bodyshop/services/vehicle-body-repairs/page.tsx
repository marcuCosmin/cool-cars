import { type Metadata } from "next"

import { BodyshopServicePage } from "@/components/BodyshopServicePage/BodyshopServicePage"

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
    <BodyshopServicePage
      servicePathname={routes.bodyshopServicesVehicleBodyRepairs}
      title="Vehicle Body Repairs"
      description="From dents and scratches to major repairs, Cool Cars delivers quality work you can count on. Our team combines skill, care, and fair pricing to give you lasting results and real value. Using trusted techniques and durable materials, we make sure every vehicle leaves looking its best. No jargon or hidden costs, just honest, professional repairs done right. Whether it’s a minor scrape or serious damage, we treat every job with the same attention to detail and pride in our work."
    />
  )
}

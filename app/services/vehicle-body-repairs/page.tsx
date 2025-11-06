import { ServicePage } from "@/components/ServicePage/ServicePage"

import { routes } from "@/globals/globals.const"

export default async function VehicleBodyRepairsServicePage() {
  return (
    <ServicePage
      servicePathname={routes.servicesVehicleBodyRepairs}
      title="Vehicle Body Repairs"
      description="From dents and scratches to major repairs, Cool Cars delivers quality work you can count on. Our team combines skill, care, and fair pricing to give you lasting results and real value. Using trusted techniques and durable materials, we make sure every vehicle leaves looking its best. No jargon or hidden costs, just honest, professional repairs done right. Whether it’s a minor scrape or serious damage, we treat every job with the same attention to detail and pride in our work."
    />
  )
}

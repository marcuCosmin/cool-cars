import { type Metadata } from "next"

import { BodyshopServicePage } from "@/components/BodyshopServicePage/BodyshopServicePage"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Fleet Repair Management – Cool Cars",
  description:
    "Cost-effective, reliable fleet body repair management from Cool Cars. Keep your business vehicles looking professional and on the road.",
  alternates: {
    canonical: "https://cool-cars.co.uk/fleet-repair-management",
  },
}

export default function FleetRepairManagementServicePage() {
  return (
    <BodyshopServicePage
      servicePathname={routes.bodyshopServicesFleetRepairManagement}
      title="Fleet Repair Management"
      description="When your vehicles stop, business slows, and that’s where Cool Cars can keep you moving. Our fleet repair management service delivers fast, reliable repairs for cars, vans, and company vehicles of all sizes. From minor dents to full resprays and accident repairs, every job is handled with care, precision, and efficiency. We offer flexible scheduling, clear updates, and consistent quality to reduce downtime and control costs. Trusted by businesses across the South Coast, Cool Cars keeps fleets running smoothly and looking their best."
    />
  )
}

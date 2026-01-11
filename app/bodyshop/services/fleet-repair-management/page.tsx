import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

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
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesFleetRepairManagement}
      title="Fleet Repair Management"
      description={
        <>
          <p>
            When your vehicles stop, business slows, and that’s where Cool Cars
            can keep you moving.
          </p>
          <p>
            Our fleet repair management service delivers fast, reliable repairs
            for cars, vans, and company vehicles of all sizes.
          </p>
          <p>
            From minor dents to full resprays and accident repairs, every job is
            handled with care, precision, and efficiency.
          </p>
          <p>
            We offer flexible scheduling, clear updates, and consistent quality
            to reduce downtime and control costs.
          </p>
          <p>
            Trusted by businesses across the South Coast, Cool Cars keeps fleets
            running smoothly and looking their best.
          </p>
        </>
      }
    />
  )
}

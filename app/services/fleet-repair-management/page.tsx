import { ServicePage } from "@/components/ServicePage/ServicePage"

import { routes } from "@/globals/globals.const"

export default function FleetRepairManagementServicePage() {
  return (
    <ServicePage
      servicePathname={routes.servicesFleetRepairManagement}
      title="Fleet Repair Management"
      description="When your vehicles stop, business slows, and that’s where Cool Cars can keep you moving. Our fleet repair management service delivers fast, reliable repairs for cars, vans, and company vehicles of all sizes. From minor dents to full resprays and accident repairs, every job is handled with care, precision, and efficiency. We offer flexible scheduling, clear updates, and consistent quality to reduce downtime and control costs. Trusted by businesses across the South Coast, Cool Cars keeps fleets running smoothly and looking their best."
    />
  )
}

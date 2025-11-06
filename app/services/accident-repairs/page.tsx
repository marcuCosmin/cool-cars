import { ServicePage } from "@/components/ServicePage/ServicePage"

import { routes } from "@/globals/globals.const"

export default function AccidentRepairsServicePage() {
  return (
    <ServicePage
      servicePathname={routes.servicesAccidentRepairs}
      title="Accident Repairs"
      description="Accidents happen, but at Cool Cars, we make getting back on the road simple and stress-free. From small dents to major repairs, our skilled team handles every job with care, precision, and pride. Using trusted methods and quality materials, we restore your car’s safety, value, and finish without inflated costs. Every detail matters, from perfect panel alignment to a smooth paint match, ensuring your car looks and drives exactly as it should. Reliable work, fair pricing, and results you can depend on."
    />
  )
}

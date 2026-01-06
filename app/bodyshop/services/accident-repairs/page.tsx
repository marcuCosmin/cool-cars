import { type Metadata } from "next"

import { BodyshopServicePage } from "@/components/BodyshopServicePage/BodyshopServicePage"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Accident Repairs – Cool Cars",
  description:
    "Trust Cool Cars for seamless accident repairs, expert bodywork restoration and support with insurance processes. Get back on the road with confidence.",
  alternates: {
    canonical: "https://cool-cars.co.uk/accident-repairs",
  },
}

export default function AccidentRepairsServicePage() {
  return (
    <BodyshopServicePage
      servicePathname={routes.bodyshopServicesAccidentRepairs}
      title="Accident Repairs"
      description="Accidents happen, but at Cool Cars, we make getting back on the road simple and stress-free. From small dents to major repairs, our skilled team handles every job with care, precision, and pride. Using trusted methods and quality materials, we restore your car’s safety, value, and finish without inflated costs. Every detail matters, from perfect panel alignment to a smooth paint match, ensuring your car looks and drives exactly as it should. Reliable work, fair pricing, and results you can depend on."
    />
  )
}

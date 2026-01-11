import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

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
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesAccidentRepairs}
      title="Accident Repairs"
      description={
        <>
          <p>
            Accidents happen, but at Cool Cars, we make getting back on the road
            simple and stress-free.
          </p>
          <p>
            From small dents to major repairs, our skilled team handles every
            job with care, precision, and pride.
          </p>
          <p>
            Using trusted methods and quality materials, we restore your car’s
            safety, value, and finish without inflated costs.
          </p>
          <p>
            Every detail matters, from perfect panel alignment to a smooth paint
            match, ensuring your car looks and drives exactly as it should.
          </p>
          <p>Reliable work, fair pricing, and results you can depend on.</p>
        </>
      }
    />
  )
}

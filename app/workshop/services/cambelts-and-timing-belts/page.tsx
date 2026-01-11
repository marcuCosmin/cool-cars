import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop - Cambelts & Timing Belts",
  description:
    "Cambelt and timing belt replacement services with clear pricing. Expert fitting, fair costs and simple online booking.",
  alternates: {
    canonical: "https://cool-cars.co.uk/accident-repairs",
  },
}

export default function CambeltsAndTimingBeltsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesCambeltsAndTimingBelts}
      title="Cambelts & Timing Belts"
      pricing={[
        {
          title: "Engine Size",
          values: [
            "Up to 1300cc",
            "Up to 1600cc",
            "Up to 1900cc",
            "Up to 2200cc",
            "Over 2200cc",
          ],
          pinned: true,
        },
        {
          title: "Single Cam",
          values: ["£344.95", "£364.95", "£379.95", "£409.95", "£434.95"],
        },
        {
          title: "Twin Cam",
          values: ["£374.95", "£399.95", "£424.95", "£454.95", "£479.95"],
        },
        {
          title: "Four Cam",
          values: ["£149.95", "£159.95", "£164.95", "£174.95", "£179.95"],
        },
      ]}
      description={
        <>
          <p>
            Cambelts and timing belts play a vital role in keeping your engine
            running smoothly, and replacing them at the right time can help
            prevent serious and costly damage.
          </p>
          <p>
            At Cool Cars, we provide professional cambelt and timing belt
            replacement with clear, easy-to-understand pricing for most
            vehicles.
          </p>
          <p>
            Our prices are based on your vehicle’s engine and manufacturer and
            cover the vast majority of cars on the road.
          </p>
          <p>
            Below, you’ll find a pricing table for our brake pad and discIn some
            cases, specialist engines or hard-to-source parts, such as those
            found on luxury or classic models, may require a bespoke quote,
            which we will always discuss and agree with you before any work
            begins.
          </p>
          <p>
            You can view our cambelt and timing belt pricing table below to
            understand typical costs.
          </p>
          <p>
            When you are ready, simply book your replacement online, and our
            experienced technicians will take care of the rest.
          </p>
        </>
      }
    />
  )
}

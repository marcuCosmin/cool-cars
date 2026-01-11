import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop - Brake Pads and Discs",
  description:
    "Brake pad and disc replacement services with clear pricing. Expert technicians, fair costs and simple online booking",
  alternates: {
    canonical: "https://cool-cars.co.uk/accident-repairs",
  },
}

export default function BrakePadsAndDiscsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesBrakePadsAndDiscs}
      title="Brake Pads & Discs"
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
          title: "Front Pads",
          values: ["£154.95", "£164.95", "£169.95", "£179.95", "£184.95"],
        },
        {
          title: "Front Pads & Discs",
          values: ["£264.95", "£279.95", "£289.95", "£304.95", "£314.95"],
        },
        {
          title: "Rear Pads",
          values: ["£149.95", "£159.95", "£164.95", "£174.95", "£179.95"],
        },
        {
          title: "Rear Pads & Discs",
          values: ["£259.95", "£274.95", "£284.95", "£299.95", "£309.95"],
        },
      ]}
      description={
        <>
          <p>
            At Cool Cars, we take the time to understand both your vehicle and
            your budget, so you always know exactly what to expect.
          </p>
          <p>
            We offer clear pricing for brake pad and disc replacements, based on
            vehicle and brake type, covering the vast majority of cars on the
            road.
          </p>
          <p>
            In some cases, specialist braking systems or hard-to-source parts
            such as those found on luxury or classic models may require a
            bespoke quote, which we’ll always explain and agree with you
            upfront.
          </p>
          <p>
            Below, you’ll find a pricing table for our brake pad and disc
            services to help you understand typical costs.
          </p>
          <p>
            When you’re ready, you can book your brake inspection or repair
            online, and our experienced technicians will take care of the rest.
          </p>
        </>
      }
    />
  )
}

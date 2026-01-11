import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop - Servicing",
  description:
    "Vehicle servicing including oil & filter changes, interim, full and major services. Clear pricing, quality oil included, book online.",
  alternates: {
    canonical: "https://cool-cars.co.uk/accident-repairs",
  },
}

export default function ServicingServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesServicing}
      title="Servicing"
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
          title: "Oil & Filter Change",
          values: ["£146.95", "£151.95", "£156.95", "£161.95", "£166.95"],
        },
        {
          title: "Interim Service",
          values: ["£186.95", "£191.95", "£196.95", "£201.95", "£206.95"],
        },
        {
          title: "Full Service",
          values: ["£241.95", "£251.95", "£261.95", "£281.95", "£313.95"],
        },
        {
          title: "Major Service",
          values: ["£276.95", "£286.95", "£296.95", "£316.95", "£348.95"],
        },
      ]}
      description={
        <>
          <p>
            At Cool Cars, we take the time to understand both your vehicle and
            your budget, so you always know exactly what to expect.
          </p>
          <p>
            We offer four clear levels of vehicle servicing — Oil & Filter
            Change, Interim Service, Full Service, and Major Service — with
            pricing based on engine size, covering the vast majority of
            vehicles.
          </p>
          <p>
            In some cases, specialist or hard-to-source parts (such as luxury or
            classic models) may require a bespoke quote, which we’ll always
            discuss with you upfront. And unlike many garages, we never charge
            extra for fully synthetic oil, because quality servicing should come
            as standard.
          </p>
          <p>
            Take a look at our pricing guide below, and when you’re ready, you
            can book a service slot online at our workshop in just a few clicks.
          </p>
        </>
      }
    />
  )
}

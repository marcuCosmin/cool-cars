import { type Metadata } from "next"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Cool Cars - Workshop - Tyres and Puncture Repairs",
  description:
    "Tyre supply, fitting and puncture repair services. Quality tyres, fair pricing and quick turnaround from trusted technicians.",
  alternates: {
    canonical: "https://cool-cars.co.uk/accident-repairs",
  },
}

export default function GearBoxRepairsOrReplacementsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesTyresAndPunctureRepairs}
      title="Tyres and Puncture Repairs"
      description={
        <>
          <p>
            Choosing the right tyres makes a real difference to safety, comfort,
            and performance.
          </p>
          <p>
            At Cool Cars, we supply and fit quality tyres to suit a range of
            budgets.
          </p>
          <p>
            We keep a broad selection of tyre brands, sizes, and types in stock,
            meaning puncture repairs and replacements can usually be handled
            quickly and with minimal disruption.
          </p>
          <p>
            If a tyre can be safely repaired rather than replaced, we will
            always recommend that option first, helping you avoid unnecessary
            costs wherever possible.
          </p>
          <p>
            Get in touch today to book your tyre fitting or puncture repair and
            get back on the road with confidence.
          </p>
        </>
      }
    />
  )
}

import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"
import { ServicePricingSection } from "@/components/ServicePricingSection/ServicePricingSection"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title:
    "Timing Belt Replacement in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Timing belt replacement in Swanmore, Hampshire. Cambelt changes to manufacturer intervals for all makes and models. Book your vehicle in today!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/workshop/services/cambelts-and-timing-belts",
  },
}

const pricing = [
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
]

export default function CambeltsAndTimingBeltsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesCambeltsAndTimingBelts}
      title="Timing Belt Replacement in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast provides cambelt and timing belt replacement in
          Swanmore, Hampshire, working to manufacturer-recommended intervals for
          all makes and models. Based at Swanmore Business Park, our mechanics
          carry out timing belt changes carefully and efficiently using quality
          parts to help protect your engine long-term.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Why Timing Belt Replacement Matters</h2>

            <p className="text-center">
              The timing belt, also known as a cambelt, keeps key engine
              components moving in sync. If the belt snaps or slips, the result
              is typically catastrophic engine damage, often requiring a full
              engine rebuild or replacement, which costs significantly more than
              a timely belt change.
            </p>

            <p className="text-center">
              Most manufacturers recommend replacing the timing belt at a set
              mileage or age interval. The exact timing depends on your
              vehicle’s make, model, and engine. If you are unsure when your
              cambelt is due, we can check and advise you.
            </p>
          </section>

          <ServicePricingSection
            title="Timing Belt & Cambelt Replacement Pricing"
            pricing={pricing}
            description={
              <>
                <p className="text-center">
                  See the pricing table below for timing belt and cambelt
                  replacement costs. If your vehicle requires additional parts
                  or a bespoke quote, we will confirm the full cost before any
                  work begins.
                </p>

                <p className="text-center">
                  In some cases, specialist engines or hard-to-source parts,
                  such as those found on luxury or classic models, may require a
                  bespoke quote. This will always be discussed and agreed before
                  any work begins.
                </p>
              </>
            }
          />

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>What’s Included in Our Timing Belt Service</h2>

              <p className="text-center">
                Our timing belt replacement service can include the timing belt,
                tensioner, idler pulleys, and water pump where required.
                Replacing these components together is often more cost-effective
                than replacing them separately later.
              </p>

              <p className="text-center">
                We use quality parts and follow manufacturer specifications
                throughout the job. If your vehicle also needs a{" "}
                <Link href={routes.workshopServicesServicing}>
                  routine service
                </Link>{" "}
                at the same time, we can often combine both in one visit. For
                larger engine repair bills,{" "}
                <Link href={routes.finance}>car repair finance</Link> is
                available to help spread the cost.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Southampton, Fareham & Hampshire</h2>

              <p className="text-center">
                Our Swanmore workshop serves drivers from Southampton, Fareham,
                Bishops Waltham, Eastleigh, Wickham, and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>
                  Book your timing belt replacement today
                </Link>{" "}
                and our team will confirm availability and next steps!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

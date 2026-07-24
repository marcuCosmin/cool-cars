import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"
import { ServicePricingSection } from "@/components/ServicePricingSection/ServicePricingSection"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Car Servicing in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Car servicing in Swanmore, Hampshire. Oil & filter, interim, full & major services. Fully synthetic oil included, no extra charge. Book your car service today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/workshop/services/servicing",
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
]

export default function ServicingServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesServicing}
      title="Car Servicing in Swanmore, Hampshire"
      description={
        <>
          <p>
            Cool Cars provides professional car servicing in Swanmore,
            Hampshire, offering four clear service levels to match your
            vehicle’s needs and mileage. Based at our Swanmore workshop, we
            serve drivers from Southampton, Fareham, Bishops Waltham, Eastleigh,
            Wickham, and across Hampshire with fixed, transparent pricing and no
            hidden costs.
          </p>
          <p>
            We offer four levels of car servicing: <b>Oil & Filter Change</b>,{" "}
            <b>Interim Service</b>, <b>Full Service</b>, and{" "}
            <b>Major Service</b>. An Oil & Filter Change helps keep engine oil
            fresh between full services, while an Interim Service is ideal for
            higher-mileage drivers. A Full Service provides a more comprehensive
            annual check, and a Major Service includes additional checks and
            replacements where required.
          </p>
          <p>
            Pricing is based on engine size and covers the vast majority of
            vehicles. In some cases, such as luxury, specialist, or classic
            cars, hard-to-source parts may require a bespoke quote, which we
            will always discuss with you upfront.
          </p>
          <p>
            Unlike many garages, we include fully synthetic oil as standard. No
            upgrades, no surprises. See the pricing table below for exact costs
            by engine size.
          </p>
        </>
      }
      content={
        <>
          <ServicePricingSection pricing={pricing} />

          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Additional Work After Servicing</h2>

            <p className="text-center">
              If your car needs additional work identified during the service,
              such as{" "}
              <Link href={routes.workshopServicesBrakePadsAndDiscs}>
                brake pad or disc replacement
              </Link>{" "}
              or a{" "}
              <Link href={routes.workshopServicesCambeltsAndTimingBelts}>
                timing belt replacement
              </Link>
              , we will advise you clearly and provide a separate quote before
              carrying out any extra work.
            </p>

            <p className="text-center">
              If bodywork needs attention at the same time, our{" "}
              <Link href={routes.bodyshop}>Swanmore car bodyshop</Link> works
              from the same premises. For larger repair bills,{" "}
              <Link href={routes.finance}>car repair finance</Link> is available
              to help spread the cost.
            </p>

            <p className="text-center">
              <Link href={routes.contact}>Book your car service today</Link>, or
              call{" "}
              <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link> to
              check availability!
            </p>
          </section>
        </>
      }
    />
  )
}

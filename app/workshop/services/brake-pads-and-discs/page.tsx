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
  title: "Brake Repair in Swanmore, Hampshire | Cool Cars",
  description:
    "Brake repair in Swanmore, Hampshire. Pad & disc replacement for all makes & models. Fixed quotes. Serving Southampton & Fareham. Book today!",
  alternates: {
    canonical: "https://cool-cars.co.uk/workshop/services/brake-pads-and-discs",
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
]

export default function BrakePadsAndDiscsServicePage() {
  return (
    <ServiceContent
      servicePathname={routes.workshopServicesBrakePadsAndDiscs}
      title="Brake Repair in Swanmore, Hampshire"
      description={
        <>
          <p>
            Cool Cars South Coast provides professional brake repair in
            Swanmore, Hampshire, covering brake pad replacement, disc
            replacement, brake fluid changes, and full brake system inspections.
            Based at our Swanmore car bodyshop and workshop, we work on all
            makes and models, helping drivers stay safe on the road.
          </p>
          <p>
            If your brakes are making noise, feeling soft, vibrating, or pulling
            to one side, it is important to have them checked as soon as
            possible. Worn brakes can increase stopping distances and may cause
            damage to other brake components if left unresolved.
          </p>
        </>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>Signs Your Brakes Need Attention</h2>

            <p className="text-center">
              Common signs that your brakes need inspecting include squealing or
              grinding when braking, a soft or spongy brake pedal, the vehicle
              pulling to one side when braking, vibration through the steering
              wheel or pedal, a brake warning light on the dashboard, and
              increased stopping distances.
            </p>

            <p className="text-center">
              Brakes are safety-critical, so even small changes in performance
              should be checked by a mechanic.
            </p>
          </section>

          <ServicePricingSection
            title="Brake Pad & Disc Replacement Pricing"
            pricing={pricing}
            description={
              <p className="text-center">
                See the pricing table below for brake pad and disc replacement
                costs. If your vehicle needs additional brake work, we will
                confirm the cost before any repairs begin.
              </p>
            }
          />

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Our Brake Repair Service</h2>

              <p className="text-center">
                We cover brake pad inspection and replacement (front and rear),
                brake disc inspection and replacement, brake fluid check and
                change, brake caliper inspection, and full brake system
                assessment. We use quality parts throughout and carry out all
                work to manufacturer specifications.
              </p>

              <p className="text-center">
                If you are unsure whether your brakes need replacing, we can
                inspect them and advise whether the pads, discs, brake fluid, or
                other components need attention.
              </p>

              <p className="text-center">
                If your vehicle also needs a{" "}
                <Link href={routes.workshopServicesServicing}>
                  routine service
                </Link>
                , we can combine both in a single visit.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Covering Swanmore, Southampton, Fareham & Hampshire</h2>

              <p className="text-center">
                Our Swanmore workshop serves drivers from Southampton, Fareham,
                Bishops Waltham, Eastleigh, Wickham, and across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>Book a brake inspection today</Link>
                , or call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

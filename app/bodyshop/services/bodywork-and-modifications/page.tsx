import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title:
    "Custom Bodywork & Car Modifications in Swanmore | Cool Cars South Coast",
  description:
    "Custom bodywork & car modifications in Swanmore, Hampshire. Styling upgrades, body kits, and more. Serving Southampton & Fareham. Get a free quote!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/bodyshop/services/bodywork-and-modifications",
  },
}

export default function BodyWorkAndModificationsServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesBodyworkAndModifications}
      title="Custom Bodywork & Car Modifications in Swanmore, Hampshire"
      description={
        <p>
          Cool Cars South Coast offers custom bodywork and car modifications in
          Swanmore, Hampshire, helping vehicle owners upgrade the appearance of
          their cars with professionally fitted and finished bodywork. Based at
          our Swanmore car bodyshop, our team carries out a wide range of
          bespoke bodywork, from subtle enhancements to more significant visual
          changes.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>What We Offer</h2>

            <p className="text-center">
              Our custom bodywork and modifications service includes the fitting
              and finishing of body kits and front or rear bumper conversions,
              spoilers, splitters, and diffusers, side skirts and sills, bonnet
              and boot modifications, custom panel fabrication, and bespoke
              paintwork and finishes to complement the modifications.
            </p>

            <p className="text-center">
              Whether you have a specific vision or want our input on what will
              suit your vehicle, we work with you to achieve the right outcome
              at a price that makes sense. Every modification is fitted properly
              and finished to match or complement the rest of the vehicle’s
              paintwork using precision colour-matching.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Professional Bodywork Finish</h2>

              <p className="text-center">
                A visual modification is only as good as the standard of the
                fitting and paintwork. At Cool Cars South Coast, we treat every
                custom bodywork project with the same care as a standard repair,
                using quality materials, proper surface preparation, and
                professional paintwork techniques to create a finish that looks
                natural and well integrated.
              </p>

              <p className="text-center">
                If your project also requires a{" "}
                <Link href={routes.bodyshopServicesRespraysAndPaintwork}>
                  full or partial respray
                </Link>{" "}
                to complete the look, we can handle the bodywork and paintwork
                together. For larger custom bodywork projects,{" "}
                <Link href={routes.finance}>car repair finance</Link> is
                available to help spread the cost.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Covering Swanmore, Southampton, Fareham & Hampshire</h2>

              <p className="text-center">
                Our custom bodywork workshop in Swanmore serves clients from
                Southampton, Fareham, Bishops Waltham, Eastleigh, Wickham, and
                across Hampshire.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>Get in touch</Link> to discuss your
                project, or call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>{" "}
                to book a consultation!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

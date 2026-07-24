import { type Metadata } from "next"
import Link from "next/link"

import { ServiceContent } from "@/components/ServiceContent/ServiceContent"

import {
  routes,
  phoneNumberText,
  phoneNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Paint Correction in Swanmore, Hampshire | Cool Cars South Coast",
  description:
    "Paint correction in Swanmore, Hampshire. Remove swirl marks, scratches & oxidation and restore your paintwork's original shine. Call us today!",
  alternates: {
    canonical:
      "https://cool-cars.co.uk/bodyshop/services/paint-correction-and-polishing",
  },
}

export default function PaintCorrectionAndPolishingServicePage() {
  return (
    <ServiceContent
      showTestimonials
      servicePathname={routes.bodyshopServicesPaintCorrectionAndPolishing}
      title="Paint Correction in Swanmore, Hampshire — Car Polishing & Detailing"
      description={
        <p>
          Cool Cars offers professional paint correction and car polishing in
          Swanmore, Hampshire, removing surface defects and restoring your
          vehicle’s paintwork to its original depth and clarity. Based at our
          Swanmore car bodyshop, our technicians use machine polishing
          techniques to eliminate swirl marks, fine scratches, oxidation, water
          spots, and dull or hazy paint.
        </p>
      }
      content={
        <>
          <section className="flex flex-col gap-5 px-5 md:p-0 max-w-3xl">
            <h2>What Is Paint Correction?</h2>

            <p className="text-center">
              Paint correction is a controlled machine polishing process that
              carefully levels the clear coat to reduce visible defects such as
              swirl marks, fine scratches, oxidation, and water spots. Unlike a
              standard hand polish or wax, paint correction produces a lasting
              improvement in the clarity and depth of your paintwork rather than
              simply filling or masking imperfections.
            </p>

            <p className="text-center">
              Common defects we correct include swirl marks caused by poor
              washing technique, fine scratches and scuff marks, oxidation and
              fading on older paintwork, water spots and light etching, and dull
              or flat-looking paint that has lost its original gloss.
            </p>
          </section>

          <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10 md:gap-20">
            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Our Paint Correction Process</h2>

              <p className="text-center">
                We begin with a thorough decontamination wash to remove surface
                contaminants before any polishing begins. We then assess the
                paint depth and condition to determine the correct correction
                stages required. Machine polishing is carried out in a
                controlled environment using professional-grade compounds and
                finishing polishes, followed by a finishing polish to maximise
                gloss and clarity.
              </p>

              <p className="text-center">
                If your vehicle has deeper scratches or damage that goes beyond
                clear coat level, a{" "}
                <Link href={routes.bodyshopServicesRespraysAndPaintwork}>
                  partial respray
                </Link>{" "}
                may be more appropriate. We’ll advise you honestly after the
                initial assessment.
              </p>
            </section>

            <section className="flex flex-col gap-5 px-5 md:p-0 max-w-2xl">
              <h2>Serving Hampshire & Surrounding Areas</h2>

              <p className="text-center">
                Our paint correction and polishing service in Swanmore is
                available to drivers from Southampton, Fareham, Bishops Waltham,
                Eastleigh, Wickham, and across Hampshire. We work by
                appointment. Estimates are free and confirmed before any work
                begins. <Link href={routes.finance}>Finance</Link> is available
                for larger packages.
              </p>

              <p className="text-center">
                <Link href={routes.contact}>
                  Book your paint correction today
                </Link>
                , or call{" "}
                <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>{" "}
                to discuss your vehicle!
              </p>
            </section>
          </div>
        </>
      }
    />
  )
}

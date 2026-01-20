import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"

export const metadata: Metadata = {
  title: "Cool Cars – Expert Car Body Repairs, Swanmore",
  description:
    "Cool Cars offers expert car bodywork, mechanical repairs and servicing. Trusted local specialists keeping your vehicle looking great and running perfectly.",
  alternates: {
    canonical: "https://cool-cars.co.uk",
  },
}

const section1InfoCardsContent = [
  {
    title: "Industry Approved Methods",
    description: "Using Thatcham approved processes and repair times.",
    imageSrc: "/driving-cert.webp",
  },
  {
    title: "We have all the right tools",
    description: "Periodically calibrated and safety certified.",
    imageSrc: "/toolbox.png",
  },
  {
    title: "Get back on the road",
    description: "Every mechanical and aesthetic requirement taken care of.",
    imageSrc: "/wheel-key.webp",
  },
]

export default function Home() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Fhome-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fhome-banner.jpg&w=828&q=75')]">
        <div className="h-full max-w-7xl">
          <div className="first-section-main-content px-2.5 mb-10 pt-10">
            <Animated as="h1">Complete Car Care You Can Trust</Animated>
            <h2 className="text-shadow-black text-shadow-md">
              Bodywork, Mechanical Repairs & Servicing
            </h2>
            <p className="text-base">
              From cosmetic fixes and accident repairs to essential mechanical
              servicing and ongoing vehicle care.
            </p>

            <Link
              href="/contact"
              className="link-button-fill-primary"
            >
              Get in touch
            </Link>
          </div>

          <ul className="flex flex-col gap-1 md:flex-row">
            {section1InfoCardsContent.map(
              ({ title, description, imageSrc }, index) => (
                <li key={index}>
                  <Animated
                    as="article"
                    className="p-8 flex flex-col md:flex-row items-center gap-4 bg-white/10 h-full"
                  >
                    <Image
                      className="drop-shadow-md drop-shadow-black"
                      src={imageSrc}
                      aria-hidden="true"
                      alt=""
                      width={80}
                      height={80}
                    />
                    <div>
                      <h3 className="font-semibold mb-2.5 text-white text-2xl">
                        {title}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </Animated>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="overflow-hidden">
        <h2 className="mb-10 text-center">Main Services</h2>

        <div className="flex flex-col mx-auto max-w-2xl md:max-w-7xl md:flex-row gap-10">
          <Animated
            direction="right"
            as="a"
            href="/bodyshop"
            className="flex items-center justify-center text-white text-2xl w-full bg-overlay glass-button h-96 bg-[url('/_next/image?url=%2Fbodyshop-banner.jpg&w=640&q=75')] bg-cover"
          >
            <span>Bodyshop</span>
          </Animated>

          <Animated
            direction="left"
            as="a"
            href="/workshop"
            className="flex items-center justify-center text-white text-2xl w-full bg-overlay glass-button h-96 bg-[url('/_next/image?url=%2Fworkshop-banner.jpg&w=640&q=75')] bg-cover"
          >
            <span> Workshop</span>
          </Animated>
        </div>
      </section>

      <TestimonialsSection />

      <ContactSection />

      <MapLocationSection />
    </main>
  )
}

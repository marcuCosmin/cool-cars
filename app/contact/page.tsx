import { type Metadata } from "next"

import { ContactSection } from "@/components/ContactSection"
import { MapLocationSection } from "@/components/MapLocationSection"
import { Animated } from "@/components/Animated/Animated"

export const metadata: Metadata = {
  title: "Contact Cool Cars – Swanmore",
  description:
    "Get in touch with Cool Cars for quotes and enquiries. Visit our Swanmore workshop or call to discuss your repair or paintwork needs.",
  alternates: {
    canonical: "https://cool-cars.co.uk/contact",
  },
}

export default function Contact() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Fcontact-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fcontact-banner.jpg&w=828&q=75')]">
        <Animated as="h1">Contact</Animated>
      </section>

      <ContactSection />

      <MapLocationSection />
    </main>
  )
}

import { type Metadata } from "next"

import { ContactSection } from "@/components/ContactSection"

export const metadata: Metadata = {
  title: "Contact Us | Cool Cars",
  description:
    "Get in touch with Cool Cars in Swanmore for quotes, appointments, or questions.",
  alternates: {
    canonical: "https://cool-cars.co.uk/contact",
  },
}

export default function Contact() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/contact-banner.jpg')]">
        <h3>Contact</h3>
      </section>

      <ContactSection />

      <iframe
        className="w-full max-w-7xl mx-auto"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2513.948522173241!2d-1.1973116224291875!3d50.943165051764254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48746b16e20fd58d%3A0x806a3a19ef691a73!2sCool%20Cars%20South%20Coast%20Ltd!5e0!3m2!1sen!2sro!4v1762026698754!5m2!1sen!2sro"
        height="500"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  )
}

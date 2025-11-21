import { type Metadata } from "next"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { Animated } from "@/components/Animated/Animated"

export const metadata: Metadata = {
  title: "Testimonials – Cool Cars",
  description:
    "Read customer reviews and see why drivers trust Cool Cars for high-quality repairs and exceptional service.",
  alternates: {
    canonical: "https://cool-cars.co.uk/testimonials",
  },
}

export default function TestimonialsPage() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Ftestimonials-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ftestimonials-banner.jpg&w=828&q=75')]">
        <Animated as="h1">Testimonials</Animated>
      </section>

      <TestimonialsSection />
    </main>
  )
}

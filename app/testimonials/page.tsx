import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { Animated } from "@/components/Animated/Animated"

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


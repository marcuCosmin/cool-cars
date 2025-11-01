import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"

export default function TestimonialsPage() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/testimonials-banner.jpg')]">
        <h3>Testimonials</h3>
      </section>

      <TestimonialsSection />
    </main>
  )
}

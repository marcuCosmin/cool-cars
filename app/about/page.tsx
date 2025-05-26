import { type Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | Cool Cars",
  description:
    "Family-run car body repair shop delivering expert craftsmanship and customisation with a focus on quality, detail, and customer satisfaction.",
  alternates: {
    canonical: "https://cool-cars.co.uk/about",
  },
}

export default function About() {
  return (
    <main className="flex bg-cover h-[calc(100vh-80px)] bg-[url('/about-background.jpg')] bg-position-[50%_0%] lg:bg-left lg:bg-size-[auto_100%] bg-no-repeat bg-overlay">
      <Image
        className="h-full w-auto hidden lg:block"
        src="/about-background.jpg"
        alt="Team painting a car"
        width={1024}
        height={1536}
      />
      <section className="flex flex-col items-center gap-10 h-full justify-center lg:justify-start p-5 lg:p-10 lg:text-lg text-white lg:max-w-4xl lg:mx-auto">
        <h1 className="font-bold text-center lg:text-3xl">
          About Cool Cars South Coast
        </h1>
        <p className="text-center">
          Cool Cars South Coast is a family-run business dedicated to providing
          top-notch car body repair and customisation services. Our team of
          experienced technicians takes pride in delivering exceptional results,
          ensuring every vehicle we work on meets the highest standards of
          quality and craftsmanship.
        </p>
        <p className="text-center">
          Whether you&apos;re dealing with accident damage or looking to
          personalise your car, we&apos;re here to help. Our commitment to
          customer satisfaction and attention to detail sets us apart in the
          industry.
        </p>
      </section>
    </main>
  )
}

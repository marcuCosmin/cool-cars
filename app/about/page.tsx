import { type Metadata } from "next"
import Image from "next/image"

import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"
import { Animated } from "@/components/Animated/Animated"

export const metadata: Metadata = {
  title: "About Cool Cars – Expert Car Body Repairs in Swanmore",
  description:
    "Learn about Cool Cars: a trusted Swanmore-based specialist delivering precise car body repairs, premium paintwork, and reliable service for all vehicle types.",
  alternates: {
    canonical: "https://cool-cars.co.uk/about",
  },
}

const thirdSectionItems = [
  {
    imageSrc: "/paper-airplane.png",
    title: "Mission",
    text: "Our mission is to deliver high-quality repairs and honest service, keeping every vehicle looking its best and every customer completely satisfied.",
    alt: "Paper airplane",
  },
  {
    imageSrc: "/light-bulb.png",
    title: "Vision",
    text: "To be the South Coast’s most trusted name for quality repairs, exceptional service, and lasting customer relationships.",
    alt: "Light bulb",
  },
]

export default function About() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Fabout-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fabout-banner.jpg&w=828&q=75')]">
        <Animated as="h1">About Us</Animated>
      </section>

      <section className="flex gap-10 p-5 bg-[url('/_next/image?url=%2Fabout-first-section.jpg&w=640&q=75')] bg-cover bg-left bg-overlay bg-no-repeat text-center md:text-start md:bg-none">
        <Animated
          as="img"
          direction="right"
          className="hidden md:block"
          src="/about-first-section.jpg"
          alt="Technician preparing a car body for paintwork."
          width={500}
          height={750}
        />

        <div className="flex flex-col gap-10">
          <Animated
            as="h3"
            className="md:text-start"
          >
            Trusted Body Repair & Paintwork
          </Animated>

          <p>
            At Cool Cars South Coast, we don’t just fix cars, we make them look
            and feel like new again.
          </p>
          <p>
            As a proud family-run business, we bring years of experience and
            real attention to detail for every job, big or small.
          </p>
          <p>
            From minor scratches and dents to full accident repairs, our skilled
            team delivers top-quality results at prices that make sense.
          </p>
          <p>
            We use trusted materials, proven techniques, and plenty of pride in
            our work to get you back on the road with confidence.
          </p>
          <p>
            Based in Swanmore, Hampshire, Cool Cars South Coast is your local
            body repair specialist. Friendly, reliable, and focused on getting
            it right the first time.
          </p>
          <p>
            Because your car deserves proper care, without the high-end price
            tag.
          </p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-10 p-5">
        <div className="flex flex-col gap-5 max-w-2xl mx-auto">
          <h2 className="md:text-start">Our Value</h2>
          <Animated
            as="h3"
            className="md:text-start md:max-w-lg"
          >
            Your Satisfaction, Our Priority.
          </Animated>
          <p>
            At Cool Cars, we take pride in doing things properly. Quality
            repairs, honest pricing, and real attention to detail. From minor
            scuffs to full resprays and accident repairs, our skilled team works
            with care to deliver results you’ll love. Your car’s in good hands,
            and your satisfaction always comes first.
          </p>
        </div>

        <ul className="flex gap-5">
          {thirdSectionItems.map((item, index) => (
            <Animated
              as="li"
              direction="left"
              key={index}
              className="flex flex-col gap-5 p-12 bg-gray-950 w-1/2 md:w-72"
            >
              <Image
                className="drop-shadow-md drop-shadow-black"
                src={item.imageSrc}
                alt={item.alt}
                width={50}
                height={50}
              />
              <h4 className="font-semibold text-xl">{item.title}</h4>
              <p>{item.text}</p>
            </Animated>
          ))}
        </ul>
      </section>

      <TestimonialsSection />
    </main>
  )
}

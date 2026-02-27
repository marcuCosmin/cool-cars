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
            About us
          </Animated>

          <p>
            At Cool Cars South Coast, we don’t just fix cars – we restore
            confidence every time you drive away.
          </p>
          <p>
            As a proud family-run business, we offer years of hands-on
            experience and genuine attention to detail across both mechanical
            repairs and bodywork. Whether it’s what’s under the bonnet or what
            you see on the outside, your car is in safe hands.
          </p>
          <p>
            From routine mechanical repairs and diagnostics to minor scratches,
            dents and full accident repairs, our skilled team delivers
            high-quality workmanship at fair, honest prices.
          </p>
          <p>
            We use trusted parts, proven techniques and take real pride in doing
            things properly – so you can get back on the road feeling safe,
            confident and looked after.
          </p>
          <p>
            Based in Swanmore, Hampshire, Cool Cars South Coast is your local,
            reliable vehicle repair specialist. Friendly, transparent and
            focused on getting it right first time.
          </p>
          <p>
            Because your car deserves proper care – without the main-dealer
            price tag.
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

        <ul className="flex gap-5 flex-wrap">
          {thirdSectionItems.map((item, index) => (
            <Animated
              as="li"
              direction="left"
              key={index}
              className="flex flex-col gap-5 p-12 bg-gray-950 w-full md:w-72"
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

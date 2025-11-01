import { type Metadata } from "next"
import Image from "next/image"
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"

export const metadata: Metadata = {
  title: "About Us | Cool Cars",
  description:
    "Family-run car body repair shop delivering expert craftsmanship and customisation with a focus on quality, detail, and customer satisfaction.",
  alternates: {
    canonical: "https://cool-cars.co.uk/about",
  },
}

const thirdSectionItems = [
  {
    imageSrc: "/paper-airplane.png",
    title: "Mission",
    text: "Our mission is to deliver high-quality repairs and honest service, keeping every vehicle looking its best and every customer completely satisfied.",
  },
  {
    imageSrc: "/light-bulb.png",
    title: "Vision",
    text: "To be the South Coast’s most trusted name for quality repairs, exceptional service, and lasting customer relationships.",
  },
]

export default function About() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/about-banner.jpg')]">
        <h1>About Us</h1>
      </section>

      <section className="flex gap-10 p-5 bg-[url('/about-second-section-banner.jpg')] bg-cover bg-left bg-overlay bg-no-repeat text-center md:text-start md:bg-none">
        <Image
          className="hidden md:block"
          src="/about/second-section.jpg"
          alt=""
          aria-hidden="true"
          width={500}
          height={750}
        />

        <div className="flex flex-col gap-10">
          <h3 className="md:text-start">Trusted Body Repair & Paintwork</h3>

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
          <h3 className="md:text-start md:max-w-lg">
            Your Satisfaction, Our Priority.
          </h3>
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
            <li
              key={index}
              className="flex flex-col gap-5 p-12 bg-gray-950 w-1/2 md:w-72"
            >
              <Image
                className="drop-shadow-md drop-shadow-black"
                src={item.imageSrc}
                alt=""
                aria-hidden="true"
                width={50}
                height={50}
              />
              <h4 className="font-semibold text-xl">{item.title}</h4>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <TestimonialsSection />
    </main>
  )
}

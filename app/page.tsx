import { type Metadata } from "next"

import { ContactField } from "@/components/ContactField"
import { MainWrapper } from "@/components/MainWrapper"

export const metadata: Metadata = {
  title: "Cool Cars | Car Body Repair in Swanmore, Hampshire",
  description:
    "Expert car body repair and respraying services in Swanmore. Cool Cars restores your vehicle to showroom condition with precision and care.",
  alternates: {
    canonical: "https://cool-cars.co.uk",
  },
}

const benefits = [
  "Free courtesy car while your vehicle is being repaired",
  "Fast turnaround without compromising on quality",
  "Competitive pricing with no hidden costs",
  "Experienced technicians using top-quality materials",
]

export default function Home() {
  return (
    <MainWrapper
      h1="Car Body Repair & Respray Specialists in Swanmore, Hampshire"
      h2="From minor scratches to full accident repairs — quality workmanship, fast turnaround, and great prices."
      description="Welcome to Cool Cars South Coast — your trusted partner for professional car body repairs, resprays, and vehicle customisation. With years of experience and a passion for excellence, we restore your vehicle to its former glory, ensuring it looks as good as new."
    >
      <div className="flex flex-wrap justify-between gap-10 w-full md:text-lg xl:text-xl">
        <section className="w-full flex flex-col items-center lg:block">
          <h2 className="md:text-3xl mb-2">Benefits:</h2>
          <ul className="list-disc pl-5">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="w-full flex flex-col items-center lg:block">
          <h2 className="md:text-3xl mb-2">Get in touch</h2>
          <p>
            Call us today at
            <ContactField
              size="small"
              type="phone"
              value="07421535039"
            />
            or request a free quote online.
          </p>
        </section>
      </div>
    </MainWrapper>
  )
}

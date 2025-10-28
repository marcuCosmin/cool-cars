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
    <main className="flex bg-cover h-[calc(100vh-80px)] bg-[url('/about-background.jpg')] bg-position-[50%_0%] lg:bg-left lg:bg-size-[auto_100%] bg-no-repeat bg-overlay pb-0"></main>
  )
}

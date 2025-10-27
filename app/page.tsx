import { ContactForm } from "@/components/ContactForm/ContactForm"
import { type Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Fragment } from "react"
import { Plus } from "react-bootstrap-icons"

import { Carousel } from "@/components/Carousel/Carousel"
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks"
import { AddressFields } from "@/components/AddressFields/AddressFields"

export const metadata: Metadata = {
  title:
    "Cool Cars | Expert Car Body Repairs, Spray Shop & Paintwork Specialists",
  description:
    "Professional car body repairs, paintwork, and dent removal. Quality service across Hampshire for cars, vans, and fleets — with honest pricing and results that last.",
  alternates: {
    canonical: "https://cool-cars.co.uk",
  },
}

const section1InfoCardsContent = [
  {
    title: "Masters of Aesthetic Repairs",
    description: "Driven by detail, defined by expert craftsmanship",
    imageSrc: "/home-first-section/driving-cert.webp",
  },
  {
    title: "We have all the right tools",
    description: "And use only the very best materials",
    imageSrc: "/home-first-section/toolbox.png",
  },
  {
    title: "Get back on the road",
    description: "Proper care, without the high-end price tag",
    imageSrc: "/home-first-section/wheel-key.webp",
  },
]

const section2InfoCardsContent = [
  {
    title: "Dent & Scratch Treatment",
    description: "However big or small, trust Cool Cars to smooth things out.",
    imageSrc: "/home-second-section/car-door.webp",
  },
  {
    title: "Trusted by Insurers",
    description:
      "When accidents happen, we’re who the insurers contact to get you back on the road.",
    imageSrc: "/home-second-section/car-tick.webp",
  },
  {
    title: "Really a write off?",
    description:
      "Speak to Cool Cars before you scrap your car. We’ll give you the true expert opinion.",
    imageSrc: "/home-second-section/wheel.webp",
  },
]

const section3InfoCardsContent = [
  {
    title: "Vehicle Body Repairs",
    description:
      "From small dents to major accident damage, Cool Cars provides quality car body repairs at fair prices.",
    imageSrc: "/home-third-section/item-1.jpg",
    href: "/services",
  },
  {
    title: "Car Resprays & Paintwork",
    description:
      "From quick touch-ups to full paint jobs, we deliver high-quality finishes at fair prices.",
    imageSrc: "/home-third-section/item-2.jpg",
    href: "/services",
  },
  {
    title: "Accident Repairs",
    description:
      "Cool Cars delivers reliable, high-quality accident repairs that get you back on the road fast",
    imageSrc: "/home-third-section/item-3.jpg",
    href: "/services",
  },
  {
    title: "Paint Correction & Car Polishing",
    description:
      "Bring back your car’s shine with professional paint correction and polishing from Cool Cars.",
    imageSrc: "/home-third-section/item-4.jpg",
    href: "/services",
  },
  {
    title: "Custom Bodywork & Modifications",
    description:
      "Custom Bodywork & Modifications”, create lower text “From subtle upgrades to bold styling changes, we deliver great-looking results at prices that make sense.",
    imageSrc: "/home-third-section/item-5.jpg",
    href: "/services",
  },
  {
    title: "Fleet Repair Management",
    description:
      "Cool Cars keeps your business on the road with expert fleet repair management.",
    imageSrc: "/home-third-section/item-6.jpg",
    href: "/services",
  },
]

const section4Testimonials = [
  {
    author: "Tom Barrett",
    description:
      "Quick turnaround and a spotless job. You’d never know it was damaged.",
  },
  {
    author: "Sophie Miller",
    description:
      "Brilliant finish and perfect colour. Great attention to detail.",
  },
  {
    author: "Claire Hughes",
    description:
      "It’s not a write off with Cool Cars! Smooth process, great result.",
  },
  {
    author: "Mark Reynolds",
    description: "Great attention to detail. Deep shine, looks brand new!",
  },
  {
    author: "Olivia Chapman",
    description: "The new mod fits perfectly and looks smart. Great work!",
  },
  {
    author: "Simon Whitaker",
    description: "They keep our vans running and always stick to their word.",
  },
]

export default function Home() {
  return (
    <main className="flex flex-col gap-20">
      <section className="bg-[url('/home-first-section/main.jpg')] bg-no-repeat bg-cover bg-left bg-overlay text-white h-full md:max-h-[70vh] min-h-[750px]">
        <div className="flex flex-col items-center h-full relative z-[50] text-center max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center h-full gap-5 max-w-2xl text-center px-2.5 mb-10 pt-10">
            <h2 className=" text-shadow-black text-shadow-md">
              Expert Car Body Repairs
            </h2>
            <h3>Flawless Care for Every Vehicle</h3>
            <p className="text-base text-white">
              From small dents and scratches to full resprays and accident
              repairs, our technicians deliver flawless results that make your
              vehicle shine.
            </p>

            <Link
              href="/contact"
              className="uppercase bg-primary p-3 font-semibold text-black rounded-lg border-primary border-2 hover:bg-transparent hover:text-white duration-300 transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <ul className="flex flex-col gap-1 md:flex-row">
            {section1InfoCardsContent.map(
              ({ title, description, imageSrc }, index) => (
                <li
                  key={index}
                  className="p-8 flex flex-col md:flex-row items-center gap-4 bg-white/10"
                >
                  <Image
                    className="drop-shadow-md drop-shadow-black"
                    src={imageSrc}
                    aria-hidden="true"
                    alt=""
                    width={80}
                    height={80}
                  />
                  <div>
                    <h3 className="font-semibold mb-2.5 text-white text-2xl">
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
                </li>
              )
            )}
          </ul>
        </div>
      </section>

      <section className="bg-[url('/home-second-section/main.jpg')] md:bg-none bg-no-repeat bg-cover bg-left bg-overlay">
        <div className="flex flex-col md:flex-row md:justify-between relative z-[50] max-w-7xl mx-auto">
          <Image
            src="/home-second-section/main.jpg"
            alt=""
            className="hidden md:block h-full"
            height={500}
            width={300}
          />

          <div className="p-5 flex-1">
            <h2 className="mb-10 text-center">
              Trusted Vehicle Bodywork Care.
            </h2>

            <ul className="flex flex-col gap-1 md:gap-10">
              {section2InfoCardsContent.map(
                ({ title, description, imageSrc }, index) => (
                  <li
                    key={index}
                    className="p-8 md:p-0 flex flex-col md:flex-row items-center gap-4 bg-white/20 md:bg-transparent"
                  >
                    <Image
                      className="drop-shadow-md drop-shadow-black"
                      src={imageSrc}
                      aria-hidden="true"
                      alt=""
                      width={60}
                      height={60}
                    />
                    <div className="text-center md:text-left">
                      <h3 className="font-semibold mb-2.5 text-white text-2xl">
                        {title}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </li>
                )
              )}
            </ul>
          </div>

          <Image
            src="/home-second-section/secondary.jpeg"
            alt=""
            className="hidden md:block h-full"
            height={500}
            width={300}
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto p-5 md:p-0">
        <h2>Our Solutions</h2>
        <h3 className="mb-10">Complete Solutions for All Your Car Needs</h3>

        <ul className="flex flex-col items-center md:grid md:grid-cols-3 gap-10 items-start">
          {section3InfoCardsContent.map(
            ({ title, description, imageSrc, href }, index) => (
              <li
                key={index}
                className="flex flex-col gap-5 max-w-2xl w-full"
              >
                <Image
                  className="w-full h-[350px] object-cover md:w-[400px] md:h-[500px]"
                  aria-hidden="true"
                  objectFit="cover"
                  src={imageSrc}
                  alt=""
                  width={400}
                  height={500}
                />
                <hr />
                <h3 className="text-white text-3xl">{title}</h3>
                <p>{description}</p>

                <Link
                  href={href}
                  className="flex items-center gap-1 uppercase text-primary font-semibold hover:text-white transition-colors duration-300"
                >
                  Read more
                  <Plus className="w-5 h-5" />
                </Link>
              </li>
            )
          )}
        </ul>
      </section>

      <section className="flex flex-col gap-5 max-w-7xl mx-auto w-full">
        <h2>Testimonials</h2>
        <h3 className="mb-3">What Our Clients Say.</h3>

        <Carousel>
          {section4Testimonials.map(({ author, description }, index) => (
            <Fragment key={index}>
              <Image
                src="/home-fourth-section/quote.png"
                alt=""
                width={40}
                height={40}
                aria-hidden="true"
              />

              <blockquote className="text-2xl italic font-bold my-7.5">
                {description}
              </blockquote>

              <cite className="block not-italic font-bold text-xl text-secondary">
                {author}
              </cite>
              <p className="text-primary">Customer</p>
            </Fragment>
          ))}
        </Carousel>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center w-full max-w-7xl mx-auto px-5 md:px-0 gap-10 md:gap-0">
        <div className="flex flex-col items-center md:items-start mr-0 md:mr-auto max-w-md w-full">
          <h2 className="text-center md:text-start mb-10">Contact Us</h2>
          <h3 className="max-w-md text-center md:text-start mb-10">
            Have a Question? Get in Touch!
          </h3>

          <AddressFields
            showIcons={false}
            className="flex-col items-center md:items-start text-center md:text-start gap-5 text-lg mb-5 w-full"
          />

          <SocialMediaLinks />
        </div>

        <ContactForm />
      </section>
    </main>
  )
}

import Image from "next/image"
import { Fragment } from "react"

import { Carousel } from "@/components/Carousel/Carousel"

import { testimonials } from "./TestimonialsSection.const"

export const TestimonialsSection = () => (
  <section className="flex flex-col gap-5">
    <h2>Testimonials</h2>
    <h3 className="mb-5">What Our Clients Say.</h3>

    <Carousel>
      {testimonials.map(({ author, description }, index) => (
        <Fragment key={index}>
          <Image
            src="/quote.png"
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
)

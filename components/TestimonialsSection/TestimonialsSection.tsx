import Image from "next/image"
import Link from "next/link"

import { Fragment } from "react"
import { BoxArrowUpRight } from "react-bootstrap-icons"

import { Carousel } from "@/components/Carousel/Carousel"

import { testimonials } from "./TestimonialsSection.const"

export const TestimonialsSection = () => (
  <section className="flex flex-col gap-5 p-5 md:p-0">
    <Link
      target="_blank"
      href="https://www.google.com/search?sa=X&sca_esv=f428b6d1b594cc50&rlz=1C1VDKB_enRO1073RO1073&biw=2560&bih=1305&tbm=lcl&sxsrf=AE3TifPC402nbyyA4FApha_ZnTxVKWJe-w:1762554546439&q=Cool+Cars+South+Coast+Ltd+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2NDI1NjI3MjIzNzE1NDYxNDEy38DI-IpR0Tk_P0fBObGoWCE4v7QkQ8E5P7G4RMGnJEUhKLUsM7W8eBErYTUA2xwCfGIAAAA&rldimm=9253272267451341427&hl=en-RO&ved=2ahUKEwj_4Yyti-GQAxVcnf0HHUudKRkQ9fQKegQIThAF#lkt=LocalPoiReviews"
      className="ml-auto flex gap-2 items-center"
    >
      See also Google Reviews <BoxArrowUpRight />
    </Link>
    <h2>Testimonials</h2>
    <h3 className="mb-5">What Our Clients Say.</h3>

    <Carousel>
      {testimonials.map(({ author, description }, index) => (
        <Fragment key={index}>
          <Image
            src="/quote.png"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
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

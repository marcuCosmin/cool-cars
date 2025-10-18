"use client"

import ReactCarousel from "react-multi-carousel"

export const Carousel = () => {
  return (
    <ReactCarousel
      infinite
      responsive={{
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
    >
      <div className="p-5 bg-red-300">Item 1</div>
      <div className="p-5 bg-blue-300">Item 2</div>
      <div className="p-5 bg-green-300">Item 3</div>
      <div className="p-5 bg-yellow-300">Item 4</div>
    </ReactCarousel>
  )
}

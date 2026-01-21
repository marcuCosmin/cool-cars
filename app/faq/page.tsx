import { type Metadata } from "next"

import { Animated } from "@/components/Animated/Animated"
import { Collapsible } from "@/components/Collapsible"

export const metadata: Metadata = {
  title: "FAQ – Cool Cars",
  description:
    "Explore answers to common questions about car body repairs, paintwork, timelines, insurance processes and more.",
  alternates: {
    canonical: "https://cool-cars.co.uk/faq",
  },
}

const collapsibleItems = [
  {
    title: "Do you offer collection or delivery of vehicles?",
    content:
      "Yes. Trailer transport starts from £150 and must be within a 10-mile radius of our HQ. Trailer transport must be paid in advance.",
  },
  {
    title: "Do you offer free estimates?",
    content:
      "Yes. We’ll assess your vehicle for free at our workshop, or you can refer to our pricing structure for non-assessed estimates.",
  },
  {
    title: "How long does detailing take?",
    content:
      "It depends on the condition of your vehicle and the level of service required. You can find rough turnaround times on our pricing page, and we’ll confirm exact timescales once we’ve inspected your vehicle.",
  },
  {
    title: "What’s included in my car detailing?",
    content:
      "Each package is clearly listed on our price list, so you’ll know exactly what’s included before you book.",
  },
  {
    title: "How much does a repair cost?",
    content:
      "Please refer to our price list for typical pricing. We’ll always confirm costs before any work begins.",
  },
  {
    title: "What payment methods do you accept?",
    content: "We accept bank transfer, debit/credit cards, and SumUp payments.",
  },
  {
    title: "Do you work on all types of vehicles?",
    content:
      "Yes. We work on everything from daily drivers to supercars, classics, and commercial vehicles — every car gets the same level of care and attention.",
  },
  {
    title: "Do I need to book in advance?",
    content:
      "Yes. We work by appointment only to make sure every vehicle gets the time it deserves. Please contact us to check availability.",
  },
  {
    title: "Do you use specific brands or products?",
    content:
      "Yes. We only use high-quality, professional-grade detailing products that are safe for your vehicle’s paintwork and finish.",
  },
]

const renderCollapsibleItems = (odd?: boolean) => (
  <ul
    className={typeof odd === "boolean" ? "hidden md:block" : "block md:hidden"}
  >
    {collapsibleItems.map(({ title, content }, index) => {
      const isOddIndex = index % 2 !== 0
      const isEvenIndex = index % 2 === 0
      const renderCondition = odd ? isOddIndex : isEvenIndex

      const shouldRender = typeof odd === "boolean" ? renderCondition : true

      if (!shouldRender) {
        return null
      }

      return (
        <Animated
          as="li"
          key={index}
        >
          <Collapsible title={title}>{content}</Collapsible>
        </Animated>
      )
    })}
  </ul>
)

export default function FAQPage() {
  return (
    <main className="gap-10">
      <section className="bg-[url('/_next/image?url=%2Ffaq-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ffaq-banner.jpg&w=828&q=75')]">
        <Animated
          as="h1"
          className="text-center"
        >
          Frequently Asked Questions
        </Animated>
      </section>

      <section className="flex flex-col gap-10">
        <h2>More info before you hit the road.</h2>
        <div className="flex gap-5">
          {renderCollapsibleItems(false)}
          {renderCollapsibleItems(true)}
          {renderCollapsibleItems()}
        </div>
      </section>
    </main>
  )
}

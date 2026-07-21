import { type Metadata } from "next"
import Link from "next/link"
import { type ReactNode } from "react"

import { Animated } from "@/components/Animated/Animated"
import { Collapsible } from "@/components/Collapsible"

import {
  routes,
  email,
  phoneNumberText,
  phoneNumberValue,
  whatsAppNumberValue,
} from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "FAQ – Cool Cars",
  description:
    "Explore answers to common questions about car body repairs, paintwork, timelines, insurance processes and more.",
  alternates: {
    canonical: "https://cool-cars.co.uk/faq",
  },
}

type FaqItem = {
  question: string
  answer: ReactNode
  schemaAnswer: string
}

type FaqCategory = {
  title: string
  items: FaqItem[]
}

const faqCategories: FaqCategory[] = [
  {
    title: "About Our Workshop",
    items: [
      {
        question: "Where are you located, and what areas do you cover?",
        schemaAnswer:
          "We're based at Unit 16, Swanmore Business Park, Lower Chase Road, Swanmore, Hampshire, SO32 2PB. We serve customers across Hampshire including Southampton, Fareham, Bishops Waltham, Wickham, Eastleigh, and the surrounding area. Collection and delivery by trailer is also available within a 10-mile radius of our workshop.",
        answer: (
          <>
            We&apos;re based at Unit 16, Swanmore Business Park, Lower Chase
            Road, Swanmore, Hampshire, SO32 2PB. We serve customers across
            Hampshire including Southampton, Fareham, Bishops Waltham, Wickham,
            Eastleigh, and the surrounding area. Collection and delivery by
            trailer is also available within a 10-mile radius of our workshop.
          </>
        ),
      },
      {
        question: "Are you Thatcham approved?",
        schemaAnswer:
          "Yes. We use Thatcham-approved processes and repair times across all our bodyshop work. This means your repairs are carried out to the same standard required by UK insurers and manufacturers, giving you complete peace of mind.",
        answer: (
          <>
            Yes. We use Thatcham-approved processes and repair times across all
            our bodyshop work. This means your repairs are carried out to the
            same standard required by UK insurers and manufacturers, giving you
            complete peace of mind.
          </>
        ),
      },
      {
        question: "Do you work on all types of vehicles?",
        schemaAnswer:
          "Yes. From daily drivers and commercial vans to classics and supercars. Every vehicle that comes through our Swanmore workshop receives the same level of care and attention, regardless of make, model, or value.",
        answer: (
          <>
            Yes. From daily drivers and commercial vans to classics and
            supercars. Every vehicle that comes through our Swanmore workshop
            receives the same level of care and attention, regardless of make,
            model, or value.
          </>
        ),
      },
    ],
  },
  {
    title: "Pricing & Estimates",
    items: [
      {
        question: "How much does a car body repair cost in Hampshire?",
        schemaAnswer:
          "The cost depends on the type and extent of the damage. Minor dents and scratches are typically far more affordable than a full panel repair or respray. We offer free estimates at our Swanmore workshop, just bring your vehicle in and we'll assess it at no charge and confirm costs before any work begins or give us a call.",
        answer: (
          <>
            The cost depends on the type and extent of the damage. Minor dents
            and scratches are typically far more affordable than a full panel
            repair or respray. We offer free estimates at our Swanmore workshop,
            just bring your vehicle in and we&apos;ll assess it at no charge and
            confirm costs before any work begins or{" "}
            <Link href={`tel:${phoneNumberValue}`}>give us a call</Link>.
          </>
        ),
      },
      {
        question: "How much does a car respray cost?",
        schemaAnswer:
          "A full respray can range from a few hundred pounds for a single panel to several thousand for a complete vehicle, depending on size, colour, finish, and condition. The best way to get an accurate figure is a free in-person estimate at our workshop. We'll always confirm the price before starting.",
        answer: (
          <>
            A full respray can range from a few hundred pounds for a single
            panel to several thousand for a complete vehicle, depending on size,
            colour, finish, and condition. The best way to get an accurate
            figure is a free in-person estimate at our workshop. We&apos;ll
            always confirm the price before starting.
          </>
        ),
      },
      {
        question: "Do you offer free estimates?",
        schemaAnswer:
          "Yes. Bring your vehicle to our Swanmore workshop and we'll carry out a free assessment. We'll always confirm the full cost before any work begins. Pricing is also available directly on some of our service pages, including Servicing, Brake Pads & Discs, and Cambelts & Timing Belts.",
        answer: (
          <>
            Yes. Bring your vehicle to our Swanmore workshop and we&apos;ll
            carry out a free assessment. We&apos;ll always confirm the full cost
            before any work begins. Pricing is also available directly on some
            of our service pages, including{" "}
            <Link href={routes.workshopServicesServicing}>Servicing</Link>,{" "}
            <Link href={routes.workshopServicesBrakePadsAndDiscs}>
              Brake Pads &amp; Discs
            </Link>
            , and{" "}
            <Link href={routes.workshopServicesCambeltsAndTimingBelts}>
              Cambelts &amp; Timing Belts
            </Link>
            .
          </>
        ),
      },
      {
        question: "Do you offer finance?",
        schemaAnswer:
          "Yes. We offer interest-free finance options to help spread the cost of repairs and servicing. Visit our finance page for more details, or ask us when you get in touch.",
        answer: (
          <>
            Yes. We offer interest-free finance options to help spread the cost
            of repairs and servicing. Visit our{" "}
            <Link href={routes.finance}>finance page</Link> for more details, or
            ask us when you <Link href={routes.contact}>get in touch</Link>.
          </>
        ),
      },
    ],
  },
  {
    title: "Repairs & Services",
    items: [
      {
        question: "Do you handle insurance accident repairs?",
        schemaAnswer:
          "Yes. We work with customers going through their insurer as well as those paying privately. We can provide detailed estimates and documentation to support your claim. If you've been in an accident in the Hampshire area and need repairs, get in touch and we'll guide you through the process.",
        answer: (
          <>
            Yes. We work with customers going through their insurer as well as
            those paying privately. We can provide detailed estimates and
            documentation to support your claim. If you&apos;ve been in an
            accident in the Hampshire area and need repairs,{" "}
            <Link href={routes.contact}>get in touch</Link> and we&apos;ll guide
            you through the process.
          </>
        ),
      },
      {
        question: "How long do car body repairs take?",
        schemaAnswer:
          "It depends on the work required. A minor dent or scratch repair can often be completed within a day, while more extensive accident repairs or full resprays may take several days. We'll give you a realistic timeframe at the point of estimate and keep you updated throughout.",
        answer: (
          <>
            It depends on the work required. A minor dent or scratch repair can
            often be completed within a day, while more extensive accident
            repairs or full resprays may take several days. We&apos;ll give you
            a realistic timeframe at the point of estimate and keep you updated
            throughout.
          </>
        ),
      },
      {
        question: "Do you carry out mechanical repairs as well as bodywork?",
        schemaAnswer:
          "Yes. As well as our bodyshop, we have a fully equipped mechanical workshop. We handle servicing, brake pads and discs, clutch repairs, cambelt replacements, tyres, gearbox repairs, and more. You can get both bodywork and mechanical work done in one place at our Swanmore site.",
        answer: (
          <>
            Yes. As well as our <Link href={routes.bodyshop}>bodyshop</Link>, we
            have a fully equipped{" "}
            <Link href={routes.workshop}>mechanical workshop</Link>. We handle{" "}
            <Link href={routes.workshopServicesServicing}>servicing</Link>,{" "}
            <Link href={routes.workshopServicesBrakePadsAndDiscs}>
              brake pads and discs
            </Link>
            ,{" "}
            <Link href={routes.workshopServicesClutchRepairsOrReplacements}>
              clutch repairs
            </Link>
            ,{" "}
            <Link href={routes.workshopServicesCambeltsAndTimingBelts}>
              cambelt replacements
            </Link>
            ,{" "}
            <Link href={routes.workshopServicesTyresAndPunctureRepairs}>
              tyres
            </Link>
            ,{" "}
            <Link href={routes.workshopServicesGearBoxRepairsOrReplacements}>
              gearbox repairs
            </Link>
            , and more. You can get both bodywork and mechanical work done in
            one place at our Swanmore site.
          </>
        ),
      },
      {
        question: "Do you offer car detailing in Hampshire?",
        schemaAnswer:
          "Yes. We offer professional car detailing at our Swanmore workshop, from single-stage paint correction and machine polishing through to full detail packages. Turnaround time depends on the condition of your vehicle and the level of service required. We'll confirm exact timescales once we've inspected your car.",
        answer: (
          <>
            Yes. We offer professional car detailing at our Swanmore workshop,
            from single-stage{" "}
            <Link href={routes.bodyshopServicesPaintCorrectionAndPolishing}>
              paint correction and machine polishing
            </Link>{" "}
            through to full detail packages. Turnaround time depends on the
            condition of your vehicle and the level of service required.
            We&apos;ll confirm exact timescales once we&apos;ve inspected your
            car.
          </>
        ),
      },
    ],
  },
  {
    title: "Booking & Logistics",
    items: [
      {
        question: "Do I need to book in advance?",
        schemaAnswer: `Yes. We work by appointment only to make sure every vehicle gets the time it deserves. To book, call us on ${phoneNumberText}, email ${email}, or use the contact form on our website. You can also message us on WhatsApp.`,
        answer: (
          <>
            Yes. We work by appointment only to make sure every vehicle gets the
            time it deserves. To book, call us on{" "}
            <Link href={`tel:${phoneNumberValue}`}>{phoneNumberText}</Link>,
            email <Link href={`mailto:${email}`}>{email}</Link>, or use the{" "}
            <Link href={routes.contact}>contact form</Link> on our website. You
            can also message us on{" "}
            <Link
              href={`https://wa.me/${whatsAppNumberValue.replace("+", "")}`}
            >
              WhatsApp
            </Link>
            .
          </>
        ),
      },
      {
        question: "Do you offer collection or delivery of vehicles?",
        schemaAnswer:
          "Yes. We offer trailer transport starting from £150, within a 10-mile radius of our Swanmore workshop. Transport must be booked and paid for in advance. Contact us to arrange.",
        answer: (
          <>
            Yes. We offer trailer transport starting from £150, within a 10-mile
            radius of our Swanmore workshop. Transport must be booked and paid
            for in advance. <Link href={routes.contact}>Contact us</Link> to
            arrange.
          </>
        ),
      },
      {
        question: "What payment methods do you accept?",
        schemaAnswer:
          "We accept bank transfer, debit cards, credit cards, and SumUp payments. Finance is also available for qualifying repairs and services.",
        answer: (
          <>
            We accept bank transfer, debit cards, credit cards, and SumUp
            payments. <Link href={routes.finance}>Finance</Link> is also
            available for qualifying repairs and services.
          </>
        ),
      },
      {
        question: "Do you use quality products and parts?",
        schemaAnswer:
          "Yes. We only use professional-grade products and quality parts. The same standards used by approved repair centres. This ensures a lasting finish and reliable mechanical performance.",
        answer: (
          <>
            Yes. We only use professional-grade products and quality parts. The
            same standards used by approved repair centres. This ensures a
            lasting finish and reliable mechanical performance.
          </>
        ),
      },
    ],
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap(({ items }) =>
    items.map(({ question, schemaAnswer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: schemaAnswer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <main className="gap-10">
      <section className="bg-[url('/_next/image?url=%2Fpaint-correction-compound-black-car-swanmore.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fpaint-correction-compound-black-car-swanmore.jpg&w=828&q=75')]">
        <div className="first-section-main-content">
          <Animated
            as="h1"
            className="text-center"
          >
            Frequently Asked Questions
          </Animated>
          <p className="text-center">
            Everything you need to know about car body repairs, resprays and
            servicing at our Swanmore, Hampshire workshop.
          </p>
        </div>
      </section>

      {faqCategories.map(({ title, items }) => (
        <section
          key={title}
          className="flex flex-col gap-5"
        >
          <h2>{title}</h2>

          <ul className="flex flex-col">
            {items.map(({ question, answer }) => (
              <Animated
                as="li"
                key={question}
              >
                <Collapsible
                  title={question}
                  as="h3"
                  buttonClassName="text-xl"
                >
                  {answer}
                </Collapsible>
              </Animated>
            ))}
          </ul>
        </section>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  )
}


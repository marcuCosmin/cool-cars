import Link from "next/link"
import { type Metadata } from "next"

import { Animated } from "@/components/Animated/Animated"

import { routes } from "@/globals/globals.const"

const FinancePage = () => {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Ffinance-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ffinance-banner.jpg&w=828&q=75')] bg-center">
        <div className="h-full max-w-7xl">
          <div className="first-section-main-content px-2.5 mb-10 pt-10">
            <Animated as="h1">Interest-Free Finance</Animated>
            <p>
              We’re pleased to offer customers the option to spread the cost of
              their vehicle purchase or repairs with 0% interest-free finance at
              Cool Cars.
            </p>
            <p>
              Our flexible finance plans allow you to split your payment over 3,
              4 or 6 monthly instalments, helping make costs more manageable —
              with no interest and no hidden fees.
            </p>
            <p>
              If you’re interested in using our finance option, simply speak to
              our friendly office team, who can talk you through the process and
              start the application on your behalf.
            </p>
            <p>
              All finance applications are subject to affordability and credit
              checks, and approval is required before the agreement can be
              confirmed.
            </p>
            <p>
              To find out more or to begin your application, contact our office
              team today — we’re happy to help and answer any questions you may
              have.
            </p>

            <Link
              href={routes.contact}
              className="link-button-fill-primary"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FinancePage
export const metadata: Metadata = {
  title: "Cool Cars – Finance",
  description:
    "Spread the cost with Cool Cars 0% finance. Pay over 3, 4 or 6 months with no interest. Speak to our office team to start your application.",
  alternates: {
    canonical: "https://cool-cars.co.uk",
  },
}

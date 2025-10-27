import { AddressFields } from "@/components/AddressFields/AddressFields"
import Link from "next/link"

export default function TermsAndConditionsPage() {
  return (
    <main className="flex flex-col gap-5 max-w-7xl mx-auto px-5">
      <section className="flex flex-col gap-5">
        <h1>Terms and Conditions</h1>
        <p>
          <b className="text-white">Last updated:</b> 16/10/2025
        </p>
        <p>
          Welcome to <b className="text-white">Cool Cars</b> (“we”, “our”,
          “us”). These Terms and Conditions outline the rules and guidelines for
          using our website{" "}
          <Link href="https://cool-cars.co.uk">cool-cars.co.uk</Link> and any
          related services provided by <b className="text-white">Cool Cars</b>.
        </p>
        <p>
          By accessing or using this website, you agree to be bound by these
          Terms. If you do not agree, please do not use our site.
        </p>
      </section>

      <section>
        <h2 className="text-start text-white font-bold mb-5">1. About Us</h2>
        <p>Cool Cars is a UK-based vehicle repair and detailing service.</p>
        <p>
          Registered business name: <b className="text-white">Cool Cars</b>
        </p>
        <p>
          Website:{" "}
          <Link href="https://cool-cars.co.uk">www.cool-cars.co.uk</Link>
        </p>

        <AddressFields
          showIcons={false}
          showLabels
        />
      </section>

      <section>
        <h2 className="text-start text-white font-bold mb-5">
          2. Use of the Website
        </h2>

        <ul className="flex flex-col gap-5 pl-10 list-disc text-paragraph">
          <li>You agree to use this website only for lawful purposes.</li>
          <li>
            You must not use the site in a way that could damage, disable, or
            impair its functionality or interfere with another person’s use of
            the website.
          </li>
          <li>
            All content, images, and information on this website are for general
            information only and may change without notice.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-start text-white font-bold mb-5">
          3. Estimates and Pricing
        </h2>

        <ul className="flex flex-col gap-5 list-disc pl-10 text-paragraph">
          <li>
            Any prices or estimates displayed on this website are guides only
            and subject to physical inspection of the vehicle.
          </li>
          <li>
            Final prices will be confirmed once a member of our team has
            assessed the work required.
          </li>
          <li>
            We reserve the right to amend or withdraw any advertised prices at
            any time.
          </li>
        </ul>
      </section>
    </main>
  )
}

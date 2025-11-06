import Link from "next/link"

import { AddressFields } from "@/components/AddressFields/AddressFields"
import { Fragment } from "react/jsx-runtime"

const sectionsWithLists = [
  {
    title: "2. Use of the Website",
    items: [
      "You agree to use this website only for lawful purposes.",
      "You must not use the site in a way that could damage, disable, or impair its functionality or interfere with another person’s use of the website.",
      "All content, images, and information on this website are for general information only and may change without notice.",
    ],
  },
  {
    title: "3. Estimates and Pricing",
    items: [
      "Any prices or estimates displayed on this website are guides only and subject to physical inspection of the vehicle.",
      "Final prices will be confirmed once a member of our team has assessed the work required.",
      "We reserve the right to amend or withdraw any advertised prices at any time.",
    ],
  },
  {
    title: "4. Bookings and Cancellations",
    items: [
      "All appointments or services must be confirmed via email, phone, or in person.",
      "If you need to cancel or reschedule, please give at least 24 hours’ notice.",
      "We reserve the right to charge a cancellation fee for missed or late appointments.",
    ],
  },
  {
    title: "5. Payment Terms",
    items: [
      "Payment is due upon completion of work unless otherwise agreed in writing.",
      "We accept cash, card, and approved electronic payments.",
      "All prices are inclusive of VAT unless stated otherwise.",
    ],
  },
  {
    title: "6. Warranty and Liability",
    items: [
      "We take pride in the quality of our work. However, we cannot accept liability for issues arising from unrelated defects, general wear and tear, or misuse after service.",
      "Our liability is limited to the cost of the service provided.",
      "Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence.",
    ],
  },
  {
    title: "7. Intellectual Property",
    items: [
      "All content, text, graphics, logos, and images on this website are owned by or licensed to Cool Cars.",
      "You may not reproduce, distribute, or use any content without prior written permission.",
    ],
  },
  {
    title: "8. Privacy",
    items: [
      "We respect your privacy and handle personal data in accordance with UK GDPR and the Data Protection Act 2018.",
      "Please see our privacy policy for more details on how we collect and use data.",
    ],
  },
  {
    title: "9. External Links",
    items: [
      "Our website may include links to third-party websites for convenience.",
      "We do not control or endorse these sites and are not responsible for their content or privacy practices.",
    ],
  },
]

export default function TermsAndConditionsPage() {
  return (
    <main className="main-container-legal-page">
      <section className="bg-[url('/_next/image?url=%2Fterms-and-conditions-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fterms-and-conditions-banner.jpg&w=828&q=75')]">
        <div className="first-section-main-content">
          <h1>Terms and Conditions</h1>
          <p>
            <b>Last updated:</b> 16/10/2025
          </p>
          <p>
            Welcome to <b>Cool Cars</b> (“we”, “our”, “us”). These Terms and
            Conditions outline the rules and guidelines for using our website{" "}
            <Link href="https://cool-cars.co.uk">cool-cars.co.uk</Link> and any
            related services provided by <b>Cool Cars</b>.
          </p>
          <p>
            By accessing or using this website, you agree to be bound by these
            Terms. If you do not agree, please do not use our site.
          </p>
        </div>
      </section>

      <section>
        <h2>1. About Us</h2>
        <p>Cool Cars is a UK-based vehicle repair and detailing service.</p>
        <p>
          Registered business name: <b>Cool Cars</b>
        </p>

        <AddressFields
          className="gap-5"
          showIcons={false}
          showLabels
          shownFields={["phone", "email", "website", "address"]}
        />
      </section>

      <hr />

      {sectionsWithLists.map((section, index) => (
        <Fragment key={index}>
          <section>
            <h2>{section.title}</h2>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </section>

          <hr />
        </Fragment>
      ))}

      <section>
        <h2>10. Changes to These Terms</h2>

        <p>
          We may update or amend these Terms occasionally. Changes will be
          posted on this page, and your continued use of the website means you
          accept the updated Terms
        </p>
      </section>

      <hr />

      <section>
        <h2>11. Governing Law</h2>

        <p>
          These Terms are governed by and construed in accordance with the laws
          of England and Wales.
        </p>
        <p>
          Any disputes will be subject to the exclusive jurisdiction of the
          courts of England and Wales.
        </p>
      </section>

      <hr />

      <section>
        <h2>Contact Us</h2>

        <p>If you have any questions about these Terms, please contact us:</p>

        <AddressFields
          className="mt-2.5 pl-5 gap-5"
          shownFields={["phone", "email", "website"]}
        />
      </section>
    </main>
  )
}

import Link from "next/link"

import { AddressFields } from "@/components/AddressFields/AddressFields"

import { email } from "@/globals/constants"

const section2FirstItems = [
  "Name",
  "Email address",
  "Phone number",
  "Vehicle details",
  "Messages or enquiries you send via our contact form or email",
]

const section2SecondItems = [
  "IP address",
  "Browser type and version",
  "Pages visited and time spent on the site",
  <>
    Cookies and analytics data (see <Link href="#section-6">Section 6</Link>{" "}
    below)
  </>,
]

const section3Items = [
  "Respond to your enquiries and provide quotes or bookings",
  "Process and manage your services",
  "Improve our website and customer experience",
  "Send updates or follow-ups relating to your enquiry or appointment (with consent)",
  "Comply with legal obligations",
]

const section4Items = [
  <>
    <b>Contract:</b> to provide the services you’ve requested.
  </>,
  <>
    <b>Consent:</b> where you’ve agreed to receive communications from us.
  </>,
  <>
    <b>Legitimate interests:</b> to operate and improve our business.
  </>,
  <>
    <b>Legal obligation:</b> to comply with applicable UK laws.
  </>,
]

const section7Items = [
  "IT or web hosting providers who support our website",
  "Payment processors (if applicable)",
  "Legal or regulatory authorities when required by law",
]

const section8Items = [
  "Access the personal data we hold about you",
  "Request correction of inaccurate information",
  "Request deletion of your personal data (“right to be forgotten”)",
  "Withdraw consent at any time (where applicable)",
  "Object to or restrict processing",
  <>
    Lodge a complaint with the <b>Information Commissioner’s Office (ICO)</b> at{" "}
    <Link href="https://www.ico.org.uk">www.ico.org.uk</Link>
  </>,
]

export default function PrivacyPolicy() {
  return (
    <main className="main-container-legal-page">
      <section className="bg-[url('/privacy-policy-banner.jpg')]">
        <div className="first-section-main-content">
          <h1>Privacy Policy – Cool Cars</h1>
          <p>
            <b>Last updated:</b> 16/10/2025
          </p>
          <p>
            Welcome to <b>Cool Cars</b> (“we”, “our”, “us”).
          </p>

          <p>
            We respect your privacy and are committed to protecting your
            personal information.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you visit our website{" "}
            <Link href="https://cool-cars.co.uk">cool-cars.co.uk</Link> or
            interact with our services.
          </p>
          <p>By using our website, you agree to this policy.</p>
        </div>
      </section>

      <section>
        <h2>1. Who We Are</h2>

        <p>Cool Cars is a UK-based vehicle repair and detailing business.</p>

        <AddressFields
          className="gap-5"
          shownFields={["phone", "email", "website", "address"]}
          showIcons={false}
          showLabels
        />

        <p>
          We are the <b>data controller</b> for the purposes of the UK General
          Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
      </section>

      <hr />

      <section>
        <h2>2. Information We Collect</h2>

        <p>We may collect the following types of personal information:</p>

        <h3>Information you provide directly:</h3>

        <ul>
          {section2FirstItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Information collected automatically:</h3>

        <ul>
          {section2SecondItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h2>3. How We Use Your Information</h2>

        <p>We use your information to:</p>

        <ul>
          {section3Items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          We do <b>not</b> sell, rent, or trade your personal information.
        </p>
      </section>

      <hr />

      <section>
        <h2>4. Lawful Basis for Processing</h2>

        <p>
          We process your data under one or more of the following lawful bases:
        </p>

        <ul>
          {section4Items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h2>5. How We Store and Protect Your Data</h2>

        <p>
          Your information is securely stored on password-protected systems and
          encrypted devices.
        </p>
        <p>
          We keep your data only for as long as necessary to fulfil the purpose
          it was collected for, or as required by law.
        </p>
        <p>
          We take appropriate measures to prevent unauthorised access,
          alteration, or loss of your personal data.
        </p>
      </section>

      <hr />

      <section>
        <h2>6. Cookies and Analytics</h2>

        <p>
          Our website uses <b>cookies</b> — small text files stored on your
          device — to improve site performance and user experience.
        </p>
        <p>
          We may use tools like <b>Google Analytics</b> to collect anonymous
          such as page views and time spent on the site.
        </p>
        <p>
          You can control or delete cookies at any time via your browser
          settings.
        </p>
      </section>

      <hr />

      <section>
        <h2>7. Sharing Your Information</h2>

        <p>
          We only share your data with trusted third parties when necessary,
          such as:
        </p>

        <ul>
          {section7Items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          All third parties are required to keep your information secure and
          only use it in accordance with our instructions.
        </p>
      </section>

      <hr />

      <section>
        <h2>8. Your Rights</h2>

        <p>Under UK data protection law, you have the right to:</p>

        <ul>
          {section8Items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          To exercise any of these rights, please contact us at{" "}
          <Link href={`mailto:${email}`}>{email}</Link>
        </p>
      </section>

      <hr />

      <section>
        <h2>9. Links to Other Websites</h2>

        <p>Our website may contain links to other websites.</p>
        <p>
          We are not responsible for the privacy practices or content of those
          third-party sites.
        </p>
      </section>

      <hr />

      <section>
        <h2>10. Changes to This Policy</h2>

        <p>We may update this Privacy Policy from time to time.</p>
        <p>
          Any changes will be posted on this page with an updated “Last updated”
          date.
        </p>
      </section>

      <hr />

      <section>
        <h2>11. Contact Us</h2>

        <p>
          If you have any questions about this Privacy Policy or how we handle
          your data, please contact:
        </p>

        <AddressFields
          className="mt-2.5 pl-5 gap-5"
          shownFields={["phone", "email", "website"]}
        />
      </section>
    </main>
  )
}

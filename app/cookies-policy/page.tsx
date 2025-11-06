import Link from "next/link"

import { AddressFields } from "@/components/AddressFields/AddressFields"

const thirdSectionListItems = [
  "Ensure our website functions correctly",
  "Improve performance and user experience",
  "Understand how visitors use our site (through analytics tools like Google Analytics)",
  "Remember your preferences and settings",
]

const fifthSectionListItems = [
  "Google (for analytics and site performance)",
  "Social media integrations (e.g., Facebook, Instagram, etc.)",
]

const sixthSectionListItems = [
  "Delete existing cookies",
  "Block all cookies",
  "Set preferences for certain sites",
]

export default function CookiesPolicyPage() {
  return (
    <main className="main-container-legal-page">
      <section className="bg-[url('/_next/image?url=%2Fprivacy-policy-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fprivacy-policy-banner.jpg&w=828&q=75')]">
        <div className="first-section-main-content">
          <h1>Cookie Policy – Cool Cars</h1>
          <p>
            <b>Last updated:</b> 16/10/2025
          </p>
          <p>
            This Cookie Policy explains how <b>Cool Cars</b> (“we”, “our”, “us”)
            uses cookies and similar technologies on our website{" "}
            <Link href="https://www.cool-cars.co.uk">www.cool-cars.co.uk</Link>.
          </p>

          <p>
            By continuing to browse or use our site, you agree to our use of
            cookies as described below.
          </p>
        </div>
      </section>

      <section>
        <h2>1. What Are Cookies?</h2>

        <p>
          Cookies are small text files placed on your device (computer, tablet,
          or phone) when you visit a website.
        </p>
        <p>
          They help websites work properly, remember your preferences, and
          collect information about how visitors use the site.
        </p>
      </section>

      <hr />

      <section>
        <h2>How We Use Cookies</h2>

        <p>We use cookies to:</p>

        <ul>
          {thirdSectionListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          We do <b>not</b> use cookies to collect personal information such as
          names, email addresses, or contact details.
        </p>
      </section>

      <hr />

      <section>
        <h2>3. Types of Cookies We Use</h2>

        <article>
          <h3>Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function and cannot
            be switched off in our systems. They include things like navigation
            and access to secure areas of the site.
          </p>
        </article>

        <article>
          <h3>Performance &amp; Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with the
            website — for example, which pages are most popular.
          </p>
          <p>
            We use tools such as Google Analytics, which collects anonymised
            data such as IP address, browser type, and time spent on the site.
          </p>
        </article>

        <article>
          <h3>Functionality Cookies</h3>
          <p>
            These allow the website to remember your preferences (like language
            or location settings) and provide enhanced features.
          </p>
        </article>
      </section>

      <hr />

      <section>
        <h2>4. Third-Party Cookies</h2>

        <p>
          Some cookies may be placed by third-party services that appear on our
          pages, such as:
        </p>

        <ul>
          {fifthSectionListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          These third parties have their own privacy and cookie policies, which
          we encourage you to read.
        </p>
      </section>

      <hr />

      <section>
        <h2>5. Managing Cookies</h2>

        <p>
          You can control and manage cookies in your browser settings. Most
          browsers allow you to:
        </p>

        <ul>
          {sixthSectionListItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p>
          Be aware that disabling some cookies may affect how the website
          functions.
        </p>

        <p>
          For more information on how to manage cookies, visit:{" "}
          <a href="https://www.aboutcookies.org">www.aboutcookies.org</a> or{" "}
          <a href="https://www.allaboutcookies.org">www.allaboutcookies.org</a>
        </p>
      </section>

      <hr />

      <section>
        <h2>6. Changes to This Policy</h2>

        <p>We may update this Cookie Policy from time to time.</p>
        <p>
          Any changes will be posted on this page with the updated “Last
          updated” date.
        </p>
      </section>

      <hr />

      <section>
        <h2>7. Contact Us</h2>

        <p>
          If you have any questions about our use of cookies, please contact us
          at:
        </p>

        <AddressFields shownFields={["email", "website", "phone"]} />
      </section>
    </main>
  )
}

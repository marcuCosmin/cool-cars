import { type Metadata } from "next"

import { MainWrapper } from "@/components/MainWrapper"
import { ContactForm } from "@/components/ContactForm/ContactForm"
import { ContactField } from "@/components/ContactField/ContactField"

import { phoneNumber } from "@/globals/constants"

export const metadata: Metadata = {
  title: "Contact Us | Cool Cars",
  description:
    "Get in touch with Cool Cars in Swanmore for quotes, appointments, or questions.",
  alternates: {
    canonical: "https://cool-cars.co.uk/contact",
  },
}

const Contact = () => (
  <MainWrapper
    h1="Get in Touch"
    h2="Ready to give your car the care it deserves? Contact us today to discuss your needs or to schedule a service."
    description={
      <address className="flex flex-col gap-5 items-center">
        <ContactField
          label="Address:"
          type="address"
          displayedValue="Unit 16, Swanmore Business Park, Lower Chase Rd, Swanmore SO32 2PB"
          value="https://www.google.com/maps/place//data=!4m2!3m1!1s0x48746b16e20fd58d:0x806a3a19ef691a73?sa=X&ved=1t:8290&ictx=111"
        />

        <ContactField
          label="Phone:"
          type="phone"
          value={phoneNumber}
        />

        <ContactField
          label="Email:"
          type="email"
          value="contact@cool-cars.co.uk"
        />
      </address>
    }
  >
    <ContactForm />
  </MainWrapper>
)

export default Contact

import { MainWrapper } from "@/components/MainWrapper"
import { ContactForm } from "@/components/ContactForm/ContactForm"
import { ContactField } from "@/components/ContactField"

const Contact = () => (
  <MainWrapper
    h1="Get in Touch"
    h2="Ready to give your car the care it deserves? Contact us today to discuss your needs or to schedule a service."
    description={
      <address className="flex flex-col gap-5 items-center">
        <ContactField
          type="address"
          value="Address: Unit 16, Swanmore Business Park, Lower Chase Rd, Swanmore SO32 2PB"
        />
        <ContactField
          type="phone"
          value="Phone: 07387 267400"
        />
        <ContactField
          type="email"
          value="Email: contact@cool-cars.co.uk"
        />
      </address>
    }
  >
    <ContactForm />
  </MainWrapper>
)

export default Contact

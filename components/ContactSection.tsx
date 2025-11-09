import { AddressFields } from "@/components/AddressFields/AddressFields"
import { ContactForm } from "@/components/ContactForm/ContactForm"
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks"
import { Animated } from "@/components/Animated/Animated"

export const ContactSection = () => (
  <section className="flex flex-col md:flex-row justify-center items-center px-5 md:px-0 gap-10 md:gap-0">
    <div className="flex flex-col items-center md:items-start mr-0 md:mr-auto max-w-md w-full">
      <h2 className="text-center md:text-start mb-10">Contact Us</h2>
      <Animated
        as="h3"
        className="max-w-md text-center md:text-start mb-10"
      >
        Have a Question? Get in Touch!
      </Animated>

      <AddressFields
        showIcons={false}
        className="flex-col items-center md:items-start text-center md:text-start gap-5 text-lg mb-5 w-full"
      />

      <SocialMediaLinks />
    </div>

    <ContactForm title="Contact Form" />
  </section>
)


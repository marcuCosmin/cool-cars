import { routes } from "@/globals/globals.const"

export const services = [
  { href: routes.servicesVehicleBodyRepairs, text: "Vehicle Body Repairs" },
  { href: routes.servicesRespraysAndPaintwork, text: "Resprays & Paintwork" },
  { href: routes.servicesAccidentRepairs, text: "Accident Repairs" },
  {
    href: routes.servicesPaintCorrectionAndPolishing,
    text: "Paint Correction & Polishing",
  },
  {
    href: routes.servicesBodyworkAndModifications,
    text: "Bodywork & Modifications",
  },
  {
    href: routes.servicesFleetRepairManagement,
    text: "Fleet Repair Management",
  },
]

export const quickLinks = [
  { href: routes.pricing, text: "Pricing" },
  { href: routes.testimonials, text: "Testimonials" },
  { href: routes.blog, text: "Blog" },
  { href: routes.faq, text: "FAQ" },
  { href: routes.contact, text: "Contact" },
]

export const policiesLinks = [
  { href: routes.termsAndConditions, text: "Terms & Conditions" },
  { href: routes.privacyPolicy, text: "Privacy Policy" },
  { href: routes.faq, text: "FAQ" },
]

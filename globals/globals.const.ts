export const phoneNumberText = "+44 7421 535 039"
export const phoneNumberValue = phoneNumberText.replaceAll(" ", "")
export const address =
  "Unit 16, Swanmore Business Park, Lower Chase Road, Swanmore, SO32 2PB"
export const email = "contact@cool-cars.co.uk"
export const website = "https://cool-cars.co.uk"

export const routes = {
  home: "/",
  about: "/about",
  contact: "/contact",
  servicesVehicleBodyRepairs: "/services/vehicle-body-repairs",
  servicesRespraysAndPaintwork: "/services/resprays-and-paintwork",
  servicesAccidentRepairs: "/services/accident-repairs",
  servicesPaintCorrectionAndPolishing:
    "/services/paint-correction-and-polishing",
  servicesBodyworkAndModifications: "/services/bodywork-and-modifications",
  servicesFleetRepairManagement: "/services/fleet-repair-management",
  pricing: "/pricing",
  faq: "/faq",
  testimonials: "/testimonials",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
  blog: "/blog",
} as const

export type Routes = typeof routes

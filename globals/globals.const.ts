export const phoneNumberText = "01489 326 750"
export const phoneNumberValue = phoneNumberText.replaceAll(" ", "")
export const whatsAppNumberValue = "+447421535039"
export const address =
  "Unit 16, Swanmore Business Park, Lower Chase Road, Swanmore, SO32 2PB"
export const shortAddress = "Unit 16, Swanmore Business Park, SO32 2PB"
export const email = "contact@cool-cars.co.uk"
export const website = "https://cool-cars.co.uk"

export const routes = {
  home: "/",
  bodyshop: "/bodyshop",
  workshop: "/workshop",
  about: "/about",
  contact: "/contact",
  bodyshopServicesVehicleBodyRepairs: "/bodyshop/services/vehicle-body-repairs",
  bodyshopServicesRespraysAndPaintwork:
    "/bodyshop/services/resprays-and-paintwork",
  bodyshopServicesAccidentRepairs: "/bodyshop/services/accident-repairs",
  bodyshopServicesPaintCorrectionAndPolishing:
    "/bodyshop/services/paint-correction-and-polishing",
  bodyshopServicesBodyworkAndModifications:
    "/bodyshop/services/bodywork-and-modifications",
  bodyshopServicesFleetRepairManagement:
    "/bodyshop/services/fleet-repair-management",
  workshopServicesServicing: "/workshop/services/servicing",
  workshopServicesBrakePadsAndDiscs: "/workshop/services/brake-pads-and-discs",
  workshopServicesClutchRepairsOrReplacements:
    "/workshop/services/clutch-repairs-or-replacements",
  workshopServicesCambeltsAndTimingBelts:
    "/workshop/services/cambelts-and-timing-belts",
  workshopServicesTyresAndPunctureRepairs:
    "/workshop/services/tyres-and-puncture-repairs",
  workshopServicesGearBoxRepairsOrReplacements:
    "/workshop/services/gearbox-repairs-or-replacements",
  faq: "/faq",
  testimonials: "/testimonials",
  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",
  blog: "/blog",
  cookiesPolicy: "/cookies-policy",
  finance: "/finance",
} as const

export type Routes = typeof routes

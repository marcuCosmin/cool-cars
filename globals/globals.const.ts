export const phoneNumberText = "01489 326 750"
export const phoneNumberValue = phoneNumberText.replaceAll(" ", "")
export const phoneNumberInternational = `+44${phoneNumberValue.slice(1)}`
export const whatsAppNumberValue = "+447421535039"

export const addressStreetShort = "Unit 16, Swanmore Business Park"
export const addressStreet = `${addressStreetShort}, Lower Chase Road`
export const addressLocality = "Swanmore"
export const addressRegion = "Hampshire"
export const addressPostalCode = "SO32 2PB"
export const addressCountry = "GB"

export const address = `${addressStreet}, ${addressLocality}, ${addressPostalCode}`
export const shortAddress = `${addressStreetShort}, ${addressPostalCode}`
export const email = "contact@cool-cars.co.uk"
export const website = "https://cool-cars.co.uk"

export const geoLatitude = 50.9435355
export const geoLongitude = -1.193956
export const googleMapsUrl = "https://maps.app.goo.gl/o371gkfg4AGhNAqY7"

export const areaServed = [
  { "@type": "City", name: "Swanmore" },
  { "@type": "City", name: "Southampton" },
  { "@type": "City", name: "Fareham" },
  { "@type": "City", name: "Bishops Waltham" },
  { "@type": "City", name: "Wickham" },
  { "@type": "City", name: "Eastleigh" },
  { "@type": "AdministrativeArea", name: "Hampshire" },
]

const providerDetails = {
  name: "Cool Cars South Coast Ltd",
  url: website,
  telephone: phoneNumberInternational,
  address: {
    "@type": "PostalAddress",
    streetAddress: addressStreet,
    addressLocality,
    addressRegion,
    postalCode: addressPostalCode,
    addressCountry,
  },
}

export const businessProvider = {
  "@type": ["AutoRepair", "AutoBodyShop"],
  ...providerDetails,
}

export const autoRepairProvider = {
  "@type": "AutoRepair",
  ...providerDetails,
}

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

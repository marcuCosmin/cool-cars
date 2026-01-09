import { routes } from "@/globals/globals.const"

import type { HeaderNavItem } from "./Header.model"

export const navToggleId = "nav-toggle"

export const leftSideNavLinks: HeaderNavItem[] = [
  {
    text: "Home",
    links: [
      {
        items: [
          {
            href: routes.home,
            text: "Main Page",
          },
          {
            href: routes.bodyshop,
            text: "Bodyshop",
          },
          {
            href: routes.workshop,
            text: "Workshop",
          },
        ],
      },
    ],
  },
  {
    href: routes.about,
    text: "About Us",
  },
]

export const rightSideNavLinks: HeaderNavItem[] = [
  {
    text: "Services",
    links: [
      {
        label: "Bodyshop",
        items: [
          {
            href: routes.bodyshopServicesVehicleBodyRepairs,
            text: "Vehicle Body Repairs",
          },
          {
            href: routes.bodyshopServicesRespraysAndPaintwork,
            text: "Resprays & Paintwork",
          },
          {
            href: routes.bodyshopServicesAccidentRepairs,
            text: "Accident Repairs",
          },
          {
            href: routes.bodyshopServicesPaintCorrectionAndPolishing,
            text: "Paint Correction & Polishing",
          },
          {
            href: routes.bodyshopServicesBodyworkAndModifications,
            text: "Bodywork & Modifications",
          },
          {
            href: routes.bodyshopServicesFleetRepairManagement,
            text: "Fleet Repair Management",
          },
        ],
      },
      {
        label: "Workshop",
        items: [
          {
            href: routes.workshopServicesServicing,
            text: "Servicing",
          },
          {
            href: routes.workshopServicesBrakePadsAndDiscs,
            text: "Brake Pads & Discs",
          },
          {
            href: routes.workshopServicesClutchRepairsOrReplacements,
            text: "Clutch Repairs & Replacements",
          },
          {
            href: routes.workshopServicesCambeltsAndTimingBelts,
            text: "Cambelts & Timing Belts",
          },
          {
            href: routes.workshopServicesTyresAndPunctureRepairs,
            text: "Tyres and Puncture Repairs",
          },
          {
            href: routes.workshopServicesGearBoxRepairsOrReplacements,
            text: "Gear Box Repairs and Replacements",
          },
        ],
      },
    ],
  },
  {
    text: "More",
    links: [
      {
        items: [
          { href: routes.faq, text: "FAQ" },
          { href: routes.testimonials, text: "Testimonials" },
          { href: routes.contact, text: "Contact" },
        ],
      },
    ],
  },
]

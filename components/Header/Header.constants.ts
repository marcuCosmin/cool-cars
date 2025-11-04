import { routes } from "@/globals/constants"

import type { HeaderNavItem } from "./Header.model"

export const navToggleId = "nav-toggle"

export const leftSideNavLinks: HeaderNavItem[] = [
  {
    href: routes.home,
    text: "Home",
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
      { href: routes.servicesVehicleBodyRepairs, text: "Vehicle Body Repairs" },
      {
        href: routes.servicesRespraysAndPaintwork,
        text: "Resprays & Paintwork",
      },
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
    ],
  },
  {
    text: "More",
    links: [
      { href: "/test", text: "More 1" },
      { href: "/test", text: "More 2" },
    ],
  },
]


import type { HeaderNavItem } from "./Header.model"

export const navToggleId = "nav-toggle"

export const leftSideNavLinks: HeaderNavItem[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About Us",
  },
]

export const rightSideNavLinks: HeaderNavItem[] = [
  {
    text: "Services",
    links: [
      { href: "/services/vehicle-body-repairs", text: "Vehicle Body Repairs" },
      {
        href: "/services/resprays-and-paintwork",
        text: "Resprays & Paintwork",
      },
      { href: "/services/accident-repairs", text: "Accident Repairs" },
      {
        href: "/services/paint-correction-and-polishing",
        text: "Paint Correction & Polishing",
      },
      {
        href: "/services/bodywork-and-modifications",
        text: "Bodywork & Modifications",
      },
      {
        href: "/services/fleet-repair-management",
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

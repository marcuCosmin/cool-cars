import {
  EnvelopeFill,
  Facebook,
  GeoAltFill,
  Instagram,
  Linkedin,
  TelephoneFill,
  Youtube,
  type Icon,
} from "react-bootstrap-icons"

import type { HeaderNavItemProps } from "./Header.model"

export const navToggleId = "nav-toggle"

export const leftSideNavLinks: HeaderNavItemProps[] = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/about",
    text: "About Us",
  },
]

export const rightSideNavLinks: HeaderNavItemProps[] = [
  {
    text: "Services",
    links: [
      { href: "/test", text: "Services 1" },
      { href: "/test", text: "Services 2" },
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

export const socialMediaLinks = [
  {
    Icon: Facebook,
    href: "https://www.facebook.com/CoolCarsPortsmouth",
    ariaLabel: "Facebook",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/company/109203288/admin/dashboard/",
    ariaLabel: "LinkedIn",
  },
  {
    Icon: Instagram,
    href: "https://www.instagram.com/coolcarssc/",
    ariaLabel: "Instagram",
  },
  {
    Icon: Youtube,
    href: "https://www.youtube.com/@CoolCarsSC",
    ariaLabel: "YouTube",
  },
]

type AddressItem =
  | {
      text: string
      Icon: Icon
      type: "text"
    }
  | {
      text: string
      href: string
      Icon: Icon
      type: "link"
    }

export const addresses: AddressItem[] = [
  {
    type: "text",
    Icon: GeoAltFill,
    text: "Unit 16, Swanmore Business Park, Lower Chase Road, Swanmore, SO322PB",
  },
  {
    type: "link",
    href: "mailto:contact@cool-cars.co.uk",
    Icon: EnvelopeFill,
    text: "contact@cool-cars.co.uk",
  },
  {
    type: "link",
    href: "tel:+447421535039",
    Icon: TelephoneFill,
    text: "+44 7421 535 039",
  },
]

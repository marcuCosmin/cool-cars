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

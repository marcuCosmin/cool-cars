import { Facebook, Instagram, Linkedin, Youtube } from "react-bootstrap-icons"

import type { SocialMediaLinksSizes } from "./SocialMediaLinks.model"

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

export const socialMediaIconSizesClassNames: Record<
  SocialMediaLinksSizes,
  string
> = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
}

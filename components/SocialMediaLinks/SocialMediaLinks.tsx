import Link from "next/link"

import {
  socialMediaLinks,
  socialMediaIconSizesClassNames,
} from "./SocialMediaLinks.const"

import type { SocialMediaLinksSizes } from "./SocialMediaLinks.model"

type SocialMediaLinksProps = {
  size?: SocialMediaLinksSizes
}

export const SocialMediaLinks = ({ size = "md" }: SocialMediaLinksProps) => {
  const iconSizeClassName = socialMediaIconSizesClassNames[size]

  return (
    <ul className="flex items-center gap-2">
      {socialMediaLinks.map(({ Icon, href, ariaLabel }, index) => (
        <li key={index}>
          <Link
            href={href}
            aria-label={ariaLabel}
            target="_blank"
            className="hover:text-primary transition-colors border-1 p-2 h-fit block border-border"
          >
            <Icon
              className={iconSizeClassName}
              aria-hidden="true"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

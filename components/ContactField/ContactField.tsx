"use client"

import { getAnchorConfig } from "./getAnchorConfig"

import { type ContactFieldProps } from "./ContactField.models"

const variantsConfig = {
  banner: {
    icon: "fill-white",
    container: "text-white",
  },
  paragraph: {
    icon: "fill-primary",
    container: "text-inherit",
  },
}

const sizeClasses = {
  small: "min-w-[14px] min-h-[14px]",
  medium: "min-w-[20px] min-h-[20px]",
}

export const ContactField = ({
  type,
  size = "medium",
  displayedValue,
  value,
  label = "",
  variant = "paragraph",
}: ContactFieldProps) => {
  const isSmall = size === "small"
  const variantConfig = variantsConfig[variant]
  const iconProps = {
    "aria-hidden": true,
    className: `inline mr-2 ${isSmall ? "self-center" : "self-start"} ${sizeClasses[size]} ${variantConfig.icon}`,
  }

  const containerClassNames = `inline w-fit mx-1.5 ${variantConfig.container}`
  const { href, trackClicks, target, Icon } = getAnchorConfig({
    type,
    value: String(value),
  })

  const onClick = () => {
    if (!trackClicks) {
      return
    }

    gtag("event", "phone_click", {
      event_category: "Contact",
      event_label: "Phone Call",
    })
  }

  return (
    <a
      className={containerClassNames}
      href={href}
      target={target}
      onClick={onClick}
    >
      {label && <span className="mr-2">{label}</span>}
      <Icon {...iconProps} />
      {displayedValue || value}
    </a>
  )
}

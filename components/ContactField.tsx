"use client"

import { type ReactNode } from "react"
import { EnvelopeFill, PinFill, TelephoneFill } from "react-bootstrap-icons"

type ContactFieldProps = {
  type: "phone" | "email" | "address"
  value: ReactNode
  label?: ReactNode
  size?: "small" | "medium"
  variant?: "banner" | "paragraph"
}

const variantsConfig = {
  banner: {
    icon: "fill-white",
    container: "text-white",
  },
  paragraph: {
    icon: "fill-primary",
    container: "text-gray",
  },
}

const sizeClasses = {
  small: "min-w-[14px] min-h-[14px]",
  medium: "min-w-[20px] min-h-[20px]",
}

export const ContactField = ({
  type,
  size = "medium",
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

  if (type === "address") {
    return (
      <p className={containerClassNames}>
        {label && <span className="mr-2">{label}</span>}
        <PinFill {...iconProps} />
        {value}
      </p>
    )
  }

  const isPhone = type === "phone"

  const icon = isPhone ? (
    <TelephoneFill {...iconProps} />
  ) : (
    <EnvelopeFill {...iconProps} />
  )

  const href = isPhone ? `tel:${value}` : `mailto:${value}`

  const onClick = () => {
    if (!isPhone) {
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
      onClick={onClick}
    >
      {label && <span className="mr-2">{label}</span>}
      {icon}
      {value}
    </a>
  )
}

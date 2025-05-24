import { type ReactNode } from "react"
import { EnvelopeFill, PinFill, TelephoneFill } from "react-bootstrap-icons"

type ContactFieldProps = {
  type: "phone" | "email" | "address"
  value: ReactNode
  size?: "small" | "medium"
}

const sizeClasses = {
  small: "min-w-[16px] min-h-[16px]",
  medium: "min-w-[24px] min-h-[24px]",
}

export const ContactField = ({
  type,
  size = "medium",
  value,
}: ContactFieldProps) => {
  const iconProps = {
    "aria-hidden": true,
    className: `fill-primary inline mr-1 ${sizeClasses[size]}`,
  }

  if (type === "address") {
    return (
      <p>
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

  return (
    <a
      className="m-1"
      href={href}
    >
      {icon}
      {value}
    </a>
  )
}

"use client"

import { getFieldConfig } from "./getFieldConfig"

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

  const containerClassNames = `flex justify-center items-center flex-wrap w-fit mx-1.5 cursor-pointer ${variantConfig.container}`
  const { href, target, Component, Icon } = getFieldConfig({
    type,
    value,
  })

  if (Component) {
    return (
      <Component
        className={containerClassNames}
        iconProps={iconProps}
        value={value}
        label={label}
      />
    )
  }

  return (
    <a
      className={containerClassNames}
      href={href}
      target={target}
    >
      {label && <span className="mr-2">{label}</span>}
      <span>
        <Icon {...iconProps} />
        {displayedValue || value}
      </span>
    </a>
  )
}


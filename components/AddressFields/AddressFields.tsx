import Link from "next/link"

import { mergeClassNames } from "@/utils/mergeClassNames"

import { addresses } from "./AddressFields.const"

type AddressFieldsProps = {
  className?: string
  showIcons?: boolean
  showLabels?: boolean
}

export const AddressFields = ({
  showIcons = true,
  className,
  showLabels,
}: AddressFieldsProps) => {
  const containerClassName = mergeClassNames("flex flex-col", className)

  return (
    <address className={containerClassName}>
      {addresses.map((address, index) => {
        const containerClassName = "flex items-center gap-2"
        const iconClassName = "min-w-4 min-h-4 fill-primary"

        if (address.type === "text") {
          const { text, Icon, label } = address

          return (
            <p
              className={containerClassName}
              key={index}
            >
              {showIcons && (
                <Icon
                  className={iconClassName}
                  aria-hidden="true"
                />
              )}
              {showLabels && <span>{label}:</span>}
              <span>{text}</span>
            </p>
          )
        }

        if (address.type === "link") {
          const { text, Icon, href } = address

          return (
            <p
              key={index}
              className="flex gap-2"
            >
              {showLabels && <span>{address.label}:</span>}
              <Link
                className={containerClassName}
                href={href}
              >
                {showIcons && (
                  <Icon
                    className={iconClassName}
                    aria-hidden="true"
                  />
                )}
                {text}
              </Link>
            </p>
          )
        }
      })}
    </address>
  )
}

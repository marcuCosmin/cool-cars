import Link from "next/link"

import { mergeClassNames } from "@/utils/mergeClassNames"

import { addresses } from "./AddressFields.const"

import type { AddressFieldsIds } from "./AddressFields.models"

type AddressFieldsProps = {
  className?: string
  showIcons?: boolean
  showLabels?: boolean
  shownFields?: AddressFieldsIds[]
}

export const AddressFields = ({
  showIcons = true,
  className,
  showLabels,
  shownFields = ["address", "email", "phone"],
}: AddressFieldsProps) => {
  const containerClassName = mergeClassNames("flex flex-col", className)

  return (
    <address className={containerClassName}>
      {addresses.map(address => {
        const containerClassName = "flex items-center gap-2"
        const iconClassName = "min-w-4 min-h-4 fill-primary"

        if (!shownFields.includes(address.id)) {
          return null
        }

        const { text, Icon, href, target, id } = address

        return (
          <p
            key={id}
            className="flex gap-2"
          >
            {showLabels && <span>{address.label}:</span>}
            <Link
              target={target}
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
      })}
    </address>
  )
}

import { type ReactNode } from "react"

export type ContactFieldProps = {
  type: "phone" | "email" | "address"
  value: string
  displayedValue?: ReactNode
  label?: ReactNode
  size?: "small" | "medium"
  variant?: "banner" | "paragraph"
}

export type FieldProps = Pick<ContactFieldProps, "value" | "label"> & {
  className?: string
  iconProps: Record<string, unknown>
  value: string
  label?: ReactNode
}


import { type ReactNode } from "react"

export type ContactFieldProps = {
  type: "phone" | "email" | "address"
  value: string
  displayedValue?: ReactNode
  label?: ReactNode
  size?: "small" | "medium"
  variant?: "banner" | "paragraph"
}

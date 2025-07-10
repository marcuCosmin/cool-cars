import { EnvelopeFill, PinFill, TelephoneFill } from "react-bootstrap-icons"

import { PhoneField } from "./PhoneField"

import type { ContactFieldProps } from "./ContactField.models"

type GetFieldConfigProps = {
  type: ContactFieldProps["type"]
  value: string
}

export const getFieldConfig = ({ type, value }: GetFieldConfigProps) => {
  switch (type) {
    case "phone":
      return {
        Icon: TelephoneFill,
        Component: PhoneField,
      }
    case "email":
      return {
        Icon: EnvelopeFill,
        href: `mailto:${value}`,
      }
    case "address":
      return {
        Icon: PinFill,
        href: value,
        target: "_blank",
      }
    default:
      throw new Error(`Unsupported contact type: ${type}`)
  }
}


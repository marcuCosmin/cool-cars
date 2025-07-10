import { EnvelopeFill, PinFill, TelephoneFill } from "react-bootstrap-icons"

import type { ContactFieldProps } from "./ContactField.models"

type GetAnchorConfigProps = {
  type: ContactFieldProps["type"]
  value: string
}

export const getAnchorConfig = ({ type, value }: GetAnchorConfigProps) => {
  switch (type) {
    case "phone":
      return {
        Icon: TelephoneFill,
        href: `https://wa.me/${value.replaceAll(" ", "")}`,
        target: "_blank",
        trackClicks: true,
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

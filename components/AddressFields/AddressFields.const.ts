import {
  EnvelopeFill,
  GeoAltFill,
  Globe2,
  TelephoneFill,
  type Icon,
} from "react-bootstrap-icons"

import {
  address,
  email,
  phoneNumberText,
  phoneNumberValue,
  shortAddress,
  website,
} from "@/globals/globals.const"

import type { AddressFieldsIds } from "./AddressFields.models"

type AddressItem = {
  id: AddressFieldsIds
  Icon: Icon
  label: string
  text: string
  shortText?: string
  href: string
  target?: HTMLAnchorElement["target"]
}

export const addresses: AddressItem[] = [
  {
    id: "address",
    href: "https://maps.app.goo.gl/o371gkfg4AGhNAqY7",
    Icon: GeoAltFill,
    text: address,
    shortText: shortAddress,
    label: "Address",
    target: "_blank",
  },
  {
    id: "email",
    href: `mailto:${email}`,
    Icon: EnvelopeFill,
    text: email,
    label: "Email",
  },
  {
    id: "phone",
    href: `tel:${phoneNumberValue}`,
    Icon: TelephoneFill,
    text: phoneNumberText,
    label: "Telephone",
  },
  {
    id: "website",
    href: website,
    Icon: Globe2,
    text: "www.cool-cars.co.uk",
    label: "Website",
  },
]

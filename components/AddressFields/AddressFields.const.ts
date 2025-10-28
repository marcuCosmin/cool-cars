import {
  EnvelopeFill,
  GeoAltFill,
  Globe2,
  TelephoneFill,
  type Icon,
} from "react-bootstrap-icons"

import {
  email,
  phoneNumberText,
  phoneNumberValue,
  website,
} from "@/globals/constants"

import type { AddressFieldsIds } from "./AddressFields.models"

type AddressItemCommonProps = {
  id: AddressFieldsIds
  Icon: Icon
  label: string
  text: string
}

type AddressItemTextProps = AddressItemCommonProps & {
  type: "text"
}

type AddressItemLinkProps = AddressItemCommonProps & {
  type: "link"
  href: string
}

type AddressItem = AddressItemTextProps | AddressItemLinkProps

export const addresses: AddressItem[] = [
  {
    id: "address",
    type: "text",
    Icon: GeoAltFill,
    text: "Unit 16, Swanmore Business Park, Lower Chase Road, Swanmore, SO322PB",
    label: "Address",
  },
  {
    id: "email",
    type: "link",
    href: `mailto:${email}`,
    Icon: EnvelopeFill,
    text: email,
    label: "Email",
  },
  {
    id: "phone",
    type: "link",
    href: `tel:${phoneNumberValue}`,
    Icon: TelephoneFill,
    text: phoneNumberText,
    label: "Telephone",
  },
  {
    id: "website",
    type: "link",
    href: website,
    Icon: Globe2,
    text: "www.cool-cars.co.uk",
    label: "Website",
  },
]

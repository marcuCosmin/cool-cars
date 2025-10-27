import {
  EnvelopeFill,
  GeoAltFill,
  TelephoneFill,
  type Icon,
} from "react-bootstrap-icons"

type AddressItem =
  | {
      text: string
      Icon: Icon
      type: "text"
      label: string
    }
  | {
      text: string
      href: string
      Icon: Icon
      type: "link"
      label: string
    }

const displayedPhoneNumber = "+44 7421 535 039"
const phoneNumber = displayedPhoneNumber.replaceAll(" ", "")
const email = "contact@cool-cars.co.uk"

export const addresses: AddressItem[] = [
  {
    type: "text",
    Icon: GeoAltFill,
    text: "Unit 16, Swanmore Business Park, Lower Chase Road, Swanmore, SO322PB",
    label: "Address",
  },
  {
    type: "link",
    href: `mailto:${email}`,
    Icon: EnvelopeFill,
    text: email,
    label: "Email",
  },
  {
    type: "link",
    href: `tel:${phoneNumber}`,
    Icon: TelephoneFill,
    text: displayedPhoneNumber,
    label: "Telephone",
  },
]

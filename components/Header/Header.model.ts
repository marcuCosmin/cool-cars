type LinkConfig = {
  href: string
  text: string
}

type Links = {
  label?: string
  items: LinkConfig[]
}

export type HeaderNavItem = {
  href?: string
  links?: Links[]
  text: string
}

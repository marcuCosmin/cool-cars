import Link from "next/link"
import { usePathname } from "next/navigation"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"
import { Plus } from "react-bootstrap-icons"

import type { HeaderNavItem as HeaderNavItemType } from "./Header.model"

type HeaderNavItemProps = HeaderNavItemType & {
  onNavClose?: () => void
}

export const HeaderNavItem = ({
  href,
  text,
  links,
  onNavClose,
}: HeaderNavItemProps) => {
  const pathname = usePathname()

  const isActive =
    pathname === href || links?.some(link => link.href === pathname)

  const itemClassName = `cursor-pointer text-base font-semibold hover:text-primary transition-colors ${isActive ? "text-primary" : "text-white"}`

  if (!href) {
    return (
      <li>
        <Menu>
          <MenuButton
            className={`${itemClassName} p-0 flex items-center gap-0.5 data-open:text-primary focus:outline-none focus-visible:text-primary rounded-sm`}
          >
            {text}
            <Plus
              className="h-5 w-5"
              aria-hidden="true"
            />
          </MenuButton>
          <MenuItems
            unmount={false}
            transition
            as="ul"
            anchor="bottom"
            className="z-[9999] py-2.5 px-5 flex flex-col gap-2.5 rounded-xs text-white bg-background border-border border data-focus:text-primary transition duration-200 ease-out data-closed:scale-95 data-closed:opacity-0 focus:outline-none"
          >
            {links?.map(({ href, text }, index) => (
              <MenuItem
                as="li"
                key={index}
                className="data-focus:text-primary transition-colors font-semibold text-base"
              >
                {({ close }) => {
                  const onClick = () => {
                    close()
                    onNavClose?.()
                  }

                  const isActive = pathname === href

                  return (
                    <Link
                      href={href}
                      onClick={onClick}
                      className={`${isActive ? "text-primary" : ""}`}
                    >
                      {text}
                    </Link>
                  )
                }}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </li>
    )
  }

  return (
    <li className={itemClassName}>
      <Link
        href={href}
        className={`outline-none focus-visible:text-primary ${isActive ? "text-primary" : ""}`}
        onClick={onNavClose}
      >
        {text}
      </Link>
    </li>
  )
}

import Link from "next/link"

import { usePathname } from "next/navigation"

type NavItemProps = {
  href: string
  innerText: string
  renderBreakline: boolean
}

export const NavItem = ({ href, innerText, renderBreakline }: NavItemProps) => {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <>
      <li>
        <Link
          className={`sm:uppercase font-normal whitespace-nowrap sm:underline-animated  ${isActive ? "text-primary sm:text-white sm:underline-animated-active" : "text-white"}`}
          href={href}
        >
          {innerText}
        </Link>
      </li>
      {renderBreakline && <hr className="sm:hidden" />}
    </>
  )
}

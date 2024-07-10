"use client"

import { BsList } from "react-icons/bs"

import { NavItem } from "./components/NavItem"
import { useMobileNav } from "./hooks/use-mobile-nav"

import { navToggleId } from "./constants"

const routes = [
  {
    href: "/",
    innerText: "Home",
  },
  {
    href: "/about",
    innerText: "About us",
  },
  {
    href: "/contact",
    innerText: "Contact us",
  },
]

export const Header = () => {
  const { navIsOpen, isMobileScreen, toggleNav, windowIsResizing } =
    useMobileNav()

  return (
    <header
      role="banner"
      className="flex justify-between sm:justify-normal items-center py-3 px-8 xl:px-96 sticky top-0 left-0 bg-primary"
    >
      <div className="flex text-center font-bold items-center w-[95px] h-[65px] bg-white">
        Logo placeholder
      </div>

      <button
        tabIndex={isMobileScreen ? 0 : -1}
        aria-label={`${navIsOpen ? "Close" : "Open"} navigation menu`}
        id={navToggleId}
        type="button"
        onClick={toggleNav}
      >
        <BsList className="sm:hidden w-10 h-10 text-white" />
      </button>

      <nav
        className={`fixed sm:static overflow-hidden sm:overflow-visible ${windowIsResizing ? "transition-none" : "transition-[width]"} sm:transition-none top-0 left-0 bg-black sm:bg-transparent h-full ${navIsOpen ? "w-1/2" : "w-0"} sm:w-[calc(100%-190px)]`}
      >
        <ul className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 p-6 sm:p-0">
          {routes.map((route, index) => (
            <NavItem
              {...route}
              isAccessible={isMobileScreen ? navIsOpen : true}
              renderBreakline={index !== routes.length - 1}
              key={route.href}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

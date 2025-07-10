"use client"

import Image from "next/image"

import { List } from "react-bootstrap-icons"

import { NavItem } from "./NavItem"
import { useMobileNav } from "./useMobileNav"

import { navToggleId, routes } from "./Header.constants"

export const Header = () => {
  const { navIsOpen, toggleMobileNav } = useMobileNav()

  return (
    <header
      role="banner"
      className={`z-50 flex justify-between sm:justify-normal items-center py-3 px-8 md:px-32 lg:px-80 sticky top-0 left-0 bg-black ${!navIsOpen ? "drop-shadow-[0px_4px_7px_var(--color-primary)]" : ""}`}
    >
      <div className="flex text-center font-bold items-center">
        <Image
          src="/logo.jpg"
          alt="Cool cars logo"
          width={200}
          height={65}
        />
      </div>

      <button
        className="sm:hidden"
        aria-label={`${navIsOpen ? "Close" : "Open"} navigation menu`}
        id={navToggleId}
        type="button"
        onClick={toggleMobileNav}
      >
        <List className="w-10 h-10 text-primary" />
      </button>

      <nav
        className={`fixed sm:static overflow-hidden sm:overflow-visible sm:transition-none top-0 left-0 bg-black sm:bg-transparent h-full ${
          navIsOpen ? "w-1/2" : "w-0"
        } sm:w-[calc(100%-190px)]`}
      >
        <ul className="flex flex-col sm:flex-row justify-center gap-5 sm:gap-10 p-6 sm:p-0">
          {routes.map((route, index) => (
            <NavItem
              {...route}
              isFocusable={!navIsOpen ? false : true}
              renderBreakline={index !== routes.length - 1}
              key={route.href}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

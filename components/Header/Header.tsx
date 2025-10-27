"use client"

import { useState } from "react"
import { List, X } from "react-bootstrap-icons"
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react"

import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks"
import { Logo } from "@/components/Logo"
import { AddressFields } from "@/components/AddressFields/AddressFields"

import { HeaderNavItem } from "./HeaderNavItem"

import { leftSideNavLinks, rightSideNavLinks } from "./Header.constants"

export const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const onNavClose = () => setIsNavOpen(false)
  const onNavOpen = () => setIsNavOpen(true)

  const navListClassName = "hidden md:flex items-center gap-10"

  return (
    <header
      role="banner"
      className="z-50 flex flex-col justify-between sm:justify-normal items-center py-3 px-8 sticky top-0 left-0 bg-background"
    >
      <div className="flex md:flex-col w-full max-w-7xl">
        <div className="justify-between w-full hidden md:flex">
          <SocialMediaLinks size="sm" />

          <AddressFields className="flex-row items-center gap-12" />
        </div>

        <hr className="text-secondary w-full my-2 hidden md:block" />

        <nav className="flex justify-between md:justify-center items-center gap-10 w-full">
          <ul className={navListClassName}>
            {leftSideNavLinks.map((props, index) => (
              <HeaderNavItem
                {...props}
                key={index}
              />
            ))}
          </ul>

          <Logo />

          <ul className={navListClassName}>
            {rightSideNavLinks.map((props, index) => (
              <HeaderNavItem
                {...props}
                key={index}
              />
            ))}
          </ul>

          <button
            type="button"
            aria-label="Open navigation panel"
            className="md:hidden"
            onClick={onNavOpen}
          >
            <List
              className="w-8 h-8 text-primary"
              aria-hidden="true"
            />
          </button>

          <Dialog
            as="nav"
            open={isNavOpen}
            onClose={onNavClose}
            className="fixed top-0 left-0 z-[9000] md:hidden h-screen focus:outline-none min-w-3xs"
          >
            <DialogBackdrop
              transition
              className="z-[9500] fixed inset-0 bg-secondary/50 duration-300 ease-out data-closed:-translate-x-full"
            />

            <DialogPanel
              transition
              className="relative z-[9999] p-5 h-full bg-background duration-300 delay-300 ease-in-out data-closed:-translate-x-full"
            >
              <div className="flex justify-between items-start">
                <Logo />

                <button
                  type="button"
                  aria-label="Close navigation panel"
                  className="text-primary"
                  onClick={onNavClose}
                >
                  <X
                    aria-hidden="true"
                    className="h-8 w-8"
                  />
                </button>
              </div>

              <ul className="mt-10 flex flex-col gap-4">
                {[...leftSideNavLinks, ...rightSideNavLinks].map(
                  (props, index) => (
                    <HeaderNavItem
                      {...props}
                      key={index}
                    />
                  )
                )}
              </ul>
            </DialogPanel>
          </Dialog>
        </nav>
      </div>
    </header>
  )
}

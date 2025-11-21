"use client"

import { type ReactNode } from "react"
import { DashLg, PlusLg } from "react-bootstrap-icons"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

type CollapsibleProps = {
  title: string
  children: ReactNode
}

export const Collapsible = ({ title, children }: CollapsibleProps) => (
  <Disclosure as="div">
    {({ open }) => (
      <>
        <DisclosureButton
          as="h2"
          className={`flex p-3 font-bold cursor-pointer items-center justify-between transition-colors duration-300 hover:text-primary ${open ? "text-white" : "text-paragraph"}`}
        >
          {title} {open ? <DashLg /> : <PlusLg />}
        </DisclosureButton>
        <DisclosurePanel
          static
          unmount={false}
          as="p"
          className={`[transition-property:opacity,height] [transition-duration:0.3s,0s] [transition-delay:0s,0.3s] [transition-timing-function:ease-in-out,ease-in-out] overflow-hidden px-3 text-white ${open ? "opacity-100 h-full" : "opacity-0 h-0"}`}
        >
          {children}
        </DisclosurePanel>

        <hr className="mt-3" />
      </>
    )}
  </Disclosure>
)

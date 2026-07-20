"use client"

import { type ElementType, type ReactNode } from "react"
import { DashLg, PlusLg } from "react-bootstrap-icons"
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react"

import { mergeClassNames } from "@/utils/mergeClassNames"

type CollapsibleProps = {
  title: string
  children: ReactNode
  as?: ElementType
  buttonClassName?: string
}

export const Collapsible = ({
  title,
  children,
  as = "h2",
  buttonClassName,
}: CollapsibleProps) => (
  <Disclosure as="div">
    {({ open }) => (
      <>
        <DisclosureButton
          as={as}
          className={mergeClassNames(
            `flex p-3 font-bold cursor-pointer items-center justify-between transition-colors duration-300 hover:text-primary ${open ? "text-white" : "text-paragraph"}`,
            buttonClassName
          )}
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

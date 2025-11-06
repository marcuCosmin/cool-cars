"use client"

import Link from "next/link"

import { Fragment, useState } from "react"

import { CookiesDialog } from "@/components/CookiesDialog"

import { routes } from "@/globals/globals.const"

export const FooterBottomLinks = () => {
  const [isCookieDialogOpen, setIsCookieDialogOpen] = useState(false)

  const policiesLinks = [
    { href: routes.termsAndConditions, text: "Terms & Conditions" },
    { href: routes.privacyPolicy, text: "Privacy Policy" },
    { onClick: () => setIsCookieDialogOpen(true), text: "Cookies Policy" },
    { href: routes.faq, text: "FAQ" },
  ]

  return (
    <>
      <ul className="flex items-center flex-wrap gap-5">
        {policiesLinks.map(({ href, text, onClick }, index) => {
          const renderSeparator = index < policiesLinks.length - 1

          const renderedItem = onClick ? (
            <button
              type="button"
              className="p-0 hover:text-primary font-normal"
              onClick={onClick}
            >
              {text}
            </button>
          ) : (
            <Link href={href}>{text}</Link>
          )

          return (
            <Fragment key={index}>
              <li>{renderedItem}</li>

              {renderSeparator && (
                <div
                  aria-hidden="true"
                  className="text-primary font-bold"
                >
                  |
                </div>
              )}
            </Fragment>
          )
        })}
      </ul>

      <CookiesDialog
        isOpen={isCookieDialogOpen}
        setIsOpen={setIsCookieDialogOpen}
      />
    </>
  )
}

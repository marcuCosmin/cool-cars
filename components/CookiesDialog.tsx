"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { useEffect } from "react"
import { Dialog, DialogPanel } from "@headlessui/react"

import { routes } from "@/globals/globals.const"

type CookiesDialogProps = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const CookiesDialog = ({ isOpen, setIsOpen }: CookiesDialogProps) => {
  const pathname = usePathname()
  const isCookiePolicyPage = pathname === "/cookie-policy"

  const handleCookieConsent = (consent: boolean) => {
    const event = new CustomEvent("cookies-policy", { detail: consent })

    localStorage.setItem("cookies-consent", JSON.stringify(consent))

    window.dispatchEvent(event)

    setIsOpen(false)
  }

  const onAccept = () => handleCookieConsent(true)
  const onDecline = () => handleCookieConsent(false)

  useEffect(() => {
    if (isCookiePolicyPage) {
      setIsOpen(false)
      return
    }

    const storedConsent = localStorage.getItem("cookies-consent")

    if (storedConsent !== null) {
      return
    }

    setIsOpen(true)
  }, [isCookiePolicyPage])

  if (!isOpen) {
    return null
  }

  return (
    <Dialog
      className="fixed inset-0 z-9999 w-full h-full bg-secondary/50 flex items-end justify-end"
      open={isOpen}
      onClose={() => {}}
    >
      <DialogPanel className="flex flex-col gap-5 bg-background p-5 rounded-sm">
        <p>
          <b>We use cookies</b> to improve your experience, personalise content,
          and analyse website traffic. By continuing to use our site, you agree
          to our use of cookies.
        </p>

        <div className="flex flex-wrap items-center gap-5">
          <button
            className="p-2 bg-transparent text-primary border border-primary rounded-sm hover:bg-primary hover:text-white"
            onClick={onAccept}
          >
            Accept All
          </button>
          <button
            className="rounded-sm p-2 border text-white border-white bg-transparent hover:bg-white hover:text-black"
            onClick={onDecline}
          >
            Reject Non-Essential
          </button>
          <Link
            target="_blank"
            href={routes.cookiesPolicy}
          >
            Cookie Policy
          </Link>
        </div>
      </DialogPanel>
    </Dialog>
  )
}


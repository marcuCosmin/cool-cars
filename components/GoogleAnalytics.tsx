"use client"

import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google"

import { useEffect, useState } from "react"

export const GoogleAnalytics = () => {
  const [isPermitted, setIsPermitted] = useState(false)

  useEffect(() => {
    const storedConsent = localStorage.getItem("cookies-consent")

    if (storedConsent !== null) {
      const parseConsent = JSON.parse(storedConsent)
      setIsPermitted(parseConsent)
    }

    const handleCookiePolicyEvent = (event: Event) => {
      const detail = (event as CustomEvent).detail
      setIsPermitted(detail)
    }

    window.addEventListener("cookies-policy", handleCookiePolicyEvent)

    return () =>
      window.removeEventListener("cookies-policy", handleCookiePolicyEvent)
  }, [])

  if (!isPermitted) {
    return null
  }

  return <NextGoogleAnalytics gaId="AW-17129798926" />
}

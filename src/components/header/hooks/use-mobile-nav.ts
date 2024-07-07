import { usePathname } from "next/navigation"

import { useCallback, useEffect, useState } from "react"

import { navToggleId } from "../constants"

export const useMobileNav = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false)

  // On navigation, close the nav
  const pathname = usePathname()

  useEffect(() => {
    if (!isMobileScreen) {
      return
    }

    setNavIsOpen(false)
  }, [pathname, isMobileScreen])

  // Logic to handle the nav toggle
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = useCallback(() => setNavIsOpen(!navIsOpen), [navIsOpen])

  // This function is purposefully declared outside of the useEffect to prevent it from being redeclared on every useEffect call and memoized with useCallback to prevent unnecessary redeclarations
  const detectOutsideClick = useCallback((event: MouseEvent) => {
    const target = event.target as HTMLElement

    const targetIsNavToggle = target.closest(`#${navToggleId}`)

    if (targetIsNavToggle) {
      return
    }

    const targetIsNav = target.closest("nav")

    if (!targetIsNav) {
      setNavIsOpen(false)
    }
  }, [])

  // This function is purposefully declared outside of the useEffect to prevent it from being redeclared on every useEffect call and memoized with useCallback to prevent unnecessary redeclarations
  const handleEscape = useCallback(({ key }: KeyboardEvent) => {
    if (key !== "Escape") {
      return
    }

    setNavIsOpen(false)
  }, [])

  useEffect(() => {
    if (!navIsOpen || !isMobileScreen) {
      return
    }

    window.addEventListener("keyup", handleEscape)
    window.addEventListener("click", detectOutsideClick)

    return () => {
      window.removeEventListener("keyup", handleEscape)
      window.removeEventListener("click", detectOutsideClick)
    }
  }, [navIsOpen, isMobileScreen, handleEscape, detectOutsideClick])

  // Logic to determine if the window is resizing to prevent the transition glitch for the nav
  const [windowIsResizing, setWindowIsResizing] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowIsResizing(true)

      if (window.innerWidth >= 600) {
        setIsMobileScreen(false)
        setNavIsOpen(false)
        return
      }

      setIsMobileScreen(true)

      setTimeout(() => setWindowIsResizing(false), 0)
    }

    handleResize()

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { windowIsResizing, navIsOpen, isMobileScreen, toggleNav }
}

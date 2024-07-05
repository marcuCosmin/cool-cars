import { usePathname } from "next/navigation"

import { useCallback, useEffect, useState } from "react"

import { navToggleId } from "../constants"

export const useNav = () => {
  // Logic to determine if the window is resizing to prevent the transition glitch for the nav
  const [windowIsResizing, setWindowIsResizing] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setWindowIsResizing(true)

      setTimeout(() => setWindowIsResizing(false), 0)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // On navigation, close the nav
  const pathname = usePathname()

  useEffect(() => setNavIsOpen(false), [pathname])

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

  useEffect(() => {
    if (!navIsOpen) {
      return
    }

    window.addEventListener("click", detectOutsideClick)

    return () => window.removeEventListener("click", detectOutsideClick)
  }, [navIsOpen, detectOutsideClick])

  return { windowIsResizing, navIsOpen, toggleNav }
}

import { usePathname } from "next/navigation"

import { useEffect, useState } from "react"

import { useDebouncedCallback } from "use-debounce"

import { navToggleId } from "./constants"

export const useMobileNav = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false)
  const [navIsOpen, setNavIsOpen] = useState(false)
  const pathname = usePathname()

  const onResize = useDebouncedCallback(() => {
    if (window.innerWidth >= 650) {
      setIsMobileScreen(false)
      return
    }

    setIsMobileScreen(true)
  }, 100)

  const toggleMobileNav = () => setNavIsOpen((current) => !current)

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    return () => window.removeEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    if (!isMobileScreen) {
      return
    }

    setNavIsOpen(false)
  }, [pathname, isMobileScreen])

  useEffect(() => {
    if (!navIsOpen || !isMobileScreen) {
      return
    }

    const onKeyUp = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return
      }

      setNavIsOpen(false)
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      const targetIsNavToggle = target.closest(`#${navToggleId}`)

      if (targetIsNavToggle) {
        return
      }

      const targetIsNav = target.closest("nav")

      if (!targetIsNav) {
        setNavIsOpen(false)
      }
    }

    window.addEventListener("keyup", onKeyUp)
    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("keyup", onKeyUp)
      window.removeEventListener("click", onClick)
    }
  }, [navIsOpen, isMobileScreen])

  return { navIsOpen, toggleMobileNav }
}

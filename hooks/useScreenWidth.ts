import { useEffect, useState } from "react"
import { useDebouncedCallback } from "use-debounce"

export const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  const debouncedResize = useDebouncedCallback(
    () => setScreenWidth(window.innerWidth),
    300
  )

  useEffect(() => {
    debouncedResize()

    window.addEventListener("resize", debouncedResize)

    return () => window.removeEventListener("resize", debouncedResize)
  }, [])

  return screenWidth
}

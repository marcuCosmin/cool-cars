import { useEffect, useState } from "react"

type UseCarouselAutoSlideProps = {
  onSlideRight: () => void
}

export const useCarouselAutoSlide = ({
  onSlideRight,
}: UseCarouselAutoSlideProps) => {
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  useEffect(() => {
    if (!isAutoSliding) {
      return
    }

    const intervalId = setInterval(() => {
      onSlideRight()
    }, 3000)

    return () => clearInterval(intervalId)
  }, [isAutoSliding, onSlideRight])

  return { isAutoSliding, setIsAutoSliding }
}

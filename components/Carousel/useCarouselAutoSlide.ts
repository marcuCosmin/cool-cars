import { useEffect, useState } from "react"

type UseCarouselAutoSlideProps = {
  isDragging: boolean
  onSlideRight: () => void
}

export const useCarouselAutoSlide = ({
  isDragging,
  onSlideRight,
}: UseCarouselAutoSlideProps) => {
  const [isAutoSliding, setIsAutoSliding] = useState(true)

  useEffect(() => {
    if (!isAutoSliding || isDragging) {
      return
    }

    const intervalId = setInterval(() => {
      onSlideRight()
    }, 3000)

    return () => clearInterval(intervalId)
  }, [isAutoSliding, isDragging, onSlideRight])

  return { isAutoSliding, setIsAutoSliding }
}


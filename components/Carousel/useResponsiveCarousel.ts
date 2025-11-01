import { useEffect, useState, type RefObject } from "react"

import { useScreenWidth } from "@/hooks/useScreenWidth"

import { getItemWidth, getSlidesShown, getTransformX } from "./Carousel.utils"

import type { CarouselProps } from "./Carousel.model"

type UseResponsiveCarouselProps = Required<
  Pick<CarouselProps, "slidesShownConfig" | "itemsGap">
> & {
  containerRef: RefObject<HTMLDivElement | null>
  listRef: RefObject<HTMLUListElement | null>
  setIsTransitioning: (isTransitioning: boolean) => void
  setTransformX: (transformX: number) => void
}

export const useResponsiveCarousel = ({
  slidesShownConfig,
  itemsGap,
  containerRef,
  listRef,
  setIsTransitioning,
  setTransformX,
}: UseResponsiveCarouselProps) => {
  const screenWidth = useScreenWidth()

  const [slidesShown, setSlidesShown] = useState(
    getSlidesShown({ slidesShownConfig, screenWidth })
  )

  const [itemWidth, setItemWidth] = useState(0)

  useEffect(() => {
    const transformX = getTransformX({
      containerRef: containerRef,
      listRef: listRef,
    })
    const activeIndex = transformX / (-itemWidth - itemsGap)

    const newSlidesShown = getSlidesShown({ slidesShownConfig, screenWidth })

    const newItemWidth = getItemWidth({
      slidesShown: newSlidesShown,
      containerElement: containerRef.current,
      itemsGap,
    })

    if (newItemWidth === itemWidth) {
      return
    }

    const slidesRemoved = slidesShown - newSlidesShown
    const newIndex =
      activeIndex < slidesRemoved ? 0 : activeIndex - slidesRemoved
    const matchingTransformX = (-newItemWidth - itemsGap) * newIndex

    setItemWidth(newItemWidth)
    setSlidesShown(newSlidesShown)
    setIsTransitioning(true)
    setTransformX(matchingTransformX)
  }, [screenWidth, itemWidth])

  return { slidesShown, itemWidth }
}

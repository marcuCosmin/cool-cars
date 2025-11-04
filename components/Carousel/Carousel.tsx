"use client"

import { Children, useCallback, useRef, useState } from "react"

import { getItemWidth, getTransformX } from "./Carousel.utils"

import { useCarouselDrag } from "./useCarouselDrag"
import { useCarouselAutoSlide } from "./useCarouselAutoSlide"
import { useResponsiveCarousel } from "./useResponsiveCarousel"

import { CarouselControls } from "./CarouselControls"
import { CarouselList } from "./CarouselList"
import { CarouselTabs } from "./CarouselTabs"

import type { CarouselProps } from "./Carousel.model"

export const Carousel = ({
  slidesShownConfig = { min: 1, breakPoints: { 650: 2, 1200: 3 } },
  loop = true,
  transitionDuration = 300,
  children,
  itemsGap = 20,
}: CarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const [isTransitioning, setIsTransitioning] = useState(true)
  const [transformX, setTransformX] = useState(0)

  const { slidesShown, itemWidth } = useResponsiveCarousel({
    slidesShownConfig,
    itemsGap,
    containerRef,
    listRef,
    setIsTransitioning,
    setTransformX,
  })

  const initialItems = Children.toArray(children)
  const items = loop
    ? [
        ...initialItems.slice(-slidesShown),
        ...initialItems,
        ...initialItems.slice(0, slidesShown),
      ]
    : initialItems

  const onSlide = useCallback(
    (direction: "left" | "right") => {
      let isLimitReached = false
      let originalSlidesTransformX = 0

      const itemWidth = getItemWidth({
        slidesShown,
        containerElement: containerRef.current,
        itemsGap,
      })

      const transformX = getTransformX({
        containerRef: containerRef,
        listRef: listRef,
      })

      const originalSlideSpace = -itemWidth - itemsGap

      if (direction === "right") {
        const gapLimitExtraSpace = itemsGap * (slidesShown - 1)
        const transformXLimit =
          (-itemWidth - gapLimitExtraSpace) * (items.length - slidesShown)

        isLimitReached = transformX - itemWidth < transformXLimit

        originalSlidesTransformX = originalSlideSpace * slidesShown
      } else {
        const transformXLimit = 0

        isLimitReached = transformX + itemWidth > transformXLimit
        originalSlidesTransformX =
          originalSlideSpace * (items.length - slidesShown * 2)
      }

      if (isLimitReached && loop) {
        setIsTransitioning(false)
        setTransformX(originalSlidesTransformX)
      }

      setTimeout(() => {
        setIsTransitioning(true)
        setTransformX(prev =>
          direction === "right"
            ? prev - itemWidth - itemsGap
            : prev + itemWidth + itemsGap
        )
      }, 0)
    },
    [slidesShown]
  )

  const onSlideLeft = useCallback(() => onSlide("left"), [onSlide])
  const onSlideRight = useCallback(() => onSlide("right"), [onSlide])

  const { isDragging } = useCarouselDrag({
    containerRef,
    listRef,
    slidesShown,
    loop,
    transitionDuration,
    itemsCount: items.length,
    itemsGap,
    setIsTransitioning,
    setTransformX,
  })

  const { isAutoSliding, setIsAutoSliding } = useCarouselAutoSlide({
    onSlideRight,
    isDragging,
  })
  const onFocus = () => setIsAutoSliding(false)
  const onListMouseEnter = () => setIsAutoSliding(false)
  const onListMouseLeave = () => setIsAutoSliding(true)
  const onTabClick = (index: number) => {
    setIsTransitioning(true)
    setTransformX((-itemWidth - itemsGap) * index)
  }

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      className="flex flex-col items-center w-full select-none"
      aria-label="Testimonials"
      onFocus={onFocus}
    >
      <CarouselList
        containerRef={containerRef}
        listRef={listRef}
        itemsGap={itemsGap}
        items={items}
        itemWidth={itemWidth}
        slidesShown={slidesShown}
        transformX={transformX}
        isTransitioning={isTransitioning}
        transitionDuration={transitionDuration}
        isAutoSliding={isAutoSliding}
        onMouseEnter={onListMouseEnter}
        onMouseLeave={onListMouseLeave}
      />

      <CarouselControls
        itemWidth={itemWidth}
        onSlideLeft={onSlideLeft}
        onSlideRight={onSlideRight}
        isAutoSliding={isAutoSliding}
        setIsAutoSliding={setIsAutoSliding}
      />

      <CarouselTabs
        loop={loop}
        items={items}
        itemsGap={itemsGap}
        slidesShown={slidesShown}
        transformX={transformX}
        itemWidth={itemWidth}
        onTabClick={onTabClick}
      />
    </div>
  )
}


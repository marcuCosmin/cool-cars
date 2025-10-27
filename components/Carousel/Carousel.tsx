"use client"

import { Children, useCallback, useRef, useState } from "react"

import {
  getItemDuplicateMatchingTransformX,
  getItemWidth,
  getTransformX,
  isItemHidden,
} from "./Carousel.utils"
import {
  ChevronLeft,
  ChevronRight,
  PauseCircle,
  PlayCircle,
} from "react-bootstrap-icons"

import { useCarouselDrag } from "./useCarouselDrag"
import { useCarouselAutoSlide } from "./useCarouselAutoSlide"

import type { CarouselProps } from "./Carousel.model"

export const Carousel = ({
  slidesShown = 3,
  loop = true,
  transitionDuration = 300,
  children,
  itemsGap = 20,
}: CarouselProps) => {
  const initialItems = Children.toArray(children)
  const items = loop
    ? [
        ...initialItems.slice(-slidesShown),
        ...initialItems,
        ...initialItems.slice(0, slidesShown),
      ]
    : initialItems

  const containerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const itemWidth = getItemWidth({
    slidesShown,
    containerElement: containerRef.current,
    itemsGap,
  })

  const [isTransitioning, setIsTransitioning] = useState(true)
  const [transformX, setTransformX] = useState(0)

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

  const { isAutoSliding, setIsAutoSliding } = useCarouselAutoSlide({
    onSlideRight,
  })
  useCarouselDrag({
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

  const onFocus = () => setIsAutoSliding(false)
  const onMouseEnter = () => setIsAutoSliding(false)
  const onMouseLeave = () => setIsAutoSliding(true)

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      className="flex flex-col items-center w-full select-none"
      aria-label="Testimonials"
      onFocus={onFocus}
    >
      <div
        ref={containerRef}
        className="overflow-hidden w-full h-full"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <ul
          aria-atomic="false"
          aria-live={isAutoSliding ? "off" : "polite"}
          ref={listRef}
          className="flex w-fit"
          style={{
            gap: `${itemsGap}px`,
            transform: `translateX(${transformX}px)`,
            transition: isTransitioning
              ? `transform ${transitionDuration}ms ease`
              : "none",
          }}
        >
          {items.map((item, index) => {
            const itemWidth = getItemWidth({
              slidesShown,
              containerElement: containerRef.current,
              itemsGap,
            })

            const hidden = isItemHidden({
              index,
              transformX,
              itemWidth,
              slidesShown,
              itemsGap,
            })

            return (
              <li
                className="shadow-sm p-2"
                role="tabpanel"
                key={index}
                aria-hidden={hidden}
                id={`slide-${index + 1}`}
                style={{ width: itemWidth }}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>

      <div className="flex items-center">
        <button
          type="button"
          className="p-2 text-primary hover:text-white duration-300 transition-colors"
          aria-label="Slide left"
          onClick={onSlideLeft}
        >
          <ChevronLeft size={40} />
        </button>
        <button
          type="button"
          className="p-2 text-primary hover:text-white duration-300 transition-colors"
          onClick={() => setIsAutoSliding(!isAutoSliding)}
          aria-label={
            isAutoSliding ? "Pause auto sliding" : "Play auto sliding"
          }
        >
          {isAutoSliding ? <PauseCircle size={40} /> : <PlayCircle size={40} />}
        </button>
        <button
          type="button"
          className="p-2 text-primary hover:text-white duration-300 transition-colors"
          aria-label="Slide right"
          onClick={onSlideRight}
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div
        role="tablist"
        className="flex gap-2.5"
      >
        {items.map((_, index) => {
          const isLeftSideDuplicate = index < slidesShown
          const isRightSideDuplicate = index >= items.length - slidesShown

          const isDuplicate =
            loop && (isLeftSideDuplicate || isRightSideDuplicate)

          if (isDuplicate) {
            return null
          }

          const duplicateMatchingTransformX =
            getItemDuplicateMatchingTransformX({
              loop,
              index,
              itemWidth,
              slidesShown,
              itemsCount: items.length,
              itemsGap,
            })

          const matchingTransformX = (-itemWidth - itemsGap) * index

          const isDuplicateActive = transformX === duplicateMatchingTransformX

          const isActive =
            transformX === matchingTransformX || isDuplicateActive

          const onClick = () => {
            setIsTransitioning(true)
            setTransformX((-itemWidth - itemsGap) * index)
          }

          return (
            <button
              type="button"
              role="tab"
              key={index}
              aria-selected={isActive}
              aria-controls={`slide-${index + 1}`}
              aria-label={`Go to slide ${index + 1}`}
              className="group"
              onClick={onClick}
            >
              <div
                aria-hidden="true"
                className={`h-2 w-2 rounded-full transition-colors duration-300 group-hover:bg-white ${isActive ? "bg-primary" : "bg-secondary"}`}
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

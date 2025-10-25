"use client"

import { Children, useRef, useState } from "react"

import {
  getItemDuplicateMatchingTransformX,
  getItemWidth,
  isItemHidden,
} from "./Carousel.utils"
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons"

import { useCarouselDrag } from "./useCarouselDrag"

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

  const onSlide = (direction: "left" | "right") => {
    let isLimitReached = false
    let originalSlidesTransformX = 0

    const itemWidth = getItemWidth({
      slidesShown,
      containerElement: containerRef.current,
      itemsGap,
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
  }

  const onSlideLeft = () => onSlide("left")
  const onSlideRight = () => onSlide("right")

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      className="flex flex-col items-center w-full select-none"
      aria-label="Testimonials"
    >
      <div className="flex items-center gap-5 w-full h-full">
        <button
          type="button"
          className="p-2 text-primary hover:text-white duration-300 transition-colors"
          aria-label="Slide left"
          onClick={onSlideLeft}
        >
          <ChevronLeft size={40} />
        </button>

        <div
          ref={containerRef}
          className="overflow-hidden w-full h-full"
        >
          <ul
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
              const hidden = isItemHidden({
                index,
                transformX,
                itemWidth,
                slidesShown,
              })

              return (
                <li
                  className="shadow-sm shadow-green-300 p-2"
                  role="tabpanel"
                  key={index}
                  aria-hidden={hidden}
                  style={{ width: itemWidth }}
                >
                  {item}
                  {index}
                </li>
              )
            })}
          </ul>
        </div>

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

import { type ReactNode } from "react"

import { getItemDuplicateMatchingTransformX } from "./Carousel.utils"

import type { CarouselProps } from "./Carousel.model"

type CarouselTabsProps = Required<Pick<CarouselProps, "itemsGap" | "loop">> & {
  items: ReactNode[]
  slidesShown: number
  transformX: number
  itemWidth: number
  onTabClick: (index: number) => void
}

export const CarouselTabs = ({
  loop,
  items,
  itemsGap,
  slidesShown,
  transformX,
  itemWidth,
  onTabClick,
}: CarouselTabsProps) => {
  return (
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

        const duplicateMatchingTransformX = getItemDuplicateMatchingTransformX({
          loop,
          index,
          itemWidth,
          slidesShown,
          itemsCount: items.length,
          itemsGap,
        })

        const matchingTransformX = (-itemWidth - itemsGap) * index

        const isDuplicateActive = transformX === duplicateMatchingTransformX

        const isActive = transformX === matchingTransformX || isDuplicateActive

        const onClick = () => onTabClick(index)

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
  )
}

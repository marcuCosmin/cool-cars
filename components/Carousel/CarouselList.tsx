import { type ReactNode, type RefObject } from "react"

import { isItemHidden } from "./Carousel.utils"
import { CarouselProps } from "./Carousel.model"

type CarouselListProps = Required<Pick<CarouselProps, "itemsGap">> & {
  containerRef: RefObject<HTMLDivElement | null>
  listRef: RefObject<HTMLUListElement | null>
  items: ReactNode[]
  itemWidth: number
  slidesShown: number
  transformX: number
  isTransitioning: boolean
  transitionDuration: number
  isAutoSliding: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export const CarouselList = ({
  containerRef,
  listRef,
  itemsGap,
  items,
  itemWidth,
  slidesShown,
  transformX,
  isTransitioning,
  transitionDuration,
  isAutoSliding,
  onMouseEnter,
  onMouseLeave,
}: CarouselListProps) => {
  return (
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
          const hidden = isItemHidden({
            index,
            transformX,
            itemWidth,
            slidesShown,
            itemsGap,
          })

          return (
            <li
              className={`shadow-sm p-2 transition-opacity duration-300 ${itemWidth ? "h-auto opacity-100" : "h-0 opacity-0"}`}
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
  )
}

import { RefObject } from "react"
import { CarouselProps } from "./Carousel.model"

type GetItemWidthProps = Required<
  Pick<CarouselProps, "slidesShown" | "itemsGap">
> & {
  containerElement: HTMLDivElement | null
}

export const getItemWidth = ({
  slidesShown,
  containerElement,
  itemsGap,
}: GetItemWidthProps) => {
  if (!containerElement) {
    return 0
  }

  const gapExtraSpace = itemsGap * (slidesShown - 1)

  const containerWidth =
    containerElement.getBoundingClientRect().width - gapExtraSpace
  const itemWidth = containerWidth / slidesShown

  return Math.round(itemWidth)
}

type IsItemHiddenProps = {
  index: number
  transformX: number
  itemWidth: number
  slidesShown: number
}

export const isItemHidden = ({
  index,
  transformX,
  itemWidth,
  slidesShown,
}: IsItemHiddenProps) => {
  const minVisibleX = -(index + 1) * itemWidth
  const maxVisibleX = -1 * itemWidth * (index - slidesShown)

  if (minVisibleX >= transformX) {
    return true
  }

  if (maxVisibleX <= transformX) {
    return true
  }

  return false
}

type GetTransformXProps = {
  containerRef: RefObject<HTMLDivElement | null>
  listRef: RefObject<HTMLUListElement | null>
}

export const getTransformX = ({
  containerRef,
  listRef,
}: GetTransformXProps) => {
  if (!containerRef.current || !listRef.current) {
    return 0
  }

  const containerRect = containerRef.current.getBoundingClientRect()
  const listRect = listRef.current.getBoundingClientRect()

  const transformX = listRect.x - containerRect.x

  return Math.round(transformX)
}

type GetItemDuplicateMatchingTransformXProps = Required<
  Pick<CarouselProps, "loop" | "slidesShown" | "itemsGap">
> & {
  index: number
  itemsCount: number
  itemWidth: number
}

export const getItemDuplicateMatchingTransformX = ({
  loop,
  index,
  itemWidth,
  slidesShown,
  itemsCount,
  itemsGap,
}: GetItemDuplicateMatchingTransformXProps) => {
  if (!loop) {
    return
  }

  const hasDuplicateOnRight = index < slidesShown * 2
  const hasDuplicateOnLeft = index > itemsCount - 1 - slidesShown * 2

  const hasDuplicate = hasDuplicateOnLeft || hasDuplicateOnRight

  if (!hasDuplicate) {
    return
  }

  if (hasDuplicateOnLeft) {
    const duplicateIndex = index - (itemsCount - slidesShown * 2)
    const duplicateMatchingTransformX = (-itemWidth - itemsGap) * duplicateIndex

    return duplicateMatchingTransformX
  }

  const duplicateIndex = itemsCount - slidesShown * 2 + index

  const duplicateMatchingTransformX = (-itemWidth - itemsGap) * duplicateIndex

  return duplicateMatchingTransformX
}

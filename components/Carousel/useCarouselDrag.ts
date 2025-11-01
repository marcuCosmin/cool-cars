import {
  RefObject,
  useEffect,
  useRef,
  type Dispatch,
  type SetStateAction,
} from "react"

import { getItemWidth, getTransformX } from "./Carousel.utils"

import type { CarouselProps } from "./Carousel.model"

type UseCarouselDragProps = Required<
  Pick<CarouselProps, "loop" | "transitionDuration" | "itemsGap">
> & {
  slidesShown: number
  containerRef: RefObject<HTMLDivElement | null>
  listRef: RefObject<HTMLUListElement | null>
  itemsCount: number
  setIsTransitioning: (value: boolean) => void
  setTransformX: Dispatch<SetStateAction<number>>
}

export const useCarouselDrag = ({
  containerRef,
  listRef,
  slidesShown,
  loop,
  transitionDuration,
  itemsCount,
  itemsGap,
  setIsTransitioning,
  setTransformX,
}: UseCarouselDragProps) => {
  const initialTransformX = useRef(0)
  const prevClientX = useRef(0)
  const isDraggingRef = useRef(false)

  const onDragStart = (event: MouseEvent | TouchEvent) => {
    const eventTarget = event.target as HTMLElement | null

    if (
      !eventTarget ||
      !containerRef.current?.contains(eventTarget) ||
      !listRef.current
    ) {
      return
    }

    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX

    initialTransformX.current = getTransformX({
      containerRef,
      listRef,
    })
    prevClientX.current = clientX

    setIsTransitioning(false)
    isDraggingRef.current = true
  }

  const onDragEnd = () => {
    if (!listRef.current || !containerRef.current || !isDraggingRef.current) {
      return
    }

    const itemWidth = getItemWidth({
      slidesShown,
      containerElement: containerRef.current,
      itemsGap,
    })

    const currentTransformX = getTransformX({
      containerRef,
      listRef,
    })

    if (currentTransformX > 0) {
      setTransformX(0)
      isDraggingRef.current = false
      setIsTransitioning(true)

      if (loop) {
        setTimeout(() => {
          const itemIndex = itemsCount - slidesShown * 2
          setIsTransitioning(false)
          setTransformX((-itemWidth - itemsGap) * itemIndex)
        }, transitionDuration)
      }
      return
    }

    const maxTransformX = (-itemWidth - itemsGap) * (itemsCount - slidesShown)

    if (currentTransformX < maxTransformX) {
      setTransformX(maxTransformX)
      setIsTransitioning(true)
      isDraggingRef.current = false

      if (loop) {
        setTimeout(() => {
          setIsTransitioning(false)
          setTransformX((-itemWidth - itemsGap) * slidesShown)
        }, transitionDuration)
      }
      return
    }

    const diff = currentTransformX - initialTransformX.current
    const slidesMoved = Math.round(diff / itemWidth)

    setTransformX(
      initialTransformX.current + slidesMoved * (itemWidth + itemsGap)
    )
    setIsTransitioning(true)
    isDraggingRef.current = false
  }

  const onDrag = (event: MouseEvent | TouchEvent) => {
    if (!isDraggingRef.current || !containerRef.current) {
      return
    }

    const itemWidth = getItemWidth({
      slidesShown,
      containerElement: containerRef.current,
      itemsGap,
    })

    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX

    const currentX = clientX - prevClientX.current

    if (!currentX) {
      return
    }

    const maxNegativeTransformX = -itemWidth * (itemsCount - 2)
    const maxPositiveTransformX = itemWidth

    const currentTransformX = getTransformX({
      containerRef,
      listRef,
    })

    if (
      currentTransformX > maxPositiveTransformX &&
      clientX > prevClientX.current
    ) {
      prevClientX.current = clientX
      setTransformX(maxPositiveTransformX)
      return
    }

    if (
      currentTransformX < maxNegativeTransformX &&
      clientX < prevClientX.current
    ) {
      prevClientX.current = clientX
      setTransformX(maxNegativeTransformX)
      return
    }

    prevClientX.current = clientX
    setTransformX(prev => prev + currentX)
  }

  useEffect(() => {
    window.addEventListener("mousedown", onDragStart)
    window.addEventListener("mouseup", onDragEnd)
    window.addEventListener("touchstart", onDragStart)
    window.addEventListener("touchend", onDragEnd)
    window.addEventListener("mousemove", onDrag)
    window.addEventListener("touchmove", onDrag)

    return () => {
      window.removeEventListener("mousedown", onDragStart)
      window.removeEventListener("mouseup", onDragEnd)
      window.removeEventListener("touchstart", onDragStart)
      window.removeEventListener("touchend", onDragEnd)
      window.removeEventListener("mousemove", onDrag)
      window.removeEventListener("touchmove", onDrag)
    }
  }, [slidesShown])

  return { isDragging: isDraggingRef.current }
}

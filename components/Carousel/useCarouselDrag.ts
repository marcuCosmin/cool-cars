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
  Pick<CarouselProps, "slidesShown" | "loop" | "transitionDuration">
> & {
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
  setIsTransitioning,
  setTransformX,
}: UseCarouselDragProps) => {
  const InitialTransformX = useRef(0)
  const prevClientX = useRef(0)
  const isDraggingRef = useRef(false)

  const onDragStart = (event: MouseEvent | TouchEvent) => {
    const eventTarget = event.target as HTMLElement | null
    const clientX =
      event instanceof MouseEvent ? event.clientX : event.touches[0].clientX

    if (
      !eventTarget ||
      !containerRef.current?.contains(eventTarget) ||
      !listRef.current
    ) {
      return
    }

    const containerRect = containerRef.current.getBoundingClientRect()
    const listRect = listRef.current.getBoundingClientRect()

    InitialTransformX.current = listRect.x - containerRect.x
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
          setIsTransitioning(false)
          setTransformX(-itemWidth * (itemsCount - slidesShown * 2))
        }, transitionDuration)
      }
      return
    }

    const maxTransformX = -itemWidth * (itemsCount - slidesShown)

    if (currentTransformX < maxTransformX) {
      setTransformX(maxTransformX)
      setIsTransitioning(true)
      isDraggingRef.current = false

      if (loop) {
        setTimeout(() => {
          setIsTransitioning(false)
          setTransformX(-itemWidth * slidesShown)
        }, transitionDuration)
      }
      return
    }

    const diff = currentTransformX - InitialTransformX.current
    const slidesMoved = Math.round(diff / itemWidth)

    setTransformX(InitialTransformX.current + slidesMoved * itemWidth)
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
  }, [])
}

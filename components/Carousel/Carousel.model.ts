import type { PropsWithChildren } from "react"

export type CarouselProps = PropsWithChildren<{
  slidesShown?: number
  loop?: boolean
  transitionDuration?: number
}>

import type { PropsWithChildren } from "react"

export type CarouselProps = PropsWithChildren<{
  slidesShownConfig?: {
    min: number
    breakPoints?: {
      [key: number]: number
    }
  }
  loop?: boolean
  transitionDuration?: number
  itemsGap?: number
}>

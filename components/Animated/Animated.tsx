"use client"

import Image, { type ImageProps } from "next/image"

import {
  useEffect,
  useState,
  useRef,
  useId,
  createElement,
  type HTMLElementType,
  type ComponentPropsWithoutRef,
  type RefObject,
} from "react"

import { mergeClassNames } from "@/utils/mergeClassNames"

import { AnimationsObserver } from "./Animated.utils"

import { animatedTranslateClassNames } from "./Animated.const"
import Link, { LinkProps } from "next/link"

type ImageElementProps = ImageProps & {
  as: "img"
  direction?: "up" | "down" | "left" | "right"
}

type ElementProps<T extends HTMLElementType> = {
  as: T
  direction?: "up" | "down" | "left" | "right"
} & ComponentPropsWithoutRef<T>

type AnimatedProps<T extends HTMLElementType> = T extends "img"
  ? ImageElementProps
  : ElementProps<T>

export const Animated = <T extends HTMLElementType>({
  as,
  className,
  direction = "up",
  ...props
}: AnimatedProps<T>) => {
  const [isInView, setIsInView] = useState(false)

  const translateClassNames = animatedTranslateClassNames[direction]

  const id = useId()
  const elementId = `animated-${id}`

  const elementRef = useRef<HTMLElement>(null)

  const fullClassName = mergeClassNames(
    className,
    `transition-all duration-300 ${isInView ? `${translateClassNames.to} opacity-100` : `${translateClassNames.from} opacity-0`}`
  )

  useEffect(() => {
    if (!elementRef.current) {
      return
    }

    const element = elementRef.current

    AnimationsObserver.register({
      element: element,
      callback: setIsInView,
    })

    return () => AnimationsObserver.unregister(element)
  }, [])

  if (as === "a") {
    const castLinkProps = props as Omit<LinkProps, "className">

    return (
      <Link
        {...castLinkProps}
        id={elementId}
        ref={elementRef as RefObject<HTMLAnchorElement>}
        className={fullClassName}
      >
        {props.children}
      </Link>
    )
  }

  if (as === "img") {
    const castImageProps = props as Omit<ImageElementProps, "as" | "direction">
    return (
      <Image
        {...castImageProps}
        className={fullClassName}
        ref={elementRef as RefObject<HTMLImageElement>}
        id={elementId}
        alt={castImageProps.alt || ""}
      />
    )
  }

  return createElement(as, {
    ...props,
    id: elementId,
    ref: elementRef,
    className: fullClassName,
  })
}

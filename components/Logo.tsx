import { mergeClassNames } from "@/utils/mergeClassNames"

type LogoProps = {
  className?: string
}

export const Logo = ({ className }: LogoProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src="/logo.svg"
    alt="Cool Cars"
    className={mergeClassNames("h-24 w-auto", className)}
  />
)

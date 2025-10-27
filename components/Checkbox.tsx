import { type Ref, type InputHTMLAttributes } from "react"
import { Check } from "react-bootstrap-icons"

import { mergeClassNames } from "@/utils/mergeClassNames"

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  ref: Ref<HTMLInputElement>
}

export const Checkbox = ({ className, ...props }: CheckboxProps) => (
  <div
    className={mergeClassNames(
      `relative flex items-center justify-center w-5 h-5 border border-border focus-within:border-primary duration-300 transition-colors ${className}`
    )}
  >
    <input
      {...props}
      type="checkbox"
      className="z-10 absolute top-0 left-0 w-full h-full opacity-0 peer cursor-pointer"
    />

    <Check
      aria-hidden="true"
      className="h-full w-full opacity-0 peer-checked:opacity-100 duration-300 ease-in-out transition-all"
    />
  </div>
)

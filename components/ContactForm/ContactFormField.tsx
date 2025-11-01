import {
  type TextareaHTMLAttributes,
  type InputHTMLAttributes,
  type Ref,
} from "react"

import { Checkbox } from "@/components/Checkbox"

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  type: "text" | "number" | "checkbox"
  ref: Ref<HTMLInputElement>
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  type: "textarea"
  ref: Ref<HTMLTextAreaElement>
}

type ContactFormFieldProps = (InputProps | TextareaProps) & {
  label: string
  error?: string
}

export const ContactFormField = ({
  label,
  error,
  name,
  ...props
}: ContactFormFieldProps) => {
  const ariaInvalid = !!error
  const className = error ? "border-error" : undefined
  const labelId = `${name}-label`
  const errorElementId = `${name}-error`

  const getRenderedInput = () => {
    switch (props.type) {
      case "textarea":
        return (
          <textarea
            {...props}
            name={name}
            className={className}
            aria-describedby={labelId}
            aria-invalid={ariaInvalid}
            aria-errormessage={errorElementId}
          />
        )
      case "checkbox":
        return (
          <Checkbox
            {...props}
            className={className}
            name={name}
            aria-describedby={labelId}
            aria-invalid={ariaInvalid}
            aria-errormessage={errorElementId}
          />
        )
      default:
        return (
          <input
            {...props}
            name={name}
            className={className}
            aria-describedby={labelId}
            aria-invalid={ariaInvalid}
            aria-errormessage={errorElementId}
          />
        )
    }
  }

  const renderedInput = getRenderedInput()

  return (
    <div className="flex flex-col gap-2">
      <label
        className={`flex group ${props.type === "checkbox" ? "flex-row-reverse justify-end text-sm items-center gap-2" : "text-base flex-col"}`}
      >
        <span
          id={labelId}
          className={`text-start transition-colors duration-300 group-focus-within:text-primary ${error ? "text-error" : "text-secondary"}`}
        >
          {label}
        </span>
        {renderedInput}
      </label>

      {error && (
        <span
          id={errorElementId}
          className="text-error text-sm"
          aria-live="assertive"
        >
          {error}
        </span>
      )}
    </div>
  )
}

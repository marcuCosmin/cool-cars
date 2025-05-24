import { type TextareaHTMLAttributes, type InputHTMLAttributes } from "react"

type FormFieldProps = (
  | Omit<InputHTMLAttributes<HTMLInputElement>, "type">
  | TextareaHTMLAttributes<HTMLTextAreaElement>
) & {
  type: "text" | "number" | "textarea"
  label: string
  error?: string
}

export const FormField = ({ type, label, error, ...props }: FormFieldProps) => {
  const ariaInvalid = !!error
  const className = error ? "invalid-input" : undefined

  const renderedInput =
    type === "textarea" ? (
      <textarea
        {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        className={className}
        aria-invalid={ariaInvalid}
      />
    ) : (
      <input
        {...(props as Omit<InputHTMLAttributes<HTMLInputElement>, "type">)}
        type={type}
        className={className}
        aria-invalid={ariaInvalid}
      />
    )

  return (
    <div className="flex flex-col gap-2">
      <label className="flex flex-col gap-2">
        <span
          className={`font-semibold ${error ? "text-red-600" : "text-primary"}`}
        >
          {label}
        </span>
        {renderedInput}
      </label>
      {error && <span className="text-red-600 text-sm">{error}</span>}
    </div>
  )
}

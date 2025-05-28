import { CheckCircleFill, ExclamationCircleFill } from "react-bootstrap-icons"

type ToastProps = {
  type: "success" | "error"
  message: string
}

export const Toast = ({ type, message }: ToastProps) => {
  const isError = type === "error"
  const colorClassName = isError ? "text-red-600" : "text-primary"
  const iconClassName = `h-6 w-6 xl:h-8 xl:w-8 ${colorClassName}`

  return (
    <div
      className={`flex items-center gap-5 font-semibold xl:text-lg ${colorClassName}`}
    >
      {isError ? (
        <ExclamationCircleFill className={iconClassName} />
      ) : (
        <CheckCircleFill className={iconClassName} />
      )}
      {message}
    </div>
  )
}

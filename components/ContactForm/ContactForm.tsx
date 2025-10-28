"use client"

import { Send } from "react-bootstrap-icons"
import { useForm, type SubmitHandler } from "react-hook-form"

import { validate as isValidEmail } from "email-validator"

import { Loader } from "@/components/Loader"

import { ContactFormField } from "./ContactFormField"

import { sendEmail } from "./ContactForm.utils"

import type { Inputs } from "./ContactForm.models"

const rootErrorId = "contact-form-error"

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async values => {
    try {
      const error = await sendEmail(values)

      if (error) {
        setError("root", { type: "server", message: error })
        return
      }

      reset()
    } catch (error) {
      if (error instanceof Error) {
        setError("root", { type: "server", message: error.message })

        return
      }

      setError("root", {
        type: "server",
        message: "An unexpected error occurred. Please try again later.",
      })
    }
  }

  return (
    <>
      <form
        aria-describedby={rootErrorId}
        className="relative flex flex-col gap-5 w-full max-w-md md:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-start mb-5 text-4xl">Contact Us</h3>
        {isSubmitting && <Loader />}
        <ContactFormField
          {...register("name", { required: true, maxLength: 30 })}
          type="text"
          label="Name"
          error={
            errors.name
              ? "Name is required and must be less than 30 characters"
              : undefined
          }
        />
        <ContactFormField
          {...register("email", {
            validate: isValidEmail,
          })}
          type="text"
          label="Email"
          error={errors.email ? "Invalid email address" : undefined}
        />
        <ContactFormField
          {...register("phone", { required: true, pattern: /^07\d{9}$/ })}
          type="number"
          label="Phone number"
          error={errors.phone ? "Invalid phone number" : undefined}
        />
        <ContactFormField
          {...register("message", { required: true, minLength: 20 })}
          rows={6}
          type="textarea"
          label="Message"
          placeholder="How can we help you? Feel free to get in touch!"
          error={
            errors.message
              ? "Message is required and must be longer than 20 characters"
              : undefined
          }
        />
        <ContactFormField
          {...register("agreement", { required: true })}
          type="checkbox"
          label="I agree that my data is collected and stored."
          error={errors.agreement ? "This field is required" : undefined}
        />

        {errors.root && (
          <span
            id={rootErrorId}
            className="text-error text-sm"
            aria-live="assertive"
          >
            {errors.root.message}
          </span>
        )}

        {!isSubmitting && (
          <button className="bg-primary uppercase flex items-center justify-center gap-2.5 w-fit hover:text-black hover:bg-white px-10">
            <Send /> Get in Touch
          </button>
        )}
      </form>
    </>
  )
}

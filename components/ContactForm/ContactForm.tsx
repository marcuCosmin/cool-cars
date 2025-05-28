"use client"

import { ToastContainer, toast } from "react-toastify"
import { useForm, type SubmitHandler } from "react-hook-form"

import { validate as isValidEmail } from "email-validator"

import { FormField } from "./FormField"
import { Toast } from "./Toast"
import { Loader } from "../Loader"

import { sendEmail } from "./sendEmail"

import type { Inputs } from "./models"

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async values => {
    const error = await sendEmail(values)

    if (error) {
      toast.error(
        <Toast
          type="error"
          message={error}
        />
      )
      return
    }

    reset()
    toast.success(
      <Toast
        type="success"
        message="Your message has been sent!"
      />
    )
  }

  return (
    <>
      <form
        className="relative z-10 flex flex-col gap-4 m-auto w-full max-w-md md:max-w-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-center mb-5 text-lg md:text-2xl">
          Send us a message
        </h3>
        {isSubmitting && <Loader />}
        <FormField
          {...register("name", { required: true, maxLength: 30 })}
          type="text"
          label="Name"
          error={
            errors.name
              ? "Name is required and must be less than 30 characters"
              : undefined
          }
        />
        <FormField
          {...register("email", {
            validate: isValidEmail,
          })}
          type="text"
          label="Email"
          error={errors.email ? "Invalid email address" : undefined}
        />
        <FormField
          {...register("phone", { required: true, pattern: /^07\d{9}$/ })}
          type="number"
          label="Phone number"
          error={errors.phone ? "Invalid phone number" : undefined}
        />
        <FormField
          {...register("message", { required: true, minLength: 20 })}
          rows={10}
          type="textarea"
          label="Message"
          error={
            errors.message
              ? "Message is required and must be longer than 20 characters"
              : undefined
          }
        />

        {!isSubmitting && <input type="submit" />}
      </form>

      <ToastContainer
        position="bottom-right"
        hideProgressBar
        icon={false}
        closeButton={false}
        limit={1}
      />
    </>
  )
}

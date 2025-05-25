"use client"
import { CheckCircleFill } from "react-bootstrap-icons"
import { useForm, type SubmitHandler } from "react-hook-form"

import { validate as isValidEmail } from "email-validator"

import { FormField } from "./FormField"
import { Loader } from "../Loader"

import { sendEmail } from "./sendEmail"

import type { Inputs } from "./models"

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = sendEmail

  if (isSubmitSuccessful) {
    return (
      <p className="text-green-600 text-lg md:text-2xl flex items-center gap-2">
        <CheckCircleFill className="fill-primary min-h-[30px] min-w-[30px]" />
        Your message has been sent successfully!
      </p>
    )
  }

  return (
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
  )
}

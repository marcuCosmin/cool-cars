import type { Inputs } from "./ContactForm.models"

export const sendEmail = async ({ email, name, phone, message }: Inputs) => {
  const parsedMessage = `
        <p>Hi,</p>
        <p>You have received a new contact message from <a href="https://cool-cars.co.uk/">cool-cars.co.uk</a></p>
        <p>Here are the details:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Thanks</p>
    `

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: process.env.NEXT_PUBLIC_EMAIL,
      subject: "Cool Cars Contact Form Submission",
      message: parsedMessage,
    }),
  })

  const data = await response.json()

  return data.error as string | undefined
}

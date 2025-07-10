"use client"

import { ContactField } from "./ContactField/ContactField"

import { phoneNumber } from "@/globals/constants"

export const Banner = () => {
  return (
    <div className="fixed bottom-0 right-0 flex flex-col p-5 bg-primary text-white font-bold text-lg rounded-tl-lg rounded-bl-lg z-45">
      <ContactField
        variant="banner"
        label="Contact us at:"
        type="phone"
        value={phoneNumber}
      />
    </div>
  )
}

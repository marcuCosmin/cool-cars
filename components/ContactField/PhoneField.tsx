"use client"

import { useState } from "react"
import { ArrowContainer, Popover, type PopoverState } from "react-tiny-popover"
import { TelephoneFill, Whatsapp } from "react-bootstrap-icons"

import { FieldProps } from "./ContactField.models"

export const PhoneField = ({
  value,
  className,
  label,
  iconProps,
}: FieldProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const content = ({ childRect, popoverRect, position }: PopoverState) => {
    const whatsAppHref = `https://wa.me/${value.replaceAll(" ", "")}`
    const phoneHref = `tel:${value}`
    const anchorClassName = "flex items-center gap-2 font-bold text-primary"
    const iconSize = 20

    const onWhatsAppClick = () => {
      gtag("event", "phone_click", {
        event_category: "Contact",
        event_label: "WhatsApp Call",
      })
    }

    const onPhoneClick = () => {
      gtag("event", "phone_click", {
        event_category: "Contact",
        event_label: "Phone Call",
      })
    }

    return (
      <ArrowContainer
        className="drop-shadow-[0px_0px_7px_var(--color-primary)]"
        arrowSize={15}
        arrowColor="black"
        childRect={childRect}
        popoverRect={popoverRect}
        position={position}
      >
        <div className="flex flex-col items-center bg-black rounded-md p-5 gap-3">
          <a
            href={whatsAppHref}
            target="_blank"
            className={anchorClassName}
            onClick={onWhatsAppClick}
          >
            <Whatsapp size={iconSize} /> WhatsApp
          </a>
          OR
          <a
            href={phoneHref}
            className={anchorClassName}
            onClick={onPhoneClick}
          >
            <TelephoneFill size={iconSize} /> Phone call
          </a>
        </div>
      </ArrowContainer>
    )
  }

  const onClick = () => setIsPopoverOpen(!isPopoverOpen)
  const onClickOutside = () => setIsPopoverOpen(false)

  return (
    <Popover
      isOpen={isPopoverOpen}
      onClickOutside={onClickOutside}
      content={content}
      containerClassName="test-classname"
    >
      <button
        className={className}
        type="button"
        onClick={onClick}
      >
        {label && <span className="mr-2">{label}</span>}
        <span>
          <TelephoneFill {...iconProps} />
          {value}
        </span>
      </button>
    </Popover>
  )
}


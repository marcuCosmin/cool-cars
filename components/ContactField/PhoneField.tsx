"use client"

import { useState } from "react"
import { ArrowContainer, Popover, type PopoverState } from "react-tiny-popover"

import { TelephoneFill, Whatsapp, type IconProps } from "react-bootstrap-icons"
import { ContactFieldProps } from "./ContactField.models"

type PhoneFieldProps = Pick<ContactFieldProps, "value" | "label"> & {
  className?: string
  iconProps: IconProps
}

export const PhoneField = ({
  value,
  className,
  label,
  iconProps,
}: PhoneFieldProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)

  const content = ({ childRect, popoverRect, position }: PopoverState) => {
    const whatsAppHref = `https://wa.me/${value.replaceAll(" ", "")}`
    const phoneHref = `tel:${value}`
    const anchorClassName = "flex items-center gap-2 font-bold"
    const iconSize = 20

    return (
      <ArrowContainer
        arrowSize={10}
        arrowColor="#00A1B6"
        childRect={childRect}
        popoverRect={popoverRect}
        position={position}
      >
        <div className="flex flex-col items-center bg-black border rounded-md p-5 shadow-sm shadow-primary text-primary gap-3">
          <a
            href={whatsAppHref}
            target="_blank"
            className={anchorClassName}
          >
            <Whatsapp size={iconSize} /> WhatsApp
          </a>
          OR
          <a
            href={phoneHref}
            className={anchorClassName}
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

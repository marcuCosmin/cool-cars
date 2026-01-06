import Link from "next/link"

import { type ReactNode } from "react"
import {
  Calendar2Plus,
  EnvelopeArrowUpFill,
  Whatsapp,
} from "react-bootstrap-icons"

import { Animated } from "@/components/Animated/Animated"

import { whatsAppNumberValue, type Routes } from "@/globals/globals.const"

import { mainSectionBgClassNames } from "./WorkshopServicePage.const"

import type { Pricing } from "./WorkshopServicePage.model"
import { WorkshopServicePagePricing } from "./WorkshopServicePagePricing"

type ServicesRoutes = Pick<
  Routes,
  | "workshopServicesServicing"
  | "workshopServicesBrakePadsAndDiscs"
  | "workshopServicesCambeltsAndTimingBelts"
  | "workshopServicesClutchRepairsOrReplacements"
  | "workshopServicesGearBoxRepairsOrReplacements"
  | "workshopServicesTyresAndPunctureRepairs"
>

const quickLinks = [
  {
    label: "Contact Us",
    href: "/contact",
    Icon: EnvelopeArrowUpFill,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${whatsAppNumberValue.replace("+", "")}`,
    Icon: Whatsapp,
  },
  {
    label: "Make a booking",
    href: "",
    Icon: Calendar2Plus,
  },
]

type WorkshopServicePageProps = {
  title: string
  description: ReactNode
  servicePathname: ServicesRoutes[keyof ServicesRoutes]
  pricing?: Pricing
}

export const WorkshopServicePage = async ({
  title,
  description,
  servicePathname,
  pricing,
}: WorkshopServicePageProps) => {
  const mainSectionBgClassName = mainSectionBgClassNames[servicePathname]

  return (
    <main className="gap-20">
      <section className={mainSectionBgClassName}>
        <Animated
          as="h1"
          className="mb-10"
        >
          {title}
        </Animated>
        <div className="text-base p-2 [&>p]:text-white">{description}</div>
      </section>

      {!!pricing?.length && (
        <section>
          <Animated
            as="h2"
            className="mb-5"
          >
            Pricing
          </Animated>

          <WorkshopServicePagePricing pricing={pricing} />
        </section>
      )}

      <section>
        <Animated
          as="h2"
          className="mb-5"
        >
          Quick Links
        </Animated>

        <ul className="flex flex-col md:flex-row w-full gap-1 md:gap-5 px-5 md:px-0">
          {quickLinks.map(({ label, href, Icon }, index) => (
            <Animated
              as="li"
              className="w-full"
              key={index}
            >
              <Link
                href={href}
                className="glass-button"
              >
                <Icon size={25} />
                {label}
              </Link>
            </Animated>
          ))}
        </ul>
      </section>
    </main>
  )
}

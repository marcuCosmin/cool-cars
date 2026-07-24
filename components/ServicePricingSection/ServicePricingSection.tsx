import { type ReactNode } from "react"

import { Animated } from "@/components/Animated/Animated"

import { ServicePricing } from "./ServicePricing"

import type { Pricing } from "./ServicePricingSection.model"

type ServicePricingSectionProps = {
  pricing: Pricing
  title?: string
  description?: ReactNode
}

export const ServicePricingSection = ({
  pricing,
  title = "Pricing",
  description,
}: ServicePricingSectionProps) => (
  <section>
    <Animated
      as="h2"
      className="mb-5"
    >
      {title}
    </Animated>

    {description && (
      <div className="flex flex-col gap-5 px-5 md:p-0 mb-10 max-w-3xl mx-auto">
        {description}
      </div>
    )}

    <ServicePricing pricing={pricing} />
  </section>
)

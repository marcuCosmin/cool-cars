import { ServicePage } from "@/components/ServicePage/ServicePage"

import { routes } from "@/globals/globals.const"

export default function BodyWorkAndModificationsServicePage() {
  return (
    <ServicePage
      servicePathname={routes.servicesBodyworkAndModifications}
      title="Bodywork & Modifications"
      description="Your car should feel personal to you, and at Cool Cars, we make that happen with expert bodywork and bespoke modifications. Whether you want subtle styling tweaks or a full custom transformation, our team delivers precision workmanship and lasting results. From panel smoothing and body kits to spoilers, bumpers, and tailored details, every job is carried out with care and accuracy. No gimmicks or inflated prices, just skilled craftsmanship and a perfect fit."
    />
  )
}

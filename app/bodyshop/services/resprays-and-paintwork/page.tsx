import { type Metadata } from "next"

import { BodyshopServicePage } from "@/components/BodyshopServicePage/BodyshopServicePage"

import { routes } from "@/globals/globals.const"

export const metadata: Metadata = {
  title: "Car Resprays & Paintwork – Cool Cars",
  description:
    "Full resprays, colour changes and paintwork perfection from Cool Cars. Achieve a flawless, long-lasting finish with expert craftsmanship",
  alternates: {
    canonical: "https://cool-cars.co.uk/resprays-and-paintwork",
  },
}

export default function RespraysAndPaintworkServicePage() {
  return (
    <BodyshopServicePage
      servicePathname={routes.bodyshopServicesRespraysAndPaintwork}
      title="Resprays & Paintwork"
      description="A quality respray can transform your car’s appearance. At Cool Cars, we make sure it’s done right. From touch-up colour matching to changing colour entirely, our expert team delivers flawless, long-lasting finishes. We use trusted paints, precise colour-matching, and careful preparation to achieve smooth, even results every time. From small panels to full resprays, every job is handled with the same care and attention to detail. Professional work, fair pricing, and a finish that lasts."
    />
  )
}

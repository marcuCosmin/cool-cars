import Image from "next/image"

import { ContactForm } from "@/components/ContactForm/ContactForm"
import { TestimonialsSection } from "@/components/TestimonialsSection/TestimonialsSection"

import { type Routes } from "@/globals/globals.const"

import {
  mainSectionBgClassNames,
  secondSectionBgClassNames,
  secondSectionImageSrcs,
} from "./ServicePage.const"

type ServicesRoutes = Pick<
  Routes,
  | "servicesVehicleBodyRepairs"
  | "servicesRespraysAndPaintwork"
  | "servicesAccidentRepairs"
  | "servicesBodyworkAndModifications"
  | "servicesFleetRepairManagement"
  | "servicesPaintCorrectionAndPolishing"
>

type ServicePageProps = {
  title: string
  description: string
  servicePathname: ServicesRoutes[keyof ServicesRoutes]
}

export const ServicePage = async ({
  title,
  description,
  servicePathname,
}: ServicePageProps) => {
  const mainSectionBgClassName = mainSectionBgClassNames[servicePathname]
  const secondSectionBgClassName = secondSectionBgClassNames[servicePathname]
  const imageSrc = secondSectionImageSrcs[servicePathname]

  return (
    <main className="gap-20">
      <section className={mainSectionBgClassName}>
        <h1>{title}</h1>
      </section>

      <section className="flex flex-col items-center text-center gap-8 md:items-start md:text-start md:px-0 md:flex-row">
        <div
          className={`flex flex-col justify-center w-full gap-5 p-5 h-100 bg-cover bg-left bg-overlay bg-no-repeat md:p-0 md:justify-start md:!bg-none md:h-auto md:max-w-4xl ${secondSectionBgClassName}`}
        >
          <Image
            className="hidden md:block w-full"
            src={imageSrc}
            alt=""
            aria-hidden="true"
            width={700}
            height={350}
          />

          <h3 className="text-center md:text-start">{title}</h3>

          <p className="mx-auto max-w-2xl md:max-w-full md:m-0">
            {description}
          </p>
        </div>

        <ContactForm
          containerClassName="w-full md:w-auto"
          title="Get In Touch"
          description="Describe your requirement in as much detail as possible, and feel free to provide images"
        />
      </section>

      <TestimonialsSection />
    </main>
  )
}

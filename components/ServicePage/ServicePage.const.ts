import { routes } from "@/globals/globals.const"

export const mainSectionBgClassNames = {
  [routes.servicesVehicleBodyRepairs]:
    "bg-[url('/_next/image?url=%2Fvehicle-body-repairs-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fvehicle-body-repairs-banner.jpg&w=828&q=75')]",
  [routes.servicesRespraysAndPaintwork]:
    "bg-[url('/_next/image?url=%2Fresprays-and-paintwork-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fresprays-and-paintwork-banner.jpg&w=828&q=75')]",
  [routes.servicesAccidentRepairs]:
    "bg-[url('/_next/image?url=%2Faccident-repairs-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Faccident-repairs-banner.jpg&w=828&q=75')]",
  [routes.servicesBodyworkAndModifications]:
    "bg-[url('/_next/image?url=%2Fbodywork-and-modifications-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fbodywork-and-modifications-banner.jpg&w=828&q=75')]",
  [routes.servicesFleetRepairManagement]:
    "bg-[url('/_next/image?url=%2Ffleet-repair-management-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ffleet-repair-management-banner.jpg&w=828&q=75')]",
  [routes.servicesPaintCorrectionAndPolishing]:
    "bg-[url('/_next/image?url=%2Fpaint-correction-and-polishing-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fpaint-correction-and-polishing-banner.jpg&w=828&q=75')]",
}

export const secondSectionBgClassNames = {
  [routes.servicesVehicleBodyRepairs]:
    "bg-[url('/_next/image?url=%2Fvehicle-body-repairs-first-section.jpg&w=640&q=75')]",
  [routes.servicesRespraysAndPaintwork]:
    "bg-[url('/_next/image?url=%2Fresprays-and-paintwork-first-section.jpg&w=640&q=75')]",
  [routes.servicesAccidentRepairs]:
    "bg-[url('/_next/image?url=%2Faccident-repairs-first-section.jpg&w=640&q=75')]",
  [routes.servicesBodyworkAndModifications]:
    "bg-[url('/_next/image?url=%2Fbodywork-and-modifications-first-section.jpg&w=640&q=75')]",
  [routes.servicesFleetRepairManagement]:
    "bg-[url('/_next/image?url=%2Ffleet-repair-management-first-section.jpg&w=640&q=75')]",
  [routes.servicesPaintCorrectionAndPolishing]:
    "bg-[url('/_next/image?url=%2Fpaint-correction-and-polishing-first-section.jpg&w=640&q=75')]",
}
export const secondSectionImageSrcs = {
  [routes.servicesVehicleBodyRepairs]: {
    src: "/vehicle-body-repairs-first-section.jpg",
    alt: "",
  },
  [routes.servicesRespraysAndPaintwork]: {
    src: "/resprays-and-paintwork-first-section.jpg",
    alt: "Professional car respray being applied with a spray gun for flawless paintwork",
  },
  [routes.servicesAccidentRepairs]: {
    src: "/accident-repairs-first-section.jpg",
    alt: "Automotive repair in progress on the front section of a car, including the headlight area",
  },
  [routes.servicesBodyworkAndModifications]: {
    src: "/bodywork-and-modifications-first-section.jpg",
    alt: "Car paint being corrected and polished to restore gloss and smooth finish",
  },
  [routes.servicesFleetRepairManagement]: {
    src: "/fleet-repair-management-first-section.jpg",
    alt: "Worker carefully wrapping a car door as part of custom bodywork modifications",
  },
  [routes.servicesPaintCorrectionAndPolishing]: {
    src: "/paint-correction-and-polishing-first-section.jpg",
    alt: "Fleet of company vehicles lined up",
  },
}

import {
  routes,
  businessProvider,
  autoRepairProvider,
} from "@/globals/globals.const"

type ServiceSchema = {
  serviceType: string
  name: string
  description: string
  provider: typeof businessProvider | typeof autoRepairProvider
}

export const serviceContentSchema: Partial<
  Record<(typeof routes)[keyof typeof routes], ServiceSchema>
> = {
  [routes.bodyshopServicesVehicleBodyRepairs]: {
    serviceType: "Vehicle Body Repair",
    name: "Vehicle Body Repairs in Hampshire",
    description:
      "Expert vehicle body repairs in Swanmore, Hampshire. From minor dents and scratches to major accident damage, Cool Cars delivers quality repairs at fair prices using Thatcham-approved processes. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: businessProvider,
  },
  [routes.bodyshopServicesRespraysAndPaintwork]: {
    serviceType: "Car Respray",
    name: "Car Resprays & Paintwork in Hampshire",
    description:
      "Full and partial car resprays in Swanmore, Hampshire. From quick touch-ups to complete colour changes, Cool Cars delivers professional-quality paintwork at fair, transparent prices. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: businessProvider,
  },
  [routes.bodyshopServicesAccidentRepairs]: {
    serviceType: "Accident Repair",
    name: "Accident Repairs in Hampshire",
    description:
      "Professional accident repairs in Swanmore, Hampshire. Thatcham-approved processes, expert bodywork and fast turnaround. We work with insurance and private customers. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: businessProvider,
  },
  [routes.bodyshopServicesPaintCorrectionAndPolishing]: {
    serviceType: "Paint Correction",
    name: "Paint Correction & Car Polishing in Hampshire",
    description:
      "Professional paint correction and machine polishing in Swanmore, Hampshire. Remove swirl marks, scratches and oxidation to restore your car's paintwork to a deep, lasting shine. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: businessProvider,
  },
  [routes.bodyshopServicesBodyworkAndModifications]: {
    serviceType: "Custom Bodywork",
    name: "Custom Bodywork & Modifications in Hampshire",
    description:
      "Custom bodywork and vehicle modifications in Swanmore, Hampshire. From subtle styling upgrades to bold custom changes, Cool Cars delivers great-looking results at fair prices. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: businessProvider,
  },
  [routes.bodyshopServicesFleetRepairManagement]: {
    serviceType: "Fleet Repair Management",
    name: "Fleet Repair Management in Hampshire",
    description:
      "Expert fleet repair management in Swanmore, Hampshire. Cool Cars keeps your business vehicles on the road with efficient, cost-effective bodywork and mechanical repairs and minimal downtime. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: businessProvider,
  },
  [routes.workshopServicesServicing]: {
    serviceType: "Car Servicing",
    name: "Car Servicing in Hampshire",
    description:
      "Interim and full car servicing in Swanmore, Hampshire. Expert mechanics, transparent pricing and fast turnaround to keep your vehicle running at its best. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: autoRepairProvider,
  },
  [routes.workshopServicesBrakePadsAndDiscs]: {
    serviceType: "Brake Repair",
    name: "Brake Pads & Discs Replacement in Hampshire",
    description:
      "Expert brake pad and disc replacement in Swanmore, Hampshire, helping keep your vehicle safe, responsive and road-ready. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and surrounding Hampshire areas.",
    provider: autoRepairProvider,
  },
  [routes.workshopServicesClutchRepairsOrReplacements]: {
    serviceType: "Clutch Repair",
    name: "Clutch Repairs & Replacements in Hampshire",
    description:
      "Expert clutch repairs and replacements in Swanmore, Hampshire. Fast diagnosis, quality parts and reliable workmanship to keep you moving smoothly. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: autoRepairProvider,
  },
  [routes.workshopServicesCambeltsAndTimingBelts]: {
    serviceType: "Cambelt Replacement",
    name: "Cambelt & Timing Belt Replacement in Hampshire",
    description:
      "Cambelt and timing belt replacement in Swanmore, Hampshire. Protect your engine with timely replacement by Cool Cars' expert mechanics, using quality parts at fair, transparent prices. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: autoRepairProvider,
  },
  [routes.workshopServicesTyresAndPunctureRepairs]: {
    serviceType: "Tyre Fitting",
    name: "Tyres & Puncture Repairs in Hampshire",
    description:
      "Tyre fitting and puncture repairs in Swanmore, Hampshire. From quick puncture fixes to brand-new tyre replacements, Cool Cars delivers dependable performance you can rely on. Serving Southampton, Fareham, Eastleigh, Bishops Waltham and the wider Hampshire area.",
    provider: autoRepairProvider,
  },
  [routes.workshopServicesGearBoxRepairsOrReplacements]: {
    serviceType: "Gearbox Repair",
    name: "Gearbox Repairs & Replacements in Hampshire",
    description:
      "Professional gearbox repairs and replacements in Swanmore, Hampshire. Expert diagnosis and quality workmanship to keep your vehicle running smoothly. Serving Southampton, Fareham, Bishops Waltham, Eastleigh and the wider Hampshire area.",
    provider: autoRepairProvider,
  },
}

export const serviceContentBannerClassNames = {
  [routes.bodyshopServicesVehicleBodyRepairs]:
    "bg-[url('/_next/image?url=%2Fcar-detailing-inspection-studio-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fcar-detailing-inspection-studio-hampshire.jpg&w=828&q=75')]",
  [routes.bodyshopServicesRespraysAndPaintwork]:
    "bg-right md:bg-center bg-[url('/_next/image?url=%2Fcar-respray-spray-gun-bodyshop-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fcar-respray-spray-gun-bodyshop-hampshire.jpg&w=828&q=75')]",
  [routes.bodyshopServicesAccidentRepairs]:
    "bg-[url('/_next/image?url=%2Fcar-accident-damage-front-bumper-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fcar-accident-damage-front-bumper-hampshire.jpg&w=828&q=75')]",
  [routes.bodyshopServicesBodyworkAndModifications]:
    "bg-[url('/_next/image?url=%2Ftechnician-inspecting-car-bumper-bodyshop-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ftechnician-inspecting-car-bumper-bodyshop-hampshire.jpg&w=828&q=75')]",
  [routes.bodyshopServicesFleetRepairManagement]:
    "bg-[url('/_next/image?url=%2Ffleet-vehicles-repair-management-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ffleet-vehicles-repair-management-hampshire.jpg&w=828&q=75')]",
  [routes.bodyshopServicesPaintCorrectionAndPolishing]:
    "bg-[url('/_next/image?url=%2Fpaint-colour-matching-car-respray-southampton.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fpaint-colour-matching-car-respray-southampton.jpg&w=828&q=75')]",
  [routes.workshopServicesServicing]:
    "bg-[url('/_next/image?url=%2Fcar-engine-mechanical-repair-swanmore.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fcar-engine-mechanical-repair-swanmore.jpg&w=828&q=75')]",
  [routes.workshopServicesBrakePadsAndDiscs]:
    "bg-[url('/_next/image?url=%2Fbrake-discs-replacement-swanmore-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fbrake-discs-replacement-swanmore-hampshire.jpg&w=828&q=75')]",
  [routes.workshopServicesCambeltsAndTimingBelts]:
    "bg-[url('/_next/image?url=%2Fengine-cambelt-serpentine-belt-swanmore.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fengine-cambelt-serpentine-belt-swanmore.jpg&w=828&q=75')]",
  [routes.workshopServicesClutchRepairsOrReplacements]:
    "bg-[url('/_next/image?url=%2Fclutch-disc-replacement-service-hampshire.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fclutch-disc-replacement-service-hampshire.jpg&w=828&q=75')]",
  [routes.workshopServicesGearBoxRepairsOrReplacements]:
    "bg-[url('/_next/image?url=%2Fgearbox-repair-internal-mechanism-southampton.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fgearbox-repair-internal-mechanism-southampton.jpg&w=828&q=75')]",
  [routes.workshopServicesTyresAndPunctureRepairs]:
    "bg-[url('/_next/image?url=%2Ftyre-fitting-tread-inspection-swanmore.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Ftyre-fitting-tread-inspection-swanmore.jpg&w=828&q=75')]",
}

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  redirects: () => [
    {
      source: "/services",
      destination: "/bodyshop",
      permanent: true,
    },
    {
      source: "/pricing",
      destination: "/",
      permanent: true,
    },
    {
      source: "/paint-correction-and-polishing",
      destination: "/bodyshop/services/paint-correction-and-polishing",
      permanent: true,
    },
    {
      source: "/resprays-and-paintwork",
      destination: "/bodyshop/services/resprays-and-paintwork",
      permanent: true,
    },
    {
      source: "/fleet-repair-management",
      destination: "/bodyshop/services/fleet-repair-management",
      permanent: true,
    },
    {
      source: "/accident-repairs",
      destination: "/bodyshop/services/accident-repairs",
      permanent: true,
    },
    {
      source: "/vehicle-body-repairs",
      destination: "/bodyshop/services/vehicle-body-repairs",
      permanent: true,
    },
    {
      source: "/bodywork-and-modifications",
      destination: "/bodyshop/services/bodywork-and-modifications",
      permanent: true,
    },
    {
      source: "/services/accident-repairs",
      destination: "/bodyshop/services/accident-repairs",
      permanent: true,
    },
    {
      source: "/services/paint-correction-and-polishing",
      destination: "/bodyshop/services/paint-correction-and-polishing",
      permanent: true,
    },
    {
      source: "/services/vehicle-body-repairs",
      destination: "/bodyshop/services/vehicle-body-repairs",
      permanent: true,
    },
    {
      source: "/services/bodywork-and-modifications",
      destination: "/bodyshop/services/bodywork-and-modifications",
      permanent: true,
    },
    {
      source: "/services/resprays-and-paintwork",
      destination: "/bodyshop/services/resprays-and-paintwork",
      permanent: true,
    },
    {
      source: "/services/fleet-repair-management",
      destination: "/bodyshop/services/fleet-repair-management",
      permanent: true,
    },
  ],
}

export default nextConfig

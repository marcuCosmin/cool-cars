import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  redirects: () => [
    {
      source: "/services",
      destination: "/services/vehicle-body-repairs",
      permanent: true,
    },
  ],
}

export default nextConfig

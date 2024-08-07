import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "650px",
      md: "1400px",
      lg: "1920px",
    },
    extend: {
      colors: {
        primary: "#41A0A4",
        black: "#222",
        gray: "#888",
      },
    },
  },
  plugins: [],
}
export default config


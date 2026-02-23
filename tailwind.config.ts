import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenDeep: "#1F3D2B",
        beigeLight: "#F5F2EB",
        goldAccent: "#C6A969",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Segoe UI", "system-ui", "sans-serif"],
        display: ["Bodoni MT", "Didot", "Times New Roman", "serif"],
        brand: ["var(--font-brand)"],
        serif: ["var(--font-instrumental-serif)"],
      },
      boxShadow: {
        soft: "0 14px 44px rgba(31, 61, 43, 0.2)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;

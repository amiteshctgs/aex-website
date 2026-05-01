import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-brand-primary",
    "bg-brand-secondary",
    "bg-brand-accent",
    "bg-brand-dark",
    "bg-brand-light",
    "text-brand-primary",
    "text-brand-secondary",
    "text-brand-accent",
    "border-brand-primary",
    "hover:bg-brand-primary",
    "hover:text-brand-accent",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#cc0000",
          secondary: "#1a2b5f",
          accent: "#f5a623",
          dark: "#111111",
          light: "#f8f9fa",
          gray: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

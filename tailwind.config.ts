import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#BAC7D5",
        input: "#E3EAF3",
        ring: "#90AFC5",
        background: "#F0F4F8",
        foreground: "#2E3A47",
        primary: {
          DEFAULT: "#5B9BD5",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#A5B3C3",
          foreground: "#2E3A47",
        },
        destructive: {
          DEFAULT: "#FF5F57",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#D6E1E9",
          foreground: "#4A6572",
        },
        accent: {
          DEFAULT: "#4FC3F7",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#2E3A47",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#2E3A47",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

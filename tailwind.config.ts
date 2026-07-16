import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#1E5F8C",
          dark: "#123B57",
          light: "#4E85AC",
          tint: "#EAF2F7",
        },
        brown: {
          DEFAULT: "#8B5E3C",
          dark: "#5E3D25",
          light: "#B98A5E",
          tint: "#F5EDE4",
        },
        ink: "#1F2A33",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(30, 95, 140, 0.25)",
        card: "0 6px 20px -8px rgba(30, 42, 51, 0.15)",
      },
      backgroundImage: {
        "paw-pattern":
          "radial-gradient(circle at 1px 1px, rgba(139,94,60,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;

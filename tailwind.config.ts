// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { height: "10px" },
          "50%": { height: "50px" },
          "100%": { height: "10px" },
        },
        sidebar: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wave: "wave 1s ease-in-out infinite",
        sidebar: "sidebar 1s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;

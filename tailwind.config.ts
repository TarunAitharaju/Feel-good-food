import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#E8601C",
          hover:   "#C44E14",
          light:   "#FFF0E8",
        },
        forest: {
          DEFAULT: "#2C4A35",
          mid:     "#3D6B52",
          light:   "#5A8A6E",
          deep:    "#1A3828",
        },
        terra: {
          DEFAULT: "#E8601C",
          dark:    "#C44E14",
          lifted:  "#F07840",
        },
        gold: {
          DEFAULT: "#F8C740",
          light:   "#FDE89A",
        },
        cream: {
          DEFAULT: "#FFFFFF",
          light:   "#FFFFFF",
          dark:    "#F5F5F3",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          dim:     "#555550",
          muted:   "#9A9A90",
        },
      },
      fontFamily: {
        display: ["Poppins", "system-ui", "sans-serif"],
        body:    ["Poppins", "system-ui", "sans-serif"],
        telugu:  ["Tiro Telugu", "serif"],
      },
      borderRadius: {
        card:      "16px",
        "card-lg": "24px",
        "card-xl": "32px",
      },
      boxShadow: {
        card:       "0 2px 12px rgba(0,0,0,0.07)",
        "card-lg":  "0 8px 32px rgba(0,0,0,0.10)",
        glass:      "0 2px 8px rgba(0,0,0,0.08)",
        "glass-md": "0 4px 16px rgba(0,0,0,0.10)",
        "glass-lg": "0 8px 32px rgba(0,0,0,0.12)",
        forest:     "0 4px 16px rgba(44,74,53,0.30)",
        "forest-sm":"0 2px 8px rgba(44,74,53,0.22)",
        orange:     "0 4px 16px rgba(232,96,28,0.35)",
        "orange-sm":"0 2px 8px rgba(232,96,28,0.25)",
        pickup:     "0 12px 40px rgba(0,0,0,0.40)",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDEDD6",
          light: "#FFF6E8",
          dark: "#F5DDB8",
        },
        forest: {
          DEFAULT: "#3D5926",
          mid: "#5A7A3D",
          light: "#8AAB6E",
          deep: "#2E4319",
        },
        terra: {
          DEFAULT: "#AE150D",
          dark: "#8A100A",
          lifted: "#D44A2A",
        },
        gold: {
          DEFAULT: "#FDD365",
          light: "#FEEABC",
        },
        orange: {
          DEFAULT: "#FC8F00",
          dark: "#D47800",
          light: "#FDAA40",
        },
        ink: {
          DEFAULT: "#1f1a15",
          dim: "#6b5e50",
          muted: "#9e8e7a",
        },
        surface: {
          dark: "#1a1612",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "sans-serif"],
        telugu: ["Tiro Telugu", "serif"],
      },
      borderRadius: {
        card: "20px",
        "card-lg": "28px",
        "card-xl": "32px",
      },
      boxShadow: {
        /* Neutral glass shadows — tighter, less spread */
        glass:
          "0 1px 4px rgba(31,26,21,0.08), 0 1px 2px rgba(31,26,21,0.04)",
        "glass-md":
          "0 2px 8px rgba(31,26,21,0.08), 0 1px 3px rgba(31,26,21,0.05)",
        "glass-lg":
          "0 4px 16px rgba(31,26,21,0.09), 0 2px 4px rgba(31,26,21,0.05)",
        "glass-xl":
          "0 8px 24px rgba(31,26,21,0.10), 0 2px 6px rgba(31,26,21,0.06)",
        /* Forest-tinted — pulled back significantly */
        forest:
          "0 4px 14px rgba(61,89,38,0.18), 0 1px 4px rgba(61,89,38,0.10)",
        "forest-sm":
          "0 2px 8px rgba(61,89,38,0.14), 0 1px 2px rgba(61,89,38,0.08)",
        /* Pickup dark card */
        pickup:
          "0 12px 36px rgba(0,0,0,0.35), 0 3px 10px rgba(0,0,0,0.20)",
      },
      backgroundImage: {
        grain: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: "#d4623a",
          dark:    "#b5380c",
          light:   "#e27c5a",
        },
        gold: {
          DEFAULT: "#d4a94a",
          light:   "#e8c97a",
          dim:     "#a07c28",
        },
        forest: {
          DEFAULT: "#0a1a14",
          light:   "#1f5e3a",
          mid:     "#16452a",
        },
        charcoal: {
          DEFAULT: "#121212",
          light:   "#1a1612",
        },
        cream: {
          DEFAULT: "#faf3e0",
          dim:     "rgba(250,243,224,0.6)",
          muted:   "rgba(250,243,224,0.4)",
        },
        // keep for any lingering references
        ink: {
          DEFAULT: "#faf3e0",
          dim:     "rgba(250,243,224,0.6)",
          muted:   "rgba(250,243,224,0.4)",
        },
        orange: {
          DEFAULT: "#d4623a",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body:    ["DM Sans", "system-ui", "sans-serif"],
        telugu:  ["Tiro Telugu", "serif"],
        sans:    ["DM Sans", "system-ui", "sans-serif"],
        serif:   ["Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        card:      "16px",
        "card-lg": "20px",
        "card-xl": "24px",
      },
      boxShadow: {
        glass:        "0 8px 30px rgba(0,0,0,0.3)",
        "glass-lg":   "0 20px 50px rgba(0,0,0,0.5)",
        terracotta:   "0 4px 24px rgba(212,98,58,0.35)",
        "terracotta-lg": "0 8px 32px rgba(212,98,58,0.45)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
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
      fontFamily: {
        default: ["var(--font-clash)"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      textShadow: {
        sm: "0 5px 15px rgba(0, 87, 255, .1), 0 -5px 15px rgba(255, 90, 0, .08), 0 0 30px rgba(255, 255, 255, .2)",
        lg: "0 8px 16px rgba(0, 87, 255, .1), 0 -8px 16px rgba(255, 90, 0, .08), 0 0 40px rgba(255, 255, 255, .2)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "spotlight-closest":
          "radial-gradient(circle closest-corner at 50% 0, rgba(242, 242, 242, .15), rgba(0, 0, 0, 0))",
        "spotlight-farthest":
          "radial-gradient(circle farthest-side at 50% 0, rgba(242, 242, 242, .25), rgba(0, 0, 0, 0) 80%)",
        "spotlight-linear": "linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0))",
        card: "radial-gradient(circle at 50% 0, rgba(255, 255, 255, .3), rgba(0, 0, 0, 0))",
        "card-even": "radial-gradient(circle at 25% 0, rgba(255, 255, 255, .05), rgba(0, 0, 0, 0))",
        mask: "url(/layers/mask.png)",
        highlight: "linear-gradient(to bottom, var(#f5f5f5) 50%, transparent 90%)",
        glare:
          "linear-gradient(to right, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, .8) 35%, #fff 50%, rgba(255, 255, 255, .8) 65%, rgba(0, 0, 0, 0) 95%)",
      },
      boxShadow: {
        text: "0 5px 10px rgba(0, 87, 255, .15), 0 -5px 10px rgba(255, 90, 0, .1), 0 -5px 25px rgba(255, 255, 255, .3)",
        item: "inset 0 0 10px rgba(0, 0, 0, .1), 0 4px 16px rgba(0, 0, 0, .25)",
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
        "skeleton-loading": {
          from: {
            backgroundPosition: "200% 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(0.5deg)" },
          "75%": { transform: "rotate(-0.5deg)" },
        },
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        skeleton: "skeleton-loading 8s ease-in-out infinite",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
} satisfies Config;

export default config;

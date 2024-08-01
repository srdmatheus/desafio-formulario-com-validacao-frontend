import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "rba(var(--border))",
        background: {
          DEFAULT: "rgb(var(--background))",
          foreground: "rgb(var(--background-foreground))"
        },
        foreground: {
          DEFAULT: "rgb(var(--foreground))"
        },
        danger: {
          DEFAULT: "rgb(var(--danger))"
        },
        success: {
          DEFAULT: "rgb(var(--success))"
        },
        primary: {
          DEFAULT: "rgb(var(--primary))"
        }
      },
      boxShadow: {
        main: "4px 4px 0 rgb(var(--shadow))"
      },
      fontFamily: {
        sans: ["var(--font-rubik)", ...fontFamily.sans]
      }
    }
  },
  plugins: []
};
export default config;

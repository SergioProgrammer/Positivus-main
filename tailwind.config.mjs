/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        green: {
          DEFAULT: "#9ec41f",
          50: "#9ec41f",
          100: "#9ec41f",
          200: "#9ec41f",
          300: "#9ec41f",
          400: "#9ec41f",
          500: "#9ec41f",
          600: "#9ec41f",
          700: "#9ec41f",
          800: "#9ec41f",
          900: "#9ec41f",
        },
        black: "var(--black)",
        dark: "var(--dark)",
        gray2: {
          DEFAULT: "##717171",
        },
        gray: {
          DEFAULT: "#E3E3E3",
        },
        white: "var(--white)",
      },
    },
  },
  plugins: [],
};
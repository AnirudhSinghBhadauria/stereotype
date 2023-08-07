/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-title)"],
        gen: ["var(--font-general)"],
        sans: ["var(--font-sans)"],
        poly: ["var(--font-poly)"],
      },
      screens: {
        lg: "1180px",
      },
      colors: {
        purple: {
          100: "var(--purple-100)",
          200: "var(--purple-200)",
          300: "var(--purple-300)",
          400: "var(--purple-400)",
        },
        torq: {
          100: "var(--torq-100)",
          200: "var(--torq-200)",
          300: "var(--torq-300)",
          400: "var(--torq-400)",
        },
        mustard: {
          100: "var(--mustard-100)",
          200: "var(--mustard-200)",
          300: "var(--mustard-300)",
          400: "var(--mustard-400)",
        },
        pink: {
          100: "var(--pink-100)",
          200: "var(--pink-200)",
          300: "var(--pink-300)",
          400: "var(--pink-400)",
        },
        orange: {
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
        },
      },
    },
  },
  plugins: [],
};

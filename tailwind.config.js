/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        impact: ["Impact", "var(--font-anton)", "sans-serif"],
        "archivo-black": ["var(--font-archivo-black)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config; 
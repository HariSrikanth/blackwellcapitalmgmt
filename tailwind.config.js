/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-judson)", "serif"],
        judson: ["var(--font-judson)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config; 
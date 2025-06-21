/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        impact: ["Impact", "sans-serif"],
        "archivo-black": ['"Archivo Black"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config; 
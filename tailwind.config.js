/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        semibold: 600,
      },
      colors: {
        "dark-blue": "#77A1BD",
        "light-blue": "#A3C6D9",
      },
    },
  },
  plugins: [],
};

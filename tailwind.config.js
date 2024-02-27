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
      boxShadow: {
        md: "0 0 15px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};

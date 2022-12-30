/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    colors: {
      black: "#000000",
      gray: "#292524",
      nav: "#06283D",
      white: "#FFFFFF",
      blue: {
        light: "#BAD7E9",
      },
      green: {
        online: "#409843",
      },
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      red: {
        50: "#ffebee",
        700: "#d32f2f",
      },
    },
    extend: {
      boxShadow: {
        navShaow: "0 3px 4px 1px rgba(255,255,255, 0.4)",
      },
    },
  },
  plugins: [],
};

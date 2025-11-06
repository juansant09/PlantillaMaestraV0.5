/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C1A1D", // charcoal Ecofet
        secondary: "#C8A46A", // oro suave
        accent: "#6FD0C4", // agua marina
        muted: "#F5EFE4",
        charcoal: "#2A2729",
      },
    },
  },
  plugins: [],
}

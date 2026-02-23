/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        moss: "#2E4036",
        clay: "#CC5833",
        cream: "#F2F0E9",
        charcoal: "#1A1A1A",
        background: "#F2F0E9",
        foreground: "#1A1A1A",
        primary: "#2E4036",
        accent: "#CC5833",
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Outfit", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        drama: ['"Cormorant Garamond"', "serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      borderRadius: {
        "2rem": "2rem",
        "3rem": "3rem",
      },
    },
  },
  plugins: [],
};

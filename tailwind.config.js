/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        sm: "600px",
        md: "828px",
        lg: "900px",
        xl: "1340px",
        "2xl": "1496px",
      },
    },
  },
  plugins: [],
};

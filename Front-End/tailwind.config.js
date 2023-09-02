/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      screens: {
        "480px": "480px",
        "768px": "768px",
        "992px": "992px",
      },
    },
  },
  plugins: [],
};

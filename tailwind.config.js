/** @type {import('tailwindcss').Config} */
export default {
  content: ["*", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        matsuri: ["matsuri", "sans-serif"],
        mahaveeram1: ["mahaveeram1", "sans-serif"],
        mahaveeram2: ["mahaveeram2", "sans-serif"],
        bodyfont: ["bodyfont", "sans-serif"],
      },
    },
  },
  plugins: [],
};

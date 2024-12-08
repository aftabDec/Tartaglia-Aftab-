// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-brown": "#140500",
        brown: "#835c3b",
      },
    },
  },
  plugins: [], // Remove daisyui from here
};

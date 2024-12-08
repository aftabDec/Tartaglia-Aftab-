// tailwind.config.js
import daisyui from "daisyui"; // Import the daisyui plugin

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
  plugins: [daisyui], // Add the plugin using the imported variable
};

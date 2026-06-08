/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bravura: {
          black: "#050505",
          graphite: "#0B0F14",
          orange: "#FF7A00",
          ember: "#C95700",
          ice: "#F5F7FA",
          metal: "#A3AAB5",
          blue: "#00D9FF",
          purple: "#8A2BFF",
          green: "#00FF88",
        },
      },
      fontFamily: {
        display: ["Orbitron", "Inter", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(255, 122, 0, 0.36), 0 0 44px rgba(0, 217, 255, 0.16)",
        cyan: "0 0 28px rgba(0, 217, 255, 0.28)",
        violet: "0 0 30px rgba(138, 43, 255, 0.28)",
      },
      backgroundImage: {
        "hud-grid":
          "linear-gradient(rgba(0,217,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,0,.10) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

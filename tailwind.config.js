/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "btb-black": "#000000",
        "btb-gold": "#d4af37",
        "btb-neon": "#d4af37",
        "btb-dark": "#111111",
        "btb-light": "#F5F5F5",
        "btb-gray": "#666666",
        "btb-accent": "#FFD700",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.15s ease-out",
        "slide-up": "slideUp 0.15s ease-out",
        "page-transition": "pageTransition 0.15s ease-out",
        "page-slide": "pageSlide 0.15s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        pageTransition: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pageSlide: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      boxShadow: {
        block:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        block: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

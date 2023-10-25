/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0px 0px 6px #30DFC7',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100px)' },
        },
      },
      animation: {
        bounce: 'bounce 2s infinite',
      }
    },
  },
  plugins: [],
}
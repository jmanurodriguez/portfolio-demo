/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        15: '3.75rem',
      },
      backgroundImage: {
        'grid-pattern': "url('https://res.cloudinary.com/dpcpcnqmq/image/upload/v1729196412/3409297_lu1qal.jpg')",
      },
      keyframes: {
        spinCircle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        moveBackground: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        neon: {
          'from': {
            textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #ff00ff, 0 0 70px #ff00ff, 0 0 80px #ff00ff, 0 0 100px #ff00ff, 0 0 150px #ff00ff'
          },
          'to': {
            textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff00ff, 0 0 35px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 75px #ff00ff'
          }
        },
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" }
        },
      },
      animation: {
        'spin-slow': 'spinCircle 20s linear infinite',
        'background-move': 'moveBackground 30s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glitch': 'glitch 1s linear infinite',
        'neon': 'neon 1.5s ease-in-out infinite alternate',
        shine: "shine 2s ease-in-out infinite",
        'shine-once': "shine 1.5s ease-in-out forwards",
      },
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...defaultTheme.fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.500")',
        'neon-strong': '0 0 5px theme("colors.purple.500"), 0 0 20px theme("colors.purple.500"), 0 0 40px theme("colors.purple.500")',
      },
    },
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8": {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
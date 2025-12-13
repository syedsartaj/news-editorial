import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        news: {
          red: '#dc2626',
          black: '#000000',
          gray: '#f3f4f6',
        },
      },
      fontFamily: {
        baskerville: ['var(--font-baskerville)', 'Georgia', 'serif'],
        roboto: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
        'flash': 'flash 1.5s ease-in-out infinite',
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'flash': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
};

export default config;

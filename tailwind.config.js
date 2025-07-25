/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './jkbn/components/**/*.{js,ts,jsx,tsx,mdx}',
    './jkbn/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'serif'],
        
        'dm-serif-text': ['var(--font-dm-serif-text)', 'serif'],
        'merriweather': ['var(--font-merriweather)', 'serif'],
      },
      animation: {
        zoomOut: 'zoomOut 0.5s ease-in-out forwards',
        fadeOut: 'fadeOut 0.6s ease-in-out 0.6s forwards',
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        zoomOut: {
          '0%': { transform: 'scale(10)' },
          '100%': { transform: 'scale(0)' },
        },
        fadeOut: {
          '100%': { opacity: '0', pointerEvents: 'none' },
        },
        scroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-50% - var(--gap) / 2))' },
        },
      },
    },
  },
  plugins: [],
} 
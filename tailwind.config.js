/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'noto-sans': ['var(--font-noto-sans)', 'sans-serif'],
        'noto-serif': ['var(--font-noto-serif)', 'serif'],
      },
    },
  },
  plugins: [],
} 
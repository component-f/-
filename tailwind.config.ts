import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        black100: '#17181A',
        gray100: '#e5e7eb',
        gray200: '#969697',
        red100: '#EF4444',
        red200: '#7f1d1d',
      },
      fontFamily: {
        pretendard: ['var(--font-pretendard)', 'sans-serif'],
      },
      fontWeight: {
        thin: '300',
        regular: '400',
        semibold: '600',
        bold: '700',
      },
    },
  },
  plugins: [],
}
export default config

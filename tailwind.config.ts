import type { Config } from 'tailwindcss'

const breakpoints = ['', 'lg', 'md', 'sm', 'xxl', 'xl']

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px'
    },
    extend: {
      colors: {
        theme: '#FFFFFF',
        background: '#F4F4F4',
        primary: {
          100: '#e7f0ff',
          200: '#ECF1FF',
          300: '#5090f6',
          400: '#045de9',
          500: '#2764FF',
          600: '#174a9c',
          700: '#0e3778',
          800: '#253459',
          900: '#0c264f'
        },
        secondary: {
          100: '#f2f4f7',
          200: '#e4e6eb',
          300: '#d2d5d9',
          400: '#a7acb4',
          500: '#757982',
          600: '#50545d',
          700: '#323842',
          800: '#23272e',
          900: '#0c121c'
        },
        tableBg : '#E0E2E7'
      }
    }
  },
  plugins: []
}
export default config

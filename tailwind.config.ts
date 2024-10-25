/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px', // New small breakpoint for better control on devices below 400px
      },
      colors: {
        primary: '#3490dc', // Blue for primary
        secondary: '#6574cd', // A darker shade of blue for secondary
        accent: '#2b6cb0', // Updated accent color to a darker blue for better readability
        info: '#6cb2eb', // Light blue
        muted: '#f8f9fa', // Muted gray/white
      },
      spacing: {
        '1/2': '50%', // Useful for half-width adjustments on smaller screens
        '3/4': '75%', // Useful for fine-tuning width on smaller screens
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#818CF8',
        'on-primary': '#1E1B4B',
        'primary-container': '#E0E7FF',
        'on-primary-container': '#1E1B4B',
        'surface-dim': '#121212',
        'surface': '#1E1E1E',
        'surface-container': '#2A2A2A',
        'surface-container-lowest': '#1A1A1A',
        'on-surface': '#E0E0E0',
        'on-surface-variant': '#C7C7C7',
        'outline-variant': '#424242',
      },
      fontFamily: {
        'headline-sm': ['Roboto', 'sans-serif'],
        'headline-md': ['Roboto', 'sans-serif'],
        'label-mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'headline-sm': '1.25rem',
        'headline-md': '1.5rem',
        'label-mono': '0.875rem',
      },
      spacing: {
        'gutter': '1.5rem',
        'margin-desktop': '2rem',
        'section-gap': '6rem',
      },
      maxWidth: {
        'container-max': '1200px',
      },
      boxShadow: {
        'rim-light': '0 1px 2px 0 rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}

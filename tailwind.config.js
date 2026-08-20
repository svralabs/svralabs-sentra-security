/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'on-primary': 'rgb(var(--color-on-primary) / <alpha-value>)',
        'primary-container': 'rgb(var(--color-primary-container) / <alpha-value>)',
        'on-primary-container': 'rgb(var(--color-on-primary-container) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'on-secondary': 'rgb(var(--color-on-secondary) / <alpha-value>)',
        'secondary-container': 'rgb(var(--color-secondary-container) / <alpha-value>)',
        'on-secondary-container': 'rgb(var(--color-on-secondary-container) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        'surface-dim': 'rgb(var(--color-surface-dim) / <alpha-value>)',
        'surface-container': 'rgb(var(--color-surface-container) / <alpha-value>)',
        'surface-container-lowest': 'rgb(var(--color-surface-container-lowest) / <alpha-value>)',
        'on-surface': 'rgb(var(--color-on-surface) / <alpha-value>)',
        'on-surface-variant': 'rgb(var(--color-on-surface-variant) / <alpha-value>)',
        'outline-variant': 'rgb(var(--color-outline-variant) / <alpha-value>)',
      },
      fontFamily: {
        'headline-sm': ['var(--font-headline-sm)', 'sans-serif'],
        'headline-md': ['var(--font-headline-md)', 'sans-serif'],
        'label-mono': ['var(--font-label-mono)', 'monospace'],
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
      borderRadius: {
        '32px': '2rem',
      },
      boxShadow: {
        'rim-light': '0 1px 2px 0 rgb(255 255 255 / 0.05)',
      },
      maxWidth: {
        'container-max': '1200px',
      },
    },
  },
  plugins: [],
}

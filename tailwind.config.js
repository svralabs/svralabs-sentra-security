const theme = require('./src/styles/theme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
      spacing: theme.spacing,
      borderRadius: theme.borderRadius,
      boxShadow: theme.boxShadow,
      transitionDuration: theme.transitionDuration,
      transitionTimingFunction: theme.transitionTimingFunction,
      screens: theme.screens,
      keyframes: theme.keyframes,
      animation: theme.animation,
    },
  },
  plugins: [],
};

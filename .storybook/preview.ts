/** @type { import('@storybook/react').Preview } */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
import './tailwind.config.js';
import '../styles.css' // replace with the name of your tailwind css file
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};





export default preview;

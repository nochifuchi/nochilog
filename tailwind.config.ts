import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        body: ['source-han-sans-japanese', 'sans-serif'],
      },
      colors: {
        primary: {
          black: '#000',
          'light-black': '#535151',
          'dark-gray': '#B3B1B1',
          gray: '#d9d9d9',
          'light-gray': '#ececec',
        },
        accent: {
          blue: '#55B0F2',
        },
      },
    },
  },
  plugins: [],
};
export default config;

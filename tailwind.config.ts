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
          '50': '#f4f7f7',
          '100': '#e2e9eb',
          '200': '#c9d5d8',
          '300': '#a3b8bd',
          '400': '#8ba3a9',
          '500': '#5b787f',
          '600': '#4e646c',
          '700': '#44545a',
          '800': '#3d484d',
          '900': '#363f43',
          '950': '#21272b',
        },
        secondary: {
          '50': '#f9f7f7',
          '100': '#f3eded',
          '200': '#e9dfe0',
          '300': '#d9c9ca',
          '400': '#c1a8aa',
          '500': '#a98a8c',
          '600': '#927072',
          '700': '#795c5e',
          '800': '#664e50',
          '900': '#574546',
          '950': '#2d2223',
        },
        base: {
          gray: '#d9d9d9',
          'light-gray': '#ececec',
        },
      },
    },
  },
  plugins: [],
};
export default config;

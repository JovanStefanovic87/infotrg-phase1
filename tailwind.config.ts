import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#1f1c17',
        mainWhite: '#F1F1F1',
        blue: '#00aaff',
        blueLight: '#40c9ff',
        blueLighter: '#76d1ff',
        blueLightest: '#9ddeff',
        blueMain: '#111827',
        grayDarkest: '#1a1a1a',
        grayMedium: '#374151',
        grayMidLight: '#747474',
        grayLight: '#9c9c9c',
        grayLighter: '#c2c2c2',
        yellowLighter: '#fef08a',
        yellowStrong: '#facc15',
        hyperlink: '#0000EE',
      },
      backgroundImage: {
        'gradient-white': 'linear-gradient(to right, #FFFFFF, #e9e9e9)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        '120': '30rem',
      },
      height: {
        main: 'calc(100dvh - 68px)',
        content: '10000px',
        header: '54px',
        '120': '30rem',
        '100': '25rem',
      },
      maxHeight: {
        main: 'calc(100dvh - 68px)',
        content: '10000px',
      },
      margin: {
        header: '50px',
      },
      zIndex: {
        '45': '45',
        '44': '44',
      },
      fontSize: {
        xxxs: '0.6rem',
      },
    },
  },
  plugins: [],
};
export default config;

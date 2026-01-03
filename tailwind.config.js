import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // CRITICAL FIX: Pointing to root 'app' and 'components', NOT 'src/'
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'retro-bg': '#000000',
        'retro-text': '#FDF5E6',
        'retro-accent-bubble': '#BDEEFA',
        'retro-accent-character': '#E07A5F',
      },
      fontFamily: {
        fredoka: ['"Fredoka One"', 'cursive'], 
      },
    },
  },
  plugins: [],
};
export default config;

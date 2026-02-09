import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        askatuak: {
          // Primary dark blue
          blue: {
            DEFAULT: '#0950B8',
            50: '#E6F0FA',
            100: '#CCE0F5',
            200: '#99C2EB',
            300: '#66A3E0',
            400: '#3385D6',
            500: '#0950B8',
            600: '#0743A0',
            700: '#053680',
            800: '#042960',
            900: '#021C40',
            950: '#010E20',
          },
          // Accent blue (for CTAs and highlights) - same as primary
          accent: {
            DEFAULT: '#0950B8',
            hover: '#0743A0',
          },
          // Keep orange for backwards compatibility (will be replaced)
          orange: {
            DEFAULT: '#F97316',
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['SF Mono', 'Monaco', 'monospace'],
        euskal: ['var(--font-euskal)', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
        'card': '0 1px 3px rgba(0,0,0,0.05)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
export default config;

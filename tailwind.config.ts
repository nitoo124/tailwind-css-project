import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'bannerImg' : "url('/images/bg.jpg')",
      // 'black_overlay ': "Linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0, 0, 0, 8) 100%)"
    

      },
    },
  },
  plugins: [],
};
export default config;

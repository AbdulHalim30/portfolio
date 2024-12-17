import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customCream: "#f9f8f5",
      },
      fontFamily: {
        jost: ["var(--font-jost)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

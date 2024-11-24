import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      colors: {
        primary: '#3B82F6', // Soft blue
        accent: '#6B7280',  // Muted gray
        lightBackground: '#F9FAFB', // Light theme background
        darkBackground: '#1F2937', // Dark theme background
        lightText: '#111827',  // Light theme text (dark gray)
        darkText: '#F3F4F6',   // Dark theme text (light gray)
        senderMessage: '#3B82F6', // Sender message background (primary color)
        receiverMessage: '#E5E7EB', // Receiver message background (soft gray)
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'], // Modern sans-serif fonts
      },
      fontSize: {
        base: '14px',  // Base font size for messages
        header: '24px', // Header font size
      },
    },
  },
  plugins: [],
} satisfies Config;

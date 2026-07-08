import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        mint: "#10B981",
        "mint-light": "#34D399",
        "mint-deep": "#059669",
        "mint-tint": "#ECFDF5",
        "fg-body": "#1F2937",
        "fg-muted": "#6B7280",
        "bg-soft": "#F3F4F6",
        "bg-soft-2": "#F9FAFB",
        border: "#E5E7EB",
        "border-strong": "#D1D5DB",
        danger: "#EF4444",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10,10,15,.04), 0 12px 32px -12px rgba(10,10,15,.12)",
        lift: "0 24px 60px -24px rgba(10,10,15,.28)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;

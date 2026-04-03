import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          bg: "#F5F3EE",
          surface: "#FFFFFF",
          "surface-raised": "#FAFAF8",
          "surface-dark": "#2A2926",
          "surface-darker": "#1E1D1B",
          border: "#E5E2DB",
          "border-subtle": "#ECEAE5",
          "border-strong": "#D1CEC7",
          "text-primary": "#1A1917",
          "text-secondary": "#6B6966",
          "text-muted": "#9C9990",
          "text-on-dark": "#FFFFFF",
          "text-on-dark-muted": "#A8A69F",
          input: "#F8F7F4",
          tag: "#EDECE8",
          "tag-hover": "#E5E3DE",
          complete: "#4A7A50",
          "complete-light": "#E8F0E9",
          active: "#1A1917",
          progress: "#1A1917",
          "progress-track": "#E5E2DB",
          focus: "#1A1917",
          hover: "#F0EEE9",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-departure)", "monospace"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px", letterSpacing: "0.08em" }],
        xs: ["12px", { lineHeight: "16px", letterSpacing: "0.04em" }],
        sm: ["13px", { lineHeight: "20px" }],
        base: ["14px", { lineHeight: "22px" }],
        md: ["15px", { lineHeight: "24px" }],
        lg: ["16px", { lineHeight: "24px" }],
        xl: ["18px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["32px", { lineHeight: "40px" }],
      },
      boxShadow: {
        "onyx-sm": "0 1px 2px rgba(26, 25, 23, 0.04)",
        onyx: "0 1px 3px rgba(26, 25, 23, 0.06), 0 1px 2px rgba(26, 25, 23, 0.04)",
        "onyx-md": "0 4px 6px -1px rgba(26, 25, 23, 0.06), 0 2px 4px -1px rgba(26, 25, 23, 0.04)",
        "onyx-lg": "0 10px 15px -3px rgba(26, 25, 23, 0.06), 0 4px 6px -2px rgba(26, 25, 23, 0.04)",
        "onyx-inner": "inset 0 1px 2px rgba(26, 25, 23, 0.06)",
      },
      borderRadius: {
        onyx: "6px",
        "onyx-lg": "10px",
        "onyx-xl": "14px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "120": "30rem",
      },
    },
  },
  plugins: [],
};

export default config;

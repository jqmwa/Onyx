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
          bg: "#F7F7F5",
          surface: "#FFFFFF",
          "surface-raised": "#FAFAFA",
          "surface-dark": "#4A4A4A",
          "surface-darker": "#3C3C3C",
          border: "#E5E5E3",
          "border-subtle": "#ECECEA",
          "border-strong": "#D4D4D2",
          "text-primary": "#2C2C2C",
          "text-secondary": "#717171",
          "text-muted": "#A0A0A0",
          "text-on-dark": "#FFFFFF",
          "text-on-dark-muted": "#B0B0B0",
          input: "#F8F8F7",
          tag: "#EEEEEC",
          "tag-hover": "#E6E6E4",
          complete: "#4A7A50",
          "complete-light": "#E8F0E9",
          "circle-bg": "#E8E8E6",
          "circle-icon": "#6B6B6B",
          active: "#2C2C2C",
          progress: "#2C2C2C",
          "progress-track": "#E5E5E3",
          focus: "#2C2C2C",
          hover: "#F1F1EF",
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

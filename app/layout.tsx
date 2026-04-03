import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: [
    {
      path: "./fonts/GeistVF.woff2",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const departureMono = localFont({
  src: [
    {
      path: "./fonts/DepartureMono-Regular.otf",
      style: "normal",
      weight: "400",
    },
  ],
  variable: "--font-departure",
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "Onyx - Agent Builder",
  description: "Build and configure autonomous agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${departureMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}

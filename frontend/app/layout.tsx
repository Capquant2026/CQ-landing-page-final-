import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "CapQuant",
  icons: {
    icon: "/logo.svg",
  },
  description: "CapQuant landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body>{children}</body>
    </html>
  );
}

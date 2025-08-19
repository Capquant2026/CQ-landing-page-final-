import type { Metadata } from "next";
import "./globals.css";

import { Inter, JetBrains_Mono } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // custom CSS variable
  display: "swap",
});
const jetbrainsFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetBrains",
});
export const metadata: Metadata = {
  title: "CapQuand",
  icons: {
    icon: "/logo.svg",
  },
  description: "CapQuand landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}

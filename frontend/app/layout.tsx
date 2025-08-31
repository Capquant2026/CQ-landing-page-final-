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
    icon: "/CQ.svg",
  },
  description:
    "From idea to live trading in 60 minutes. First institutional alpha marketplace where multi-asset, intraday model submissions compete for capital through real-time performance scoring—no-code, low-code, or pro-code supported​",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body>
     
         {children}
      </body>
    </html>
  );
}

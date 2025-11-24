import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reggie's Portfolio",
  description: "Portfolio built with Next.js and Tailwind.",
};

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={geist.className}>
      <body className={geistMono.className}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

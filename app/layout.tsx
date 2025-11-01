/** @format */

import "boxicons/css/boxicons.min.css";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const promptFont = Prompt({
  subsets: ["latin"],
  variable: "--font-prompt",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "next-mart",
  description:
    "Next-Mart — a modern demo business website built with Next.js and Tailwind CSS for portfolio showcase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={promptFont.className}>
      <body className={`antialiased min-h-screen flex flex-col m-0 p-0`}>{children}</body>
    </html>
  );
}

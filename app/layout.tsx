import type { Metadata } from "next";
import { Toaster } from 'sonner';
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono, Lexend_Zetta } from "next/font/google";
import "./globals.css";

const lexendZetta = Lexend_Zetta({
  variable: "--font-lexend-zetta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srinath Priyankara - Portfolio",
  description: "Software Engineer specializing in full-stack development, AI integration, and scalable web applications",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexendZetta.variable} antialiased`}
      >
        {children}
        <Toaster position="top-right"/>
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { genPageMetadata } from "@/lib/utils/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = genPageMetadata({
  title: "Portfolio DevLuuTienDat",
  description:
    "I am a web developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I enjoy working with modern technologies to build efficient and user-friendly solutions.",
});

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

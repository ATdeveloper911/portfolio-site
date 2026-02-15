import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Taimoor | Software Engineer",
  description: "Full-stack software engineer specializing in MERN, Next.js, React Native, and enterprise systems. Building secure, scalable applications with AI integration.",
  keywords: ["Software Engineer", "Full Stack Developer", "Next.js", "React Native", "MERN Stack", "TypeScript"],
  authors: [{ name: "Muhammad Taimoor" }],
  openGraph: {
    title: "Muhammad Taimoor | Software Engineer",
    description: "Full-stack software engineer specializing in MERN, Next.js, React Native, and enterprise systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

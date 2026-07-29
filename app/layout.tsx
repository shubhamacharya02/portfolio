import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shubham Acharya | AI Backend Developer & Agentic AI Engineer",
  description: "Portfolio of Shubham Acharya, AI Backend Developer specializing in Agentic AI applications, FastAPI, LangGraph workflow orchestration, RAG systems, and production backend architecture.",
  keywords: [
    "AI Backend Developer",
    "Agentic AI Engineer",
    "Shubham Acharya",
    "Python",
    "FastAPI",
    "LangGraph",
    "LLM Architecture",
    "RAG Systems",
    "Vector Databases",
    "Backend Engineer"
  ],
  authors: [{ name: "Shubham Acharya" }],
  openGraph: {
    title: "Shubham Acharya — AI Backend Developer",
    description: "Building Production-Ready AI Backend Systems using Python, FastAPI, LangGraph, and LLMs.",
    type: "website",
    locale: "en_US",
    siteName: "Shubham Acharya Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Acharya — AI Backend Developer",
    description: "Building Agentic AI Applications & Production Backend Systems."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark scroll-smooth h-full antialiased`}
    >
      <body className="min-h-screen bg-[#0A0A0A] text-gray-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}

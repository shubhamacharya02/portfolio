import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { getAssetPath } from "@/lib/utils";
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

const name = process.env.NEXT_PUBLIC_NAME || "Shubham Acharya";
const title = process.env.NEXT_PUBLIC_TITLE || "AI Backend Developer";
const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Portfolio of Shubham Acharya, AI Backend Developer specializing in Agentic AI applications, FastAPI, LangGraph workflow orchestration, RAG systems, and production backend architecture.";
const profileImage = process.env.NEXT_PUBLIC_PROFILE_IMAGE || "/profile_picture.png";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `${name} | ${title} & Agentic AI Engineer`,
  description: description,
  icons: {
    icon: getAssetPath("/favicon.svg"),
    shortcut: getAssetPath("/favicon.svg"),
    apple: getAssetPath("/favicon.svg"),
  },
  keywords: [
    "AI Backend Developer",
    "Agentic AI Engineer",
    name,
    "Python",
    "FastAPI",
    "LangGraph",
    "LLM Architecture",
    "RAG Systems",
    "Vector Databases",
    "Backend Engineer"
  ],
  authors: [{ name: name }],
  openGraph: {
    title: `${name} — ${title}`,
    description: description,
    type: "website",
    locale: "en_US",
    siteName: `${name} Portfolio`,
    images: [
      {
        url: getAssetPath(profileImage),
        width: 800,
        height: 800,
        alt: name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${name} — ${title}`,
    description: description,
    images: [getAssetPath(profileImage)],
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

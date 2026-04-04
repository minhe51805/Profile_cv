import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Share_Tech_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import Nav from "@/components/nav/nav";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-mono",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://minhtruong.dev"),
  title: "Minh Truong | Frontend Developer",
  description:
    "Portfolio of Minh Truong - a passionate Frontend Developer and Year 4 IT student at Hutech University. Specializing in React, TypeScript, and modern frontend technologies. Based in Vietnam.",
  keywords: [
    "Frontend Developer",
    "React",
    "TypeScript",
    "Web Developer",
    "Portfolio",
    "Vietnam",
    "Hutech University",
    "JavaScript",
    "Next.js",
  ],
  authors: [{ name: "Minh Truong" }],
  creator: "Minh Truong",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://minhtruong.dev",
    siteName: "Minh Truong Portfolio",
    title: "Minh Truong | Frontend Developer",
    description:
      "Portfolio of Minh Truong - Frontend Developer and Year 4 IT student.",
    images: [
      {
        url: "/img/Asset 1@4x-8.png",
        width: 1200,
        height: 630,
        alt: "Minh Truong Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Truong | Frontend Developer",
    description:
      "Portfolio of Minh Truong - Frontend Developer and Year 4 IT student.",
    images: ["/img/Asset 1@4x-8.png"],
    creator: "@minhe51805",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${syne.variable} ${dmSans.variable} ${shareTechMono.variable} min-h-full flex flex-col antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})()`,
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[var(--color-accent)] focus:text-[var(--color-bg)] focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <ThemeProvider>
          {/* Grid Background */}
          <div className="grid-bg" />
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
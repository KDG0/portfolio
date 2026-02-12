import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kevin Guifarro | Full-Stack Developer & AI Solutions Engineer",
  description:
    "Full-stack developer specializing in enterprise systems, business automation, and AI integration. Building solutions at Fortune 500 scale.",
  keywords: [
    "software developer",
    "full-stack developer",
    "enterprise systems",
    "business automation",
    "AI integration",
    "web development",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Kevin" }],
  openGraph: {
    title: "Kevin Guifarro | Full-Stack Developer & AI Solutions Engineer",
    description:
      "Full-stack developer specializing in enterprise systems, business automation, and AI integration. Building solutions at Fortune 500 scale.",
    url: "https://kevin.dev",
    siteName: "kevin.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Guifarro | Full-Stack Developer & AI Solutions Engineer",
    description:
      "Full-stack developer specializing in enterprise systems, business automation, and AI integration. Building solutions at Fortune 500 scale.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

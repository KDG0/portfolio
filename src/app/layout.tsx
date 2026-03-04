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
  title: "Guifarro Dev | AI Chatbots, Automation & Web Development for Small Business",
  description:
    "I help small businesses save time and serve customers 24/7 with custom AI chatbots, workflow automation, and modern websites. 8+ years of Fortune 500 experience.",
  keywords: [
    "AI chatbots",
    "small business automation",
    "AI developer",
    "custom chatbot",
    "workflow automation",
    "web development",
    "Next.js",
    "Costa Rica developer",
    "business automation",
  ],
  authors: [{ name: "Kevin Guifarro" }],
  openGraph: {
    title: "Guifarro Dev | AI Chatbots, Automation & Web Development",
    description:
      "I help small businesses save time and serve customers 24/7 with custom AI chatbots, workflow automation, and modern websites.",
    url: "https://guifarro.dev",
    siteName: "guifarro.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guifarro Dev | AI Chatbots, Automation & Web Development",
    description:
      "I help small businesses save time and serve customers 24/7 with custom AI chatbots, workflow automation, and modern websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t;if(s==='dark'||s==='light'){t=s;}else{t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

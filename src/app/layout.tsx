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
  metadataBase: new URL("https://www.guifarro.dev"),
  title: "AI Chatbots & Automation for Small Business | Guifarro Dev",
  description:
    "Custom AI chatbots, workflow automation, and modern websites for small businesses. 8+ years of Fortune 500 experience. Book a free strategy call today.",
  authors: [{ name: "Kevin Guifarro" }],
  openGraph: {
    title: "AI Chatbots & Automation for Small Business | Guifarro Dev",
    description:
      "Custom AI chatbots, workflow automation, and modern websites for small businesses. 8+ years of Fortune 500 experience. Book a free strategy call today.",
    url: "https://www.guifarro.dev",
    siteName: "Guifarro Dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots & Automation for Small Business | Guifarro Dev",
    description:
      "Custom AI chatbots, workflow automation, and modern websites for small businesses. 8+ years of Fortune 500 experience. Book a free strategy call today.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { PROGRAM_DATES, PROGRAM_NAME } from "@/lib/constants";
import { resolveSiteMetadataBase } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteMetadataBase = resolveSiteMetadataBase();
const siteUrl = siteMetadataBase.href.replace(/\/$/, "");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06080f",
};

export const metadata: Metadata = {
  metadataBase: siteMetadataBase,
  title: `${PROGRAM_NAME} · May 8–9 · Enroll`,
  description:
    "Learn full-stack web development without writing code — build high-value projects with AI tools. Online via Google Meet. Pay via bank transfer and join on WhatsApp.",
  openGraph: {
    title: `${PROGRAM_NAME}`,
    description:
      "Two-day intensive: full-stack sites with AI, no coding required. May 8th & 9th on Google Meet. Recordings available after.",
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: PROGRAM_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROGRAM_NAME}`,
    description: `Live online · ${PROGRAM_DATES} · Google Meet`,
  },
  keywords: [
    "full-stack",
    "web development",
    "AI tools",
    "Nigeria",
    "Google Meet",
    "training",
    "no-code",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
      data-theme="dark"
      style={{ colorScheme: "dark" }}
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${jetbrains.variable} min-h-screen overflow-x-hidden antialiased`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-slate-950 focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-cyan-300"
        >
          Skip to main content
        </a>
        <a
          href="#register"
          className="sr-only focus:not-sr-only focus:absolute focus:left-44 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-violet-500 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-violet-300"
        >
          Skip to enrollment
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

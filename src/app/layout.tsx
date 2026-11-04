import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alice-portofolio.vercel.app"),
  title: "Akoth Alice Ojuang' | QA Testing & ICT Professional",
  description:
    "Explore Akoth Alice Ojuang's professional portfolio, showcasing her ICT background, web technologies, AI data annotation experience and interest in software quality assurance.",
  keywords: [
    "Akoth Alice Ojuang",
    "QA Testing Intern",
    "Software Quality Assurance",
    "Manual Software Testing",
    "API Testing",
    "Postman Testing",
    "SQL Database Validation",
    "AI Chatbot Testing",
    "SimplyDone Africa",
    "ICT Professional",
    "Nairobi Kenya",
  ],
  authors: [{ name: "Akoth Alice Ojuang'" }],
  creator: "Akoth Alice Ojuang'",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Akoth Alice Ojuang' | QA Testing & ICT Professional",
    description:
      "Explore Akoth Alice Ojuang's professional portfolio, showcasing her ICT background, web technologies, AI data annotation experience and interest in software quality assurance.",
    type: "website",
    locale: "en_US",
    siteName: "Akoth Alice Ojuang' Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akoth Alice Ojuang' - ICT Professional | Aspiring QA Tester",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akoth Alice Ojuang' | QA Testing & ICT Professional",
    description:
      "Explore Akoth Alice Ojuang's professional portfolio, showcasing her ICT background, web technologies, AI data annotation experience and interest in software quality assurance.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${dmSans.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F8F7F3] text-[#252722] font-sans flex flex-col selection:bg-[#69745B] selection:text-white">
        {/* Skip to Main Content Link for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#252722] focus:text-white focus:text-xs focus:font-semibold focus:uppercase focus:tracking-wider focus:rounded focus:outline-2 focus:outline-[#69745B] focus:shadow-lg transition-transform"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

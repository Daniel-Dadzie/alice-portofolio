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
  title: "Akoth Alice Ojuang' | QA Testing & ICT Professional",
  description:
    "Explore Akoth Alice Ojuang's professional portfolio, showcasing her ICT background, web technologies, AI data annotation experience and dedication to software quality assurance.",
  keywords: [
    "Akoth Alice Ojuang",
    "QA Testing Intern",
    "Software Quality Assurance",
    "Manual Testing",
    "API Testing",
    "SimplyDone Africa",
    "ICT Professional",
    "Kenya",
  ],
  authors: [{ name: "Akoth Alice Ojuang'" }],
  openGraph: {
    title: "Akoth Alice Ojuang' | QA Testing & ICT Professional",
    description:
      "Thoughtful testing. Reliable technology. Better digital experiences. Professional portfolio of Akoth Alice Ojuang'.",
    type: "website",
    locale: "en_US",
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
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

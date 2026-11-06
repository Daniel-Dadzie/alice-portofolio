import fs from "fs";
import path from "path";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download, Mail } from "lucide-react";
import { personal } from "@/lib/data";
import { ProfileImagePlaceholder } from "@/components/ui/ProfileImagePlaceholder";

export function HeroSection() {
  const cvPath = path.join(
    process.cwd(),
    "public",
    "documents",
    "Akoth-Alice-Ojuang-CV.pdf"
  );
  const cvExists = fs.existsSync(cvPath);

  return (
    <section id="hero" className="py-16 sm:py-24 border-b border-[#DDDCD4]">
      <div className="editorial-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Main Hero Copy (8 columns on lg) */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Headline in Serif Display */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif-heading text-[#252722] leading-[1.15] tracking-tight mb-6">
              Thoughtful testing.
              <br />
              <span className="text-[#69745B]">Reliable technology.</span>
              <br />
              Better digital experiences.
            </h1>

            {/* Supporting Copy */}
            <div className="space-y-4 text-base sm:text-lg text-[#6F7167] leading-relaxed max-w-2xl mb-8">
              {personal.heroSupporting.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#69745B] hover:bg-[#58624C] active:scale-[0.98] text-white text-sm font-medium transition-all duration-150 shadow-xs hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69745B]"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>

              {cvExists && (
                <a
                  href="/documents/Akoth-Alice-Ojuang-CV.pdf"
                  download="Akoth-Alice-Ojuang-CV.pdf"
                  aria-label="Download Akoth Alice Ojuang' Curriculum Vitae (PDF)"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#DDDCD4] hover:border-[#69745B] hover:bg-[#F0EEE7] active:scale-[0.98] text-[#252722] text-sm font-medium transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]"
                >
                  <Download className="w-4 h-4 text-[#69745B]" />
                  <span>Download CV</span>
                </a>
              )}

              <Link
                href="#qa-journey"
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#252722] hover:text-[#69745B] underline underline-offset-4 decoration-[#DDDCD4] hover:decoration-[#69745B] transition-colors duration-150 py-2"
              >
                <span>View QA Learning Journey</span>
                <ArrowDown className="w-4 h-4 text-[#69745B] transition-transform duration-150 group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Portrait Placeholder Frame (4 columns on lg) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <ProfileImagePlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}

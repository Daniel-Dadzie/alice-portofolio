import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/lib/data";
import { CheckCircle2, Globe } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      title: "Accuracy & Attention to Detail",
      description:
        "Trained through AI data annotation and database record management to identify discrepancies, anomalies and edge cases.",
    },
    {
      title: "Systematic Troubleshooting",
      description:
        "Hands-on experience diagnosing hardware, software, code bugs and network failures down to their root causes.",
    },
    {
      title: "Documentation & Clarity",
      description:
        "Committed to writing clear, structured issue logs, lesson guides, and technical reports that facilitate resolution.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 border-b border-[#DDDCD4]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="01 / Background"
          title="About Me"
          description="A multidisciplinary technical foundation grounded in systems, accuracy and education."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Story Narrative (7 columns) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#252722] leading-relaxed">
            <p>
              I&apos;m an ICT professional with a Diploma in Business Information
              Technology and professional experience spanning coding education, AI
              data annotation, customer operations and technical support.
            </p>
            <p className="text-[#6F7167]">
              Through these diverse roles, I&apos;ve developed a genuine appreciation
              for accuracy, structured problem-solving, technical documentation
              and the critical importance of reliable digital systems.
            </p>
            <p className="text-[#6F7167]">
              I am particularly drawn to software quality assurance because it brings
              together analytical thinking, systematic investigation and user experience
              — areas where I have consistently thrived.
            </p>

            {/* Core Working Values */}
            <div className="pt-6 border-t border-[#DDDCD4] space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#69745B]">
                Core Competencies in Practice
              </p>
              <div className="space-y-4">
                {values.map((v, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#69745B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#252722]">
                        {v.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6F7167] mt-0.5">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Quick Profile Card (5 columns) */}
          <div className="lg:col-span-5 bg-[#F0EEE7] border border-[#DDDCD4] rounded-lg p-6 sm:p-8 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#69745B] mb-2">
                Professional Focus
              </p>
              <p className="font-serif-heading text-xl text-[#252722]">
                Quality-Minded ICT Professional
              </p>
              <p className="text-xs text-[#6F7167] mt-1">
                Combining technical support discipline with modern testing methodologies.
              </p>
            </div>

            <div className="border-t border-[#DDDCD4] pt-5 space-y-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#252722]">
                Languages
              </p>
              <div className="flex flex-wrap gap-2">
                {personal.languages.map((lang) => (
                  <span
                    key={lang}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-white border border-[#DDDCD4] text-xs font-medium text-[#252722]"
                  >
                    <Globe className="w-3.5 h-3.5 text-[#69745B]" />
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-[#DDDCD4] pt-5 space-y-2 text-xs text-[#6F7167]">
              <p className="font-semibold text-[#252722] uppercase tracking-wider text-[11px]">
                Target Opportunity
              </p>
              <p>
                QA Testing Intern at SimplyDone Africa &bull; Manual Testing,
                API Testing, SQL Validation &bull; AI Chatbots &amp; Integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

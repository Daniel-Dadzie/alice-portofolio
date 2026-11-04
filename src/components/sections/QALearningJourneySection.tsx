import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { qaLearningAreas } from "@/lib/data";
import { Bot, CheckCircle, Database, FileText, Globe, Layers } from "lucide-react";

export function QALearningJourneySection() {
  const areaIcons: Record<string, React.ReactNode> = {
    "manual-testing": <Globe className="w-5 h-5 text-[#69745B]" />,
    "api-testing": <Layers className="w-5 h-5 text-[#69745B]" />,
    "sql-validation": <Database className="w-5 h-5 text-[#69745B]" />,
    "chatbot-testing": <Bot className="w-5 h-5 text-[#69745B]" />,
  };

  return (
    <section id="qa-journey" className="py-20 sm:py-24 border-b border-[#DDDCD4] bg-[#F0EEE7]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="04 / Competency Roadmap"
          title="My QA Learning Journey"
          description="I am actively developing practical software testing skills to evaluate digital products for reliability, usability and correctness — aligned with modern QA standards."
        />

        {/* Honest statement banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-lg bg-white border border-[#DDDCD4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#69745B] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#6F7167] leading-relaxed">
              <strong className="text-[#252722] font-semibold">Integrity Commitment:</strong>{" "}
              The exercises below represent my structured learning path. As each practical exercise is
              executed, genuine test plans, Postman collections, SQL queries, screenshots and bug reports
              will be integrated directly into this portfolio.
            </p>
          </div>
          <span className="shrink-0 text-[11px] font-semibold uppercase tracking-wider text-[#69745B] px-2.5 py-1 rounded bg-[#EDF0EA] border border-[#DDDCD4]">
            In Progress &bull; Q4 2026
          </span>
        </div>

        {/* Four Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qaLearningAreas.map((area, index) => (
            <div
              key={area.id}
              className="p-6 sm:p-8 rounded-lg border border-[#DDDCD4] bg-white flex flex-col justify-between transition-all hover:border-[#BDBCAE]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#DDDCD4]">
                  <div className="flex items-center gap-2.5">
                    <span className="p-2 rounded bg-[#F8F7F3] border border-[#DDDCD4]">
                      {areaIcons[area.id] || <FileText className="w-5 h-5 text-[#69745B]" />}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6F7167]">
                      Exercise 0{index + 1}
                    </span>
                  </div>
                  <Badge variant="accent" size="sm">
                    Status: {area.status}
                  </Badge>
                </div>

                <h3 className="font-serif-heading text-xl text-[#252722] mb-3">
                  {area.title}
                </h3>

                <p className="text-sm text-[#6F7167] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#252722] mb-2">
                  Focus Tools &amp; Methods:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {area.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2.5 py-1 rounded bg-[#F8F7F3] border border-[#DDDCD4] text-[#252722]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

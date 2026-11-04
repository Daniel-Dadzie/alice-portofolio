import { SectionHeader } from "@/components/ui/SectionHeader";
import { skillGroups } from "@/lib/data";
import { ArrowRight, Code, Cpu, FolderKanban, Network, Sparkles } from "lucide-react";

export function ExpertiseSection() {
  const groupIcons: Record<string, React.ReactNode> = {
    "web-technologies": <Code className="w-4 h-4 text-[#69745B]" />,
    "operating-systems": <Cpu className="w-4 h-4 text-[#69745B]" />,
    "productivity-tools": <FolderKanban className="w-4 h-4 text-[#69745B]" />,
    "systems-networking": <Network className="w-4 h-4 text-[#69745B]" />,
    "professional-skills": <Sparkles className="w-4 h-4 text-[#69745B]" />,
  };

  return (
    <section id="expertise" className="py-20 sm:py-24 border-b border-[#DDDCD4]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Skills &amp; Capabilities"
          title="Technical Expertise"
          description="A solid foundation developed through academic study, practical IT support roles, coding instruction and data quality operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className={`p-6 sm:p-7 rounded-lg border border-[#DDDCD4] bg-white transition-all duration-200 ease-out hover:border-[#BDBCAE] hover:-translate-y-0.5 hover:shadow-xs flex flex-col justify-between ${
                group.id === "professional-skills" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-[#DDDCD4]">
                  {groupIcons[group.id] || <Sparkles className="w-4 h-4 text-[#69745B]" />}
                  <h3 className="font-serif-heading text-lg sm:text-xl text-[#252722]">
                    {group.title}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 rounded bg-[#F8F7F3] border border-[#DDDCD4] text-xs font-medium text-[#252722] hover:border-[#69745B] hover:bg-[#EDF0EA] transition-all duration-150"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DDDCD4]/60 flex items-center justify-between text-[11px] text-[#6F7167]">
                <span>Confirmed Competency</span>
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on developing competencies */}
        <div className="mt-8 p-4 rounded-md bg-[#F0EEE7] border border-[#DDDCD4] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#6F7167]">
          <p>
            Looking for Postman, SQL, or API Testing? These are part of my active learning path.
          </p>
          <a
            href="#qa-journey"
            className="inline-flex items-center gap-1.5 text-[#69745B] hover:text-[#58624C] font-semibold underline underline-offset-2 whitespace-nowrap"
          >
            <span>Explore QA Learning Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

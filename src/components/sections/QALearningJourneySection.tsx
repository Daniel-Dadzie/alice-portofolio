import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { qaLearningAreas } from "@/lib/data";
import {
  Bot,
  CheckCircle2,
  Clock,
  Compass,
  Database,
  ExternalLink,
  FileCheck,
  FileText,
  Globe,
  Layers,
  Sparkles,
} from "lucide-react";

export function QALearningJourneySection() {
  const areaIcons: Record<string, React.ReactNode> = {
    "website-manual-testing": <Globe className="w-5 h-5 text-[#69745B]" />,
    "api-testing-postman": <Layers className="w-5 h-5 text-[#69745B]" />,
    "sql-database-validation": <Database className="w-5 h-5 text-[#69745B]" />,
    "ai-chatbot-testing": <Bot className="w-5 h-5 text-[#69745B]" />,
  };

  const statusVariantMap = (status: string) => {
    switch (status) {
      case "Executed":
      case "Passed":
        return "neutral";
      case "In Progress":
      case "Learning":
        return "accent";
      case "Planned":
      default:
        return "accent";
    }
  };

  return (
    <section id="qa-journey" className="py-20 sm:py-24 border-b border-[#DDDCD4] bg-[#F0EEE7]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Competency Roadmap"
          title="My QA Learning Journey"
          description="A structured curriculum focused on practical evaluation techniques, API validation, database queries and conversational application testing — designed around modern QA standards."
        />

        {/* Candid Journey Statement Banner */}
        <div className="mb-10 p-6 rounded-lg bg-white border border-[#DDDCD4] shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <Compass className="w-5 h-5 text-[#69745B] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-[#252722]">
                  Authentic Skill Development
                </h3>
                <p className="text-xs sm:text-sm text-[#6F7167] mt-1 leading-relaxed max-w-3xl">
                  I am currently building my QA competencies through self-directed study and practical
                  exercises. All modules below reflect my active roadmap. As exercises are completed,
                  genuine test documentation, Postman collections, SQL scripts, and verified findings
                  will be published here.
                </p>
              </div>
            </div>
            <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded bg-[#EDF0EA] border border-[#DDDCD4] text-xs font-medium text-[#58624C]">
              <Clock className="w-3.5 h-3.5" />
              <span>Current Status: Planned Roadmap</span>
            </div>
          </div>
        </div>

        {/* Four Detailed Roadmap Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {qaLearningAreas.map((area) => (
            <article
              key={area.id}
              className="p-6 sm:p-8 rounded-lg border border-[#DDDCD4] bg-white flex flex-col justify-between transition-all duration-200 ease-out hover:border-[#BDBCAE] hover:-translate-y-0.5 hover:shadow-xs"
            >
              <div>
                {/* Header: Icon, Title, Status */}
                <div className="flex items-center justify-between gap-3 pb-4 mb-4 border-b border-[#DDDCD4]">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded bg-[#F8F7F3] border border-[#DDDCD4]">
                      {areaIcons[area.id] || <FileText className="w-5 h-5 text-[#69745B]" />}
                    </span>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F7167]">
                        Learning Track
                      </span>
                      <h3 className="font-serif-heading text-xl text-[#252722] leading-tight">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                  <Badge variant={statusVariantMap(area.status)} size="sm">
                    {area.status}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-[#252722] leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Key Concepts Covered */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#69745B] mb-2.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#69745B]" />
                    <span>Syllabus &amp; Concepts</span>
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#252722]">
                    {area.keyConcepts.map((concept, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#69745B] shrink-0" />
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Being Developed */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#252722] mb-2">
                    Competencies Being Formed:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {area.skillsBeingDeveloped.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded bg-[#F8F7F3] border border-[#DDDCD4] text-[#6F7167]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Future Integration / Planned Output Block */}
              <div className="pt-4 border-t border-[#DDDCD4] mt-auto">
                {area.completedProject ? (
                  /* Renders automatically once genuine completed project evidence exists */
                  <div className="p-4 rounded bg-[#EDF0EA] border border-[#DDDCD4] text-xs space-y-2">
                    <div className="flex items-center justify-between font-semibold text-[#252722]">
                      <span className="flex items-center gap-1.5 text-[#69745B]">
                        <CheckCircle2 className="w-4 h-4" />
                        Verified Completed Project
                      </span>
                      <span>{area.completedProject.reportDate}</span>
                    </div>
                    <p className="text-[#252722]">
                      <strong>Application:</strong> {area.completedProject.applicationUnderTest}
                    </p>
                    <p className="text-[#6F7167]">
                      {area.completedProject.summaryOfFindings}
                    </p>
                    {area.completedProject.evidenceUrl && (
                      <a
                        href={area.completedProject.evidenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#69745B] hover:text-[#58624C] font-semibold underline underline-offset-2 pt-1"
                      >
                        <span>View Verified Evidence</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ) : (
                  /* Standard Planned Target Deliverable */
                  <div className="flex items-start gap-2.5 text-xs text-[#6F7167] bg-[#F8F7F3] p-3 rounded border border-[#DDDCD4]">
                    <FileCheck className="w-4 h-4 text-[#69745B] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#252722] font-medium">Planned Deliverable: </strong>
                      <span>{area.targetDeliverable}</span>
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

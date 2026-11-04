import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/lib/data";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ProfessionalExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 border-b border-[#DDDCD4]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="Career Timeline"
          title="Professional Experience"
          description="Real-world experience spanning coding instruction, AI data annotation, IT systems support and customer problem resolution."
        />

        <div className="space-y-8 lg:space-y-10">
          {experience.map((role) => (
            <article
              key={role.id}
              className="p-6 sm:p-8 lg:p-10 rounded-lg border border-[#DDDCD4] bg-white transition-all duration-200 ease-out hover:border-[#BDBCAE] hover:-translate-y-0.5 hover:shadow-xs"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 mb-6 border-b border-[#DDDCD4]">
                <div>
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#69745B] tracking-wider uppercase">
                      {role.organisation}
                    </span>
                  </div>
                  <h3 className="font-serif-heading text-xl sm:text-2xl text-[#252722]">
                    {role.title}
                  </h3>
                </div>

                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 sm:gap-3 text-xs text-[#6F7167]">
                  {role.period && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F8F7F3] border border-[#DDDCD4]">
                      <Calendar className="w-3.5 h-3.5 text-[#69745B]" />
                      <span className="font-medium text-[#252722]">
                        {role.period}
                      </span>
                    </span>
                  )}

                  {role.location && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F8F7F3] border border-[#DDDCD4]">
                      <MapPin className="w-3.5 h-3.5 text-[#69745B]" />
                      <span>{role.location}</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-7 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#252722] flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#69745B]" />
                    <span>Key Responsibilities</span>
                  </p>
                  <ul className="space-y-2 text-sm text-[#252722] leading-relaxed">
                    {role.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#69745B] mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Transferable relevance to QA */}
                <div className="lg:col-span-5 bg-[#F8F7F3] border border-[#DDDCD4] rounded-md p-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#69745B] mb-2">
                      Transferable QA Value
                    </p>
                    <p className="text-xs sm:text-sm text-[#6F7167] leading-relaxed">
                      {role.transferableNote}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

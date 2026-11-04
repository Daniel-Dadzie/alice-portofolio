import { SectionHeader } from "@/components/ui/SectionHeader";
import { education } from "@/lib/data";
import { GraduationCap, MapPin } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24 border-b border-[#DDDCD4]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="05 / Academic Foundation"
          title="Education"
          description="Formal academic qualification providing an integrated grounding in computing, business information systems and technology operations."
        />

        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-lg border border-[#DDDCD4] bg-white flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded bg-[#F8F7F3] border border-[#DDDCD4] text-[#69745B] shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#69745B]">
                    Diploma Program
                  </span>
                  <h3 className="font-serif-heading text-xl sm:text-2xl text-[#252722] mt-0.5">
                    {item.qualification}
                  </h3>
                  <p className="text-sm font-medium text-[#252722] mt-1">
                    {item.institution}
                  </p>
                  <p className="text-sm text-[#6F7167] mt-2 max-w-xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-2 text-xs text-[#6F7167] border-t md:border-t-0 pt-4 md:pt-0 border-[#DDDCD4]">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#F8F7F3] border border-[#DDDCD4]">
                  <MapPin className="w-3.5 h-3.5 text-[#69745B]" />
                  <span>{item.location}</span>
                </span>
                <span className="italic text-[11px] text-[#6F7167]">
                  Graduation: {item.graduationDate || "Date to be confirmed"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

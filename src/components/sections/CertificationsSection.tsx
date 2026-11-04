import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/lib/data";
import { Award, Calendar } from "lucide-react";

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 sm:py-24 border-b border-[#DDDCD4]">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="06 / Continuing Education"
          title="Certifications"
          description="Verified credentials in cybersecurity, artificial intelligence, digital skills and application development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="p-6 rounded-lg border border-[#DDDCD4] bg-white flex flex-col justify-between transition-all hover:border-[#BDBCAE]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#DDDCD4]">
                  <span className="text-xs font-semibold text-[#69745B] uppercase tracking-wider">
                    Cert 0{index + 1}
                  </span>
                  <Award className="w-4 h-4 text-[#69745B]" />
                </div>

                <h3 className="font-serif-heading text-lg text-[#252722] mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-[#6F7167]">
                  Issued by: <strong className="text-[#252722]">{cert.issuer}</strong>
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DDDCD4]/60 flex items-center justify-between text-xs text-[#6F7167]">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#69745B]" />
                  <span>{cert.date}</span>
                </span>
                <span className="text-[11px] font-medium text-[#69745B]">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

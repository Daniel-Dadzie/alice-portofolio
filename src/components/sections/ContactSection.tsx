import { SectionHeader } from "@/components/ui/SectionHeader";
import { personal } from "@/lib/data";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="editorial-container">
        <SectionHeader
          eyebrow="07 / Inquiries"
          title="Get in Touch"
          description="Open to opportunities in Software Quality Assurance, ICT Support, and Web Technologies. Let's discuss how my analytical foundation and attention to detail can add value to your team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          {/* Main Direct Contact Methods (8 columns) */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email Card */}
            <div className="p-6 sm:p-7 rounded-lg border border-[#DDDCD4] bg-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-[#EDF0EA] border border-[#DDDCD4] flex items-center justify-center text-[#69745B] mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6F7167] mb-1">
                  Email Inquiry
                </p>
                <h3 className="font-serif-heading text-lg text-[#252722] mb-2">
                  Direct Email
                </h3>
                <p className="text-sm text-[#252722] font-medium break-all">
                  {personal.contact.email}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDDCD4]">
                <a
                  href={`mailto:${personal.contact.email}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#69745B] hover:text-[#58624C] underline underline-offset-4 decoration-[#DDDCD4] hover:decoration-[#69745B] transition-colors"
                >
                  <span>Send an Email</span>
                  <Send className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 sm:p-7 rounded-lg border border-[#DDDCD4] bg-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-md bg-[#EDF0EA] border border-[#DDDCD4] flex items-center justify-center text-[#69745B] mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#6F7167] mb-1">
                  Phone &amp; WhatsApp
                </p>
                <h3 className="font-serif-heading text-lg text-[#252722] mb-2">
                  Call or Message
                </h3>
                <p className="text-sm text-[#252722] font-medium">
                  {personal.contact.phone}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDDCD4]">
                <a
                  href={`tel:${personal.contact.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#69745B] hover:text-[#58624C] underline underline-offset-4 decoration-[#DDDCD4] hover:decoration-[#69745B] transition-colors"
                >
                  <span>Initiate Call</span>
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="sm:col-span-2 p-6 sm:p-7 rounded-lg border border-[#DDDCD4] bg-[#F0EEE7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-white border border-[#DDDCD4] flex items-center justify-center text-[#69745B] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#6F7167]">
                    Location Base
                  </p>
                  <p className="font-serif-heading text-lg text-[#252722]">
                    {personal.contact.location}
                  </p>
                </div>
              </div>
              <span className="text-xs text-[#6F7167] bg-white px-3 py-1.5 rounded border border-[#DDDCD4] self-start sm:self-auto">
                Available for on-site &amp; hybrid roles
              </span>
            </div>
          </div>

          {/* Recruiter Sidebar / Application Note (4 columns) */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-lg border border-[#DDDCD4] bg-white space-y-4">
            <span className="inline-block px-2.5 py-1 rounded bg-[#EDF0EA] border border-[#DDDCD4] text-[11px] font-semibold uppercase tracking-wider text-[#69745B]">
              Application Notice
            </span>
            <h3 className="font-serif-heading text-xl text-[#252722]">
              Targeting QA Internship
            </h3>
            <p className="text-xs sm:text-sm text-[#6F7167] leading-relaxed">
              Prioritizing the SimplyDone Africa QA Testing Intern position. Prepared to demonstrate
              rigorous manual test documentation, Postman API workflows, and proactive communication.
            </p>
            <div className="pt-4 border-t border-[#DDDCD4] text-xs text-[#6F7167] space-y-2">
              <p>
                <strong className="text-[#252722]">Status:</strong> Available immediately
              </p>
              <p>
                <strong className="text-[#252722]">Languages:</strong> English &bull; Swahili
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

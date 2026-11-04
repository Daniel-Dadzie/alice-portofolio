import Link from "next/link";
import { personal, navItems } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[#DDDCD4] bg-[#F0EEE7] py-14 sm:py-16 mt-auto">
      <div className="editorial-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#DDDCD4]">
          {/* Column 1: Brand & Professional Statement */}
          <div className="md:col-span-6 lg:col-span-5">
            <h3 className="font-serif-heading text-2xl text-[#252722] mb-2">
              {personal.name}
            </h3>
            <p className="text-sm font-medium text-[#69745B] mb-4">
              {personal.title}
            </p>
            <p className="text-sm text-[#6F7167] leading-relaxed max-w-md">
              Thoughtful testing, reliable technology, and attention to detail.
              Dedicated to building dependable digital experiences through systematic
              investigation and continuous learning.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-3 lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#252722] mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#6F7167] hover:text-[#252722] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="md:col-span-3 lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#252722] mb-4">
              Direct Contact
            </p>
            <div className="space-y-2 text-sm text-[#6F7167]">
              <p>
                <a
                  href={`mailto:${personal.contact.email}`}
                  className="hover:text-[#252722] underline underline-offset-4 decoration-[#DDDCD4] transition-colors"
                >
                  {personal.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${personal.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-[#252722] transition-colors"
                >
                  {personal.contact.phone}
                </a>
              </p>
              <p className="text-xs text-[#6F7167] pt-1">
                📍 {personal.contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7167]">
          <p>
            &copy; 2026 {personal.name}. All rights reserved.
          </p>
          <p className="text-[11px]">
            Designed with Editorial Premium &bull; Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

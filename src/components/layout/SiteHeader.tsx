"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navItems } from "@/lib/data";
import { MobileNavigation } from "./MobileNavigation";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F8F7F3]/90 backdrop-blur-md border-b border-[#DDDCD4] transition-all">
        <div className="editorial-container flex items-center justify-between h-20">
          {/* Brand Logo / Name */}
          <Link
            href="/"
            className="group flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B] rounded"
          >
            <span className="font-serif-heading text-xl sm:text-2xl text-[#252722] tracking-tight group-hover:text-[#69745B] transition-colors">
              Akoth Alice Ojuang&apos;
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#6F7167]">
              QA Testing &bull; ICT &bull; Web
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group text-sm font-medium text-[#6F7167] hover:text-[#252722] transition-colors relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B] rounded"
                  >
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#69745B] transition-all duration-200 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="px-4 py-2 rounded-md bg-[#69745B] hover:bg-[#58624C] active:scale-[0.98] text-white text-xs font-medium uppercase tracking-wider transition-all duration-150 shadow-xs hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69745B]"
            >
              Get in Touch
            </Link>
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            id="mobile-nav-trigger"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex items-center gap-2 px-3 py-1.5 text-[#252722] hover:text-[#69745B] bg-white hover:bg-[#F0EEE7] border border-[#DDDCD4] hover:border-[#69745B] transition-all rounded-lg shadow-xs active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]"
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-dialog"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#65675C]">Menu</span>
            <Menu className="w-4 h-4 text-[#252722]" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        items={navItems}
        triggerId="mobile-nav-trigger"
      />
    </>
  );
}

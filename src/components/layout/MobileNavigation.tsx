"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  X,
  User,
  Code2,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  FileDown,
  ChevronRight,
  Send,
  Sparkles,
} from "lucide-react";
import type { NavItem } from "@/lib/types";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  triggerId?: string;
}

interface NavMeta {
  icon: typeof User;
  subtitle: string;
  tag: string;
  isSpecial?: boolean;
  badgeClass: string;
  iconBgClass: string;
  iconTextClass: string;
  cardHoverBorder: string;
  chevronHoverText: string;
}

const navMetaByHref: Record<string, NavMeta> = {
  "#about": {
    icon: User,
    subtitle: "Background, mindset & approach",
    tag: "Bio",
    badgeClass: "bg-emerald-50 text-emerald-800 border border-emerald-200/70",
    iconBgClass: "bg-emerald-100/80 border border-emerald-200",
    iconTextClass: "text-emerald-800",
    cardHoverBorder: "hover:border-emerald-300",
    chevronHoverText: "group-hover:text-emerald-700",
  },
  "#expertise": {
    icon: Code2,
    subtitle: "Web technologies, OS & networking",
    tag: "Skills",
    badgeClass: "bg-amber-50 text-amber-800 border border-amber-200/70",
    iconBgClass: "bg-amber-100/80 border border-amber-200",
    iconTextClass: "text-amber-800",
    cardHoverBorder: "hover:border-amber-300",
    chevronHoverText: "group-hover:text-amber-700",
  },
  "#experience": {
    icon: Briefcase,
    subtitle: "Tutoring, data annotation & ICT support",
    tag: "History",
    badgeClass: "bg-sky-50 text-sky-800 border border-sky-200/70",
    iconBgClass: "bg-sky-100/80 border border-sky-200",
    iconTextClass: "text-sky-800",
    cardHoverBorder: "hover:border-sky-300",
    chevronHoverText: "group-hover:text-sky-700",
  },
  "#qa-journey": {
    icon: CheckCircle2,
    subtitle: "Manual testing, Postman & test cases",
    tag: "Primary Focus",
    isSpecial: true,
    badgeClass: "bg-gradient-to-r from-teal-600 to-emerald-600 text-white shadow-xs font-semibold",
    iconBgClass: "bg-teal-100/90 border border-teal-300/80",
    iconTextClass: "text-teal-800",
    cardHoverBorder: "hover:border-teal-400 border-teal-200/70 bg-gradient-to-r from-white to-teal-50/30",
    chevronHoverText: "group-hover:text-teal-700",
  },
  "#education": {
    icon: GraduationCap,
    subtitle: "Zetech University & IBM / Cisco certs",
    tag: "Education",
    badgeClass: "bg-indigo-50 text-indigo-800 border border-indigo-200/70",
    iconBgClass: "bg-indigo-100/80 border border-indigo-200",
    iconTextClass: "text-indigo-800",
    cardHoverBorder: "hover:border-indigo-300",
    chevronHoverText: "group-hover:text-indigo-700",
  },
  "#contact": {
    icon: Mail,
    subtitle: "Direct inquiries, email & phone",
    tag: "Let's Talk",
    badgeClass: "bg-rose-50 text-rose-800 border border-rose-200/70",
    iconBgClass: "bg-rose-100/80 border border-rose-200",
    iconTextClass: "text-rose-800",
    cardHoverBorder: "hover:border-rose-300",
    chevronHoverText: "group-hover:text-rose-700",
  },
};

export function MobileNavigation({
  isOpen,
  onClose,
  items,
  triggerId = "mobile-nav-trigger",
}: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Store active element before opening to restore focus on exit
    previousFocusRef.current =
      (document.activeElement as HTMLElement) || document.getElementById(triggerId);

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Focus close button initially
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!dialogRef.current) return;

        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(focusableElements).filter(
          (el) => !el.hasAttribute("disabled") && el.getAttribute("aria-hidden") !== "true"
        );

        if (focusable.length === 0) return;

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: wrap to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);

      // Restore focus to trigger button
      const trigger = document.getElementById(triggerId) || previousFocusRef.current;
      trigger?.focus();
    };
  }, [isOpen, onClose, triggerId]);

  if (!isOpen) return null;

  return (
    <div
      ref={dialogRef}
      id="mobile-navigation-dialog"
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#F8F7F3]"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Decorative Top Accent Stripe */}
      <div
        className="h-1.5 w-full bg-gradient-to-r from-[#69745B] via-[#D97706] to-[#0D9488]"
        aria-hidden="true"
      />

      {/* Top Bar with Brand & Close Button */}
      <div className="editorial-container flex items-center justify-between py-4 border-b border-[#DDDCD4] bg-[#F8F7F3]/95 backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="font-serif-heading text-lg font-medium text-[#252722] tracking-tight">
            Akoth Alice Ojuang&apos;
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
            </span>
            <span className="text-[11px] font-medium text-emerald-800 tracking-wide uppercase">
              Open to Opportunities
            </span>
          </div>
        </div>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-[#EAE8DF] hover:bg-[#69745B] hover:text-white text-[#252722] transition-all flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B] shadow-xs active:scale-95"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Scrollable Navigation Body */}
      <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
        {/* Navigation Cards List */}
        <nav aria-label="Mobile Navigation Links">
          <ul className="space-y-2.5">
            {items.map((item) => {
              const meta = navMetaByHref[item.href] || {
                icon: Sparkles,
                subtitle: "",
                tag: "Section",
                badgeClass: "bg-stone-100 text-stone-700",
                iconBgClass: "bg-stone-100",
                iconTextClass: "text-stone-700",
                cardHoverBorder: "hover:border-[#BDBCAE]",
                chevronHoverText: "group-hover:text-[#69745B]",
              };
              const Icon = meta.icon;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`group w-full flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#DDDCD4] ${meta.cardHoverBorder} hover:shadow-sm transition-all duration-150 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Colorful Icon Container */}
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${meta.iconBgClass} ${meta.iconTextClass} transition-transform duration-200 group-hover:scale-105`}
                        aria-hidden="true"
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Title, Subtitle, and Tag */}
                      <div className="min-w-0 flex flex-col text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-serif-heading text-lg text-[#252722] group-hover:text-[#69745B] transition-colors leading-snug">
                            {item.label}
                          </span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide ${meta.badgeClass}`}
                          >
                            {meta.tag}
                          </span>
                        </div>
                        {meta.subtitle && (
                          <span className="text-xs text-[#6F7167] truncate mt-0.5">
                            {meta.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Chevron Indicator */}
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center text-[#9E9D93] ${meta.chevronHoverText} group-hover:translate-x-0.5 transition-all shrink-0`}
                      aria-hidden="true"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Buttons & Quick Inquiries */}
        <div className="pt-3 border-t border-[#DDDCD4] space-y-3">
          {/* Primary & Secondary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <Link
              href="#contact"
              onClick={onClose}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#58624C] to-[#69745B] hover:from-[#4A5340] hover:to-[#58624C] text-white font-medium text-sm transition-all shadow-sm active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69745B]"
            >
              <Send className="w-4 h-4" />
              <span>Get in Touch</span>
            </Link>

            <a
              href="/documents/Akoth-Alice-Ojuang-CV.pdf"
              download="Akoth-Alice-Ojuang-CV.pdf"
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-[#F0EEE7] border border-[#DDDCD4] hover:border-[#69745B] text-[#252722] hover:text-[#58624C] font-medium text-sm transition-all shadow-xs active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]"
            >
              <FileDown className="w-4 h-4 text-[#69745B]" />
              <span>Download CV (PDF)</span>
            </a>
          </div>

          {/* Quick Contact Strip */}
          <div className="p-3 rounded-xl bg-[#F0EEE7]/80 border border-[#DDDCD4] flex items-center justify-between text-xs">
            <a
              href="mailto:lizzyalice10@gmail.com"
              className="flex items-center gap-2 text-[#252722] hover:text-[#69745B] transition-colors font-medium truncate"
              title="Send email"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="truncate">lizzyalice10@gmail.com</span>
            </a>

            <a
              href="tel:+254718356439"
              className="flex items-center gap-1.5 text-[#58624C] hover:text-[#252722] transition-colors font-semibold shrink-0 ml-2"
              title="Call phone"
            >
              <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>Call</span>
            </a>
          </div>

          <p className="text-center text-[11px] text-[#6F7167]">
            Based in Nairobi, Kenya &bull; Open to On-site & Remote
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ChevronRight, FileDown, Send } from "lucide-react";
import type { NavItem } from "@/lib/types";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
  triggerId?: string;
}

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

    previousFocusRef.current =
      (document.activeElement as HTMLElement) || document.getElementById(triggerId);

    document.body.style.overflow = "hidden";

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
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
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
      {/* Top Bar */}
      <div className="editorial-container flex items-center justify-between py-5 border-b border-[#DDDCD4]">
        <span className="font-serif-heading text-xl text-[#252722] tracking-tight">
          Akoth Alice Ojuang&apos;
        </span>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-[#DDDCD4] bg-transparent hover:bg-[#ECEAE2] text-[#252722] transition-colors flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto editorial-container py-6">
        <nav aria-label="Mobile Navigation Links">
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="group flex items-center justify-between py-4 border-b border-[#DDDCD4] hover:border-[#69745B] transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B] rounded"
                >
                  <span className="font-serif-heading text-2xl text-[#252722] group-hover:text-[#69745B] transition-colors duration-150">
                    {item.label}
                  </span>
                  <ChevronRight className="w-5 h-5 text-[#BDBCAE] group-hover:text-[#69745B] group-hover:translate-x-0.5 transition-all duration-150 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Actions */}
        <div className="mt-10 space-y-3">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#69745B] hover:bg-[#58624C] text-white font-medium text-sm transition-colors duration-150 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69745B]"
          >
            <Send className="w-4 h-4" />
            <span>Get in Touch</span>
          </Link>

          <a
            href="/documents/Akoth-Alice-Ojuang-CV.pdf"
            download="Akoth-Alice-Ojuang-CV.pdf"
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#DDDCD4] hover:border-[#69745B] hover:bg-[#ECEAE2] text-[#252722] font-medium text-sm transition-colors duration-150 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]"
          >
            <FileDown className="w-4 h-4" />
            <span>Download CV</span>
          </a>

          <p className="text-center text-[11px] text-[#9E9D93] pt-2">
            lizzyalice10@gmail.com &bull; Nairobi, Kenya
          </p>
        </div>
      </div>
    </div>
  );
}

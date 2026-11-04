"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
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
          // Shift + Tab: if on first element, wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: if on last element, wrap to first
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
      {/* Top Bar inside Menu */}
      <div className="editorial-container flex items-center justify-between h-20 border-b border-[#DDDCD4]">
        <span className="font-serif-heading text-xl text-[#252722]">
          Akoth Alice Ojuang&apos;
        </span>
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="p-2 text-[#252722] hover:text-[#69745B] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B] rounded"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="editorial-container flex-1 flex flex-col justify-center py-8">
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="font-serif-heading text-2xl text-[#252722] hover:text-[#69745B] transition-colors inline-block focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B] rounded"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-12 pt-8 border-t border-[#DDDCD4]">
          <Link
            href="#contact"
            onClick={onClose}
            className="w-full text-center block px-6 py-3.5 rounded-md bg-[#69745B] hover:bg-[#58624C] text-white font-medium text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69745B]"
          >
            Get in Touch
          </Link>
          <p className="mt-4 text-center text-xs text-[#6F7167]">
            lizzyalice10@gmail.com · Nairobi, Kenya
          </p>
        </div>
      </nav>
    </div>
  );
}

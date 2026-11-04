"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { NavItem } from "@/lib/types";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export function MobileNavigation({
  isOpen,
  onClose,
  items,
}: MobileNavigationProps) {
  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
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
          type="button"
          onClick={onClose}
          className="p-2 text-[#252722] hover:text-[#69745B] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#69745B]"
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
                className="font-serif-heading text-2xl text-[#252722] hover:text-[#69745B] transition-colors inline-block"
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
            className="w-full text-center block px-6 py-3.5 rounded-md bg-[#69745B] hover:bg-[#58624C] text-white font-medium text-base transition-colors"
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

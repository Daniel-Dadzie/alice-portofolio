import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "accent" | "neutral" | "subtle";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "accent",
  size = "md",
  className = "",
}: BadgeProps) {
  const variantStyles = {
    accent: "bg-[#EDF0EA] text-[#69745B] border-[#DDDCD4]",
    neutral: "bg-[#F0EEE7] text-[#252722] border-[#DDDCD4]",
    subtle: "bg-transparent text-[#6F7167] border-[#DDDCD4]",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  return (
    <span
      className={`inline-flex items-center font-medium border rounded-md transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
}

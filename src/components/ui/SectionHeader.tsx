interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-10 sm:mb-14 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-[#69745B] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-heading text-[#252722] leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base sm:text-lg text-[#6F7167] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}

import fs from "fs";
import path from "path";
import Image from "next/image";

export function ProfileImagePlaceholder() {
  const candidatePaths = [
    "images/akoth-profile.png",
    "images/akoth-profile.jpg",
    "images/akoth-profile.jpeg",
    "images/akoth-profile.webp",
  ];

  const imageRelativePath = candidatePaths.find((rel) =>
    fs.existsSync(path.join(process.cwd(), "public", rel))
  );

  if (imageRelativePath) {
    return (
      <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-lg overflow-hidden border border-[#DDDCD4] bg-[#F0EEE7] shadow-sm transition-all duration-300 hover:border-[#BDBCAE] group">
        <Image
          src={`/${imageRelativePath}`}
          alt="Akoth Alice Ojuang' - Professional Portrait"
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 280px, 320px"
          priority
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-lg border border-[#DDDCD4] bg-[#F0EEE7] flex flex-col items-center justify-between p-8 text-center"
      aria-label="Profile image placeholder"
    >
      <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-widest text-[#6F7167]">
        <span>Profile</span>
        <span>NBO / KE</span>
      </div>

      <div className="my-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-full border border-[#DDDCD4] bg-[#F8F7F3] flex items-center justify-center mb-4">
          <span className="font-serif-heading text-2xl text-[#69745B]">
            AAO
          </span>
        </div>
        <p className="font-serif-heading text-lg text-[#252722]">
          Akoth Alice Ojuang&apos;
        </p>
        <p className="text-xs text-[#6F7167] mt-1">
          ICT Professional
        </p>
      </div>

      <div className="w-full py-1.5 px-3 rounded bg-[#F8F7F3] border border-[#DDDCD4] text-[11px] text-[#6F7167]">
        Photograph pending
      </div>
    </div>
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ProfessionalExperienceSection } from "@/components/sections/ProfessionalExperienceSection";
import { QALearningJourneySection } from "@/components/sections/QALearningJourneySection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProfessionalExperienceSection />
      <QALearningJourneySection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </>
  );
}

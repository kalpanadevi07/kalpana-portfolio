import { Hero } from "@/components/Hero";
import {
  AboutPreview,
  AchievementsSection,
  ArchitectureSection,
  ContactCTA,
  EducationSection,
  ExperiencePreview,
  ProjectsPreview,
  SkillsSection,
  ValueSection,
  VisionLabSection
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueSection />
      <AboutPreview />
      <ArchitectureSection />
      <SkillsSection />
      <ExperiencePreview />
      <ProjectsPreview />
      <VisionLabSection />
      <EducationSection />
      <AchievementsSection />
      <ContactCTA />
    </>
  );
}

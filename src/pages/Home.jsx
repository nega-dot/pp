import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { VideoBackground } from "@/components/VideoBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { AwardsSection } from "../components/AwardsSection";
import { EducationSection } from "../components/EducationSection";
import { CertificationsSection } from "../components/CertificationsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ScrollIndicator } from "../components/ScrollIndicator";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Background Effects */}
      <VideoBackground />
      
      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AwardsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
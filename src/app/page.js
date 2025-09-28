import HeroSection from "@/components/Home/HeroSection";
import ServicesSection from "@/components/Home/ServicesSection";
import SkillsSection from "@/components/Home/SkillsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
    </div>
  );
}

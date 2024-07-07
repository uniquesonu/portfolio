import AboutSection from "@/components/AboutSection";
import { GridBackground } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStacks";
import Marquees from "@/components/TechStacks";
import PortfolioWebsite from "@/components/portfolio";

export default function Home() {
  return (
    <div>
      <GridBackground />
      <AboutSection />
      <TechStack />
      {/* <HeroSection /> */}
    </div>
  );
}

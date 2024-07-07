import AboutSection from "@/components/AboutSection";
import { GridBackground } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import PortfolioWebsite from "@/components/portfolio";

export default function Home() {
  return (
    <div>
      <GridBackground />
      <AboutSection />
      {/* <HeroSection /> */}
    </div>
  );
}

"use client";
import { About } from "@/components/About";
import AboutSection from "@/components/AboutSection";
import { GridBackground } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStacks";
import Marquees from "@/components/TechStacks";
import PortfolioWebsite from "@/components/portfolio";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <div>
      <GridBackground />
      <AboutSection />
      <About />
      <TechStack />
      <RecentProjects />
      
      {/* <HeroSection /> */}
    </div>
  );
}

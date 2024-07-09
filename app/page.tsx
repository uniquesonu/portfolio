"use client";
import { About } from "@/components/About";
import AboutSection from "@/components/AboutSection";
import { GridBackground } from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStacks";
import Marquees from "@/components/TechStacks";
import PortfolioWebsite from "@/components/portfolio";
import RecentProjects from "@/components/RecentProjects";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { GiSkills } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,

  },
  {
    name: "About",
    link: "/#about",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,

  },
  {
    name: "skill",
    link: "/#skill",
    icon: <GiSkills className="h-4 w-4 text-neutral-500 dark:text-white" />,

  },
  {
    name: "Project",
    link: "/#project",
    icon: (
      <VscProject className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
  {
    name: "Contact",
    link: "/#contact",
    icon: (
      <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    ),
  },
];

export default function Home() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <GridBackground />
      <AboutSection />
      <About />
      <TechStack />
      <RecentProjects />
      
      {/* <HeroSection /> */}
    </div>
  );
}

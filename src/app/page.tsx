"use client";
import InfiniteCarousel from "./components/InfiniteCarousel";
import { Project, projects } from "../data/projects";
// import LandingPage from "./components/uniqueBackground";

interface ProjectsProps {
  projects: Project[];
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  play: () => void;
  reverse: () => void;
  kill: () => void;
};

export default function Home() {
  const play = () => { };
  const reverse = () => { };
  const kill = () => { };

  return (
    <main className="relative h-screen w-full flex items-center overflow-hidden">

      {/* <LandingPage /> */}
      <InfiniteCarousel
        projects={projects}
        play={play}
        reverse={reverse}
        kill={kill}
      />
    </main>
  );
}

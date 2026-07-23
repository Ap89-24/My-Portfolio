"use client";
import InfiniteCarousel from "./components/InfiniteCarousel";
import { Project, projects } from "../data/projects";
import Intro from "./components/Intro";


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
    <main className="relative h-screen w-full flex flex-col items-center px-10 pt-28">
      <Intro />
      <div className="mt-20">
        <InfiniteCarousel
          projects={projects}
          play={play}
          reverse={reverse}
          kill={kill}
        />
      </div>
    </main>
  );
}

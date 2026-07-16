"use client";
import InfiniteCarousel from "./components/InfiniteCarousel";
import { projects } from "../data/projects";
import LandingPage from "./components/uniqueBackground";


export default function Home() {


  return (
    <main className="relative h-screen w-full flex items-center overflow-hidden">

      <LandingPage />
      <InfiniteCarousel
        projects={projects}
      />
   </main>
  );
}

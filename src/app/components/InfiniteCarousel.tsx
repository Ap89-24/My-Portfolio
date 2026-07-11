import { Project } from "@/src/data/projects";
import CarouselCard from "./CarouselCard";
import { useEffect, useRef } from "react";
import gsap from "@/src/libs/gsap";





interface ProjectsProps {
    projects: Project[];
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    play: () => void;
    reverse: () => void;
    kill: () => void;
};

const CARD_H = 380;
const CARD_W = 300;
const SCALE = 1.35;
const CARD_GAP = 60;
const DURATION = 28;

const TRACK_H = CARD_H * SCALE;

const InfiniteCarousel = ({ projects }: ProjectsProps) => {

    const trackRef = useRef<null>(null);
    const tweenRef = useRef<gsap.core.Tween | null>(null);


    useEffect(() => {
        const singleWidth = projects.length * (CARD_H + CARD_GAP);

        tweenRef.current = gsap.to(trackRef.current, {
            x: -singleWidth,
            ease: "none",
            duration: DURATION,
            repeat: -1
        });

        return () => { tweenRef.current?.kill(); }
    }, [projects]);
    
    const double = [...projects, ...projects];

  return (
      <div
          style={{padding: `${TRACK_H * 0.2}px 0 24px`}}
          className="overflow-hidden">
          <div ref={trackRef}
              style={{gap: `${CARD_GAP}px` , width: "max-content" , height: `${TRACK_H}`}}
              className="track flex items-center">
              {double.map((project, idx) => (
                  <CarouselCard
                      key={idx}
                      projects={project}
                      onHoverStart={() => tweenRef.current?.pause()}
                      onHoverEnd={() => tweenRef.current?.play()}
                  />
              ))}
          </div> 
    </div>
  )
}

export default InfiniteCarousel

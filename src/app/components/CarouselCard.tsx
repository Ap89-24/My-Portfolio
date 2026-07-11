"use client";
import { useRef } from "react";
import TextReveal from "./TextReveal";
import { Project } from "@/src/data/projects";
import gsap from "@/src/libs/gsap";


interface ProjectsProps {
    projects: Project;
    onHoverStart?: () => void;
    onHoverEnd?: () => void;
    play: () => void;
    reverse: () => void;
    reset: () => void;
};

interface functionRef {
    play: () => void;
    reverse: () => void;
    reset: () => void;
}


const CARD_H = 280;
const CARD_W = 200;
const SCALE = 1.35;

const CarouselCard = ({ projects , onHoverStart , onHoverEnd }: ProjectsProps) => {

    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const numberRef = useRef<functionRef | null>(null);
    const titleRef = useRef<functionRef | null>(null);

    const onEnter = () => { 
        onHoverStart?.();

        gsap.to(cardRef.current, {
            width: CARD_W * SCALE,
            height: CARD_H * SCALE,
            duration: 0.46,
            ease: "power3.inOut"
        });

        numberRef.current?.play();
        titleRef.current?.play();
    };

    const onLeave = () => {
        onHoverEnd?.();

        gsap.to(cardRef.current, {
            width: CARD_W,
            height: CARD_H,
            duration: 0.3,
            ease: "power3.inOut"
        });

        numberRef.current?.reverse();
        titleRef.current?.reverse();
    };

  return (
      <div ref={cardRef}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          style={{
              width: CARD_W,
              height: CARD_H,
              flexShrink: 0,
              overflow: "visible",
              cursor: "pointer"
          }}
          className="relative"
      >
          <div style={{ bottom: "calc(100% + 3rem)" }}
              className="titlePanel absolute left-0 pointer-events-none flex flex-col gap-[1rem]">
              
              <TextReveal ref={numberRef} trigger="manual" splitBy="chars">
                  <h3 className="text-[1rem] text-[#010101]"> {projects.number}</h3>
              </TextReveal>

              <TextReveal ref={titleRef} trigger="manual" splitBy="words">
                  <h3 className="text-[1rem] text-[#010101]"> {projects.title}</h3>
              </TextReveal>
          </div>
          
          <div className="imageDiv absolute h-full w-full overflow-hidden">
              <img
                  style={{transformOrigin: "center center" , userSelect: "none"}}
                  className="h-full w-full object-cover" ref={imageRef} src={projects.coverImage} alt={projects.title} />
          </div>
    </div>
  )
}

export default CarouselCard

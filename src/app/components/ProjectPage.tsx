"use client";
import Image from "next/image";
import TextReveal from "./TextReveal";
import gsap, { useGSAP } from "@/src/libs/gsap";
import { useRef } from "react";

const ProjectPage = ({ project }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
          clipPath: "inset(0% 0 0 0)",
          scale: 1,
          delay: 1,
          duration: 1.5,
          ease: "expo.out"
      });
    },
    {
      scope: containerRef,
    },
  );

  return (
    <>
      <main ref={containerRef}>
        <section className="h-screen flex w-full pt-[6rem] pb-[3rem] px-7">
          <div className="firstSegment  h-full w-[10%]">
            <TextReveal delay={1} splitBy="chars">
              <h3 className="text-[3rem]">{project.number}</h3>
            </TextReveal>
          </div>
          <div className="secondSegment h-[88%] w-[33%]">
            <div className="imageDiv relative h-full w-full">
              <Image
                ref={imageRef}
                style={{ clipPath: "inset(100% 0 0 0)" }}
                className="h-full w-full scale-[1.5] object-cover"
                fill
                priority
                src={project.coverImage}
                alt={project.title}
              />
            </div>
          </div>
          <div className="thirdSegment pl-[5rem] h-[85%] w-[60%] flex flex-col justify-end">
            <div className="heading">
              <TextReveal delay={1} ease="power4.out" splitBy="chars">
                <h1 className="text-[3rem] leading-[1.2]">{project.title}</h1>
              </TextReveal>
            </div>
            <div className="subheading flex gap-[1rem]">
              <TextReveal delay={1} splitBy="words">
                <h1 className="text-[1.5rem]">{project.subtitle}</h1>
              </TextReveal>
              <TextReveal delay={1} splitBy="chars">
                <h1 className="text-[1.5rem]">{project.year}</h1>
              </TextReveal>
            </div>
            <div className="description mt-[2rem] w-[70%] text-balance overflow-hidden">
              <TextReveal delay={1} ease="power3.out" splitBy="words">
                <p className="text-[1rem] leading-[1.4]">
                  {project.description}
                </p>
              </TextReveal>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <footer></footer>
      </main>
    </>
  );
};

export default ProjectPage;

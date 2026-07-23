"use client";
import Image from "next/image";
import TextReveal from "./TextReveal";
import gsap, { useGSAP , ScrollTrigger } from "@/src/libs/gsap";
import { useRef } from "react";
import { Project } from "@/src/data/projects";
import useViewTransition from "@/src/hooks/useViewTransition";

interface ProjectsProps {
  project: Project;
  nextProject: Project;
}

const ProjectPage = ({ project, nextProject }: ProjectsProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>("section");

      gsap.to(imageRef.current, {
        clipPath: "inset(0 0 0% 0)",
        scale: 1,
        delay: 1,
        duration: 1.5,
        ease: "expo.out",
      });

      sections.forEach((section, idx) => {
        const container = section.children[0];

        gsap.to(container, {
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          },
        });

        if (idx === sections.length - 1) return;

        ScrollTrigger.create({
          trigger: section,
          start: "bottom bottom",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          scrub: true,
        });
      });
    },
    {
      scope: containerRef,
    },
    );

    const { navigate } = useViewTransition();
    
    const handleClick = () => {
         navigate(`/project/${nextProject.slug}`);
    }

  return (
    <>
      <main ref={containerRef}>
        <section className="h-screen w-full">
          <div className="sectionContainer h-full w-full flex pt-[6rem] pb-[3rem] px-7">
            <div className="firstSegment  h-full w-[10%]">
              <TextReveal delay={1} splitBy="chars">
                <h3 className="text-[3rem]">{project.number}</h3>
              </TextReveal>
            </div>
            <div className="secondSegment h-[88%] w-[33%]">
              <div className="imageDiv relative h-full w-full">
                <Image
                  ref={imageRef}
                  style={{ clipPath: "inset(0 0 100% 0)" }}
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
          </div>
        </section>
        {project.gallery.map((elem, idx) => {
          return (
            <section key={idx} className="h-screen w-full">
              <div
                style={{ transformOrigin: "bottom left" }}
                className=" relative Container h-full w-full rotate-[30deg]"
              >
                <Image
                  src={elem}
                  alt="Gallery Image"
                  fill
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </section>
          );
        })}

              <footer className="h-screen flex items-center justify-center w-full"
              onClick={handleClick}
              >
                  <TextReveal>
                      <h1 className="text-[2.5rem]">Next Project</h1>
                      <h1 className="text-[2rem]">{ project.title}</h1>
                  </TextReveal>
        </footer>
      </main>
    </>
  );
};

export default ProjectPage;

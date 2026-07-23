"use client";
import gsap, { useGSAP } from "@/src/libs/gsap";


const Intro = () => {

    useGSAP(() => {
      const tl = gsap.timeline();

      tl.from(".hero-line", {
        yPercent: 100,
        duration: 1.2,
          ease: "power4.out",
        delay: 0.5,
        stagger: 0.12,
      })
        .from(
          ".intro-text",
          {
            y: 40,
            opacity: 0,
            filter: "blur(10px)",
            duration: 0.8,
          },
          "-=0.6",
        )
        .from(
          ".rounded-full",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.4",
        );
    });



  return (
    <section className="relative flex w-full justify-between gap-16">
      {/* Left Side */}
      <div className="max-w-5xl">
        <div className="overflow-hidden">
          <h1 className="hero-line font-boska text-[clamp(4rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
            Full
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-line font-boska text-[clamp(4rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
            Stack
          </h1>
        </div>

        <div className="overflow-hidden">
          <h1 className="hero-line font-boska text-[clamp(4rem,9vw,8.5rem)] leading-[0.9] tracking-[-0.04em] text-white">
            Developer
          </h1>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex max-w-sm flex-col justify-end gap-8 pt-10">
        <p className="intro-text text-lg leading-relaxed text-neutral-300">
          I craft immersive digital experiences using{" "}
          <span className="text-white">Next.js</span>,{" "}
          <span className="text-white">GSAP</span> and{" "}
          <span className="text-white">Three.js</span>, combining storytelling
          with smooth interactions and high-performance development.
        </p>

        <div className="flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />

          <span className="text-sm uppercase tracking-[0.25em] text-neutral-400">
            Available for Freelance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;

"use client";

import { useRef } from "react";
import gsap, { ScrollTrigger, useGSAP } from "@/src/libs/gsap";

interface GradientRevealProps {
    children: string;
    className?: string;
    trigger?: "mount" | "scroll";
    scrollStart?: string;
}

const GradientReveal = ({

    children,
    className = "",
    trigger = "mount",
    scrollStart = "top 80%"

}: GradientRevealProps) => {

    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {

        if (!textRef.current) return;

        gsap.set(textRef.current, {
            backgroundPosition: "200% center",
            opacity: 0
        });

        const tl = gsap.timeline({
            paused: true
        });

        tl.to(textRef.current, {
            backgroundPosition: "0% center",
            opacity: 1,
            duration: 1.4,
            ease: "power3.out"
        });

        if (trigger === "mount") {
            tl.play();
        }

        if (trigger === "scroll") {

            ScrollTrigger.create({
                trigger: textRef.current,
                start: scrollStart,
                once: true,
                onEnter: () => tl.play()
            });

        }

        return () => tl.kill();

    }, {
        scope: textRef
    });

    return (

        <h1
            ref={textRef}
            className={`
inline-block
bg-[length:200%_100%]
bg-gradient-to-r
from-zinc-500
via-white
to-zinc-500
bg-clip-text
text-transparent
${className}
`}
        >

            {children}

        </h1>

    );

};

export default GradientReveal;
"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import gsap from "../libs/gsap";


const STRIP_COUNT = 9;

const createStrips = () => { 
    const overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.style.cssText = `
       position: fixed;
       inset: 0;
       z-index: 9999;
       pointer-events: none;
       display: flex;
    `;

    for (let i = 0; i < STRIP_COUNT; i++){
        const strip = document.createElement("div");
        strip.style.cssText = `
           flex: 1;
           height: 100%;
           background-color: purple;
           transform: scaleY(0);
           transform-origin: bottom;
        `;

        overlay.appendChild(strip);
    }

    document.body.appendChild(overlay);

    return overlay;
};

const removeOverlay = () => {
    const el = document.getElementById("overlay");
    if (el) el.remove();
}

const useViewTransition = () => {

    removeOverlay();

    const router = useRouter();

    const navigate = useCallback((href: string) => {
           
        const overlay = createStrips();

        const strips = Array.from(overlay.children);

        gsap.to(strips, {
            scaleY: 1,
            duration: 0.60,
            ease: "power2.inOut",
            stagger: {
                each: 0.06,
                from: "edges"
            },
            onComplete: () => {
                router.push(href);

                gsap.to(strips, {
                    scaleY: 0,
                    duration: 0.7,
                    ease: "power2.inOut",
                    delay: 0.3,
                    stagger: {
                        each: 0.06,
                        from: "edges"
                    },
                    transformOrigin: "top",
                    onComplete: removeOverlay
                })
            }
        });

    } , [router])

  return (
     {navigate}
  )
}


export default useViewTransition;
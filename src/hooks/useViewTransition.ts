"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import gsap from "../libs/gsap";


const STRIP_COUNT = 9;

const images = [
    "/images/image-1.jpg",
    "/images/image-2.jpg",
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/image-5.jpg",
];

let currentImage = 0;

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

    const image = images[currentImage];
    for (let i = 0; i < STRIP_COUNT; i++){
        const strip = document.createElement("div");
        strip.style.cssText = `
           flex: 1;
           height: 100%;
           transform: scaleY(0);
           transform-origin: bottom;
           background-image:url(${image});
           background-size:${STRIP_COUNT * 100}% 100%;
           background-position:${(i * 100) / (STRIP_COUNT - 1)}% center;
           background-repeat:no-repeat;
           object-fit:cover;
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
            delay: 0.7,
            stagger: {
                each: 0.02,
                from: "edges"
            },
            onComplete: () => {
                router.push(href);

                currentImage++;

                if (currentImage >= images.length) {
                    currentImage = 0;
                }

                gsap.to(strips, {
                    scaleY: 0,
                    duration: 0.7,
                    ease: "power2.inOut",
                    delay: 0.3,
                    stagger: {
                        each: 0.02,
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
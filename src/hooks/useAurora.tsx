"use client";
import gsap, { useGSAP } from "@/src/libs/gsap";


export const useAurora = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();

        // ===========================
        // Desktop
        // ===========================

        mm.add("(min-width: 769px)", () => {
            gsap.to(".blue", {
                x: 180,
                y: 120,
                duration: 18,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".violet", {
                x: -160,
                y: 140,
                duration: 22,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".teal", {
                x: 120,
                y: -100,
                duration: 26,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        // ===========================
        // Mobile
        // ===========================

        mm.add("(max-width:768px)", () => {
            gsap.to(".blue", {
                x: 80,
                y: 60,
                duration: 30,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            gsap.to(".violet", {
                x: -70,
                y: 70,
                duration: 35,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
        });

        gsap.to(".blue svg", {

            scale: 1.12,

            duration: 10,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

        gsap.to(".violet svg", {

            scale: 0.92,

            duration: 12,

            repeat: -1,

            yoyo: true

        });

        gsap.to(".teal svg", {

            scale: 1.08,

            duration: 14,

            repeat: -1,

            yoyo: true

        });

        return () => mm.revert();
    });

    const spotlight = document.querySelector(".spotlight");
    const sweep = document.querySelector(".sweep");

    if (window.matchMedia("(pointer:fine)").matches && spotlight) {

        const xTo = gsap.quickTo(
            spotlight,
            "x",
            {
                duration: .45,
                ease: "power3.out"
            }
        );

        const yTo = gsap.quickTo(
            spotlight,
            "y",
            {
                duration: .45,
                ease: "power3.out"
            }
        );

        const move = (e: MouseEvent) => {

            xTo(e.clientX);

            yTo(e.clientY);

        }

        window.addEventListener("mousemove", move);

        return () => {

            window.removeEventListener("mousemove", move);

        }

    }

    gsap.set(sweep , {

        xPercent: -180

    });

    gsap.to(sweep , {

        xPercent: 180,

        duration: 2,

        ease: "power2.inOut",

        repeat: -1,

        repeatDelay: 12

    });
};
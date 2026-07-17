"use client";
import gsap, { useGSAP } from "@/src/libs/gsap";


export const useAurora = () => {
    useGSAP(() => {
        const mm = gsap.matchMedia();
        const spotlight = document.querySelector(".spotlight");
        const sweep = document.querySelector(".sweep");

        // ===========================
        // Desktop
        // ===========================

        mm.add("(min-width: 769px)", () => {
            const tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                defaults: {
                    ease: "sine.inOut",
                },
            });

            tl.to(".blue", {
                x: 180,
                y: 120,
                duration: 18,
            }, 0)
                .to(".violet", {
                    x: -160,
                    y: 140,
                    duration: 22,
                }, 0)
                .to(".teal", {
                    x: 120,
                    y: -100,
                    duration: 26,
                }, 0)
                .to(".blue svg", {
                    scale: 1.12,
                    duration: 10,
                }, 0)
                .to(".violet svg", {
                    scale: 0.92,
                    duration: 12,
                }, 0)
                .to(".teal svg", {
                    scale: 1.08,
                    duration: 14,
                }, 0);
        });

        mm.add("(max-width: 768px)", () => {
            const tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
                defaults: {
                    ease: "sine.inOut",
                },
            });

            tl.to(".blue", {
                x: 80,
                y: 60,
                duration: 30,
            }, 0)
                .to(".violet", {
                    x: -70,
                    y: 70,
                    duration: 35,
                }, 0)
                .to(".blue svg", {
                    scale: 1.1,
                    duration: 12,
                }, 0)
                .to(".violet svg", {
                    scale: 0.95,
                    duration: 14,
                }, 0);
        });
        let move: ((e: MouseEvent) => void) | undefined;

        if (window.matchMedia("(pointer:fine)").matches && spotlight) {

            const xTo = gsap.quickTo(spotlight, "x", {
                duration: 0.45,
                ease: "power3.out",
            });

            const yTo = gsap.quickTo(spotlight, "y", {
                duration: 0.45,
                ease: "power3.out",
            });

            move = (e: MouseEvent) => {
                xTo(e.clientX);
                yTo(e.clientY);
            };

            window.addEventListener("mousemove", move);
        }

        if (sweep) {
            gsap.set(sweep, {
                xPercent: -180,
            });

            gsap.to(sweep, {
                xPercent: 180,
                duration: 2,
                repeat: -1,
                repeatDelay: 12,
                ease: "power2.inOut",
            });
        }

        return () => {
            mm.revert();

            if (move) {
                window.removeEventListener("mousemove", move);
            }
        };
    });
};
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            syncTouch: true,
            touchMultiplier: 2,
            easing: (t) => 1 - Math.pow(1 - t, 4),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Keep ScrollTrigger synced with Lenis
        lenis.on("scroll", ScrollTrigger.update);

        // Drive Lenis from GSAP's ticker
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();

        return () => {
            lenis.destroy();

            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });

            ScrollTrigger.killAll();
        };
    }, []);
}
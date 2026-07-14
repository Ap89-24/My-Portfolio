"use client";

import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import gsap, { ScrollTrigger, useGSAP } from "@/src/libs/gsap";

interface BlurRevealProps {
    children: ReactNode;
    className?: string;
    trigger?: "mount" | "scroll" | "manual";
    scrollStart?: string;
    duration?: number;
    delay?: number;
    ease?: string;
    blur?: number;
    y?: number;
}

export interface BlurRevealRef {
    play: () => void;
    reverse: () => void;
    reset: () => void;
}

const BlurReveal = forwardRef<BlurRevealRef, BlurRevealProps>(
    (
        {
            children,
            className = "",
            trigger = "mount",
            scrollStart = "top 75%",
            duration = .9,
            delay = 0,
            ease = "power3.out",
            blur = 12,
            y = 25
        },
        ref
    ) => {

        const wrapperRef = useRef<HTMLDivElement>(null);
        const tlRef = useRef<gsap.core.Timeline>(null);

        useImperativeHandle(ref, () => ({
            play: () => tlRef.current?.play(),
            reverse: () => tlRef.current?.reverse(),
            reset: () => tlRef.current?.pause(0)
        }));

        useGSAP(() => {

            if (!wrapperRef.current) return;

            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (reduceMotion) {
                gsap.set(wrapperRef.current, {
                    opacity: 1,
                    clearProps: "all"
                });
                return;
            }

            gsap.set(wrapperRef.current, {
                opacity: 0,
                y,
                filter: `blur(${blur}px)`
            });

            tlRef.current = gsap.timeline({
                paused: true
            });

            tlRef.current.to(wrapperRef.current, {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                duration,
                ease,
                delay,
                clearProps: "filter"
            });

            if (trigger === "mount") {
                tlRef.current.play();
            }

            if (trigger === "scroll") {
                ScrollTrigger.create({
                    trigger: wrapperRef.current,
                    start: scrollStart,
                    once: true,
                    onEnter: () => tlRef.current?.play()
                });
            }

            return () => {
                tlRef.current?.kill();
            };

        }, {
            scope: wrapperRef
        });

        return (
            <div ref={wrapperRef} className={className}>
                {children}
            </div>
        );

    });

export default BlurReveal;
"use client";
import gsap, { ScrollTrigger, SplitText, useGSAP } from "@/src/libs/gsap";
import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react"



interface TextRevealProps {
    children: ReactNode;
    className?: string;
    trigger?: "mount" | "scroll" | "manual";
    scrollStart?: string;
    splitBy?: "lines" | "words" | "chars";
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
}


interface TextRevealRef {
    play: () => void;
    reverse: () => void;
    reset: () => void;
}
/* 
@description -> We use forwardref to use the manual scrolltrigger functionality....
And also by using forwardRef the parent can also pass ref to the children for accessing the methods inside the children
*/
const TextReveal = forwardRef<TextRevealRef , TextRevealProps>(
    (
     {

        children,
        className = "",
        trigger = "mount",
        scrollStart = "top 75%",
        splitBy = "lines",
        duration = 0.67,
        stagger = 0.085,
        delay = 0,
        ease = "power3.out"

        }, ref) => {
        const wrapperRef = useRef<HTMLDivElement | null>(null);
        const splitRef = useRef<SplitText | null>(null);
        const tlRef = useRef<gsap.core.Timeline | null>(null);


        /* 
        @description -> Lets the child customize what the parent receives through that ref, exposing only the methods or values you choose by using useImperativeHandle.
        */
        useImperativeHandle(ref, () => ({
            play: () => tlRef.current?.play(),
            reverse: () => tlRef.current?.reverse(),
            reset: () => tlRef.current?.pause(0)
        }));
        
        
        useGSAP(() => {

            if (!wrapperRef.current) return;

            splitRef.current = new SplitText(wrapperRef.current, {
                type: splitBy,
                lineThreshold: 0.3
            });

            const elements = splitRef.current[splitBy];

            gsap.set(elements, {
                yPercent: 110
            });

            tlRef.current = gsap.timeline({
                paused: true,
                defaults: { delay },
            });

            tlRef.current.to(elements, {
                yPercent: 0,
                opacity: 1,
                duration,
                ease,
                stagger: {
                    each: stagger,
                    from: "start",
                },
            });


            if (trigger === "mount") {
                tlRef.current.play();
            };

            if (trigger === "scroll") {
                ScrollTrigger.create({
                    trigger: wrapperRef.current,
                    start: scrollStart,
                    once: true,
                    onEnter: () => tlRef.current?.play(),
                })
            };

            return () => {
                tlRef.current?.kill();
                splitRef.current?.revert();
            };

        }, {
            scope: wrapperRef
        })
        
    return (
        <div ref={wrapperRef} className={`overflow-hidden ${className}`}>
            {children}
        </div>
    )
});

export default TextReveal

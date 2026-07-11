import gsap, { ScrollTrigger , SplitText , useGSAP } from "@/src/libs/gsap";
import { forwardRef, ReactNode, useRef } from "react"



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

/* 
@description -> We use forwardref to use the manual scrolltrigger functionality....
*/
const TextReveal = forwardRef<HTMLDivElement , TextRevealProps>(
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
        const wrapperRef = useRef(null);
        
        
        useGSAP(() => {
            
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

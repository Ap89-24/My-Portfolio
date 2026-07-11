"use client";
import { useRef } from "react";
import TextReveal from "./components/TextReveal";


export default function Home() {

  const triggerRef = useRef(null);


  const handleHoverEnter = () => {
    triggerRef.current?.play();
  }

  const handleHoveLeave = () => {
    triggerRef.current?.reverse();
  }
  
  return (
    <main className="h-[300vh] w-full">
      <div className="h-[6rem] w-[8rem] bg-red-500"
        onPointerEnter={handleHoverEnter}
        onPointerLeave={handleHoveLeave}
      ></div>
      <TextReveal
        ref={triggerRef}
        splitBy="chars"
        trigger="manual"
        className="text-[10rem]">
        <h1> Hello Everyone</h1>
      </TextReveal>
   </main>
  );
}

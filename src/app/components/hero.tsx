"use client";
import React from "react";
import { Boxes } from "../../components/ui/background-boxes";
import { cn } from "../../utils/cn";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { TypeAnimation } from 'react-type-animation';

export function Hero() {
    const words = [
        {
          text: "Capacity",
        },
        {
          text: "Connect",
        },
        {
          text: "Limited",
        },
     
      ];
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        {/* Capacity Connect Limited */}
       <div className="block md:hidden">
       <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Capacity Connect Limited',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '24px', display: 'inline-block' }}
      repeat={Infinity}
    />
       </div>
        <div className="hidden md:block">
        <TypewriterEffectSmooth words={words} className="text-[60px]"/>
        </div>
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20 text-[14px] md:text-[20px]">
      We envisioned a world where communities everywhere are healthy, happy, and prosperous.
      </p>
    </div>
  );
}

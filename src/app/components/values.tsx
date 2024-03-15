"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";

export function Values() {
  return (
   <main className="bg-white w-full flex flex-col items-center justify-center">
    <h1 className="text-black my-10 text-4xl font-[700]">Our Values</h1>
         <div className="bg-black w-[90%] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
            
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
   </main>
  );
}

const testimonials = [
  {
    quote:
      " We connect people and organizations to form synergistic partnerships that delivers lasting change.",
    name: "Connection",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "We believe in the power of co-creation and collective action.",
    name: " Collaboration",
    title: "Hamlet",
  },
  {
    quote: "We respect the dignity and humanity of every individual and are committed to fairness, inclusion, and justice in everything we do.",
    name: "Dignity",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "We consistently hold ourselves and each other to delivering excellence and ensuring the highest-level of professionalism in everything we do.",
    name: "Integrity",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "We are transparent about what we know and what we don’t know, and we own up when we make mistakes. We trust the wisdom of the local actors we serve.",
    name: "Humility",
    title: "Moby-Dick",
  },
];

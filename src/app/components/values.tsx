"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export function Values() {
  return (
   <main className="bg-white mb-10 flex flex-col items-center justify-center">
    <h1 className="text-black my-10 text-4xl font-[700]">Our Values</h1>
  
      <div className="">
      <Marquee pauseOnHover speed={100}>
        {testimonials.map((item, i: number) => (
          <div key={i} className="item ml-2" data-value="1">
            <div className="w-[345px] px-4 rounded-lg h-[40vh] bg-[#0E1729] text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-4 font-bold">{item.name}</h1>
            <p>{item.quote}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
     
  
   </main>
  );
}

const testimonials = [
  {
    quote:
      "We connect people and organizations to form synergistic partnerships that delivers lasting change.",
    name: "Connection",

  },
  {
    quote:
      "We believe in the power of co-creation and collective action.",
    name: " Collaboration",
  
  },
  {
    quote: "We respect the dignity and humanity of every individual and are committed to fairness, inclusion, and justice in everything we do.",
    name: "Dignity",
   
  },
  {
    quote:
      "We consistently hold ourselves and each other to delivering excellence and ensuring the highest-level of professionalism in everything we do.",
    name: "Integrity",

  },
  {
    quote:
      "We are transparent about what we know and what we don’t know, and we own up when we make mistakes. We trust the wisdom of the local actors we serve.",
    name: "Humility",

  },
];

"use client";

import { motion } from "motion/react";
import Prompt from "./prompt";
import Image from "next/image";
import automationIMG from "../public/automationIMG.svg";
export default function NoCode() {
  return (
    <div
      className="h-screen    text-[#f7f8f8] flex flex-col items-center justify-start px-40 w-full mt-40  "
      style={{
        background:
          "linear-gradient(to bottom, hsla(0,0%,100%,.05), transparent 20%), linear-gradient(180deg, rgba(97, 106, 115, 0) 0, rgba(97, 106, 115, .05) 40%, rgba(97, 106, 115, .05) 80%, rgba(97, 106, 115, 0) 100%)",
      }}
    >
      <h1  className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[555] tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl">Multi-Deployment Methods</h1>
      <motion.div
        initial={{
          y: 30,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          delay: 0.1,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
          staggerChildren: 0.1, // If animating multiple items
        }}
        className="flex items-start w-6xl flex-col    "
      >
        <motion.h2
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
            staggerChildren: 0.1, // If animating multiple items
          }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[538]  tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mb-5 mt-40"
        >
          No-Code: drag-and-drop logic and simple prompts
        </motion.h2>
        <motion.p
          initial={{
            y: 30,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
            staggerChildren: 0.1, // If animating multiple items
          }}
          className="font-[510] tracking-[-0.011em] text-[#8a8f98] w-1/2 my-4"
        >
          Perfect for traders who have ideas but no coding background—stack
          conditions, test, and deploy in minutes.
        </motion.p>
      </motion.div>
      <motion.div
        initial={{
          y: 60,
          opacity: 0,
          scale: 0.95,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 1.2,
          ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
        }}
      className="mt-10 flex h-72  items-center justify-center ">
        <div className="w-1/2 h-full  border-t border-b border-zinc-800/60 relative  border-b-zinc-800/80 p-10">
          <Prompt />
          <div className="w-1/2 h-full bg-gradient-to-l from-[#0d0e0f] to-transparent pointer-events-none top-0 right-0 absolute z-10 opacity-75" />
        </div>
        <div className="w-1/2 h-full relative  p-10 border-t border-b  border-zinc-800/60  border-b-zinc-800/80 border-l   border-l-zinc-800/80">
          <div className="w-full h-full bg-gradient-to-t from-[#0d0e0f] to-transparent pointer-events-none inset-0 absolute z-10 opacity-0" />
          <Image src={automationIMG} alt="automationImage" className="p-1 " />
        </div>
      </motion.div>
    </div>
  );
}

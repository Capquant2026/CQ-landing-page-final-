"use client";

import { motion } from "motion/react";
import Prompt from "./prompt";
import Image from "next/image";
import automationIMG from "../public/automationIMG.svg";

export default function NoCode() {
  return (
    <div
      className="min-h-screen text-[#f7f8f8] flex flex-col items-center justify-start 
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 
                 w-full mt-10 sm:mt-20 md:mt-32 lg:mt-40"
      style={{
        background:
          "linear-gradient(to bottom, hsla(0,0%,100%,.05), transparent 20%), linear-gradient(180deg, rgba(97, 106, 115, 0) 0, rgba(97, 106, 115, .05) 40%, rgba(97, 106, 115, .05) 80%, rgba(97, 106, 115, 0) 100%)",
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                     mt-8 sm:mt-10 md:mt-12 lg:mt-15
                     leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                     font-[555] tracking-[-.0325em] text-balance text-center
                     max-w-full px-4">
        Multi-Deployment Methods
      </h1>
      
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
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1,
        }}
        className="flex items-start w-full max-w-6xl flex-col"
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
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1,
          }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                     leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                     font-[538] tracking-[-.0325em] text-balance text-center sm:text-left
                     max-w-full mt-16 sm:mt-24 md:mt-32 lg:mt-40 px-4 sm:px-0"
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
            ease: [0.25, 0.46, 0.45, 0.94],
            staggerChildren: 0.1,
          }}
          className="font-[510] tracking-[-0.011em] text-[#8a8f98] 
                     w-full sm:w-3/4 md:w-2/3 lg:w-1/2 
                     mt-5 px-4 sm:px-0 text-center sm:text-left
                     text-sm sm:text-base"
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
          ease: [0.215, 0.61, 0.355, 1],
        }}
        className="mt-6 sm:mt-8 md:mt-10 
                   flex flex-col lg:flex-row 
                   h-auto lg:h-72 
                   items-center justify-center 
                   w-full max-w-6xl"
      >
        {/* Left Panel - Prompt */}
        <div className="w-full lg:w-1/2 
                        h-64 sm:h-72 lg:h-full 
                        border-t flex items-center justify-center border-b lg:border-r-0
                        border-zinc-800/60 relative 
                        border-b-zinc-800/80 
                        ">
          <Prompt />
          <div className="w-full lg:w-1/2 h-full 
                          bg-gradient-to-l from-[#0d0e0f] to-transparent 
                          pointer-events-none 
                          top-0 right-0 absolute z-10 opacity-75" />
        </div>
        
        {/* Right Panel - Image */}
        <div className="w-full lg:w-1/2 
                        h-64 sm:h-72 lg:h-full 
                        relative 
                        p-4 sm:p-6 md:p-8 lg:p-10 
                          border-t border-b lg:border-r-0
                        border-zinc-800/60 relative 
                        border-b-zinc-800/80
                        border-zinc-800/60 
                        border-b-zinc-800/80 
                        lg:border-l lg:border-l-zinc-800/80
                      ">
          <div className="w-full h-full 
                          bg-gradient-to-t from-[#0d0e0f] to-transparent 
                          pointer-events-none inset-0 absolute z-10 opacity-0" />
          <Image 
            src={automationIMG} 
            alt="automationImage" 
            className="p-1 w-full h-full object-contain" 
          />
        </div>
      </motion.div>
    </div>
  );
}
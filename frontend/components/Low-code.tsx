"use client";

import { motion } from "motion/react";
import MovingSymbolCode from "./MovingSymbolCode";
import arrowImg from "../public/Connector line.svg";
import code from "../public/browsercode.svg";
import Image from "next/image";

export default function LowCode() {
  return (
    <div 
      className="text-[#f7f8f8] flex flex-col 
                 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40 
                 py-8 sm:py-16 md:py-24 lg:py-32 xl:py-40
                 w-full 
                 mt-10 sm:mt-20 md:mt-32 lg:mt-40 
                 bg-gradient-to-b from-[#141516] to-[#08090A]" 
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)"
      }}
    >
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
        className="flex self-center items-start w-full max-w-6xl flex-col"
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
                     max-w-full mb-5 px-4 sm:px-0"
        >
          Low-Code: import your own strategies
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
                     w-full sm:w-3/4  lg:w-1/2 
                     px-4 sm:px-0 text-center sm:text-left
md:w-4/6 text-xl"
        >
          Ideal for traders with basic coding knowledge who want flexibility
          without starting from scratch.
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
      className="mr-20 flex mt-10 flex-col lg:flex-row items-center justify-between lg:justify-center gap-15 lg:gap-0">
        <MovingSymbolCode />
        <Image src={arrowImg} alt="arrowimg" className="rotate-90 lg:rotate-0" priority />
        <Image src={code} alt="code" width={300} priority />
      </motion.div>
    </div>
  );
}
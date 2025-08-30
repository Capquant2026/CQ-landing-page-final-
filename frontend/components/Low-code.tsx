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
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
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
        className="mr-20 flex mt-10 flex-col lg:flex-row items-center justify-between lg:justify-center gap-15 lg:gap-0"
      >
        <MovingSymbolCode />
        <svg
        className="rotate-90 lg:rotate-0"
          xmlns="http://www.w3.org/2000/svg"
          width="139"
          height="38"
          viewBox="0 0 139 38"
          fill="none"
        >
          <path
            d="M3 0.5C1.61929 0.5 0.5 1.61929 0.5 3C0.5 4.38071 1.61929 5.5 3 5.5V3V0.5ZM137.423 21.243C138.4 20.2666 138.4 18.6837 137.423 17.7074L121.514 1.79752C120.537 0.821209 118.954 0.821209 117.978 1.79752C117.002 2.77383 117.002 4.35674 117.978 5.33305L132.12 19.4752L117.978 33.6173C117.002 34.5936 117.002 36.1765 117.978 37.1529C118.954 38.1292 120.537 38.1292 121.514 37.1529L137.423 21.243ZM57 11.2376H59.5H57ZM57 11.2376H59.5H57ZM3 3V5.5H48.7624V3V0.5H3V3ZM65.2376 19.4752V21.9752H135.656V19.4752V16.9752H65.2376V19.4752ZM57 11.2376H54.5C54.5 17.1678 59.3074 21.9752 65.2376 21.9752V19.4752V16.9752C62.0688 16.9752 59.5 14.4064 59.5 11.2376H57ZM48.7624 3V5.5C51.9312 5.5 54.5 8.06881 54.5 11.2376H57H59.5C59.5 5.30738 54.6926 0.5 48.7624 0.5V3Z"
            fill="#202122"
          />
        </svg>
     
        <Image src={code} alt="code" width={300} priority />
      </motion.div>
    </div>
  );
}

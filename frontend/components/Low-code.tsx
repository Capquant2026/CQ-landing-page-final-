"use client";

import { motion } from "motion/react";
import MovingSymbolCode from "./MovingSymbolCode";
import arrowImg from "../public/Connector line.svg";
import code from "../public/browsercode.svg";
import Image from "next/image";

export default function LowCode() {
  return (
    <div className="h-screen    text-[#f7f8f8] flex flex-col items-center justify-start p-40 w-full mt-40 bg-gradient-to-b from-[#141516] to-[#08090A] ">
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
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mb-5 "
        >
          Low-Code Import your own Strategies
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
          Ideal for traders with basic coding knowledge who want flexibility
          without starting from scratch.
        </motion.p>
      </motion.div>
      {/* <div className=" w-full mt-5">
        <div className="w-4/6 bg-[#202122] mx-auto  h-72 rounded-lg p-10">
          <h2 className="text-2xl font-[538]  tracking-[-.0325em] text-balance ">
            Import strategies from your platform
          </h2>
          <div>
            <p>= (◊ - ◘) × ■ ÷ ▲$ @ ◎◄/► ≥ 1:2 ∴ ▲ ≥ 2 × ▼ & φ&λ ≠ $0θ% ≤ 2% ∩ μ ≠ ∅ || ●@{}</p>
            <p>= (◊ - ◘) × ■ ÷ ▲$ @ ◎◄/► ≥ 1:2 ∴ ▲ ≥ 2 × ▼ & φ&λ ≠ $0θ% ≤ 2% ∩ μ ≠ ∅ || ●@{}</p>
            <p>= (◊ - ◘) × ■ ÷ ▲$ @ ◎◄/► ≥ 1:2 ∴ ▲ ≥ 2 × ▼ & φ&λ ≠ $0θ% ≤ 2% ∩ μ ≠ ∅ || ●@{}</p>
          </div>
        </div>
      </div> */}
      <div className="w-full flex items-center justify-center">
        <MovingSymbolCode />
        <Image src={arrowImg} alt="arrowimg" />
        <Image src={code} alt="code" width={400} />
      </div>
    </div>
  );
}

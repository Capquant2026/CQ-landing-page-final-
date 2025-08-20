"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";

export default function Insight() {
  return (
    <div className="h-screen    text-[#f7f8f8] flex flex-col items-center justify-start p-40 w-full mt-40 bg-gradient-to-b from-[#141516] to-[#08090A] ">
      <div className=" w-6xl">
       
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
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                           leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                           font-semibold tracking-tight text-balance 
                           max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
        >
          Multi-Deployment Methods
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
          className="text-[#8a8f98] w-1/2 mt-5"
        >
          Whether you prefer visual builders, importing your strategy from your
          preferred platform, or direct API access—deploy institutional-grade
          strategies your way.
        </motion.p>
        <strong className="text-[#68cc58] block mb-5 tracking-tight">
          NoCode, LowCode, or ProCode
        </strong>

        <motion.span
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
            delay: 0.4,
            duration: 0.9,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
            staggerChildren: 0.1, // If animating multiple items
          }}
          className="inline-block"
        >
          <Button
            className="bg-[#f7f8f8] hover:bg-[#f7f8f8] text-black "
            size={"lg"}
          >
            Join Waitlist
          </Button>
        </motion.span>
      </div>
    </div>
  );
}

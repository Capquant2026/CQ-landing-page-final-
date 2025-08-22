"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { IoMdPlay } from "react-icons/io";

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
                           font-[538] tracking-[-.0325em] text-balance 
                           max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mb-5 "
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
          className="font-[510] tracking-[-0.011em] text-[#8a8f98] w-1/2 mt-4"
        >
          Whether you prefer visual builders, importing your strategy from your
          preferred platform, or direct API access—deploy institutional-grade
          strategies your way.
        </motion.p>

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
            duration: 1,
            ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
          }}
          className="w-full flex items-center justify-center max-w-[1100px] mt-16 sm:mt-20 "
        >
          <motion.div
            className="w-full flex flex-col items-center justify-center p-8 sm:p-16 md:p-24 lg:p-32 xl:p-52 bg-gradient-to-b from-[#141516] via-[#0f1011] to-[#08090A] rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm min-h-[300px] sm:min-h-[400px]"
            initial={{ backdropFilter: "blur(0px)" }}
            whileInView={{ backdropFilter: "blur(20px)" }}
            transition={{ delay: 0.3, duration: 0.8 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

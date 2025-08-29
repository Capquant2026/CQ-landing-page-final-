"use client";

import Dashboard from "./dashboard";
import { motion } from "motion/react";

export default function Hero() {
  const titleContent = "Idea to live trading in 60 minutes".split(" ");

  return (
    <div className="flex text-[#f7f8f8] overflow-hidden flex-col items-center min-h-screen w-full">
      <div className="w-full max-w-[1100px] mt-20 sm:mt-32 md:mt-40 px-4 sm:px-6 lg:px-8">
        <div className="text-[#f7f8f8] flex mx-auto flex-col gap-1 sm:gap-6 md:gap-1 items-center text-center md:items-start md:text-start">
          <motion.h1
            initial={{
              y: 10,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[555] tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
          >
            <span className="flex flex-wrap items-start justify-center md:justify-start gap-1 sm:gap-3">
              {titleContent.map((item: string, index: number) => (
                <span key={index} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            initial={{
              y: 10,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.1,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.1,
            }}
            className="text-[#8A8F98] text-sm sm:text-base md:text-md font-[555]
                        leading-relaxed sm:leading-relaxed md:leading-relaxed mt-5 
                        tracking-tight text-center md:text-left w-full md:w-1/2 
                        max-w-1/2"
          >
            Compete for real capital{" "}
            <strong>every hour — No-code, Low-code, or Pro-code </strong>
            strategies go live <strong>intraday.</strong>
          </motion.p>
        </div>
      </div>

      <motion.div
        initial={{
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94],
          staggerChildren: 0.1,
        }}
        className="w-full max-w-[1600px] mt-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute w-[200%] h-[80%] left-0 -bottom-[14%] bg-gradient-to-t pointer-events-none from-[#09090a] to-transparent z-50"></div>
        <Dashboard />
      </motion.div>
    </div>
  );
}

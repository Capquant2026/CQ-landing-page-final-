"use client";

import Dashboard from "./dashboard";
import { IoMdPlay } from "react-icons/io";
import { motion } from "motion/react";
export default function Hero() {
  const titleContent = "Idea to Live Trading in 60 Minutes".split(" ");

  return (
    <div className="flex text-[#f7f8f8] overflow-hidden flex-col items-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[1100px] mt-20 sm:mt-32 md:mt-40">
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
              ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
              staggerChildren: 0.1, // If animating multiple items
            }}
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[555] tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
          >
            <span className="flex flex-wrap items-start  justify-start gap-1  sm:gap-3 ">
              {titleContent.map((item: string, index: number) => (
                <span key={index} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </span>
            {/* <span className="flex flex-wrap items-start justify-start gap-1 sm:gap-3">
              {"60 min Execution Loop".split(" ").map((item, index) => (
                <span key={index} className="whitespace-nowrap">
                  {item}
                </span>
              ))}
            </span> */}
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
              ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
              staggerChildren: 0.1, // If animating multiple items
            }}
            className="text-[#8A8F98] text-sm sm:text-base md:text-md font-[555]
                        leading-relaxed sm:leading-relaxed md:leading-relaxed 
                        tracking-tight  md:text-left w-full md:w-1/2 
                        max-w-1/2  
                        px-2 sm:px-4 md:px-0"
          >
            The world’s first institutional alpha marketplace. No-code,
            low-code, or pro-code—your strategies compete for real capital every
            <strong> 60 minutes</strong>
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
          ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
          staggerChildren: 0.1, // If animating multiple items
        }}
        className=" w-full max-w-[1600px]  mt-16 sm:mt-20 md:mt-24 lg:mt-32"
      >
        <Dashboard />
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
          duration: 1,
          ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
        }}
        className="w-full flex items-center justify-center max-w-[1100px] mt-16 sm:mt-20 md:mt-52"
      >
        <motion.div
          className="w-full flex flex-col items-center justify-center p-8 sm:p-16 md:p-24 lg:p-32 xl:p-52 bg-gradient-to-b from-[#141516] via-[#0f1011] to-[#08090A] rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm min-h-[300px] sm:min-h-[400px]"
          initial={{ backdropFilter: "blur(0px)" }}
          whileInView={{ backdropFilter: "blur(20px)" }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.button
            initial={{
              y: 40,
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1], // Back ease for bounce effect
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 },
            }}
            className="group relative cursor-pointer w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center bg-gradient-to-br from-[#f7f8f8] to-[#e5e7eb] hover:from-[#5E6AD2] hover:to-[#4c59c7] text-black hover:text-white rounded-full overflow-hidden transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:shadow-[#5E6AD2]/25 focus:outline-none focus:ring-4 focus:ring-[#5E6AD2]/50"
            aria-label="Play demo video"
          >
            <motion.div
              initial={{ x: 2 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <IoMdPlay className="text-3xl sm:text-4xl md:text-5xl transition-all duration-300 relative z-50 drop-shadow-sm" />
            </motion.div>

            {/* Animated background overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#5E6AD2] to-[#4c59c7] rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: 1,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            />

            {/* Ripple effect */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{
                scale: [0, 1.2, 1],
                opacity: [0, 0.3, 0],
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            />
          </motion.button>

          <motion.div
            initial={{
              y: 30,
              opacity: 0,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.6,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <p className="mt-4 text-sm font-light sm:text-base md:text-lg text-gray-400 tracking-tight">
              Video Integration Placeholder
            </p>
            <motion.h2
              className="mt-2 text-xl sm:text-2xl md:text-3xl text-white tracking-tight"
              initial={{ opacity: 0.7 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Click to Play Demo Video
            </motion.h2>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

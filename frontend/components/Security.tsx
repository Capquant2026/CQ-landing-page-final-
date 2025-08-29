"use client";
import { motion } from "motion/react";
import leftLock from "../public/left-Lock.svg";
import rightLock from "../public/right-Lock.svg";
import middleShape from "../public/square-Shape.svg";
import Image from "next/image";
export default function Insight() {
  return (
    <div className="text-[#f7f8f8] flex flex-col items-center justify-start w-full mt-40"
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)"
      }}
    >
      <div className="w-full max-w-[1200px]  px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40">
        <div className="flex flex-col items-center text-center md:items-start md:text-start">
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
            className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                         leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                         font-[555] tracking-[-.0325em] text-balance 
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl"
          >
            Security & Encryption
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
            }}
            className="font-[510] tracking-[-0.011em] text-[#8a8f98] md:w-[55%] text-xl mt-5"
          >
           Your models stay protected with full encryption on both ends, secure
           APIs, and complete IP safeguarding
          </motion.p>
       

          
        </div>

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
          className="w-full flex items-center relative justify-center max-w-[1100px] mt-16 lg:mt-10"
        >
          <motion.div
            className={`w-full before:content-[""] before:absolute    before:w-full before:bg-gradient-to-t  md:flex-row before:inset-0 before:from-[#09090a] before:opacity-50 before:to-transparent before:z-50 before:h-full flex items-center justify-center p-4 bg-gradient-to-b from-[#141516] via-[#0f1011] to-[#08090A] rounded-2xl shadow-2xl border border-white/5 backdrop-blur-sm min-h-[300px] sm:min-h-[400px] relative overflow-hidden`}
           
            transition={{
              delay: 0.3,
              duration: 1.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            <Image src={leftLock} alt="leftLock" className="z-10" priority />

            <div className="relative">
              <motion.div
                className="absolute scale-50  top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#8B9BFF] to-transparent"
                style={{
                  transform: "translateY(-50%)",
                  filter: "blur(0.5px)",
                }}
                animate={{
                  width: ["0%", "100%", "0%", "0%", "0%"],
                  x: ["0px", "0px", "228px", "228px", "228px"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.125, 0.25, 0.75, 1],
                }}
              />

              <motion.div
                className="w-2.5  h-2.5 bg-[#8B9BFF] absolute top-1/2 -translate-y-1/2 rounded-full z-20"
                style={{
                  filter: "blur(0.5px)",
                  boxShadow:
                    "0 0 15px #8B9BFF, 0 0 25px #5E6AD2, 0 0 35px rgba(94, 106, 210, 0.3)",
                }}
                animate={{
                  x: ["0px", "228px", "228px", "228px", "0px"],
                  opacity: [1, 1, 0, 0, 1],
                  scale: [1, 1.2, 0.8, 0.8, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.125, 0.25, 0.75, 1],
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="228"
                height="2"
                viewBox="0 0 228 2"
                fill="none"
              >
                <path d="M0 1H228" stroke="#5E6AD2" strokeWidth="2" />
              </svg>
            </div>

            <Image src={middleShape} alt="middleshape" className="z-10 w-30 md:w-auto "  priority/>

            <div className="relative">
              <motion.div
                className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#8B9BFF] to-transparent"
                style={{
                  transform: "translateY(-50%)",
                  filter: "blur(0.5px)",
                }}
                animate={{
                  width: ["0%", "0%", "100%", "100%", "0%"],
                  x: ["0px", "0px", "0px", "0px", "0px"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.25, 0.375, 0.625, 0.75],
                }}
              />

              <motion.div
                className="w-2.5 h-2.5 bg-[#8B9BFF] absolute top-1/2 -translate-y-1/2 rounded-full z-20"
                style={{
                  filter: "blur(0.5px)",
                  boxShadow:
                    "0 0 15px #8B9BFF, 0 0 25px #5E6AD2, 0 0 35px rgba(94, 106, 210, 0.3)",
                }}
                animate={{
                  x: ["0px", "0px", "228px", "0px", "0px"],
                  opacity: [0, 1, 1, 1, 0],
                  scale: [0.8, 1, 1.2, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  times: [0, 0.25, 0.375, 0.625, 0.75],
                }}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="228"
                height="2"
                viewBox="0 0 228 2"
                fill="none"
              >
                <path d="M0 1H228" stroke="#5E6AD2" strokeWidth="2" />
              </svg>
            </div>

            <Image src={rightLock} alt="rightShape" className="z-10" priority />

            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 10% 50%, rgba(139, 155, 255, 0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 30% 50%, rgba(139, 155, 255, 0.05) 0%, transparent 50%)",
                  "radial-gradient(circle at 70% 50%, rgba(139, 155, 255, 0.05) 0%, transparent 50%)",
                  "radial-gradient(circle at 90% 50%, rgba(139, 155, 255, 0.03) 0%, transparent 50%)",
                  "radial-gradient(circle at 10% 50%, rgba(139, 155, 255, 0.03) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

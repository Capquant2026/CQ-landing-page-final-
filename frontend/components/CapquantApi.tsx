"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import GetCode from "./ui/get-code";
import PostCode from "./ui/post-code";
import { AnimatePresence, m, motion } from "motion/react";

export default function ApiSection() {
  const [randomNumber, setRandomNumber] = useState<number>(110);
  const [latencyNumber, setLatencyNumber] = useState<number>(3.5);
  const [contributors, setContributors] = useState<number>(945);

  const [sla, setSla] = useState<number>(200);
  const targetSequence: number[] = [
    42.8, 77.3, 59.6, 88.1, 94.5, 63.2, 71.9, 103.4, 52.7, 81.6, 
    99.2, 65.4, 74.8, 91.3, 38.6, 85.7, 96.9, 40.2, 69.5, 104.1, 
    55.8, 83.9, 100.7, 49.3, 76.4, 89.8, 60.1, 97.6, 41.7, 92.4, 
    68.2, 101.5, 53.9
  ];
  
  
  const uptimeSequence: number[] = [
    99.88, 99.89, 99.9, 99.91, 99.92, 99.93, 99.94, 99.95, 99.94, 99.93, 99.92,
    99.91, 99.9, 99.89, 99.88, 99.87, 99.86, 99.85, 99.86, 99.87, 99.88, 99.89,
    99.9, 99.91,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber((prev) => {
        if (prev > 135) {
          return 110;
        }
        return prev + 1;
      });

      setContributors((prev) => {
        if (randomNumber === 135) {
          return 945
        }
        return prev + 33
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSquIndex = Math.floor(Math.random() * targetSequence.length);
      const randomIndex = Math.floor(Math.random() * uptimeSequence.length);
      setLatencyNumber(targetSequence[randomSquIndex]);
      setSla(uptimeSequence[randomIndex]);
    }, 400);

    return () => clearInterval(interval);
  }, []);
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
                   max-w-full mb-4 px-4 sm:px-0"
      >
        Pro-Code: the CapQuant API
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
                   px-4 sm:px-0 text-center sm:text-left
                   text-sm sm:text-base"
      >
        Full access to our advanced coding environment with complete API
          control. Designed for quant researchers and data scientists who use
          sophisticated techniques and want institutional-grade precision.
      </motion.p>
    </motion.div>

 
      <div className="flex flex-col lg:flex-row w-full gap-5 items-center justify-center">
        <PostCode />
        <GetCode />
      </div>
      <div className="flex  flex-wrap  lg:flex-row gap-3 mt-10 items-center">
        <Card className="w-64 h-40 mx-auto   p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
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
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex-1 text-5xl  rounded-xl p-3 font-bold tracking-tight text-white "
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={`livemodls`}
                      initial={{
                        y: 10,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -10,
                        opacity: 0,
                      }}
                      transition={{
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      className="text-gray-400 inline-block"
                    >
                      {randomNumber}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </div>
              <motion.h2
                className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Live Models
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="w-64 h-40  mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
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
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className=" flex-1 text-5xl  rounded-xl p-3 font-bold tracking-tight text-gray-400 "
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
                  }}
                  key={"letncy"}
                  
                >
                  {latencyNumber}
                  ms
                </motion.div>
              </div>
              <motion.h2
                className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                P99 Latency
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="w-64 h-40  mx-auto p-6   flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
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
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex-1 text-5xl  rounded-xl p-3 font-bold tracking-tight text-gray-400 "
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <AnimatePresence mode="wait">
                    <motion.span
                      initial={{
                        y: 10,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: -10,
                        opacity: 0,
                      }}
                      transition={{
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      key={"contributors"}
                      className="inline-block"
                    >
                      {contributors}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </div>
              <motion.h2
                className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Active Contributors
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="w-64 h-40  mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
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
              }}
            >
              <div className="flex items-center gap-4">
                <motion.div
                  className="flex-1 text-5xl  rounded-xl p-3 font-bold tracking-tight text-gray-400 "
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  key={"SLa"}
                >
                  {sla}%
                </motion.div>
              </div>
              <motion.h2
                className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                SLA Uptime
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
      </div>
  </div>
  );
}

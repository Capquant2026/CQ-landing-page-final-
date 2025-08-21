"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import GetCode from "./ui/get-code";
import PostCode from "./ui/post-code";
import { AnimatePresence, m, motion } from "motion/react";

export default function ApiSection() {
  const [randomNumber, setRandomNumber] = useState<number>(247);
  const [latencyNumber, setLatencyNumber] = useState<number>(3.5);
  const [contributors, setContributors] = useState<number>(1235);

  const [sla, setSla] = useState<number>(200);
  const targetSequence: number[] = [
    3.5, 4.8, 3.6, 4.2, 4.7, 4.1, 5.0, 5.3, 3.1, 5.8, 6.2, 6.0, 6.7, 7.1, 6.9,
    7.5, 8.0, 7.8, 8.4, 8.9, 8.6, 9.2, 9.7, 9.4,
  ];

  const uptimeSequence: number[] = [
    99.88, 99.89, 99.9, 99.91, 99.92, 99.93, 99.94, 99.95, 99.94, 99.93, 99.92,
    99.91, 99.9, 99.89, 99.88, 99.87, 99.86, 99.85, 99.86, 99.87, 99.88, 99.89,
    99.9, 99.91,
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber((prev) => {
        if (prev > 400) {
          return 341;
        }
        return prev + 1;
      });

      setContributors((prev) => prev + 33);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomSquIndex = Math.floor(Math.random() * targetSequence.length);
      const randomIndex = Math.floor(Math.random() * uptimeSequence.length);
      setLatencyNumber(targetSequence[randomSquIndex]);
      setSla(uptimeSequence[randomIndex]);
    }, 800);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="text-[#f7f8f8] flex flex-col items-center justify-start p-40 gap-10 w-full mt-40 ">
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
                         max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
        >
          Pro-Code: The CapQuant API
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
          Full access to our advanced coding environment with complete API
          control. Designed for quant researchers and data scientists who use
          sophisticated techniques and want institutional-grade precision.
        </motion.p>
       
      </motion.div>
      <div className="flex w-full gap-5 items-center justify-center">
        <PostCode />
        <GetCode />
      </div>
      <div className="flex  gap-3 mt-10 items-center">
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

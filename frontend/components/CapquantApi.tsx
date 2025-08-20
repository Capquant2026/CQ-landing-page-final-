"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import GetCode from "./ui/get-code";
import PostCode from "./ui/post-code";
import { AnimatePresence, m, motion } from "motion/react";

export default function ApiSection() {
  const [randomNumber, setRandomNumber] = useState<number>(341);
  const [latencyNumber, setLatencyNumber] = useState<number>(3.5);
  const [increasing, setIncreasing] = useState<boolean>(false);
  const [contributors, setContributors] = useState<number>(2756);
  const [sla, setSla] = useState<number>(200);
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber((prev) => {
        if (prev > 400) {
          return 341;
        }
        return prev + 1;
      });
      setLatencyNumber((prev) => {
        if (increasing) {
          if (prev >= 7.9) {
            setIncreasing(false);
            return prev - 0.1;
          }
          return prev + 0.1;
        } else {
          if (prev <= 3.5) {
            setIncreasing(true);
            return prev + 0.1;
          }
          return prev - 0.1;
        }
      });
      setSla((prev) => prev + 23);
      setContributors((prev) => prev + 33);
    }, 5000);

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
        className="flex items-center justify-evenly gap-40 w-full "
      >
        <h2
          className="text-4xl  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                           leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                           font-semibold tracking-tight text-balance 
                           max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl "
        >
          The CapQuant <span className="opacity-50">API</span>
        </h2>

        <Button
          className="bg-[#f7f8f8] hover:bg-[#f7f8f8] text-black "
          size={"lg"}
        >
          Join Waitlist
        </Button>
      </motion.div>
      <div className="flex w-full gap-5 items-center justify-center">
        <PostCode />
        <GetCode />
      </div>
      <div className="flex  gap-3 mt-10 items-center">
        <Card className="max-w-sm mx-auto   p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
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
                      className="inline-block"
                    >
                      {randomNumber}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </div>
              <motion.h2
                className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Live Models
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="max-w-sm mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
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
                      key={randomNumber}
                      className="inline-block"
                    >
                      {latencyNumber}
                    </motion.span>
                  </AnimatePresence>
                  ms
                </motion.div>
              </div>
              <motion.h2
                className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                P99 Latency
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="max-w-sm mx-auto p-6   flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
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
                      key={randomNumber}
                      className="inline-block"
                    >
                      {contributors}
                    </motion.span>
                  </AnimatePresence>
                </motion.div>
              </div>
              <motion.h2
                className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Active Contributors
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="max-w-sm mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
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
                      key={sla}
                      className="inline-block"
                    >
                      99.
                      {sla}
                    </motion.span>
                  </AnimatePresence>
                  %
                </motion.div>
              </div>
              <motion.h2
                className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
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

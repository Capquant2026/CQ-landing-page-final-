"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import GetCode from "./ui/get-code";
import PostCode from "./ui/post-code";
import { motion } from "motion/react";

export default function ApiSection() {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  return (
    <div className="text-[#f7f8f8] flex flex-col items-center justify-start p-40 gap-10 w-full mt-40 ">
      <div className="flex items-center justify-evenly gap-40 w-full ">
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
      </div>
      <div className="flex w-full gap-5 items-center justify-center">
        <PostCode />
        <GetCode />
      </div>
      <div className="flex  gap-3 mt-10 items-center">
        <Card className="max-w-sm mx-auto   p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
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
                  1,247
                </motion.div>
              </div>
              <motion.h2
                className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Live Strategies
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="max-w-sm mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
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
                  7.3ms
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
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
                  2,756
                </motion.div>
              </div>
              <motion.h2
                className="text-lg text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                Active Quants
              </motion.h2>
            </motion.div>
          </CardContent>
        </Card>
        <Card className="max-w-sm mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
          <CardContent className="space-y-4 flex flex-col items-center justify-center">
            <motion.div
              className="space-y-2 text-center w-full"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
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
                  460.00
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

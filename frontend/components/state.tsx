"use client";
import { AnimatePresence } from "motion/react";
import { MotionDiv, MotionH2, MotionSpan } from "./motion-wrapper";
import { Card, CardContent } from "./ui/card";
import { useEffect, useState } from "react";

export const State = () => {
  const [randomNumber, setRandomNumber] = useState<number>(110);
  const [latencyNumber, setLatencyNumber] = useState<number>(3.5);
  const [contributors, setContributors] = useState<number>(945);

  const [sla, setSla] = useState<number>(200);
  const targetSequence: number[] = [
    42.8, 77.3, 59.6, 88.1, 94.5, 63.2, 71.9, 103.4, 52.7, 81.6, 99.2, 65.4,
    74.8, 91.3, 38.6, 85.7, 96.9, 40.2, 69.5, 104.1, 55.8, 83.9, 100.7, 49.3,
    76.4, 89.8, 60.1, 97.6, 41.7, 92.4, 68.2, 101.5, 53.9,
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
          return 945;
        }
        return prev + 33;
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
    <div className="flex  flex-wrap  lg:flex-row gap-3 mt-10 items-center">
      <Card className="w-64 h-40 mx-auto   p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
        <CardContent className="space-y-4 flex flex-col items-center justify-center">
          <MotionDiv
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
              <MotionDiv
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
                  <MotionSpan
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
                  </MotionSpan>
                </AnimatePresence>
              </MotionDiv>
            </div>
            <MotionH2
              className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              Live Models
            </MotionH2>
          </MotionDiv>
        </CardContent>
      </Card>
      <Card className="w-64 h-40  mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
        <CardContent className="space-y-4 flex flex-col items-center justify-center">
          <MotionDiv
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
              <MotionDiv
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
              </MotionDiv>
            </div>
            <MotionH2
              className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              P99 Latency
            </MotionH2>
          </MotionDiv>
        </CardContent>
      </Card>
      <Card className="w-64 h-40  mx-auto p-6   flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
        <CardContent className="space-y-4 flex flex-col items-center justify-center">
          <MotionDiv
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
              <MotionDiv
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
                  <MotionSpan
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
                  </MotionSpan>
                </AnimatePresence>
              </MotionDiv>
            </div>
            <MotionH2
              className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              Active Contributors
            </MotionH2>
          </MotionDiv>
        </CardContent>
      </Card>
      <Card className="w-64 h-40  mx-auto p-6  flex flex-col justify-center  border-zinc-800 dark:border-zinc-200 bg-transparent backdrop-blur-sm">
        <CardContent className="space-y-4 flex flex-col items-center justify-center">
          <MotionDiv
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
              <MotionDiv
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
              </MotionDiv>
            </div>
            <MotionH2
              className="text-sm text-zinc-100 dark:text-zinc-900 tracking-tighter font-semibold uppercase"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              SLA Uptime
            </MotionH2>
          </MotionDiv>
        </CardContent>
      </Card>
    </div>
  );
};

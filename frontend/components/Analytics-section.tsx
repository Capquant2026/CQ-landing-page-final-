"use client";

import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useMemo, useState } from "react";

export default function AnalyticsSection() {
  const [isDropMenuHovered, setIsDropMenuHovered] = useState<boolean>(false);
  const [showAsset, setShowAsset] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const cardsInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= titles.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2500);
    console.log(titles.length);
    console.log(titles.length - 1);

    return () => clearInterval(cardsInterval);
  }, []);

  const titles = useMemo(
    () => [
      {
        title: "Round 14- Prediction Received",
        semiTitle: "Your prediction entered our system",
        time: "11:07",
      },
      {
        title: "Scoring ",
        semiTitle: "Your prediction is tested instantly across real market data",
        time: "11:18",
      },
      {
        title: "Status : Accepted ",
        semiTitle: "Your prediction has been picked and gained influence.",
        time: "11:19",
      },
      {
        title: "Weighted Model",
        semiTitle:
          "Stronger predictions earn higher weight",
        time: "11:23",
      },
      {
        title: "Live Prediction",
        semiTitle: "Prediction weighted. signal triggered",
        time: "11:30",
      },
      {
        title: "Reward & Recognition",
        semiTitle:
          "Unlock rewards and community recognition as your predictions perform",
        time: "Ongoing",
      },
    ],
    []
  );

  return (
    <div
      className="text-[#f7f8f8] flex flex-col items-center justify-start w-full mt-40"
      style={{
        background: "linear-gradient(to bottom, #ffffff0d, transparent 20%)",
      }}
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-20 sm:py-32 md:py-40">
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
                         max-w-full sm:max-w-3xl md:max-w-4xl  lg:max-w-5xl"
          >
            Submit multi-asset predictions. test live. collect rewards
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
            className="font-[510] px-4 tracking-[-0.011em]   text-[#8a8f98] w-full md:w-4/6 text-xl mt-5"
          >
            Deploy your predictions across any asset and timeframe. Our
            forward-testing engine runs live
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
          className="lg:mt-10  flex flex-col md:flex-row h-72 items-center mt-40 justify-center "
        >
          <div className="md:w-1/2 w-full h-full border-t border-b border-zinc-800/60 border-b-zinc-800/80 p-4">
            <div
              className="p-4 rounded-lg h-full relative flex flex-col border-t border-l border-t-[#ffffff1a] border-l-[#ffffff1a] transition-all duration-150 ease-in-out"
              style={{
                background:
                  "linear-gradient(to bottom right,hsla(0,0%,100%,.07),transparent)",
              }}
            >
              <div className="w-full h-full bg-gradient-to-l from-[#0d0e0f] to-transparent pointer-events-none inset-0 absolute z-10 opacity-70" />
              <h2 className="font-[555] transition-all duration-150 ease-in-out tracking-[-.0325em] text-xl mt-4">
                Deployment
              </h2>
              <div>
                <div className="my-3">
                  <Button
                    onMouseEnter={() => setIsDropMenuHovered(true)}
                    onMouseLeave={() => setIsDropMenuHovered(false)}
                    className="bg-[#393939] text-[#8a8f98] transition-all duration-150 ease-in-out mx-auto cursor-pointer flex items-center justify-between w-[70%] border border-[#ffffff1a]"
                  >
                    Horizon{" "}
                    <motion.span
                      animate={{
                        rotate: isDropMenuHovered ? -90 : 0,
                      }}
                    >
                      <FaCaretDown />
                    </motion.span>
                  </Button>
                </div>
                <div className="my-3">
                  <Button
                    onMouseEnter={() => setShowAsset(true)}
                    onMouseLeave={() => setShowAsset(false)}
                    className="bg-[#393939] text-[#8a8f98] transition-all duration-150 ease-in-out mx-auto cursor-pointer flex items-center justify-between w-[70%] border border-[#ffffff1a]"
                  >
                    Select Asset Class{" "}
                    <motion.span
                      animate={{
                        rotate: showAsset ? -90 : 0,
                      }}
                    >
                      <FaCaretDown />
                    </motion.span>
                  </Button>
                </div>
              </div>
              <AnimatePresence>
                {showAsset && (
                  <motion.div
                    layout
                    initial={{
                      y: -10,
                      scale: 0.8,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      y: -10,
                      scale: 0.8,
                      opacity: 0,
                    }}
                    transition={{
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="bg-[#3A3B3C] ml-20 w-[80%] flex flex-col relative z-50 items-start justify-center py-2 rounded-lg border border-[#ffffff1a]"
                  >
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Indices
                    </Button>
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Cryptocurrency
                    </Button>
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Foreign Exchange
                    </Button>
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Equities
                    </Button>
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Commodities
                    </Button>
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Fixed Income
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isDropMenuHovered && (
                  <motion.div
                    layout
                    initial={{
                      y: -10,
                      scale: 0.8,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{
                      y: -10,
                      scale: 0.8,
                      opacity: 0,
                    }}
                    transition={{
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="bg-[#3A3B3C] ml-20 w-[80%] flex flex-col relative z-50 items-start justify-center py-2 rounded-lg border border-[#ffffff1a]"
                  >
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Intraday
                    </Button>
                    <Button className="bg-transparent text-[#8a8f98] hover:bg-transparent">
                      Swing
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="md:w-1/2 w-full h-full p-4 border-t border-b border-zinc-800/60 border-b-zinc-800/80 border-l border-l-zinc-800/80">
            <div
              className="p-4 rounded-lg h-full relative border-t border-l border-t-[#ffffff1a] border-l-[#ffffff1a] flex items-center justify-center flex-col transition-all duration-150 ease-in-out"
              style={{
                background:
                  "linear-gradient(to bottom right,hsla(0,0%,100%,.07),transparent)",
              }}
            >
              <div className="w-full h-full bg-gradient-to-l from-[#0d0e0f] inset-0 absolute z-10 opacity-70" />
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="w-full"
              >
                <div className="text-gray-500 px-2 py-1 rounded text-sm font-bold">
                  {titles[currentIndex].time}
                </div>
                <motion.div className="bg-[#393939] w-full border relative text-center rounded-md p-5 border-[#ffffff1a]">
                  <h2 className="text-lg text-green-500 font-semibold tracking-[-.0325em]">
                    {titles[currentIndex].title}
                  </h2>
                  <hr className="border border-[#ffffff1a] my-2" />
                  <p className="tracking-[-.0325em] opacity-50">
                    {titles[currentIndex].semiTitle}
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

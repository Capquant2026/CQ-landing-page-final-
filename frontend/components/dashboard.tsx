"use client";

import logo from "../public/logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { GrHomeRounded } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { PiRankingLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { motion } from "motion/react";
import { PeakUsageAnalysis } from "./PeakUsageAnalysis";
import { CiImport } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { Timer } from "./timer";
import { AiOutlineCloudServer } from "react-icons/ai";

import dashboardTop from "../public/Frame 31.svg";

export default function Dashboard() {
  const allLinks = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Profile",
      href: "/",
    },

    {
      label: "API",
      href: "/",
    },
    {
      label: "Import Strategy",
      href: "/",
    },
    {
      label: "No-code",
      href: "/",
    },
    {
      label: "Backtester ",
      href: "/",
    },
    {
      label: "Reward Tracker",
      href: "/",
    },
    {
      label: "Reports",
href: "/",
    },
    {
      label: "Leaderboard",
      href: "/",
    }
  ];
  const icons = [
    GrHomeRounded,
    IoPersonSharp,
    AiOutlineCloudServer,
    CiImport,
    FaCode,
    TfiStatsUp,
    MdPayment,
    IoFlag,
    PiRankingLight,

  ];
  const colors = [
    "5F6163",
    "26B5CE",
    "50E2C2",
    "EB5757",
    "50E2C2",
    "5E6AD2",
    "26B5CE",
    "4EA7FC",
    "68CC58",

  ];

  return (
    <div
      className="relative   "
      style={{
        perspective: "5000px",
        perspectiveOrigin: "100% 0",

        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="w-[1600px]   rounded-lg  mt-20   relative bg-[#08090A] flex border border-[#1A1C1F]  h-[900px] z-0"
        style={{
          transform:
            "translateX(2%) scale(1.2) rotateX(47deg) rotateY(31deg) rotate(324deg)",
          transformOrigin: "top left",
          backfaceVisibility: "hidden",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute h-full  right-0 w-[50%] top-0 bg-gradient-to-l pointer-events-none from-[#08090A] to-transparent  z-20" />

        <div
          className="w-64 bg-[#08090A] border-r  border-[#1A1C1F] p-4  h-full flex flex-col items-start justify-between text-white"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <div className="w-full">
            <div className="flex   justify-between b w-full">
              <div className="flex items-center">
                <Image src={logo} width={40} alt="" priority />
                <h2 className="text-lg font-semibold">CapQuant</h2>
              </div>
              <button
                className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
                aria-label="Toggle sidebar"
              >
                <span
                  className={`block w-1 h-0.5 bg-white transition-all duration-300 `}
                ></span>
                <span
                  className={`block w-1 h-0.5 bg-white transition-all duration-300 `}
                ></span>
                <span
                  className={`block w-1 h-0.5 bg-white transition-all duration-300 `}
                ></span>
              </button>
            </div>
            <hr className="my-3 border border-[#1A1C1F]" />
            <div>
              <span className="mb-3 inline-block text-sm  opacity-50">
                Menu
              </span>
              <div className="flex flex-col items-start">
                {allLinks.map((item, index) => {
                  const Icon = icons[index];
                  const color = colors[index];
                  if (
                    item.label === "No-code" ||
                    item.label == "Import Strategy"
                  ) {
                    return (
                      <motion.div
                        className="w-full rounded-lg cursor-pointer"
                        key={index}
                        whileHover={{
                          z: 40,
                          y: -12,
                          scale: 1.02,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 25,
                        }}
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <motion.div
                          whileHover={{
                            boxShadow:
                              "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(94, 106, 210, 0.5), 0 0 40px rgba(94, 106, 210, 0.3)",
                          }}
                          className="rounded-lg "
                        >
                          <Button
                            variant="ghost"
                            className="  w-full py-3 relative hover:bg-gray-800/40 cursor-pointer overflow-hidden flex items-center justify-start border-gray-700  transition-all duration-300"
                          >
                            <Icon
                              className="mr-2"
                              style={{ color: "#5E6AD2" }}
                              size={20}
                            />
                            <span className="relative z-50 ">{item.label}</span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    );
                  }
               
                  return (
                    <Button
                      key={index}
                      variant={"ghost"}
                      className="w-full py-2   hover:bg-[#151515] hover:text-white cursor-pointer flex items-start justify-start "
                    >
                      <Icon
                        className={`mr-2`}
                        style={{
                          color: color,
                        }}
                      />
                      {item.label}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            className="w-full"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <span className="mb-3 inline-block text-sm  opacity-50">
              Deployment
            </span>
            <div
              className=""
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Button
                variant={"ghost"}
                className="w-full flex items-center justify-between py-2 hover:bg-[#151515] border border-[#1A1C1F] hover:text-white cursor-pointer  "
              >
                Horizon
                <FaCaretDown />
              </Button>
            </div>
            <div
              className="mt-2 bg-gradient-to-r border border-[#1A1C1F] from-[#141516]  rounded-xl"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                className="w-full rounded-lg"
                whileHover={{
                  z: 2,
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                style={{
                  transform: "translateZ(0)",
                  transformStyle: "preserve-3d",
                  pointerEvents: "auto",
                }}
              >
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(94, 106, 210, 0.5), 0 0 40px rgba(94, 106, 210, 0.3)",
                  }}
                  className="p-1 rounded-lg"
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  <Button
                    variant="ghost"
                    className="w-full py-3 relative hover:text-white hover:bg-gray-800/40 cursor-pointer overflow-hidden flex items-center justify-start border-gray-700 backdrop-blur-sm transition-all duration-300"
                  >
                    Intraday
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="w-full rounded-lg"
                whileHover={{
                  z: 2,
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  whileHover={{
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(94, 106, 210, 0.5), 0 0 40px rgba(94, 106, 210, 0.3)",
                  }}
                  className="p-1 rounded-lg"
                >
                  <Button
                    variant="ghost"
                    className="w-full py-3 relative hover:text-white hover:bg-gray-800/40 cursor-pointer overflow-hidden flex items-center justify-start border-gray-700 backdrop-blur-sm transition-all duration-300"
                  >
                    Swing
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="w-full rounded-lg bg-[#333638] cursor-pointer mt-1"
              whileHover={{
                z: 2,
                y: -6,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 25,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                whileHover={{
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 20px rgba(94, 106, 210, 0.5), 0 0 40px rgba(94, 106, 210, 0.3)",
                }}
                className="p-1 rounded-lg"
              >
                <Button
                  variant="ghost"
                  className="w-full py-3 relative hover:text-white hover:bg-gray-800/40 cursor-pointer overflow-hidden flex items-center justify-start border-gray-700 backdrop-blur-sm transition-all duration-300"
                >
                  Deploy
                </Button>
              </motion.div>
            </motion.div>
          </div>
          <div className="w-full">
            <span className="mb-3 inline-block text-sm  opacity-50">
              Help & Settings
            </span>
            <div>
              <Button
                variant={"ghost"}
                className="w-full mb-3 flex items-center justify-start py-2 hover:bg-[#151515] border border-[#1A1C1F] hover:text-white cursor-pointer  "
              >
                <MdContactSupport className="text-[#EB5757] mr-2" />
                Support
              </Button>
              <Button
                variant={"ghost"}
                className="w-full flex items-center justify-start py-2 hover:bg-[#151515] border border-[#1A1C1F] hover:text-white cursor-pointer  "
              >
                <IoSettingsSharp className="text-[#26B5CE] mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
        <div className="text-white flex-1 h-screen p-4 ">
          <div className="text-white h-full bg-[#131315] px-5 py-4 rounded-xl from-[#141516] to-[#08090A]">
            <div className="flex justify-between items-center">
              <Image src={dashboardTop} alt="top" priority />
            </div>

            <div
              className="relative  mt-8 "
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="grid grid-cols-4 gap-6  ">
                {[
                  { title: "Validated Models", value: "7", change: "+12.03%" },
                  { title: "Archived Models", value: "2", change: "+9.03%" },
                  {
                    title: "Contribution Rewards",
                    value: "$8340",
                    change: "+22%",
                  },
                  { title: "Uniqueness Score", value: "1.5", change: "+5.03%" },
                  { title: "Live Models", value: "2", change: "" },
                  {
                    title: "Model Avg Drawdown",
                    value: "1.3%",
                    change: "+3.03%",
                  },
                  { title: "Strategies Deployed", value: "9", change: "+50%" },
                  { title: "Accuracy", value: "55%", change: "+12.03%" },
                ].map((card, i) => (
                  <div
                    style={{
                      // marginTop  : i >= 4 ? "1px" : "0px",
                      transformStyle: "preserve-3d",
                    }}
                    key={i}
                    className="bg-[#1A1B1C] border   border-[#22262A] rounded-xl p-4 text-white  h-36   transition-all duration-300 "
                  >
                    <h2 className="text-lg font-semibold tracking-[1px]">
                      {card.title == "Live Models" ? (
                        <div className="flex items-center space-x-2">
                          <motion.div
                            className="w-3 h-3  rounded-full bg-green-500 relative"
                            animate={{
                              boxShadow: [
                                "0 0 0 0 rgba(34, 197, 94, 0.7)",
                                "0 0 0 8px rgba(34, 197, 94, 0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeOut",
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 rounded-full bg-green-400"
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            />
                          </motion.div>

                          <span>{card.title}</span>
                        </div>
                      ) : (
                        card.title
                      )}
                    </h2>
                    <p
                      className="text-xs text-gray-400 mb-6"
                      style={{
                        opacity: card.title == "Live Models" ? 0 : 1,
                      }}
                    >
                      Jan 1 - July 16
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                        className={`${
                          card.value == "$8340" ? "text-[29px]" : "text-3xl"
                        } font-bold`}
                      >
                        {card.value}
                      </span>
                      <span className="text-[#50E2C2]">{card.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Timer />
            <PeakUsageAnalysis />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

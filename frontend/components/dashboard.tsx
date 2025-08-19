"use client";

import logo from "../public/logo.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import { GrHomeRounded } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { FaCircleDot, FaCode } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { PiRankingLight } from "react-icons/pi";
import { SlDocs } from "react-icons/sl";
import { FaCaretDown } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
import { motion } from "motion/react";
import { PeakUsageAnalysis } from "./PeakUsageAnalysis";
import { CiImport } from "react-icons/ci";
import { useEffect, useState } from "react";
import { MdPayment } from "react-icons/md";

export default function Dashboard() {
  const [second, setSecond] = useState<number>(59);
  const [min, setMin] = useState<number>(59);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (second == 0) {
        setMin((prev) => prev - 1);
      }
      setSecond((prev) => (prev === 0 ? 59 : prev - 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
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
      label: "Reports",
      href: "/",
    },
    {
      label: "Backtesting Engine",
      href: "/",
    },
    {
      label: "Api Documentation",
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
      label: "Payout Tracker",
      href: "/",
    },
    {
      label: "Leaderboard",
      href: "/",
    },
  ];
  const icons = [
    GrHomeRounded,
    IoPersonSharp,
    IoFlag,
    TfiStatsUp,
    SlDocs,
    CiImport,
    FaCode,
    MdPayment,
    PiRankingLight,
  ];
  const colors = [
    "5F6163",
    "26B5CE",
    "50E2C2",
    "EB5757",
    "50E2C2",
    "5E6AD2",
    "4EA7FC",
    "68CC58",
    "F2994A",
  ];

  return (
    <div className="relative  mt-20  ">
      <div className="absolute  w-[200%] h-[50%] left-0 bottom-0  bg-gradient-to-t pointer-events-none from-[#08090A] to-transparent   z-50"></div>
      <motion.div className="w-[1600px] mt-20 containerdiv relative bg-[#08090A] flex border border-[#1A1C1F]  h-[900px] ">
        <div className="absolute h-full  right-0 w-[40%] top-0 bg-gradient-to-l pointer-events-none from-[#08090A] to-transparent  z-20" />
        <div className="absolute  w-[80%]  left-0 top-0 bg-gradient-to-t from-[#08090A] to-transparent  z-20" />
        <div className="w-64 bg-[#08090A] border-r border-[#1A1C1F] p-4  h-full flex flex-col items-start justify-between text-white">
          <div className="w-full">
            <div className="flex   justify-between b w-full">
              <div className="flex items-center">
                <Image src={logo} width={40} alt="" />
                <h2 className="text-xl">CapQuand</h2>
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
                    item.label === "Dashboard" ||
                    item.label === "No-code" ||
                    item.label == "Import Strategy"
                  ) {
                    return (
                      <motion.div
                        className="w-full rounded-lg"
                        key={index}
                        whileHover={{
                          z: 40, // Strong detachment in 3D space
                          y: -12, // Clean upward lift
                          scale: 1.02, // Minimal scale for subtle emphasis
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
                            <Icon
                              className="mr-3 relative z-40"
                              style={{ color: " 5E6AD2" }}
                              size={20}
                            />
                            <span className="relative z-50 text-gray-300">
                              {item.label}
                            </span>
                          </Button>
                        </motion.div>
                      </motion.div>
                    );
                  }
                  return (
                    <Button
                      key={index}
                      variant={"ghost"}
                      className="w-full py-2  hover:bg-[#151515] hover:text-white cursor-pointer flex items-start justify-start "
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
          <div className="w-full">
            <span className="mb-3 inline-block text-sm  opacity-50">
              Deployment
            </span>
            <div className="">
              <Button
                variant={"ghost"}
                className="w-full flex items-center justify-between py-2 hover:bg-[#151515] border border-[#1A1C1F] hover:text-white cursor-pointer  "
              >
                Horizon
                <FaCaretDown />
              </Button>
              <div className="mt-2 bg-gradient-to-r border border-[#1A1C1F] from-[#141516]  rounded-xl">
                <motion.div
                  className="w-full rounded-lg"
                  whileHover={{
                    z: 40, // Strong detachment in 3D space
                    y: -12, // Clean upward lift
                    scale: 1.02, // Minimal scale for subtle emphasis
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
                      Intraday
                    </Button>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="w-full rounded-lg"
                  whileHover={{
                    z: 40, // Strong detachment in 3D space
                    y: -12, // Clean upward lift
                    scale: 1.02, // Minimal scale for subtle emphasis
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
                  z: 40, // Strong detachment in 3D space
                  y: -12, // Clean upward lift
                  scale: 1.02, // Minimal scale for subtle emphasis
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
          <div className="text-white h-full bg-gradient-to-b px-10 py-4 rounded-xl from-[#141516] to-[#08090A]">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">USER ID : 5845BUS21</h2>
              <div className="flex items-center justify-center gap-2">
                <FaCircleDot className="text-green-600" />
                API Status
              </div>
              <IoMdNotifications className="bg-[#1A1B1C] text-2xl" />
            </div>
            <div className="flex   gap-5 mt-5 font-semibold">
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Selected Models</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">7</span>
                  <span className="text-[#50E2C2]">+12.03%</span>
                </div>
              </div>
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Rejected Models</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">2</span>
                  <span className="text-[#50E2C2]">+9.03%</span>
                </div>
              </div>
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Total Earning</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">$8340</span>
                  <span className="text-[#50E2C2]">+22%</span>
                </div>
              </div>
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Uniqueness Score</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">1.5</span>
                  <span className="text-[#50E2C2]">+5.03%</span>
                </div>
              </div>
            </div>
            <div className="flex   gap-5 mt-5 font-semibold">
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Current Execution</h2>
                  <p className="text-sm opacity-50">Live</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">2</span>
                  <span className="text-[#50E2C2]">+16.03%</span>
                </div>
              </div>
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Overall DrawDown</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">1.3%</span>
                  <span className="text-[#50E2C2]">+3.03%</span>
                </div>
              </div>
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Trades Triggered</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">9</span>
                  <span className="text-[#50E2C2]">+50%</span>
                </div>
              </div>
              <div className="bg-[#1A1B1C] flex flex-col gap-10 w-1/5 p-4 rounded-xl border border-[#22262A]">
                <div>
                  <h2 className="text-2xl">Hit Ratio</h2>
                  <p className="text-sm opacity-50">Jan 1 - July 16</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-4xl">55%</span>
                  <span className="text-[#50E2C2]">+12.03%</span>
                </div>
              </div>
            </div>
            <div className=" flex items-center scale-120 mt-5 justify-center mx-auto w-1/2">
              <p className="opacity-50 mr-2">Next Round</p>

              <motion.div
                className="w-1/5 rounded-lg  from-[#141516] border border-[#1A1C1F]  hover:bg-[#151515]"
                whileHover={{
                  z: 40, // Strong detachment in 3D space
                  y: -12, // Clean upward lift
                  scale: 1.02, // Minimal scale for subtle emphasis
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
                    <MdOutlineTimer className="ml-2 text-[#5E6AD2]" />
                    {`00:${min}:${second}`}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <PeakUsageAnalysis />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "../public/CQ.svg";

export default function Header() {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="text-white flex items-center md:justify-evenly justify-between z-50 w-full sticky left-0 top-0 lg:gap-40 p-4 border-b border-[#1c1d1d] bg-[#0a0a0a]">
      <h1 className="text-[#e6e6e6] flex text-xl items-center gap-2 md:text-2xl font-semibold">
        <Image src={logo} alt="logo" width={30} priority />
        <span>CapQuant</span>
      </h1>
      <div className="flex gap-5">
        <motion.span
          className="inline-block cursor-pointer"
          whileHover={{
            scale: 1.01,
            y: -2,
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <button
            onClick={scrollToSection}
            className="bg-[#e6e6e6] shadow-lg rounded-[8px]  text-[#08090a] roundedd  h-[32px] px-3 text-sm hover:bg-white  cursor-pointer    "
            style={{
              border: "1px solid #e6e6e6",
            }}
          >
            Join The WaitList
          </button>
        </motion.span>
      </div>
    </div>
  );
}

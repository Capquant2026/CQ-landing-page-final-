"use client";

import { Button } from "./ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import logo from "../public/logo.svg";

export default function Header() {
  const scrollToSection = () =>{
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({
        behavior  : "smooth"
      })
    }
  }
  return (
    <div className="text-white flex items-center md:justify-evenly justify-between z-50 w-full sticky left-0 top-0 lg:gap-40 p-4 border-b border-[#1c1d1d] bg-[#0a0a0a]">
      <h1 className="text-[#e6e6e6] flex text-xl md:text-2xl font-bold">
        <Image src={logo} alt="logo" priority/>
        <span >CapQuant</span>
        
      </h1>
      <div className="flex gap-5">
        <motion.span
          className="inline-block cursor-pointer"
          whileHover={{
            scale: 1.01,
            y: -2
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          <Button onClick={scrollToSection} className="bg-white hover:bg-white text-black cursor-pointer text-sm   ">
            Join The WaitList
          
          </Button>
        </motion.span>
      </div>
    </div>
  );
}
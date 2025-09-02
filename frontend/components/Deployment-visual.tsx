"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { MotionSpan } from "./motion-wrapper";
import { FaCaretDown } from "react-icons/fa";
import { AnimatePresence } from "motion/react";
import { HorizonSelect } from "./Horizon-select";
import { ClassSelect } from "./class-select";

export function DeploymentVisual() {
  const [isDropMenuHovered, setIsDropMenuHovered] = useState<string | null>(
    null
  );

  return (
    <div className="md:w-1/2 w-full h-full border-t border-b border-zinc-800/60 border-b-zinc-800/80 py-4 sm:px-4">
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
              onMouseEnter={() => setIsDropMenuHovered("horizon")}
              onMouseLeave={() => setIsDropMenuHovered(null)}
              className="bg-[#393939] text-[#8a8f98] transition-all duration-150 ease-in-out mx-auto cursor-pointer flex items-center justify-between w-[70%] border border-[#ffffff1a]"
            >
              Horizon{" "}
              <MotionSpan
                animate={{
                  rotate: isDropMenuHovered == "horizon" ? -90 : 0,
                }}
              >
                <FaCaretDown />
              </MotionSpan>
            </Button>
          </div>
          <div className="my-3">
            <Button
              onMouseEnter={() => setIsDropMenuHovered("class")}
              onMouseLeave={() => setIsDropMenuHovered(null)}
              className="bg-[#393939] text-[#8a8f98] transition-all duration-150 ease-in-out mx-auto cursor-pointer flex items-center justify-between w-[70%] border border-[#ffffff1a]"
            >
              Select Asset Class{" "}
              <MotionSpan
                animate={{
                  rotate: isDropMenuHovered == "class" ? -90 : 0,
                }}
              >
                <FaCaretDown />
              </MotionSpan>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isDropMenuHovered == "horizon" ? (
            <HorizonSelect />
          ) : isDropMenuHovered == "class" ? (
            <ClassSelect />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}

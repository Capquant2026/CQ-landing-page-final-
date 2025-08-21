"use client";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { MdOutlineTimer } from "react-icons/md";
import { useEffect, useState } from "react";

export function Timer() {
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
  return (
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
  );
}

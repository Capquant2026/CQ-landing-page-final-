'use client'

import { motion } from "motion/react";

export default function Loading() {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1 absolute left-0 top-0 z-50  w-full h-full  items-center justify-center"
      style={{
        background: " linear-gradient(to bottom, #ffffff0d, transparent 20%)",
      }}
    >
      <motion.div variants={variants} className="h-12 w-2 bg-[#262627]" />
      <motion.div variants={variants} className="h-12 w-2 bg-[#262627]" />
      <motion.div variants={variants} className="h-12 w-2 bg-[#262627]" />
      <motion.div variants={variants} className="h-12 w-2 bg-[#262627]" />
      <motion.div variants={variants} className="h-12 w-2 bg-[#262627]" />
    </motion.div>
  );
}
const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration: 1,
      ease: "circIn" as const,
    },
  },
};

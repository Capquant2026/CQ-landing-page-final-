"use client";
import { MotionDiv, MotionH2, MotionP } from "./motion-wrapper";
import { easeInOut } from "framer-motion";

const steps = [
  {
    id: "01 — BUILD",
    title: "Create your signal",
    description:
      "Design your prediction your way. Quick input, natural language prompt, or direct API. You choose your level of control.",
  },
  {
    id: "02 — DEPLOY",
    title: "Go live in minutes",
    description:
      "Submit predictions across any asset class and timeframe. CQ streams live market data and scores your signal in real time.",
    highlight: true,
  },
  {
    id: "03 — EARN",
    title: "Collect CQXT tokens",
    description:
      "Top predictions gain weight in the collective algorithm. The more your signal contributes, the more you earn.",
  },
];

export default function HowItWorks() {
  return (
    <MotionDiv
      className="w-full bg-[#08090A] text-white py-20 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Top label */}
        <MotionDiv
          className="flex items-center gap-3 mb-6 text-sm tracking-widest text-[#A1A1AA]"
          variants={itemVariants}
        >
          <span className="w-10 h-[2px] bg-[#5F6163] inline-block"></span>
          HOW IT WORKS
        </MotionDiv>

        {/* Title */}
        <MotionH2
          className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl 
                     leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full mb-12"
          variants={itemVariants}
        >
          Three steps. <br /> Signal to reward.
        </MotionH2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <MotionDiv
              key={index}
              className={`p-8 md:p-10 rounded-xl border transition hover:scale-[1.02] ${
                step.highlight
                  ? "bg-[#1A1A1A] border-[#5F6163]"
                  : "bg-[#111] border-neutral-800"
              }`}
              variants={itemVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-xs tracking-widest text-[#A1A1AA] mb-4 sm:mb-6">
                {step.id}
              </p>

              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                {step.title}
              </h3>

              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionDiv>
  );
}

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut, 
    },
  },
};
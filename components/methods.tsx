"use client";

import { MotionDiv, MotionH2, MotionP } from "./motion-wrapper";
import { easeInOut } from "framer-motion";


export default function ContributionMethods() {
  return (
    <MotionDiv
      className="w-full bg-[#08090A] text-white py-24 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}   // <--- wrapper parent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Top label */}
        <MotionDiv
          className="flex items-center gap-3 mb-6 text-xs tracking-[0.25em] text-[#A1A1AA]"
          variants={itemVariants}   // <--- animation fade + slide
        >
          <span className="w-10 h-[1px] bg-[#5F6163] inline-block"></span>
          CONTRIBUTION METHODS
        </MotionDiv>

        {/* Title */}
        <MotionH2
          className="text-4xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl  2xl:text-7xl 
                     leading-tight sm:leading-tight md:leading-[1.1] lg:leading-[1.1] 
                     font-[555] tracking-[-.0325em] text-balance 
                     max-w-full  sm:max-w-3xl md:max-w-4xl md:text-nowrap  lg:max-w-7xl mb-10"
          variants={itemVariants}   // <--- animation
        >
          Your signal, <br /> Your way.
        </MotionH2>

        {/* Grid */}
        <MotionDiv
          className="grid md:grid-cols-3 border-t border-[#1A1C1F]"
          variants={itemVariants}   // <--- animation du grid entier
        >
          {[
            {
              number: "01",
              title: "Quick Input",
              text: "You know where the market is going. Tell us the asset, direction, and timeframe. We handle the rest — scoring, weighting, and reward tracking all happen automatically.",
              button: "NO SETUP REQUIRED",
            },
            {
              number: "02",
              title: "Prompt",
              text: "Describe your market thesis in plain language. Our engine translates your reasoning into a structured live prediction.",
              button: "NATURAL LANGUAGE",
            },
            {
              number: "03",
              title: "API",
              text: "Connect your model directly through our encrypted prediction bridge. Institutional-grade scoring with full SDK access.",
              button: "FULL SDK ACCESS",
            },
          ].map((item) => (
            <MotionDiv
              key={item.number}
              className={`p-10 ${item.number !== "03" ? "border-r border-[#1A1C1F]" : ""}`}
              variants={itemVariants}   // <--- animation cascade
            >
              <p className="text-4xl text-[#5F6163] mb-6">{item.number}</p>
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-[#A1A1AA] leading-relaxed mb-6">{item.text}</p>
              <button className="text-xs tracking-widest border border-[#5F6163] px-4 py-2 text-[#A1A1AA] hover:border-white hover:text-white transition">
                {item.button}
              </button>
            </MotionDiv>
          ))}
        </MotionDiv>
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
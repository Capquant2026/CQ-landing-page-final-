"use client";

import { MotionDiv, MotionH2, MotionP } from "./motion-wrapper";
import { easeInOut } from "framer-motion";

export default function ContributionMethods() {
  const items = [
    {
      number: "01",
      title: "Quick Input",
      text: "You know where the market is going. Tell us the asset, direction, and timeframe. We handle the rest. scoring, weighting, and reward tracking all happen automatically.",
    },
    {
      number: "02",
      title: "Prompt",
      text: "Describe your market thesis in plain language. Our engine translates your reasoning into a structured live prediction.",
    },
    {
      number: "03",
      title: "API",
      text: "Connect your model directly through our encrypted prediction bridge. Institutional-grade scoring with full SDK access.",
    },
  ];

  return (
    <MotionDiv
      className="w-full bg-[#08090A] text-white py-24 px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Top label */}
        <MotionDiv
          className="flex items-center gap-3 mb-6 text-xs tracking-[0.25em] text-[#A1A1AA]"
          variants={itemVariants}
          style={{ color: "#C8A97E" }}
        >
          <span className="w-10 h-[1px] bg-[#5F6163] inline-block"></span>
          CONTRIBUTION METHODS
        </MotionDiv>

        {/* Title */}
        <h2
          className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl
                     leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full mb-12"
        >
          Your signal, <br /> Your way.
        </h2>

        {/* Grid */}
        <MotionDiv
          className="grid md:grid-cols-3 border-t border-[#1A1C1F]"
          variants={itemVariants}
        >
          {items.map((item) => (
            <MotionDiv
              key={item.number}
              className={`p-10 ${item.number !== "03" ? "border-r border-[#1A1C1F]" : ""}`}
              variants={itemVariants}
            >
              {/* Number */}
              <p className="text-4xl mb-6" style={{ color: "#C8A97E" }}>
                {item.number}
              </p>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>

              {/* Text */}
              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>
            </MotionDiv>
          ))}

          {/* Buttons alignés sur la même ligne */}
          <div className="md:col-span-3 flex justify-between mt-6 px-10">
            <button className="text-xs tracking-widest border border-[#5F6163] px-4 py-2 text-[#A1A1AA] hover:border-white hover:text-white transition">
              NO SETUP REQUIRED
            </button>
            <button className="text-xs tracking-widest border border-[#5F6163] px-4 py-2 text-[#A1A1AA] hover:border-white hover:text-white transition">
              NATURAL LANGUAGE
            </button>
            <button className="text-xs tracking-widest border border-[#5F6163] px-4 py-2 text-[#A1A1AA] hover:border-white hover:text-white transition">
              FULL SDK ACCESS
            </button>
          </div>
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
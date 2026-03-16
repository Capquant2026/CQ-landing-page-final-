"use client";
import React from "react";

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
    <section className="w-full bg-[#08090A] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-6 text-sm tracking-widest text-[#A1A1AA]">
          <span className="w-10 h-[2px] bg-[#5F6163] inline-block"></span>
          HOW IT WORKS
        </div>

        {/* Title */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-16 text-white">
          Three steps. <br /> Signal to reward.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-xl border border-neutral-800 transition hover:scale-[1.02] ${
                step.highlight ? "bg-[#1A1A1A] border-[#5F6163]" : "bg-[#111] border-neutral-800"
              }`}
            >
              {/* Step number */}
              <p className="text-xs tracking-widest text-[#A1A1AA] mb-4 sm:mb-6">
                {step.id}
              </p>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[#A1A1AA] leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
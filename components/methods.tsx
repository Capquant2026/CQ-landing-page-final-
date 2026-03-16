"use client";
import React from "react";

export default function ContributionMethods() {
  return (
    <section className="w-full bg-[#08090A] text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-6 text-xs tracking-[0.25em] text-[#A1A1AA]">
          <span className="w-10 h-[1px] bg-[#5F6163] inline-block"></span>
          CONTRIBUTION METHODS
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-16">
          Your signal, <br /> your way.
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 border-t border-[#1A1C1F]">

          {/* 01 */}
          <div className="p-10 border-r border-[#1A1C1F]">
            <p className="text-4xl text-[#5F6163] mb-6">01</p>

            <h3 className="text-2xl font-semibold mb-4">
              Quick Input
            </h3>

            <p className="text-[#A1A1AA] leading-relaxed mb-6">
              You know where the market is going. Tell us the asset,
              direction, and timeframe. We handle the rest —
              scoring, weighting, and reward tracking all happen automatically.
            </p>

            <button className="text-xs tracking-widest border border-[#5F6163] px-4 py-2 text-[#A1A1AA] hover:border-white hover:text-white transition">
              NO SETUP REQUIRED
            </button>
          </div>

          {/* 02 disabled */}
          <div className="p-10 border-r border-[#1A1C1F] opacity-30 pointer-events-none">
            <p className="text-4xl text-[#5F6163] mb-6">02</p>

            <h3 className="text-2xl font-semibold mb-4">
              Prompt
            </h3>

            <p className="text-[#5F6163] leading-relaxed mb-6">
              Describe your market thesis in plain language.
              Our engine translates your reasoning into a structured live prediction.
            </p>

            <button className="text-xs tracking-widest border border-[#1A1C1F] px-4 py-2 text-[#5F6163]">
              NATURAL LANGUAGE
            </button>
          </div>

          {/* 03 disabled */}
          <div className="p-10 opacity-30 pointer-events-none">
            <p className="text-4xl text-[#5F6163] mb-6">03</p>

            <h3 className="text-2xl font-semibold mb-4">
              API
            </h3>

            <p className="text-[#5F6163] leading-relaxed mb-6">
              Connect your model directly through our encrypted prediction bridge.
              Institutional-grade scoring with full SDK access.
            </p>

            <button className="text-xs tracking-widest border border-[#1A1C1F] px-4 py-2 text-[#5F6163]">
              FULL SDK ACCESS
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";

import React, { useState } from "react";
import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";
import { easeInOut } from "framer-motion";

export default function QuickInfoTwoCols() {
  const [language, setLanguage] = useState<string>("en");

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const videoSrcMap: Record<string, string> = {
    en: "https://www.youtube.com/embed/TdAl5x0m_0s",
    fr: "https://www.youtube.com/embed/OhoM1AA1Cm0",
    de: "https://www.youtube.com/embed/8sJ_mAxb7KE",
    it: "https://www.youtube.com/embed/uy3i_B0Crys",
    ja: "https://www.youtube.com/embed/3IkuAX1mC94",
    ko: "https://www.youtube.com/embed/bM7dX_CMGjI",
    zh: "https://www.youtube.com/embed/uhv99ex40lM",
    pt: "https://www.youtube.com/embed/_UoO15EG9Ik",
    es: "https://www.youtube.com/embed/XzKA8q0EXuI",
  };

  return (
    <MotionDiv
      className="flex text-white bg-[#08090A] flex-col items-center w-full pt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* TITLE */}
        <MotionH1
          className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl
          leading-[1.05] font-[555] tracking-[-.0325em] mb-6"
          variants={itemVariants}
        >
        <span
  className="inline-block text-[32px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl
             leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full mb-12"
>
  This isn't software. It's a collective brain.
</span>
        </MotionH1>

        {/* DESCRIPTION 
        <MotionP
          className="text-[#A1A1AA] leading-relaxed md:px-4 tracking-[-0.011em] w-full md:w-2/3 text-sm md:text-xl mt-2"
          variants={itemVariants}
        >
          Watch how a prediction goes from idea to live market — and how contributors get rewarded for every signal that performs.
        </MotionP>
        */}

        {/* VIDEO SECTION */}
        <MotionDiv
          className="w-full flex justify-center mt-10 relative"
          variants={itemVariants}
        >
          {/* LANGUAGE SELECT */}
          <div className="absolute -top-10 left-2 z-50">
            <select
              className="bg-[#1C1D1E] text-white border border-[#333] rounded-md p-2 cursor-pointer"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">EN - English</option>
              <option value="fr">FR - French</option>
              <option value="it">IT - Italian</option>
              <option value="es">ES - Spanish</option>
              <option value="zh">ZH - Chinese</option>
              <option value="ko">KO - Korean</option>
              <option value="ja">JA - Japanese</option>
              <option value="pt">PT - Portuguese</option>
              <option value="de">DE - German</option>
            </select>
          </div>

          {/* VIDEO CONTAINER */}
          <div className="w-full relative">
            <iframe
              key={language}
              src={videoSrcMap[language]}
              className="w-full h-[350px] md:h-[400px] lg:h-[600px] rounded-xl border border-[#1A1C1F]"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${language.toUpperCase()} Video`}
            />
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
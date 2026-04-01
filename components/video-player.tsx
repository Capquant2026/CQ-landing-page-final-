"use client";

import React, { useState } from "react";
import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";
import { easeInOut } from "framer-motion";

export default function QuickInfoTwoCols() {
  const [language, setLanguage] = useState<string>("en");

  // TypeScript fix pour l'événement select
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  // Map des vidéos par langue (locale files)
  const videoSrcMap: Record<string, string> = {
    en: "https://drive.google.com/file/d/1U7yqVEG66PhYYWUznCPFyGYesRZCoy-h/preview",
    fr: "/CQfrenchFinal.mp4",
    it: "/CQitalianFinal.mp4",
    es: "/CQspanishFinal.mp4",
    zh: "/CQchineseFinal.mp4",
    ko: "/CQkoreanFinal.mp4",
    ja: "/CQjapaneseFinal.mp4",
    pt: "/CQportugueseFinal.mp4",
    de: "/CQgermanFinal.mp4",
  };

  return (
    <MotionDiv
      className="flex text-white bg-[#08090A] overflow-hidden flex-col items-center w-full pt-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="w-full max-w-[1200px] mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Texte à gauche */}
          <MotionDiv className="flex-1 flex flex-col gap-4" variants={itemVariants}>
            <MotionH1 className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl
              leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full mb-12">
              <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.05]">
                60 seconds.
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl leading-[1.05] mt-2">
                Everything you need to know.
              </span>
            </MotionH1>

            <MotionP className="text-[#8A8F98] text-sm sm:text-base xl:text-xl 2xl:text-2xl font-[555] leading-relaxed mt-2 max-w-[600px]">
              Watch how a prediction goes from idea to live market — and how contributors get rewarded for every signal that performs.
            </MotionP>
          </MotionDiv>

          {/* Video à droite */}
          <MotionDiv className="flex-1 w-full max-w-[600px] relative" variants={itemVariants}>

            {/* Dropdown des langues */}
            <select
              className="absolute top-2 left-2 bg-[#1C1D1E] text-white border border-[#333] rounded-md p-2 cursor-pointer z-10"
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

            {/* Video ou iframe selon la langue */}
            {language === "en" ? (
              <iframe
                key={language}
                src={videoSrcMap[language]}
                className="w-full h-[350px] rounded-lg"
                allow="autoplay"
              />
            ) : (
              <video
                key={language}
                src={videoSrcMap[language]}
                className="w-full h-[350px] rounded-lg"
                controls
              />
            )}
          </MotionDiv>

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
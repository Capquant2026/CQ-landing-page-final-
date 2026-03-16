"use client";

import { MotionDiv, MotionH1, MotionP } from "./motion-wrapper";

export default function Ok() {
  const scrollToSection = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
  <div className="flex text-white bg-[#08090A] overflow-hidden flex-col items-center w-full">
    <div className="w-full max-w-[1100px] mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8">

      <div className="flex mx-auto flex-col gap-1 sm:gap-6 md:gap-1 items-center text-center">

        {/* Header secondaire */}
        <MotionP
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut" }}
          className="text-[#8A8F98] text-sm sm:text-base xl:text-2xl 2xl:text-[28px] font-[555]
                     leading-relaxed sm:leading-relaxed md:leading-relaxed mt-2
                     tracking-tight text-center md:text-center w-full"
        >
          Collective Intelligence · Financial Markets
        </MotionP>

        {/* Titre */}
        <MotionH1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut" }}
          className="text-center font-bold tracking-tight mb-6"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl leading-[1.05] tracking-[-0.03em]">
            Your edge.
          </span>

          <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.05] tracking-[-0.03em]">
            Deployed.
          </span>

          <span className="block text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.05] tracking-[-0.03em]">
            Rewarded.
          </span>
        </MotionH1>

        {/* Description */}
        <MotionP
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.1 }}
          className="text-[#8A8F98] text-sm sm:text-base xl:text-2xl 2xl:text-[28px] font-[555]
                     leading-relaxed sm:leading-relaxed md:leading-relaxed mt-2
                     tracking-tight text-center md:text-center w-full"
        >
          Submit your market predictions, compete on live performance,
          and earn CQXT tokens for every signal that moves the algorithm forward.
        </MotionP>

        {/* Bouton */}
        <MotionDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.2 }}
          className="mb-8"
        >
          <button
            onClick={scrollToSection}
            className="bg-white text-black px-6 py-3 font-semibold rounded-md hover:opacity-90 transition"
          >
            Get Early Access
          </button>
        </MotionDiv>

        {/* Texte secondaire */}
        <MotionP
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", delay: 0.3 }}
          className="text-[#5F6163] text-sm"
        >
          Launching soon — founding spots are limited
        </MotionP>

      </div>
    </div>
  </div>
);
}
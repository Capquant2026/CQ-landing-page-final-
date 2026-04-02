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
        <div className="flex mx-auto flex-col gap-4 sm:gap-6 md:gap-6 items-center text-center">

          {/* Header secondaire */}
          {/*
          <MotionP
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="text-[#8A8F98] text-sm sm:text-base xl:text-xl 2xl:text-2xl font-[555] leading-relaxed mt-2 max-w-[600px]"
          >
            Collective Intelligence · Financial Markets
          </MotionP>
          */}
          {/* Titre */}
          <MotionH1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeInOut" }}
            className="text-center font-bold tracking-tight mb-6"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-8xl 
                             leading-[1.1] font-[555] tracking-[-.0325em] text-balance max-w-full">
              Your edge.
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl 
                             leading-[1.1] font-[555] tracking-[-.0325em] max-w-full"
                  style={{ color: "#C8A97E" }}
            >
              Deployed.
            </span>

            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-7xl 
                             leading-[1.1] font-[555] tracking-[-.0325em] max-w-full"
                  style={{ color: "#C8A97E" }}
            >
              Rewarded.
            </span>
          </MotionH1>

          {/* Description */}
<MotionP
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeInOut", delay: 0.1 }}
  className="text-[#8A8F98] text-base sm:text-lg xl:text-2xl 2xl:text-3xl font-[555] leading-relaxed w-full text-center overflow-hidden"
  style={{
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
  }}
>
  Submit your market predictions, compete on live performance, and earn CQXT tokens for every signal that moves the algorithm forward.
</MotionP>

{/* Bouton */}
<MotionDiv
  initial={{ y: 10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ ease: "easeInOut", delay: 0.2 }}
  className="mt-3"   // <-- réduit l'espace (au lieu de mb-6)
>
  <button
    onClick={scrollToSection}
    className="px-4 py-2 sm:px-4 sm:py-2.5 font-semibold rounded-md transition"
    style={{
      backgroundColor: "#C8A97E", // Gold
      color: "#08090A",
    }}
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
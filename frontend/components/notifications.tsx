"use client";

import { useEffect, useMemo, useState } from "react";
import { MotionDiv } from "./motion-wrapper";
export default function notification() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const titles = useMemo(
    () => [
      {
        title: "Round 14- Prediction Received",
        semiTitle: "Your prediction entered our system",
        time: "11:07",
      },
      {
        title: "Scoring ",
        semiTitle:
          "Your prediction is tested instantly across real market data",
        time: "11:18",
      },
      {
        title: "Status : Accepted ",
        semiTitle: "Your prediction has been picked and gained influence.",
        time: "11:19",
      },
      {
        title: "Weighted Model",
        semiTitle: "Stronger predictions earn higher weight",
        time: "11:23",
      },
      {
        title: "Live Prediction",
        semiTitle: "Prediction weighted. signal triggered",
        time: "11:30",
      },
      {
        title: "Reward & Recognition",
        semiTitle:
          "Unlock rewards and community recognition as your predictions perform",
        time: "Ongoing",
      },
    ],
    []
  );
  useEffect(() => {
    const cardsInterval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= titles.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2500);
    console.log(titles.length);
    console.log(titles.length - 1);

    return () => clearInterval(cardsInterval);
  }, []);
  return (
    <MotionDiv
      key={currentIndex}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="w-full"
    >
      <div className="text-gray-500 px-2 py-1 rounded text-sm font-bold">
        {titles[currentIndex].time}
      </div>
      <MotionDiv className="bg-[#393939] w-full border relative text-center rounded-md p-5 border-[#ffffff1a]">
        <h2 className="text-lg text-green-500 font-semibold tracking-[-.0325em]">
          {titles[currentIndex].title}
        </h2>
        <hr className="border border-[#ffffff1a] my-2" />
        <p className="tracking-[-.0325em] opacity-50">
          {titles[currentIndex].semiTitle}
        </p>
      </MotionDiv>
    </MotionDiv>
  );
}

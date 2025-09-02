"use client";
import { Button } from "./ui/button";
import { MdOutlineTimer } from "react-icons/md";
import { useEffect, useState, useCallback, useMemo } from "react";

export default function Timer() {
  const [totalSeconds, setTotalSeconds] = useState<number>(3599);

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `00:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }, [totalSeconds]);

  const tick = useCallback(() => {
    setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 3599));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, [tick]);

  return (
    <div className="flex items-center scale-120 mt-5 justify-center mx-auto  w-1/2">
      <p className="opacity-50 mr-2">Next Round</p>

      <div
        className="w-1/5 rounded-lg from-[#141516] border border-[#1A1C1F] hover:bg-[#151515]
                   hover:-translate-y-3 hover:scale-105 hover:shadow-xl hover:shadow-[#5E6AD2]/20
                   transition-all duration-300 ease-out transform-gpu"
      >
        <div className="p-1 rounded-lg ">
          <Button
            variant="ghost"
            className="w-full py-3 relative hover:text-white hover:bg-gray-800/40 cursor-pointer 
                       overflow-hidden flex items-center justify-start border-gray-700 
                       backdrop-blur-sm transition-all duration-300"
          >
            <MdOutlineTimer className="sm:ml-2 text-[#5E6AD2]" />
            {formattedTime}
          </Button>
        </div>
      </div>
    </div>
  );
}

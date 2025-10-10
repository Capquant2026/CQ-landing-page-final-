"use client";
import { MoveUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <MoveUp
      onClick={scrollToTop}
      className="bg-[#1a1b1c] border border-white/10 z-50 text-white rounded-full w-15 h-15 fixed bottom-10 right-10 cursor-pointer p-4 transition-opacity duration-300 hover:bg-[#2a2b2c]"
    />
  );
}

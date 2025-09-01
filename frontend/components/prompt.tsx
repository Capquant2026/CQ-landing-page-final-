"use client";

import type React from "react";

import { Globe, Paperclip } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";


export default function Prompt() {
  const [value, setValue] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const placeholders = [
    "Buy WTI when price closes above the 50-period SMA and RSI(14) is below 70",
    "Sell Nasdaq when price crosses back below SMA",
  ];

  useEffect(() => {
    const currentText = placeholders[currentPlaceholderIndex];

    if (isTyping) {
      let charIndex = 0;
      setDisplayedText("");

      const typingInterval = setInterval(() => {
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);

          // Wait 3 seconds before starting to clear
          setTimeout(() => {
            // Clear text with backspace effect
            let clearIndex = currentText.length;
            const clearingInterval = setInterval(() => {
              if (clearIndex > 0) {
                setDisplayedText(currentText.slice(0, clearIndex - 1));
                clearIndex--;
              } else {
                clearInterval(clearingInterval);
                // Move to next placeholder
                setCurrentPlaceholderIndex(
                  (prev) => (prev + 1) % placeholders.length
                );
                setTimeout(() => setIsTyping(true), 500); // Wait before typing next
              }
            }, 30); // Faster clearing
          }, 3000);
        }
      }, 80); // Typing speed

      return () => clearInterval(typingInterval);
    }
  }, [currentPlaceholderIndex, isTyping]);

  // Start the effect
  useEffect(() => {
    setIsTyping(true);
  }, []);

  return (
    <div className="w-full max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-[800px] py-2 sm:py-4">
      <div className="bg-[#131415] rounded-2xl p-2 sm:p-4">
        <div className="relative">
          <div className="relative flex flex-col">
            <div className="overflow-y-auto" style={{ maxHeight: "400px" }}>
              <Textarea
                id="ai-input-15"
                value={value}
                placeholder={displayedText}
                className={cn(
                  "w-full rounded-xl rounded-b-none px-2 sm:px-4 py-2 sm:py-3 bg-[#212222] border-none resize-none focus-visible:ring-0 focus-visible:ring-offset-0",
                  "min-h-[60px] sm:min-h-[72px]",
                  "text-base  "
                )}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />
            </div>

            <div className="h-12 sm:h-14 bg-[#212222] rounded-b-xl flex items-center">
              <div className="absolute left-2 right-2 sm:left-3 sm:right-3 bottom-2 sm:bottom-3 flex items-center justify-between w-[calc(100%-16px)] sm:w-[calc(100%-24px)]">
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="h-4 w-px bg-black/10 dark:bg-white/10 mx-0.5" />
                  
                  {/* Mobile: Show icons only, Desktop: Show text + icons */}
                  <label
                    className={cn(
                      "rounded-full px-2 sm:px-3 py-1 border border-[#363636] flex flex-row-reverse items-center gap-1 sm:gap-2 cursor-pointer",
                      "hover:bg-black/10 dark:hover:bg-white/10 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-blue-500",
                      "text-white text-xs sm:text-sm"
                    )}
                    aria-label="Attach file"
                  >
                    <span className="hidden sm:inline">Attach</span>
                    <Paperclip className="w-3 h-3 sm:w-4 sm:h-4 transition-colors" />
                  </label>
                  
                  <label
                    className={cn(
                      "rounded-full px-2 sm:px-3 py-1 border border-[#363636] flex flex-row-reverse items-center gap-1 sm:gap-2 cursor-pointer",
                      "hover:bg-black/10 dark:hover:bg-white/10 focus-visible:ring-1 focus-visible:ring-offset-0 focus-visible:ring-blue-500",
                      "text-white text-xs sm:text-sm"
                    )}
                    aria-label="Search web"
                  >
                    <span className="hidden sm:inline">Search</span>
                    <Globe className="w-3 h-3 sm:w-4 sm:h-4 transition-colors" />
                  </label>
                </div>
                
                <motion.span
                  className="inline-block cursor-pointer"
                  whileHover={{
                    scale: 1.01,
                    y: -2
                  }}
                  whileTap={{
                    scale: 0.9
                  }}
                >
                  <Button className="bg-white hover:bg-white text-black cursor-pointer text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 h-8 sm:h-auto">
                    Deploy
                  </Button>
                </motion.span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
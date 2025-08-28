"use client";

import type React from "react";

import { Globe, Paperclip } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const OPENAI_SVG = (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="260"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 260"
      aria-label="o3-mini icon"
      className="dark:hidden block"
    >
      <title>OpenAI Icon Light</title>
      <path d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z" />
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="260"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 260"
      aria-label="o3-mini icon"
      className="hidden dark:block"
    >
      <title>OpenAI Icon Dark</title>
      <path
        fill="#fff"
        d="M239.184 106.203a64.716 64.716 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.716 64.716 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483Zm-97.56 136.338a48.397 48.397 0 0 1-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601Zm-104.466-44.61a48.345 48.345 0 0 1-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803ZM23.549 85.38a48.499 48.499 0 0 1 25.58-21.333v61.39a8.288 8.288 0 0 0 4.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256Zm179.466 41.695-63.08-36.63L161.73 77.86a.819.819 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.544 8.544 0 0 0-4.4-7.213Zm21.742-32.69-1.535-.922-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.716.716 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391v.205ZM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 0 0-4.246 7.367l-.051 72.697Zm11.868-25.58 28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434Z"
      />
    </svg>
  </div>
);

export default function Prompt() {
  const [value, setValue] = useState("");
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Trading strategy placeholders
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
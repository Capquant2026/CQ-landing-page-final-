"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
type Line = {
  id: number;
  content: string;
};

const GetCode = () => {
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTypingLine, setCurrentTypingLine] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const codeData = `"submission_id": "sub_14_9c8f7a6d2e1b",
 "round_id": 14,
 "user_id": "5845BUS21",
 "model_name": "IntraDay_Breakout_V3",
 "asset": "WTI_CRUDE_OIL",
 "symbol": "CL",
"submission_timestamp":"2025-11-20T13:45:22Z",
 "status": "ACCEPTED",
 "validation": {
 "integrity_checks": {
 "feature_stability_score": 0.948,
 "overfitting_risk": 0.035,
 "look_ahead_bias": false,
 "data_leakage_detected": false
 },
 "performance_summary": {
 "expected_sharpe_ratio": 2.31,
 "information_ratio": 1.86,
 "max_drawdown": 0.066,
 "tail_risk_var99": 0.0231
 },
 "uniqueness_metrics": {
 "orthogonality_score": 0.85,
 "correlation_existing_models": 0.22,
 "novel_alpha_contribution": 0.158,
 "diversification_ratio": 2.61
 },
 "backtest_oos": [
 { "start": "2023-01-01", "end": "2023-12-31", "sharpe": 2.17, "max_dd": 0.053, "calmar": 4.12 },
 { "start": "2024-01-01", "end": "2024-12-31", "sharpe": 2.40, "max_dd": 0.072, "calmar": 3.82 }
 ],
 "regime_performance": {
 "low_volatility": { "sharpe": 1.88, "hit_rate": 0.66 },
 "high_volatility": { "sharpe": 2.77, "hit_rate": 0.71 },
 "trending": { "sharpe": 3.10, "hit_rate": 0.73 },
 "mean_reverting": { "sharpe": 1.66, "hit_rate": 0.62 }
 },
 "stress_tests": {
 "covid_march_2020": -0.088,
 "energy_crisis_2022": 0.131,
 "banking_stress_2023": -0.024,
 "monte_carlo_var95": -0.0185
 }
 },
 "deployment": {
 "execution_start": "2025-11-20T14:00:00Z",
 "allocation_weight": 0.10,
 "ensemble_model": "CapQuant_Ensemble_v1.9",
 "risk_state": "within_limits",
 "live_metrics": {
 "pnl_intraday": 0.0043,
 "realized_volatility": 0.0121,
 "exposure": 0.097,
 "live_sharpe_estimate": 2.04,
 "slippage_realized": 0.0009
 },
 "monitoring": {
 "realtime_pnl": "/v3/strategies/sub_14_9c8f7a6d2e1b/pnl",
 "risk_metrics": "/v3/strategies/sub_14_9c8f7a6d2e1b/risk",
 "execution_quality": "/v3/strategies/sub_14_9c8f7a6d2e1b/execution"
 }
 },
 "round_statistics": {
 "total_submissions": 1247,
 "acceptance_rate": 0.067,
 "top_decile_sharpe_threshold": 2.15,
 "round_closes": "2025-11-20T15:00:00Z"
 }
}`;
  const codeLines = codeData.split("\n");

  // Type each line character by character, then add to visible lines
  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex];

      if (currentCharIndex < currentLine.length) {
        // Type next character
        const timeout = setTimeout(() => {
          setCurrentTypingLine((prev) => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex((prev) => prev + 1);
        }, Math.random() * 50 + 30); // Random typing speed

        return () => clearTimeout(timeout);
      } else {
        // Line complete, add to visible lines and move to next
        const timeout = setTimeout(() => {
          const newLine = {
            id: currentLineIndex,
            content: currentLine,
          };

          setVisibleLines((prev) => [...prev, newLine]);
          setCurrentLineIndex((prev) => prev + 1);
          setCurrentCharIndex(0);
          setCurrentTypingLine("");
        }, 200); // Brief pause before adding line

        return () => clearTimeout(timeout);
      }
    } else {
      setIsComplete(true);
    }
  }, [currentLineIndex, currentCharIndex, codeLines]);

  // Auto-scroll to bottom to show new lines
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [visibleLines, currentTypingLine]);

  const formatLine = (line: any) => {
    const trimmed = line.trim();

    if (trimmed.includes('"') && trimmed.includes(":")) {
      const parts = line.split(":");
      const keyPart = parts[0];
      const valuePart = parts.slice(1).join(":");

      return (
        <>
          <span className="text-gray-500">
            {line.substring(0, line.indexOf(trimmed))}
          </span>
          <span className="text-white opacity-75 font-medium">{keyPart}</span>
          <span className="text-white">:</span>
          <span
            className={
              valuePart.includes('"')
                ? "text-gray-400"
                : /\d/.test(valuePart)
                ? "text-gray-400"
                : valuePart.includes("true") || valuePart.includes("false")
                ? "text-gray-400"
                : "text-gray-300"
            }
          >
            {valuePart}
          </span>
        </>
      );
    }

    return (
      <span
        className={
          trimmed === "{" ||
          trimmed === "}" ||
          trimmed === "[" ||
          trimmed === "]" ||
          trimmed.includes("{") ||
          trimmed.includes("}")
            ? "text-white opacity-50 font-bold"
            : trimmed.includes(",")
            ? "text-gray-400"
            : "text-gray-300"
        }
      >
        {line}
      </span>
    );
  };

  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.6,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
        staggerChildren: 0.1, // If animating multiple items
      }}
      className="w-full max-w-6xl mx-auto p-6  "
    >
      <div className="rounded-lg shadow-2xl relative bg-gradient-to-b from-[#141516]  to-[#08090A] overflow-hidden border border-zinc-800/80">
        <div className="w-full absolute left-0 top-0 bg-gradient-to-l from-[#141516]  to-[#08090a00] h-full z-20" />
        <div className="w-full absolute h-full inset-0 z-30 bg-gradient-to-tl from-[#141516] to-[#08090a00]" />

        {/* Windows Terminal Header */}
        <div className=" px-4 py-2 flex items-center justify-between border-b border-zinc-700/80">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 py-3">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500 relative"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(250, 204, 21, 0.7)", // yellow glow
                      "0 0 0 8px rgba(250, 204, 21, 0)", // fade out
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-yellow-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                <span className="text-gray-400  font-semibold uppercase tracking-wider">
                  GET
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div
          ref={terminalRef}
          className="h-96 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#4B5563 #1F2937",
          }}
        >
          {/* Display completed lines sliding from bottom to top */}
          <div>
            {visibleLines.map((line, index) => (
              <motion.div key={index} className="whitespace-pre">
                {formatLine(line.content)}
              </motion.div>
            ))}

            {/* Current typing line with cursor */}
            {!isComplete && (
              <div className="whitespace-pre flex">
                <span>{formatLine(currentTypingLine)}</span>
                <motion.div
                  className="inline-block w-2 h-4 bg-green-500 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            )}

            {/* Fixed cursor when complete */}
            {isComplete && (
              <motion.div
                className="text-cyan-400 mt-2 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="inline-block w-2 h-4 bg-green-500 opacity-50 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar for webkit browsers */
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: #1f2937;
        }

        div::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </motion.div>
  );
};

export default GetCode;

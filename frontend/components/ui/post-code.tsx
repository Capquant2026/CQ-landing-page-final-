"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
type Line = {
  id: number;
  content: string;
};
const PostCode = () => {
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTypingLine, setCurrentTypingLine] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const codeData = `Authorization: Bearer <xxxxx>
Content-Type: application/json
X-Participant-Tier: Pro
X-Model-Version: 4.7.2
{
 "user_id": "5845BUS21",
 "timestamp": "2025-11-20T13:45:22Z",
 "asset": "WTI_CRUDE_OIL",
 "symbol": "CL",
 "model_name": "IntraDay_Breakout_V3",
 "parameters": {
 "feature_set": [
 "order_flow_imbalance",
 "realized_volatility_5m",
 "vwap_deviation",
 "inventory_report_drift",
 "term_structure_slope"
 ],
 "lookback_bars": 120,
 "signal_horizon": "15m",
 "target": "directional_return",
 "model_architecture": {
 "components": [
 {
 "type": "xgboost_regressor",
 "hyperparams": {
 "n_estimators": 600,
 "max_depth": 7,
 "learning_rate": 0.012,
 "subsample": 0.8,
 "colsample_bytree": 0.6
 }
 },
 {
 "type": "lstm_attention",
 "sequence_length": 60,
 "hidden_units": [256, 128, 64],
 "dropout": 0.3,
 "attention_heads": 8
 }
 ],
 "meta_learner": "ridge_regression",
 "walk_forward_windows": 252
 },
 "risk_controls": {
 "max_drawdown": 0.025,
 "var_95": 0.018,
 "exposure_limit": 0.10,
 "stop_loss": "adaptive_atr",
 "position_limit_contracts": 25
 },
 "execution_spec": {
 "slippage_model": "adaptive_spread",
 "order_type": "TWAP",
 "latency_budget_ms": 50
 "broker_emulation": "FX_Bridge",
 "max_adv_percent": 0.08
 }
 },
 "expected_metrics": {
 "annualized_sharpe": 2.20,
 "hit_ratio": 0.60,
 "turnover_daily": 4.1,
 "expected_volatility": 0.012
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
        }, 50); // Random typing speed

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
        }, 500); // Brief pause before adding line

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
                ? "text-purple-400"
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

  const getCurrentTypingLine = () => {
    return null; // No typing line needed
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
        delay: 0.3,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic bezier for smooth feel
        staggerChildren: 0.1, // If animating multiple items
      }}
      key={"tested"}
      className="w-full max-w-6xl mx-auto p-6  "
    >
      <div className="rounded-lg shadow-2xl relative bg-gradient-to-b from-[#141516]  to-[#08090A] overflow-hidden border border-zinc-800/80">
        <div className="w-full absolute left-0 top-0 bg-gradient-to-l from-[#141516]  to-[#08090a00] h-full z-20" />
        {/* Windows Terminal Header */}
        <div className="bg-[#0d0e0f] px-4 py-2 flex items-center justify-between border-b border-zinc-700/80">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 py-3">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-500 relative"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 8px rgba(34, 197, 94, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-green-400"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
                <span className="text-gray-400  font-semibold uppercase tracking-wider">
                  POST
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
              <motion.div key={line.id} className="whitespace-pre">
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
    </motion.div>
  );
};

export default PostCode;

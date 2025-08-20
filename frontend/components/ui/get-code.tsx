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

  const codeData = `{
    "submission_id": "sub_14_9c8f7a6d2e1b",
    "round_id": 14,
    "timestamp": "2025-08-18T09:47:24.123Z",
    "status": "validated_accepted",
    "validation_results": {
      "model_integrity": {
        "feature_stability_score": 0.947,
        "overfitting_risk": 0.034,
        "look_ahead_bias": false,
        "data_leakage_detected": false
      },
      "performance_attribution": {
        "expected_sharpe_ratio": 2.34,
        "information_ratio": 1.89,
        "maximum_drawdown": 0.067,
        "tail_risk_var99": 0.0234,
        "regime_consistency": 0.892
      },
      "uniqueness_metrics": {
        "orthogonality_score": 0.847,
        "correlation_existing_models": 0.23,
        "novel_alpha_contribution": 0.156,
        "diversification_ratio": 2.67
      },
      "execution_feasibility": {
        "liquidity_adequacy": 0.94,
        "market_impact_estimate": 0.0019,
        "fill_probability": 0.987,
        "slippage_forecast": 0.0013
      }
    },
    "backtesting_validation": {
      "out_of_sample_periods": [
        {
          "start": "2023-01-01",
          "end": "2023-12-31",
          "sharpe": 2.18,
          "max_dd": 0.052,
          "calmar": 4.19
        },
        {
          "start": "2024-01-01", 
          "end": "2024-12-31",
          "sharpe": 2.41,
          "max_dd": 0.073,
          "calmar": 3.87
        }
      ],
      "regime_performance": {
        "low_volatility": {"sharpe": 1.89, "hit_rate": 0.67},
        "high_volatility": {"sharpe": 2.78, "hit_rate": 0.71},
        "trending_markets": {"sharpe": 3.12, "hit_rate": 0.74},
        "mean_reverting": {"sharpe": 1.67, "hit_rate": 0.63}
      }
    },
    "risk_assessment": {
      "factor_exposures": {
        "systematic_risk": 0.67,
        "idiosyncratic_risk": 0.33,
        "tail_hedge_effectiveness": 0.84,
        "regime_transition_robustness": 0.91
      },
      "stress_testing": {
        "covid_march_2020": -0.089,
        "energy_crisis_2022": 0.134,
        "banking_stress_2023": -0.023,
        "monte_carlo_var95": -0.0187
      }
    },
    "deployment_pipeline": {
      "allocation_approved": 12500000,
      "live_trading_start": "2025-08-18T10:00:00Z",
      "monitoring_endpoints": {
        "real_time_pnl": "/v3/strategies/sub_14_9c8f7a6d2e1b/pnl",
        "risk_metrics": "/v3/strategies/sub_14_9c8f7a6d2e1b/risk",
        "execution_quality": "/v3/strategies/sub_14_9c8f7a6d2e1b/execution"
      },
      "auto_scaling": {
        "performance_threshold": 1.5,
        "max_allocation": 50000000,
        "scale_factor": 1.2,
        "cooldown_period": 86400
      }
    },
    "round_statistics": {
      "total_submissions": 1247,
      "acceptance_rate": 0.067,
      "avg_uniqueness_score": 0.634,
      "median_sharpe": 1.23,
      "top_decile_threshold": 2.15,
      "round_closes": "2025-08-18T10:00:00Z"
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
                ? "text-green-400"
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
    <div className="w-full max-w-6xl mx-auto p-6  ">
      <div className="rounded-lg shadow-2xl relative bg-gradient-to-b from-[#141516]  to-[#08090A] overflow-hidden border border-zinc-800/80">
        <div className="w-full absolute left-0 top-0 bg-gradient-to-l from-[#141516]  to-[#08090a00] h-full z-20" />
        {/* Windows Terminal Header */}
        <div className=" px-4 py-2 flex items-center justify-between border-b border-zinc-700/80">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2 py-3">
              <div className="flex items-center space-x-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-yellow-500 relative"
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                ></motion.div>
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
    </div>
  );
};

export default GetCode;

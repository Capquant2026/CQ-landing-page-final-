"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GetCode = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

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

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < codeData.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + codeData[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, Math.random() * 20 + 10); // Random speed between 10-30ms for more realistic typing

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, codeData]);

  const formatJSON = (str: any) => {
    const lines = str.split("\n");
    return lines.map((line: any, index: number) => {
      const trimmed = line.trim();

      if (trimmed.includes('"') && trimmed.includes(":")) {
        const parts = line.split(":");
        const keyPart = parts[0];
        const valuePart = parts.slice(1).join(":");

        return (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.02 }}
            key={index}
            className="group hover:bg-gray-800/30 transition-colors duration-200 rounded px-2 -mx-2"
          >
            <span className="text-gray-500">
              {line.substring(0, line.indexOf(trimmed))}
            </span>
            <span className="text-[#d15c78] font-medium">{keyPart}</span>
            <span className="text-gray-300">:</span>
            <span
              className={
                valuePart.includes('"')
                  ? "text-white"
                  : /\d/.test(valuePart)
                  ? "text-orange-400"
                  : valuePart.includes("true") || valuePart.includes("false")
                  ? "text-purple-400"
                  : "text-gray-300"
              }
            >
              {valuePart}
            </span>
          </motion.div>
        );
      }

      return (
        <div
          key={index}
          className="group hover:bg-gray-800/30 transition-colors duration-200 rounded px-2 -mx-2"
        >
          <span
            className={
              trimmed === "{" ||
              trimmed === "}" ||
              trimmed === "[" ||
              trimmed === "]" ||
              trimmed.includes("{") ||
              trimmed.includes("}")
                ? "text-yellow-400 font-bold"
                : trimmed.includes(",")
                ? "text-gray-400"
                : "text-gray-300"
            }
          >
            {line}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="relative">
        <div className="relative overflow-hidden rounded-xl">
          <div className="p-6 overflow-auto max-h-96 custom-scrollbar">
            <pre className="font-mono text-sm leading-relaxed">
              <code className="block whitespace-pre relative">
                {formatJSON(displayedText)}
                {!isComplete && (
                  <motion.span
                    className="inline-block w-2 h-5 bg-blue-400 ml-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                )}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(55, 65, 81, 0.3);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(135deg, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default GetCode;

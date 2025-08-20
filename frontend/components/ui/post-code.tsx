"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
type Line = {
  id: number;
  content: string;
};
const PostCode = ({ isFinished }) => {
  const [visibleLines, setVisibleLines] = useState<Line[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [currentTypingLine, setCurrentTypingLine] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement | null>(null);

  const codeData = `{
  "headers": {
    "Authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...",
    "Content-Type": "application/json",
    "X-CapQuant-Round": "14",
    "X-Model-Version": "4.7.2",
    "X-Participant-Tier": "institutional"
  },
  "research_pipeline": {
    "round_id": 14,
    "submission_timestamp": "2025-08-18T09:47:23.847Z",
    "model_metadata": {
      "name": "multi_factor_regime_v4.7.2",
      "ensemble_type": "stacked_meta_learner",
      "feature_count": 2847,
      "lookback_periods": [1, 5, 21, 63, 252],
      "regime_detection": "hmm_gaussian_mixture"
    },
    "data_sources": {
      "price_data": ["refinitiv_tick", "iex_cloud", "alpha_architect"],
      "alternative": ["satellite_oil_storage", "credit_spreads", "options_flow"],
      "macro": ["fred_econ", "central_bank_minutes", "yield_curves"],
      "sentiment": ["news_nlp", "earnings_transcripts", "sec_filings"]
    },
    "feature_engineering": {
      "technical_indicators": {
        "momentum": ["rsi_regime", "macd_divergence", "price_velocity"],
        "mean_reversion": ["bollinger_zscore", "kalman_residuals"],
        "volatility": ["garch_forecast", "realized_vol_term_structure"]
      },
      "fundamental_factors": {
        "value": ["ev_ebitda_sector_adj", "fcf_yield_normalized"],
        "quality": ["roe_stability", "accruals_ratio", "piotroski_f9"],
        "growth": ["revenue_surprise", "earnings_revision_momentum"]
      },
      "cross_asset_signals": {
        "oil_equity_regime": "wti_sp500_cointegration",
        "curve_positioning": "term_structure_pca_loadings",
        "vol_surface": "options_skew_indicators"
      }
    },
    "model_architecture": {
      "ensemble_components": [
        {
          "type": "xgboost_regressor",
          "hyperparams": {
            "n_estimators": 500,
            "max_depth": 8,
            "learning_rate": 0.01,
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
        },
        {
          "type": "transformer_encoder",
          "d_model": 512,
          "nhead": 16,
          "num_layers": 6,
          "dim_feedforward": 2048
        }
      ],
      "meta_learner": "ridge_regression",
      "walk_forward_windows": 252
    },
    "target_construction": {
      "universe": ["SPY", "SPX_futures", "CL", "USO", "XLE", "BZ", "UCO"],
      "prediction_horizon": "4h",
      "return_transformation": "rank_gaussian_normalize",
      "regime_conditional": true
    },
    "risk_model": {
      "factor_exposures": {
        "market_beta": 0.97,
        "momentum": 0.23,
        "value": -0.15,
        "quality": 0.41,
        "low_vol": -0.32,
        "oil_beta": 0.89
      },
      "specific_risk": 0.0847,
      "correlation_decay": 0.94,
      "regime_adjusted_vol": true
    }
  },
  "execution_specification": {
    "order_routing": {
      "primary_venues": ["BATS", "IEX", "NYSE_ARCA"],
      "dark_pools": ["MS_CROSSFINDER", "GS_SIGMA_X", "BARX"],
      "participation_limits": {
        "max_adv_percent": 8.5,
        "time_horizon_minutes": 240,
        "urgency_coefficient": 0.7
      }
    },
    "implementation_algo": {
      "type": "adaptive_shortfall",
      "risk_aversion": 1e-4,
      "temporary_impact_model": "almgren_chriss_nonlinear",
      "permanent_impact_half_life": 1800,
      "market_impact_budget": 15
    },
    "position_sizing": {
      "kelly_fraction": 0.15,
      "risk_budget_bps": 25,
      "correlation_clustering": "hierarchical_risk_parity",
      "regime_scaling": true
    }
  },
  "positions": [
    {
      "symbol": "SPY",
      "target_weight": 0.0534,
      "direction": "long",
      "conviction": 0.847,
      "regime_exposure": "low_vol"
    },
    {
      "symbol": "SPX",
      "target_weight": 0.0289,
      "direction": "long",
      "conviction": 0.723,
      "instrument_type": "future"
    },
    {
      "symbol": "CL",
      "target_weight": 0.0156,
      "direction": "long",
      "conviction": 0.691,
      "instrument_type": "future"
    },
    {
      "symbol": "USO",
      "target_weight": -0.0098,
      "direction": "short",
      "conviction": 0.612,
      "hedge_ratio": 0.75
    },
    {
      "symbol": "XLE",
      "target_weight": 0.0067,
      "direction": "long",
      "conviction": 0.589
    }
  ]
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
        }, 0); // Random typing speed

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
        }, 0); // Brief pause before adding line

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
    </div>
  );
};

export default PostCode;

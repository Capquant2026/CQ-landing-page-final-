"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PostCode = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

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

export default PostCode;

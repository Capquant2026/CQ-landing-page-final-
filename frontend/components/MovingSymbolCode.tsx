import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MovingSymbolCode = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const codeLine1 = `//@version=5 strategy("Multi-Indicator Strategy Example", overlay=true, margin_long=100, margin_short=100) smaLen = input.int(50, "SMA Length") emaLen = input.int(21, "EMA Length") rsiLen = input.int(14, "RSI Length") macdFast = input.int(12, "MACD Fast") macdSlow = input.int(26, "MACD Slow") macdSignal = input.int(9, "MACD Signal") sma = ta.sma(close, smaLen) ema = ta.ema(close, emaLen) rsi = ta.rsi(close, rsiLen) macd = ta.macd(close, macdFast, macdSlow, macdSignal) longCond  = ta.crossover(ema, sma) and rsi > 55 and macd[0] > macd[1] shortCond = ta.crossunder(ema, sma) and rsi < 45 and macd[0] < macd[1] if longCond strategy.entry("Long", strategy.long) if shortCond strategy.entry("Short", strategy.short) if rsi > 70 strategy.close("Long") if rsi < 30 strategy.close("Short") plot(sma, color=color.blue, title="SMA") plot(ema, color=color.orange, title="EMA") hline(70, "RSI Overbought", color=color.red) hline(30, "RSI Oversold", color=color.green")`;

  const codeLine2 = `df["SMA"] = df["Close"].rolling(sma_len).mean() df["EMA"] = df["Close"].ewm(span=ema_len, adjust=False).mean() df["RSI"] = ta.momentum.RSIIndicator(df["Close"], rsi_len).rsi() macd = ta.trend.MACD(df["Close"], window_slow=macd_slow, window_fast=macd_fast, window_sign=macd_signal) df["MACD"] = macd.macd() df["MACD_SIGNAL"] = macd.macd_signal() df["LongEntry"] = (df["EMA"] > df["SMA"]) & (df["RSI"] > 55) & (df["MACD"] > df["MACD_SIGNAL"]) df["ShortEntry"] = (df["EMA"] < df["SMA"]) & (df["RSI"] < 45) & (df["MACD"] < df["MACD_SIGNAL"]) for i in range(len(df)): if position == 0: if df["LongEntry"].iloc[i]: position = 1 elif df["ShortEntry"].iloc[i]: position = -1 elif position == 1 and df["RSI"].iloc[i] > 70: position = 0 elif position == -1 and df["RSI"].iloc[i] < 30: position = 0 results = pd.DataFrame(trades, columns=["Type","EntryDate","EntryPrice","ExitDate","ExitPrice","PnL"]) print(results) print("Total PnL:", results["PnL"].sum())`;

  if (!mounted) return null;

  return (
    <div className="w-full lg:w-[42%] mt-5 ">
      <motion.div className="w-full bg-[#202122] mx-auto h-72 rounded-lg p-10 relative overflow-hidden">
        <motion.h2
          className="text-2xl font-[538] tracking-[-.0325em] text-balance text-white mb-6 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Seamless integration with your preferred platform
        </motion.h2>

        {/* ticker container */}
        <div className="relative   mt-10 overflow-hidden flex flex-col gap-4">
          {/* First line */}
          <motion.div
            className="flex whitespace-nowrap text-sm font-mono"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="pr-10 text-[#70AED0]">{codeLine1}</span>
            <span className="pr-10 text-[#70AED0]">{codeLine1}</span>
          </motion.div>

          {/* Second line */}
          <motion.div
            className="flex whitespace-nowrap text-sm font-mono"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="pr-10 text-[#9b5d57]">{codeLine2}</span>
            <span className="pr-10 text-[#9b5d57]">{codeLine2}</span>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#0b0c0d] z-20 to-transparent pointer-events-none" />
        <div className="flex items-end justify-end">
          <motion.span
            className="inline-block cursor-pointer mt-5 "
            whileHover={{
              scale: 1.01,
              y: -2,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            <Button className="bg-white hover:bg-white  text-black cursor-pointer">
              Deploy
            </Button>
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default MovingSymbolCode;

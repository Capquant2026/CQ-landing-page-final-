"use client";

import { useMemo, useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MotionDiv } from "./motion-wrapper";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { Home, BarChart3, GitBranch, Award, UserPlus, User, MessageCircle, LogOut } from "lucide-react";

// --- CUSTOM ICONS ---
const HomeIcon = ({ className, style }: any) => (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M14.5192 6.44596C14.5192 5.5978 13.9514 4.51131 13.2575 4.02764L8.92555 0.992484C7.9442 0.305543 6.36704 0.340591 5.42075 1.0766L1.64257 4.02064C1.0117 4.51131 0.5 5.55574 0.5 6.34782V11.5419C0.5 13.1682 1.82482 14.5 3.45105 14.5H11.5682C13.1944 14.5 14.5192 13.1682 14.5192 11.549V9.37598" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.50961 11.6962V9.59328" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SidebarToggleIcon = ({ className, style }: any) => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M7.97 2V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14.97 9.44L12.41 12L14.97 14.56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 13V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LeaderboardIcon = ({ className, style }: any) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
    <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
  </svg>
);

// --- SIDEBAR COMPONENT ---
const Sidebar = memo(() => {
  const [isOpen, setIsOpen] = useState(true);

  const NavLink = ({ icon: Icon, label, customColor }: any) => (
    <div
      className="flex items-center h-9 rounded-md transition-all text-white hover:text-[#c0c0c0] hover:bg-white/[0.03] cursor-pointer"
      style={{
        width: isOpen ? "100%" : "36px",
        padding: isOpen ? "0 10px" : "0",
        justifyContent: isOpen ? "flex-start" : "center",
        gap: isOpen ? "12px" : "0",
        transformStyle: "preserve-3d"
      }}
    >
      <Icon className="h-[18px] w-[18px] flex-shrink-0" style={{ color: customColor || "white" }} />
      {isOpen && (
        <div className="flex flex-col justify-center w-full">
          <span className="font-normal text-[13px]">{label}</span>
        </div>
      )}
    </div>
  );

  const NavGroup = ({ label, links }: any) => (
    <div className="flex flex-col gap-3 w-full" style={{ transformStyle: "preserve-3d" }}>
      <hr className="border-white/[.06] w-full" />
      <div className="flex flex-col">
        {isOpen && (
          <span className="text-[#808080] text-[10px] tracking-[0.1em] uppercase mb-2 px-1">
            {label}
          </span>
        )}
        <div className="flex flex-col gap-0.5" style={{ transformStyle: "preserve-3d" }}>
          {links.map((link: any, idx: number) => (
            <NavLink key={idx} {...link} />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex-shrink-0 border-b md:border-b-0 md:border-r border-white/[.06] transition-all duration-300 ease-in-out md:block z-10 flex flex-col md:items-start relative top-0 left-0 bg-[#0d0d0d] h-auto md:h-full py-2 sm:py-0 w-[full] sm:w-[auth]"
      style={{ width: isOpen ? 260 : 72, zIndex: 50, transformStyle: "preserve-3d" }}
    >
      <div className="p-4 text-white md:h-full flex flex-col gap-4 w-full overflow-hidden" style={{ transformStyle: "preserve-3d", fontFamily: "var(--font-poppins), sans-serif" }}>
        
        {/* Header */}
        <div className={`flex ${isOpen ? "items-center justify-between" : "flex-col items-center justify-center"} relative h-10 shrink-0`}>
          {isOpen && (
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold whitespace-nowrap">
                <span className="text-[#777777]">Cap</span>Quant
              </h1>
            </div>
          )}
          <button
             onClick={() => setIsOpen(!isOpen)}
             className="cursor-pointer hover:bg-white/[0.05] p-1.5 flex items-center justify-center rounded-md"
          >
            <SidebarToggleIcon
              className="w-7 h-7"
              style={{ transform: `rotate(${isOpen ? 0 : 180}deg)`, transition: "transform 300ms ease-in-out" }}
            />
          </button>
        </div>

        <hr className="border-white/[.06] shrink-0" />

        {/* User Profile */}
        <div className={`flex items-center gap-3 py-1 ${!isOpen ? "justify-center" : ""}`}>
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "linear-gradient(135deg, #5e6ad2 0%, #7c87e3 50%, #9ba3f0 100%)" }}>
              U
            </div>
          </div>
          {isOpen && (
             <div className="flex flex-col text-sm leading-tight">
               <span className="text-[#e1e1e1] font-medium uppercase truncate max-w-[140px]">User</span>
               <span>Tier: <span className="text-[#7c87e3] capitalize">Explorer</span></span>
             </div>
          )}
        </div>

        {/* Submit Prediction */}
        <div className={`w-full shrink-0 ${!isOpen ? "flex justify-center" : ""}`}>
          {!isOpen ? (
             <button className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/[0.08] transition-colors hover:bg-[#1e1f22] cursor-pointer">
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                 <circle cx="8" cy="8" r="7" stroke="#7c87e3" strokeWidth="1.5" />
                 <path d="M8 5v6M5 8h6" stroke="#7c87e3" strokeWidth="1.5" strokeLinecap="round" />
               </svg>
             </button>
          ) : (
             <div className="w-full">
               <button className="w-full h-9 rounded-lg flex items-center justify-between px-3 border border-white/[0.08] transition-colors bg-[#141516] hover:bg-[#1e1f22] cursor-pointer">
                 <span className="text-[#e1e1e1] text-xs font-semibold tracking-wider uppercase">Submit Prediction</span>
                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                   <circle cx="9" cy="9" r="8" stroke="#7c87e3" strokeWidth="1.5" />
                   <path d="M9 6v6M6 9h6" stroke="#7c87e3" strokeWidth="1.5" strokeLinecap="round" />
                 </svg>
               </button>
               <div className="mt-2">
                 <div className="w-full h-1.5 rounded-full bg-[#1a1a1a] overflow-hidden mt-1">
                   <div className="h-full rounded-full transition-all duration-300" style={{ width: "33%", background: "linear-gradient(90deg, #5e6ad2, #7c87e3)" }} />
                 </div>
                 <div className="flex justify-between mt-2 text-[10px]">
                   <span className="text-[#808080]">Weekly Predictions</span>
                   <span className="text-[#808080]">0 of 1 deployed</span>
                 </div>
               </div>
             </div>
          )}
        </div>

        {/* Navigation Sections */}
        <div className={`flex-1 w-full flex flex-col gap-3 ${!isOpen ? "items-center" : ""}`} style={{ transformStyle: "preserve-3d" }}>
            <NavGroup label="PERFORMANCE" links={[
               { icon: HomeIcon, label: "Dashboard" },
               { icon: BarChart3, label: "Prediction History" }
            ]} />
            <NavGroup label="MODEL LAB" links={[
               { icon: GitBranch, label: "Strategy Builder" }
            ]} />
            <NavGroup label="ARENA" links={[
               { icon: LeaderboardIcon, label: "Leaderboard" },
               { icon: Award, label: "Rewards" },
               { icon: UserPlus, label: "Refer a friend", customColor: "#ffffff" }
            ]} />
        </div>

        {/* Bottom Section */}
        <div className={`mt-auto pt-2 w-full shrink-0 ${!isOpen ? "flex flex-col items-center justify-center" : ""}`} style={{ transformStyle: "preserve-3d" }}>
            <div className={`mb-8 px-0 transition-all ${isOpen ? "-mx-4 w-[calc(100%+2rem)] self-stretch block" : "w-full"}`}>
              <div className={`flex items-center border transition-all border-white/5 bg-white/[0.03] text-white hover:bg-white/[0.08] cursor-pointer ${!isOpen ? "h-9 w-9 justify-center p-0 mx-auto rounded-md" : "w-full py-3.5 px-4 justify-between rounded-none border-x-0"}`}>
                 <div className="flex items-center gap-3 overflow-hidden">
                    <div className={`flex-shrink-0 bg-gradient-to-r from-[#d8b4fe] to-[#8b5cf6] rounded-full ${!isOpen ? "w-3 h-3" : "w-3.5 h-3.5"}`} />
                    {isOpen && (
                       <div className="flex flex-col overflow-hidden">
                          <span className="text-[13px] font-bold uppercase tracking-wide truncate leading-tight bg-gradient-to-r from-[#d8b4fe] to-[#8b5cf6] bg-clip-text text-transparent">Unlock Signal</span>
                       </div>
                    )}
                 </div>
              </div>
            </div>

            <div className="flex flex-col w-full">
              {isOpen && <span className="text-[#808080] text-[10px] tracking-[0.1em] uppercase mb-2 px-1">SETTINGS & SUPPORT</span>}
              <div className="flex flex-col gap-0.5">
                 <NavLink icon={User} label="Profile" />
                 <NavLink icon={MessageCircle} label="Support" />
                 <div className={`flex items-center h-9 rounded-md transition-all text-[#ff4b4b] hover:text-[#ff6b6b] hover:bg-white/[0.03] cursor-pointer ${!isOpen ? "w-9 p-0 justify-center" : "w-full px-2 gap-3"}`} style={{ width: isOpen ? "100%" : "36px", padding: isOpen ? "0 10px" : "0", justifyContent: isOpen ? "flex-start" : "center", gap: isOpen ? "12px" : "0", transformStyle: "preserve-3d" }}>
                    <LogOut className="h-[18px] w-[18px] flex-shrink-0" />
                    {isOpen && <span className="font-normal text-[13px]">Logout</span>}
                 </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
});
Sidebar.displayName = "Sidebar";

// --- CIRCULAR PROGRESS ---
const CircularProgress = ({ value, size = 100, strokeWidth = 4, color = "#3b82f6" }: any) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#2a2a2a" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.3s ease" }}
      />
    </svg>
  );
};

// --- WELCOME METRICS ---
const WelcomeMetrics = memo(() => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
      sessionStorage.setItem("welcomeShownAt", Date.now().toString());
      const timer = setTimeout(() => setShowWelcome(false), 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const dummyAccuracy = 85.5;
  const dummyWeight = 2.35;

  return (
    <div className="flex flex-col gap-4" style={{ transformStyle: "preserve-3d" }}>
      <AnimatePresence>
        {showWelcome && (
          <motion.h1
            initial={{ opacity: 0, y: 20, height: 0, marginBottom: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto", marginBottom: 8 }}
            exit={{ opacity: 0, y: -20, height: 0, overflow: "hidden", marginBottom: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-[28px] font-semibold text-white tracking-wide font-sans m-0"
          >
            Welcome Back, <span className="capitalize">User</span>
          </motion.h1>
        )}
      </AnimatePresence>

      <div
        className="grid grid-cols-1 md:grid-cols-2 bg-[#0d0d0d] border border-[#2a2a2a] rounded-[14px] p-5 relative overflow-hidden"
        style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 400px)", transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-col border-r border-[#2a2a2a] pr-5">
          <h2 className="text-[11px] text-white font-semibold uppercase tracking-widest mb-2 font-sans">Accuracy Score</h2>
          <div className="flex items-center justify-center relative w-[90px] h-[90px] mx-auto">
            <CircularProgress value={dummyAccuracy} size={100} strokeWidth={4} color="#3b82f6" />
            <div className="absolute flex flex-col items-center justify-center mt-[-4px]">
              <span className="text-[24px] font-bold text-white leading-none">{dummyAccuracy.toFixed(1)}%</span>
              <span className="text-[9px] text-[#808080] font-medium mt-1">Top 13%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col px-5 relative overflow-hidden">
          <h2 className="text-[11px] text-white font-semibold uppercase tracking-widest mb-2 font-sans">Meta-Model Weight</h2>
          <div className="flex items-center justify-center relative w-[90px] h-[90px] mx-auto">
            <CircularProgress value={dummyWeight * 50} size={100} strokeWidth={4} color="#3b82f6" />
            <div className="absolute flex flex-col items-center justify-center mt-[-4px]">
              <span className="text-[24px] font-bold text-white leading-none">{dummyWeight.toFixed(2)}%</span>
            </div>
          </div>
          <div className="text-[10px] text-transparent text-center mt-2 select-none">-</div>
        </div>
      </div>
    </div>
  );
});
WelcomeMetrics.displayName = "WelcomeMetrics";

// --- PERFORMANCE CHART ---
const PerformanceChart = memo(() => {
  const [activeTab, setActiveTab] = useState("accuracy");
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div
      className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-[14px] p-5 relative flex flex-col items-center justify-center flex-[1.4] min-h-[350px]"
      style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 400px)", transformStyle: "preserve-3d" }}
    >
      <div className="w-full flex justify-between items-center mb-4 pl-4 pr-12">
        <h2 className="text-[12px] text-[#808080] font-bold uppercase tracking-[0.1em] font-sans flex items-center gap-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#808080]"></div>
          Performance
        </h2>
        <div className="flex gap-4">
          {["Accuracy", "Reward", "Model Weight"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(" ", "-"))}
              className={`px-4 py-1.5 rounded-md text-[11px] font-medium transition-colors ${
                activeTab === tab.toLowerCase().replace(" ", "-") ? "bg-[#252525] text-white" : "hover:bg-[#1a1a1a] text-[#808080]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="w-[90%] min-h-[220px] flex-1 relative mt-4 border-l border-b border-[#2a2a2a] mb-8">
        <div className="absolute left-[-26px] top-[-6px] text-[11px] text-[#4d4d4d]">25</div>
        <div className="absolute left-[-26px] top-[calc(33.33%-6px)] text-[11px] text-[#4d4d4d]">20</div>
        <div className="absolute left-[-26px] top-[calc(66.66%-6px)] text-[11px] text-[#4d4d4d]">15</div>
        <div className="absolute left-[-26px] top-[calc(100%-6px)] text-[11px] text-[#4d4d4d]">10</div>
        <div className="absolute top-[0%] w-full h-[1px] bg-[#1a1a1a]"></div>
        <div className="absolute top-[33.33%] w-full h-[1px] bg-[#1a1a1a]"></div>
        <div className="absolute top-[66.66%] w-full h-[1px] bg-[#1a1a1a]"></div>
        <div className="absolute bottom-[-28px] w-full flex justify-between px-8 text-[11px] text-[#4d4d4d]">
          {months.map((month) => <span key={month}>{month}</span>)}
        </div>
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,80 Q10,75 20,70 T40,60 T60,40 T80,20 L100,5 L100,100 L0,100 Z" fill="url(#chart-gradient)" />
          <path d="M0,80 Q10,75 20,70 T40,60 T60,40 T80,20 L100,5" fill="none" stroke="#4e9164" strokeWidth="1" />
          <defs>
            <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(78, 145, 100, 0.4)" />
              <stop offset="100%" stopColor="rgba(78, 145, 100, 0)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
});
PerformanceChart.displayName = "PerformanceChart";

// --- LIVE ASSETS ---
const LiveAssets = memo(() => {
  const assets = [
    { symbol: "EUR", pair: "EUR/USD", price: "$1.0750", change: "+1.5%", isPositive: true },
    { symbol: "GBP/USD", pair: "", price: "$1.2680", change: "+0.3%", isPositive: true },
    { symbol: "USD/JPY", pair: "", price: "153.10", change: "-0.1%", isPositive: false },
    { symbol: "BTC", pair: "", price: "$64,210", change: "+2.2%", isPositive: true },
    { symbol: "DAX", pair: "", price: "$3,480", change: "+0.5%", isPositive: true },
    { symbol: "NASDAQ", pair: "", price: "147.4", change: "+1.2%", isPositive: true },
  ];

  return (
    <div
      className="bg-[#0d0d0d] border border-[#2a2a2a] rounded-[14px] px-10 py-[23px] relative flex-none flex flex-col shrink-0"
      style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 400px)", transformStyle: "preserve-3d" }}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[12px] text-[#808080] font-bold uppercase tracking-[0.1em] font-sans flex items-center gap-2">LIVE ASSETS</h2>
        <button className="text-[#808080] hover:text-white pb-1 tracking-[0.2em] font-bold">...</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[10px]">
        {assets.map((asset, i) => (
          <div key={i} className="flex justify-between items-center py-0">
            <div className="flex items-center gap-2 w-1/3">
              <button className="px-2 py-0.5 hover:bg-white/20 text-white/50 border border-white/50 rounded-[4px] text-[10px] font-bold tracking-wide transition-colors cursor-pointer">
                {asset.symbol}
              </button>
              {asset.pair && <span className="text-[11px] text-white font-medium">{asset.pair}</span>}
            </div>
            <div className="flex items-center justify-end gap-4 w-2/3 text-right">
              {asset.price && <span className="text-[11px] text-white font-medium">{asset.price}</span>}
              <div className={`text-[11px] font-medium flex items-center gap-1 w-[40px] justify-end ${asset.isPositive ? "text-[#4e9164]" : "text-[#c14141]"}`}>
                {asset.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
LiveAssets.displayName = "LiveAssets";

// --- WELCOME SPACER ---
const WelcomeSpacer = memo(() => {
  const [showSpacer, setShowSpacer] = useState(false);

  useEffect(() => {
    const welcomeTimestamp = sessionStorage.getItem("welcomeShownAt");
    if (welcomeTimestamp) {
      const timeSinceShown = Date.now() - parseInt(welcomeTimestamp, 10);
      if (timeSinceShown < 10000) {
        setShowSpacer(true);
        const timer = setTimeout(() => setShowSpacer(false), 10000 - timeSinceShown);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <AnimatePresence>
      {showSpacer && (
        <motion.div
          initial={{ height: 0, opacity: 0, marginBottom: 0 }}
          animate={{ height: 42, opacity: 1, marginBottom: 16 }}
          exit={{ height: 0, overflow: "hidden", opacity: 0, marginBottom: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="hidden xl:block flex-shrink-0"
        />
      )}
    </AnimatePresence>
  );
});
WelcomeSpacer.displayName = "WelcomeSpacer";

// --- LIVE PULSE ---
const LivePulse = memo(() => {
  const dummyPredictions = [
    { id: 1, asset: "BTC", direction: "BUY", confidence: 0.87, time: "14:32", status: "Pending" },
    { id: 2, asset: "EUR/USD", direction: "SELL", confidence: 0.72, time: "14:28", status: "Active" },
    { id: 3, asset: "NASDAQ", direction: "BUY", confidence: 0.91, time: "14:15", status: "Active" },
  ];

  const dummyMessages = [
    { id: 1, type: "alert", title: "Market Alert", message: "Volatility increased for EUR/USD", time: "14:35" },
    { id: 2, type: "trade", title: "Trade Matched", message: "Your BTC prediction matched 5 other models", time: "14:32" },
  ];

  return (
    <div
      className="w-full h-full rounded-xl p-6 border border-[#2a2a2a] flex flex-col gap-6 max-h-[850px]"
      style={{ backgroundImage: "radial-gradient(circle at top right, rgba(255,255,255,0.06), transparent 400px)", backgroundColor: "#0d0d0d", transformStyle: "preserve-3d" }}
    >
      <div className="flex items-center gap-4 mb-2">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" />
        </svg>
        <h2 className="text-2xl font-semibold tracking-widest text-[#ececec]">LIVE PULSE</h2>
        <span className="relative flex h-3 w-3 ml-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4e9164] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4e9164]"></span>
        </span>
      </div>

      <div className="flex-1 flex flex-col gap-6" style={{ transformStyle: "preserve-3d" }}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#808080] text-sm tracking-wider uppercase">MY ACTIVITY</h3>
            <div className="h-[1px] w-full bg-[#333]"></div>
          </div>
          <div className="flex flex-col gap-3">
            {dummyPredictions.map((pred) => (
              <div key={pred.id} className="flex justify-between items-center text-xs bg-[#141516]/50 p-2 rounded-lg border border-[#2a2a2a]/60">
                <div className="flex flex-col">
                  <span className="text-white font-semibold">{pred.asset} <span className={pred.direction === "BUY" ? "text-green-500" : "text-red-500"}>{pred.direction}</span></span>
                  <span className="text-[#808080] mt-1">Conf: {(pred.confidence * 100).toFixed(1)}%</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[#808080]">{pred.time}</span>
                  <span className="text-xs text-[#ececec] mt-1 font-medium">{pred.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#808080] text-sm tracking-wider uppercase">PLATFORM ACTIVITY</h3>
            <div className="h-[1px] w-full bg-[#333]"></div>
          </div>
          <div className="flex flex-col gap-3">
            {dummyMessages.map((msg) => (
              <div key={msg.id} className="flex flex-col border border-[#2a2a2a]/60 bg-[#141516]/50 rounded-lg p-3 gap-1.5 w-full">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${msg.type === "alert" ? "bg-amber-500" : msg.type === "closed" ? "bg-red-500" : "bg-blue-500"}`} />
                  <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: msg.type === "alert" ? "#F59E0B" : msg.type === "closed" ? "#EF4444" : "#3B82F6" }}>
                    {msg.type.replace("-", " ")}
                  </span>
                </div>
                <p className="text-[11px] text-white font-medium">{msg.title}</p>
                <p className="text-[10px] text-[#808080]">{msg.message}</p>
                <span className="text-[9px] text-[#4d4d4d] mt-1">{msg.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});
LivePulse.displayName = "LivePulse";

// --- MAIN DASHBOARD ---
const Dashboard = () => {
  return (
    <div className="w-full flex justify-center py-4 sm:py-10 px-0 sm:px-6 md:px-8 mt-10 md:mt-20 overflow-x-hidden md:overflow-visible">
      {/* Container scaling for mobile view to maintain desktop aspect and layout intact */}
      <div 
        className="transform origin-top scale-[0.27] sm:scale-100 transition-transform duration-300 relative"
      >
        <MotionDiv className="main-motion-div w-[1400px] bg-[#0c0d0e] rounded-[14px] flex flex-row border border-[#1A1C1F] relative z-0 before:content-[''] before:absolute before:h-full before:right-0 before:w-[50%] before:top-0 before:bg-gradient-to-l before:from-[#0c0d0e] before:to-transparent before:pointer-events-none before:z-20 overflow-hidden shadow-2xl h-[850px] sm:h-auto">
          
          {/* Left Sidebar */}
          <Sidebar />

          {/* Dashboard Content */}
          <div className="flex flex-col xl:flex-row gap-4 sm:gap-6 flex-1 w-full bg-[#0d0d0d] p-3 sm:p-5 overflow-y-auto" style={{ transformStyle: "flat" }}>
            
            {/* Left Column: Metrics & Chart & Assets */}
            <div className="flex-[3] flex flex-col gap-4 sm:gap-6 min-w-0" style={{ transformStyle: "flat" }}>
              <WelcomeMetrics />
              <div className="flex-1 flex flex-col lg:flex-row xl:flex-col gap-4 sm:gap-6" style={{ transformStyle: "flat" }}>
                <div className="flex-1 min-w-0">
                  <PerformanceChart />
                </div>
                <div className="flex-1 min-w-0 overflow-x-auto custom-scrollbar pb-2">
                  <LiveAssets />
                </div>
              </div>
            </div>

            {/* Right Column: Live Pulse */}
            <div className="w-full xl:w-[28%] min-w-0 xl:max-w-[450px] flex-shrink-0 flex flex-col mt-4 xl:mt-0" style={{ transformStyle: "flat" }}>
              <WelcomeSpacer />
              <div className="flex-1 h-[400px] md:h-auto" style={{ transformStyle: "flat" }}>
                <LivePulse />
              </div>
            </div>
            
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default memo(Dashboard);

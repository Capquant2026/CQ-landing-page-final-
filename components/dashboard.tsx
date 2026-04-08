import logo from "../public/CQ.svg";
import dash from "../public/file.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { GrHomeRounded } from "react-icons/gr";
import { IoPersonSharp } from "react-icons/io5";
import { IoFlag } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { FaCode } from "react-icons/fa6";
import { PiRankingLight } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactSupport } from "react-icons/md";
import { CiImport } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";
import { memo, useMemo } from "react";
import SideBarButton from "./SideBarButton";
import TimerWrapper from "./Timer-wrapper";
import { MotionDiv } from "./motion-wrapper";
import ChartWrapper from "./chart-wrapper";
import Spicail3dButton from "./Spicail3dButton";
import dashboardImage from "../public/3D-Final.png"
const Dashboard = () => {
  const allLinks = useMemo(
    () => [
      { label: "Dashboard", icon: GrHomeRounded, color: "#5F6163" },
      { label: "Profile", icon: IoPersonSharp, color: "#26B5CE" },
      { label: "API", icon: AiOutlineCloudServer, color: "#f0701a" },
      { label: "Import", icon: CiImport, color: "#EB5757" },
      { label: "No-code", icon: FaCode, color: "#50E2C2" },
      { label: "Backtester", icon: TfiStatsUp, color: "#5E6AD2" },
      { label: "Reward Tracker", icon: MdPayment, color: "#26B5CE" },
      { label: "Reports", icon: IoFlag, color: "#4EA7FC" },
      { label: "Leaderboard", icon: PiRankingLight, color: "#68CC58" },
    ],
    []
  );

  const cardContent = useMemo(
    () => [
      { title: "Live Predictions", value: "3" },
      { title: "Accuracy", value: "67%" },
      {
        title: "Contribution Rewards",
        value: "$8340",
      },
      { title: "Uniqueness Score", value: "1.5"},
      { title: "Validated Predictions", value: "7", change: "" },
      {
        title: "Sharp Ratio",
        value: "1.3",
      },
      { title: "Predictions Weighted", value: "9" },
      { title: "Accuracy", value: "55%" },
    ],
    []
  );
   return (
    <div className="relative dashboard-container">
      {/* On garde le conteneur principal pour conserver les dimensions */}
      <div
        className="w-[1300px] sm:w-[1600px] scale-[0.4] sm:scale-100 rounded-lg mt-20 h-[900px] border border-[#1A1C1F] overflow-hidden"
      >
        {/* Image qui prend toute la place */}
        <Image
          src={dashboardImage}
          alt="Dashboard"
          fill
          style={{ objectFit: "cover" }} // ou "contain" si tu veux voir toute l'image sans découpe
        />
      </div>
    </div>
  );
};

export default memo(Dashboard);

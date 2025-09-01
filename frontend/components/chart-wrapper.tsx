
'use client'
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("./PeakUsageAnalysis"), { ssr: false });

export default function ChartWrapper() {
  return <Chart />;
}

"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { useMemo } from "react";

export default function PeakUsageAnalysis() {
  const data = useMemo(
    () => [
      { month: "Jan", percentage: 3.2 },
      { month: "Feb", percentage: 4.8 },
      { month: "Mar", percentage: 7.1 },
      { month: "Apr", percentage: 9.4 },
      { month: "May", percentage: 11.2 },
      { month: "Jun", percentage: 8.7 },
      { month: "Jul", percentage: 6.3 },
      { month: "Aug", percentage: 5.9 },
      { month: "Sep", percentage: 7.8 },
      { month: "Oct", percentage: 10.1 },
      { month: "Nov", percentage: 8.4 },
      { month: "Dec", percentage: 4.6 },
    ],
    []
  );

  return (
    <Card className="bg-transparent mt-3 border-[#2A2A2A] text-[#EDEDED] ">
      <CardHeader>
        <div>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Overall Performance
          </CardTitle>
          <CardDescription className="text-[#9A9A9A]">
            Highest  contribution return : 11.2%
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="h-[380px] p-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="peakGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5E6AD2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#5E6AD2" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#2A2A2A"
            />
            <XAxis
              dataKey="month"
              tick={{ fill: "#9A9A9A", fontSize: 15 }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              tick={{ fill: "#9A9A9A", fontSize: 15 }}
              tickLine={false}
              axisLine={false}
              unit="%"
              domain={[0, 12]}
            />
            <Tooltip
              cursor={{ fill: "#2A2A2A", opacity: 0.1 }}
              contentStyle={{
                backgroundColor: "#0E0E0E",
                border: "1px solid #2A2A2A",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "#5E6AD2" }}
              labelStyle={{ color: "#9A9A9A" }}
              formatter={(value) => [
                `${Number(value).toFixed(1)}%`,
                "Percentage",
              ]}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="percentage"
              stroke="#5E6AD2"
              fill="url(#peakGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

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

export function PeakUsageAnalysis() {
  type MonthlyData = { month: string; percentage: number };
  
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const data: MonthlyData[] = months.map((month) => ({
    month,
    percentage: Math.floor(1 + Math.random() * 11), // Random percentage between 1-12%
  }));

  const peakMonth = data.reduce<MonthlyData>(
    (max, current) => (current.percentage > max.percentage ? current : max),
    data[0]
  );
  const avgPercentage =
    data.reduce((sum, current) => sum + current.percentage, 0) / data.length;
  const minPercentage = Math.min(...data.map((d) => d.percentage));

  return (
    <Card className="bg-transparent mt-3 border-[#2A2A2A] text-[#EDEDED]">
      <CardHeader>
        <div>
          <CardTitle className="flex items-center gap-2">
            Overall Performance
          </CardTitle>
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
                <stop
                  offset="5%"
                  stopColor="#5E6AD2"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(var(--chart-2))"
                  stopOpacity={0.1}
                />
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
              domain={[1, 12]}
              ticks={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            />
            <Tooltip
              cursor={{ fill: "hsl(var(--accent))", opacity: 0.1 }}
              contentStyle={{
                backgroundColor: "#0E0E0E",
                border: "1px solid #2A2A2A",
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: "hsl(var(--chart-2))" }}
              labelStyle={{ color: "#9A9A9A" }}
              formatter={(value: number | string) => [
                `${Number(value).toFixed(1)}%`,
                "Percentage",
              ]}
              labelFormatter={(label: number | string) => `Month: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="percentage"
              stroke="hsl(var(--chart-2))"
              fill="url(#peakGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
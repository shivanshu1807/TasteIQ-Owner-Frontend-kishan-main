"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 120 },
  { month: "February", desktop: 305, mobile: 240 },
  { month: "March", desktop: 237, mobile: 190 },
  { month: "April", desktop: 173, mobile: 140 },
  { month: "May", desktop: 209, mobile: 170 },
  { month: "June", desktop: 214, mobile: 180 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function UpsellRevenue() {
  return (
    <ChartContainer className="size-full" config={chartConfig}>
      <BarChart
        accessibilityLayer
        data={chartData}
        margin={{
          top: 10,
          right: 5,
          left: 5,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Legend verticalAlign="top" height={40} />
        <XAxis
          dataKey="month"
          tickLine={true}
          tickMargin={1}
          axisLine={true}
          tickFormatter={(value) => value.slice(0, 3)}
          label={{ value: "Months", position: "insideBottom", offset: 0 }}
        />
        <YAxis
          label={{
            value: "Visitors",
            angle: -90,
            position: "insideLeft",
            offset: 10,
          }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="desktop"
          fill="var(--color-desktop)"
          radius={[4, 4, 0, 0]}
        >
          <LabelList
            dataKey="desktop"
            position="top"
            offset={10}
            className="fill-foreground"
            fontSize={10}
          />
        </Bar>
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]}>
          <LabelList
            dataKey="mobile"
            position="top"
            offset={10}
            className="fill-foreground"
            fontSize={12}
          />
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}

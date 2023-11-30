"use client";

import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useMantineTheme } from "@mantine/core";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

export interface ProgressChartProps {
  data: any[];
  labels: number[];
  title: string;
  yTitle: string;
}

export default function ProgressChart({
  data,
  labels,
  title,
  yTitle,
}: ProgressChartProps) {
  const theme = useMantineTheme();

  const animationDuration = 150;

  return (
    <div className="w-full h-80">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              borderColor: theme.colors[theme.primaryColor][8],
              pointRadius: 0,
              tension: 0.1,
            },
          ],
        }}
        options={{
          animations: {
            x: {
              type: "number",
              easing: "linear",
              duration: animationDuration / data.length,
              from: NaN,
              delay(ctx) {
                return ctx.dataIndex * (animationDuration / data.length);
              },
            },
            y: {
              type: "number",
              easing: "linear",
              duration: animationDuration / data.length,
              from(ctx) {
                return ctx.dataIndex === undefined || ctx.dataIndex === 0
                  ? ctx.chart.scales.y.getPixelForValue(0)
                  : ctx.chart
                      .getDatasetMeta(ctx.datasetIndex)
                      .data[ctx.dataIndex - 1].getProps(["y"], true).y;
              },
              delay(ctx) {
                return ctx.dataIndex * (animationDuration / data.length);
              },
            },
          },
          plugins: {
            title: {
              text: title,
              display: true,
            },
          },
          scales: {
            x: {
              type: "linear",
              title: {
                text: "Year",
                display: true,
              },
            },
            y: {
              title: {
                text: yTitle,
                display: true,
              },
            },
          },
        }}
      />
    </div>
  );
}

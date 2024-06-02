import React, { useState } from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
type ChartType = {
  type?:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
  series?: ApexOptions["series"];
  width?: string | number;
  height?: string | number;
  options?: ApexOptions;
  [key: string]: any;
};
const ReportCharts = () => {
  const [data, setData] = useState<ChartType>({
    series: [
      { name: "Sales", data: [31, 40, 28, 51, 41, 82, 56] },
      { name: "Revenue", data: [13, 25, 17, 57, 80, 55, 90] },
      { name: "Customer", data: [80, 45, 50, 70, 24, 82, 88] },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
      },
      markers: { size: 4 },
      colors: ["#4154f1", "#2eca6a", "#ff771d"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:00:00.000Z",
          "2018-09-19T02:00:00.000Z",
          "2018-09-19T03:00:00.000Z",
          "2018-09-19T04:00:00.000Z",
          "2018-09-19T05:00:00.000Z",
        ],
        tooltip: {
        //   x: {
        //     format: "dd/MM/yy HH:mm",
        //   },
        },
      },
    },
  });
  return (
    <Chart
      options={data.options as ApexOptions}
      series={data.series as ApexOptions["series"]}
      type={data?.options?.chart?.type || "area"}
      height={data?.options?.chart?.height || 350}
    />
  );
};

export default ReportCharts;

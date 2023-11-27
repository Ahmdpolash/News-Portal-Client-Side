import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Subscription", "Revenue"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Website Performance",
  curveType: "function",
  legend: { position: "bottom" },
  backgroundColor: "#E5E7EB",
};
const Line = () => {
  return (
    <div>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};

export default Line;

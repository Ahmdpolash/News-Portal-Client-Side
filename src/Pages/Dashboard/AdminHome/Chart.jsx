import React from "react";
import { Chart } from "react-google-charts";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  backgroundColor: "#E5E7EB",
};
const Charts = () => {
  const axiosPublic = useAxiosPublic();

  return (
    <div>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"450px"}
      />
    </div>
  );
};

export default Charts;

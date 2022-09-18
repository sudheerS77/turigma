import React from "react";
import { Chart } from "react-charts";
import walmart from "./walmart.json";
const BarComponent = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );
  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  // const barData = walmart();
  return (
    <div className="bg-gray-50 border border-gray-100 shadow-xl rounded-md p-3">
      <div
        style={{
          width: "100%",
          height: "500px",
        }}
      >
        <Chart data={data} series={series} axes={axes} tooltip />
      </div>
    </div>
  );
};

export default BarComponent;

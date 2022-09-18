import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BarCharComponent = (value) => {
  const data = value.data;
  console.log("DATA", data);
  return (
    <div className="w-full shadow-xl flex items-center justify-center border border-gray-100 rounded-md">
      <BarChart
        width={1200}
        height={450}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Weekly_Sales" stackId="a" fill="#00008B" />
        {/* <Bar dataKey="Fuel_Price" stackId="a" fill="#8884d8" /> */}
        {/* <Bar dataKey="Unemployment" fill="#8884d8" /> */}
      </BarChart>
    </div>
  );
};

export default BarCharComponent;

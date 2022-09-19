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
  const data = value.data[0];
    const demo =[
    {
        WH: 1,
        Date: "7-oct",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "14-oct",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "14-oct",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "21-oct",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "28-oct",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "4-Nov",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "11-Nov",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    },
    {
        WH: 1,
        Date: "18-oct",
        "Start Inv": 345,
        "Bi weekly Inv Update": 234,
        "SKU1": 3454,
        "SKU2": 4734,
        "SKU3": 2479,
        "SKU4": 2235,
        "SKU5": 2235
    }
]

  console.log("DATA", data);
  return (
    <div className="w-full shadow-xl flex items-center justify-center border border-gray-100 rounded-md">
      <BarChart
        width={1400}
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
        <Bar dataKey="SKU1" fill="#00008B" />
        <Bar dataKey="SKU2" fill="#D46381" />
        <Bar dataKey="SKU3" fill="#165BAA" />
        <Bar dataKey="SKU4" fill="#FC7979" />
        <Bar dataKey="SKU5" fill="#0B1354" />
      </BarChart>
    </div>
  );
};

export default BarCharComponent;

// {
//   WH: 1,
//   SKU: [1, 2, 3, 4, 5],
//   "Start Inv": ["4,724", "4,279", "236", "859", "716"],
//   "Bi weekly Inv Update": ["4,724", "4,279", "236", "859", "716"],
//   "7-Oct": ["4,724", "4,279", "236", "859", "716"],
//   "8-Oct": ["4,724", "4,279", "236", "859", "716"],
//   "9-Oct": ["4,724", "4,279", "236", "859", "716"],
//   "10-Oct": ["4,724", "4,279", "236", "859", "716"],
// },
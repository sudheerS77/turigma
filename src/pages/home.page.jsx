import React from 'react'
import ProgressComponent from '../components/progressBar/progress.component';
import { MdPlayArrow } from 'react-icons/md';
import { BiExport, BiImport } from 'react-icons/bi';
import CostComponents from '../components/homePageComponents/cost.Components';
import SettingsComponent from '../components/homePageComponents/settings.components';
import TableComponent from "../components/homePageComponents/table";
import TopChart from "../components/homePageComponents/topChart";
import MapComponent from "../components/homePageComponents/mapChart";
import MapChart from "../components/homePageComponents/mapChart";
import Navbar from "../components/navbar";
import { useParams } from "react-router-dom";
const HomePage = () => {
  const { id } = useParams();
  console.log(id);
  const data = [
    {
      name: "Page A",
      uv: 400,
      pv: 240,
      amt: 240,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 138,
      amt: 210,
    },
    {
      name: "Page C",
      uv: 200,
      pv: 900,
      amt: 220,
    },
    {
      name: "Page D",
      uv: 270,
      pv: 308,
      amt: 200,
    },
    {
      name: "Page E",
      uv: 190,
      pv: 400,
      amt: 281,
    },
    {
      name: "Page F",
      uv: 290,
      pv: 300,
      amt: 200,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div>
        <Navbar />

        <div className="pt-20 px-20 w-full h-auto flex items-start justify-center gap-3 mb-20">
          <div className="w-1/2">
            <div className="w-full flex flex-col gap-4 shadow-xl border border-gray-100 px-3 py-2">
              <div className="w-full flex items-center justify-center gap-5">
                <button className="text-gray-50 bg-blue-900 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                  Run Simulation
                  <MdPlayArrow className="w-7 h-7 text-blue-900" />
                </button>
                <button className="text-gray-50 bg-blue-900 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                  Export Simulation
                  <BiExport className="w-7 h-7" />
                </button>
                <button className="text-gray-50 bg-blue-900 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                  Import Simulation
                  <BiImport className="w-7 h-7" />
                </button>
              </div>
              <ProgressComponent />
            </div>
            <SettingsComponent />
          </div>
          <div className="w-1/2">
            <CostComponents />
            <div className="">
              {id === "warehouse-1" && <TopChart data={data} />}
              {id === "warehouse-2" && <TopChart data={data1} />}
              {id === "warehouse-3" && <TopChart data={data} />}
            </div>
            <div>
              {/* <MapComponent /> */}
              <MapChart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage
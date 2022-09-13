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
const HomePage = () => {
  return (
    <>
      <div className="pt-20 px-20 w-full h-auto flex items-start justify-center gap-20 mb-20">
        <div className="w-1/2 px-4">
          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex items-center justify-center gap-5">
              <button className="text-gray-50 bg-lime-400 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                Run Simulation
                <MdPlayArrow className="w-7 h-7" />
              </button>
              <button className="text-gray-50 bg-lime-400 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
                Export Simulation
                <BiExport className="w-7 h-7" />
              </button>
              <button className="text-gray-50 bg-lime-400 px-3 py-2 rounded-md text-xl font-semibold flex items-center justify-center gap-2 shadow-xl">
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
            <TopChart />
          </div>
          <div>
            {/* <MapComponent /> */}
            <MapChart />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor eum
            non doloremque repudiandae laudantium vero maiores. Nam, perferendis
            natus ducimus a veniam, libero accusantium, velit quas sequi iste
            eos laboriosam!
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage
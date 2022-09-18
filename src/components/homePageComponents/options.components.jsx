import React from "react";
import { MdPlayArrow } from "react-icons/md";
import { BiExport, BiImport } from "react-icons/bi";
import ProgressComponent from "../progressBar/progress.component";

const OptionsComponent = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-1 border border-gray-100 px-3 py-2 rounded-md">
        <div className="w-full flex items-center justify-center gap-5">
          <button className="text-gray-50 bg-blue-900 p-2 rounded-md text-lg font-semibold flex items-center justify-center gap-1 shadow-xl">
            Run Simulation
            <MdPlayArrow className="w-5 h-5" />
          </button>
          <button className="text-gray-50 bg-blue-900 p-2 rounded-md text-lg font-semibold flex items-center justify-center gap-1 shadow-xl">
            Export Simulation
            <BiExport className="w-5 h-5" />
          </button>
          <button className="text-gray-50 bg-blue-900 p-2 rounded-md text-lg font-semibold flex items-center justify-center gap-1 shadow-xl">
            Import Simulation
            <BiImport className="w-5 h-5" />
          </button>
        </div>
        <ProgressComponent />
      </div>
    </>
  );
};

export default OptionsComponent;

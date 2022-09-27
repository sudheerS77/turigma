import React, {useState} from 'react'
import Slider from 'react-input-slider';
import DropDown from '../dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from "./table.component";
import WHDropdown from "../WHDropdown";

const SettingsComponent = () => {
  const [state, setState] = useState({ x: 10, y: 10 });
  return (
    <>
      <div
        // style={{
        //   background: "rgba( 255, 255, 255, 0.05 )",
        //   boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        //   border: "1px solid rgba( 255, 255, 255, 0.18 );",
        // }}
        className="w-6/12 bg-white flex flex-col items-start gap-5 bg-gray-100 shadow-sm py-2 border border-gray-100 rounded-xl"
      >
        <h4 className="text-xl font-bold text-center w-full pt-3">
          Input Metrics
        </h4>
        <div className="w-full px-3 border-b-2 border-gray-300 px-3 pb-4">
          <div className="flex items-center justify-between bg-gray-100 text-lg text-gray-800 font-semibold border border-gray-300 px-3 py-1 rounded-md shadow-md">
            Select Warehouse
            <DropDown />
          </div>
          {/* <WHDropdown /> */}
        </div>
        <div className="w-full px-2 border-b-2 border-gray-300 px-3 pb-4">
          <label for="customRange2" class="form-label"></label>
          <input
            type="range"
            class="form-range"
            min="0"
            max="1"
            step="0.5"
            defaultValue="0"
            id="customRange2"
          ></input>
        </div>
        <div className="w-full flex flex-col items-end justify-center gap-4 w-full pb-64 px-3">
          <div className="w-full flex items-center justify-center gap-2 px-2 py-1 rounded-md font-semibold  border-2 border-gray-400">
            <h4 className="w-full text-xs font-semibold ">
              Forecast Tolerage (in %) - [confidence interval]
            </h4>
            <h5 className="text-black text-sm font-semibold">
              <input
                type="text"
                defaultValue={"10%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200 shadow-sm border-2 border-gray-300 rounded-md"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center font-semibold justify-center gap-2 px-2 py-1 rounded-md font-semibold  border-2 border-gray-400">
            <h4 className="w-full text-xs">
              StockOut SLA index(in %) - [0%=High SLA, 100% = min inv cost]
            </h4>
            <h5 className="text-black text-sm font-semibold">
              <input
                type="text"
                defaultValue={"0%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200 shadow-sm border-2 border-gray-300 rounded-md"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center justify-center gap-2 px-2 py-1 rounded-md font-semibold  border-2 border-gray-400">
            <h4 className="w-full text-xs">
              Buffer Stock Level(% of expected inventory level)
            </h4>
            <h5 className="text-black text-sm font-semibold">
              <input
                type="text"
                defaultValue={"10%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200 shadow-sm border-2 border-gray-300 rounded-md"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center justify-center gap-2 px-2 py-1 rounded-md font-semibold  border-2 border-gray-400">
            <h4 className="w-full text-xs">No of Weeks in Forecast Periiod</h4>
            <h5 className="text-black text-sm font-semibold">
              <input
                type="text"
                defaultValue={"14%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200 shadow-sm border-2 border-gray-300 rounded-md"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center justify-center gap-2 px-2 py-1 rounded-md font-semibold  border-2 border-gray-400">
            <h4 className="w-full text-xs">
              AverageMargin (in %) - for stock out loos estimation
            </h4>
            <h5 className="text-black text-sm font-semibold">
              <input
                type="text"
                defaultValue={"50%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200 shadow-sm border-2 border-gray-300 rounded-md"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
        </div>

        {/* <div className="flex items-center gap-5 text-xl font-semibold">
          Demand
          <DropDown />
        </div>
        <div className="flex items-center gap-5 text-xl font-semibold">
          Placement Policy
          <DropDown />
        </div>
        <div className="flex items-center gap-5 text-xl font-semibold">
          Simulation Environment
          <DropDown />
        </div>
        <div className="flex items-center gap-5 text-xl font-semibold">
          Warehouses
          <DropDown />
        </div> */}
      </div>
    </>
  );
};

export default SettingsComponent

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
        className="w-full lg:w-4/12 h-full bg-gray-100 flex flex-col items-start bg-gray-100 shadow-sm py-2 border border-gray-100 rounded-xl"
      >
        <h4 className="text-xl font-bold text-center w-full ">Input Metrics</h4>
        <div className="pt-2">
          <div className="w-full px-3 px-3">
            <div>
              <div className="flex items-center pb-2 justify-between bg-gray-100 text-lg text-gray-800 font-semibold border border-gray-300 px-3 py-1 rounded-md shadow-md">
                Warehouse
                <DropDown />
              </div>
              {/* <WHDropdown /> */}
            </div>
            <div className="w-full flex items-center justify-between px-2 px-3 bg-gray-100">
              <label for="customRange2" class="form-label">
                <h4 className="w-full text-sm  text-center">
                  StockOut SLA index
                </h4>
              </label>
              <div>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="1"
                  step="0.5"
                  defaultValue="0"
                  id="customRange2"
                ></input>
                <span className="flex items-center justify-between text-sm font-medium text-black">
                  <p>0</p>
                  <p>0.5</p>
                  <p>1</p>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-end justify-center gap-4 w-full px-3">
            <div className="w-full flex items-center justify-center px-2 rounded-md font-semibold">
              <h4 className="w-full text-sm  font-semibold ">
                Forecast Tolerage (in %) - [confidence interval]
              </h4>
              <h5 className="text-black text-sm font-semibold">
                <input
                  type="text"
                  defaultValue={"10%"}
                  className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
                  style={{ width: "50px" }}
                />
              </h5>
            </div>
            {/* <div className="w-full flex items-center font-semibold justify-center gap-2 px-2 rounded-md font-semibold">
            <h4 className="w-full text-sm ">
              StockOut SLA index(in %) - [0%=High SLA, 100% = min inv cost]
            </h4>
            <h5 className="text-black text-sm font-semibold">
              <input
                type="text"
                defaultValue={"0%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
                style={{ width: "50px" }}
              />
            </h5>
          </div> */}
            <div className="w-full flex items-center justify-center gap-2 px-2 rounded-md font-semibold">
              <h4 className="w-full text-sm ">
                Buffer Stock Level(% of expected inventory level)
              </h4>
              <h5 className="text-black text-sm font-semibold">
                <input
                  type="text"
                  defaultValue={"10%"}
                  className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
                  style={{ width: "50px" }}
                />
              </h5>
            </div>
            <div className="w-full flex items-center justify-center gap-2 px-2 rounded-md font-semibold">
              <h4 className="w-full text-sm ">
                No of Weeks in Forecast Periiod
              </h4>
              <h5 className="text-black text-sm font-semibold">
                <input
                  type="text"
                  defaultValue={"14"}
                  className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
                  style={{ width: "50px" }}
                />
              </h5>
            </div>
            <div className="w-full flex items-center justify-center gap-2 px-2 rounded-md font-semibold">
              <h4 className="w-full text-sm ">
                AverageMargin (in %) - for stock out loos estimation
              </h4>
              <h5 className="text-black text-sm font-semibold">
                <input
                  type="text"
                  defaultValue={"50%"}
                  className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
                  style={{ width: "50px" }}
                />
              </h5>
            </div>
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

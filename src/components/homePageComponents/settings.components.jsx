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
      <div className="w-full lg:w-4/12 h-full bg-gray-100 flex flex-col gap-3 px-3.5 bg-gray-100 shadow-sm py-1 border border-gray-100 rounded-xl">
        <h4 className="text-xl font-bold text-center w-full border-b border-gray-400">
          Input Metrics
        </h4>
        <div className="w-full flex items-center justify-between border-b border-gray-400">
          <span className="w-8/12"> Warehouse</span>
          <span className="w-4/12">
            <DropDown />
          </span>
        </div>
        <div className="w-full flex items-center justify-between border-b border-gray-400">
          <label for="customRange2" class="form-label w-8/12">
            <h4 className="w-full text-sm">StockOut SLA index</h4>
          </label>
          <div className="w-4/12">
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
        <div className="w-full flex items-center justify-around gap-2 font-semibold border-b border-gray-400">
          <h4 className="w-8/12 text-sm  font-semibold ">
            Forecast Tolerance (in %) - [confidence interval]
          </h4>
          <span className="text-black text-sm font-semibold w-4/12">
            <input
              type="text"
              defaultValue={"10%"}
              className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
              style={{ width: "50px" }}
            />
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-2 font-semibold border-b border-gray-400">
          <h4 className="w-8/12 text-sm ">
            Buffer Stock Level (% of expected inventory level)
          </h4>
          <span className="text-black text-sm font-semibold w-4/12">
            <input
              type="text"
              defaultValue={"10%"}
              className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
              style={{ width: "50px" }}
            />
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-2 font-semibold border-b border-gray-400">
          <h4 className="w-8/12 text-sm ">No of Weeks in Forecast Period</h4>
          <span className="text-black text-sm font-semibold w-4/12">
            <input
              type="text"
              defaultValue={"14"}
              className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
              style={{ width: "50px" }}
            />
          </span>
        </div>
        <div className="w-full flex items-center justify-center gap-2 font-semibold border-b border-gray-400">
          <h4 className="w-8/12 text-sm ">
            AverageMargin (in %) - for stock out Loss estimation
          </h4>
          <span className="text-black text-sm font-semibold w-4/12">
            <input
              type="text"
              defaultValue={"50%"}
              className="px-2 py-1.5 text-center rounded-sm bg-grey-400 shadow-sm"
              style={{ width: "50px" }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default SettingsComponent

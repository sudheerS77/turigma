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
      <div className="w-6/12 flex flex-col items-start gap-3 bg-gray-100 shadow-sm px-3 py-2 border border-gray-100 rounded-md">
        <h4 className="text-xl font-semibold">Input Metrics</h4>
        {/* <span className="w-1/2">
          <Slider
            axis="x"
            x={state.x}
            onChange={({ x }) => setState((state) => ({ ...state, x }))}
            styles={{
              track: {
                backgroundColor: "gray",
                width: "600px",
              },
              active: {
                backgroundColor: "#00008B",
              },
            }}
          />
          {state.x}
        </span> */}
        <div className="flex items-center justify-center bg-gray-100 gap-5 text-md font-semibold border border-gray-300 w-full px-2 py-1 rounded-md shadow-md">
          Select Warehouse
          <DropDown />
          {/* <WHDropdown /> */}
        </div>
        <div className="w-full flex flex-col items-end justify-center gap-3 w-full p-2 rounded-md shadow-md">
          <div className="w-full flex items-center justify-center gap-2 bg-azure-blue px-2 py-1 rounded-md font-semibold text-gray-50">
            <h4 className="w-full text-xs font-semibold  text-gray-50">
              Forecast Tolerage (in %) - [confidence interval]
            </h4>
            <h5 className="text-black text-sm font-semibold text-gray-50">
              <input
                type="text"
                defaultValue={"10%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center font-semibold justify-center gap-2 bg-azure-blue px-2 py-1 rounded-md font-semibold text-gray-50">
            <h4 className="w-full text-xs">
              StockOut SLA index(in %) - [0%=High SLA, 100% = min inv cost]
            </h4>
            <h5 className="text-black text-sm font-semibold text-gray-50">
              <input
                type="text"
                defaultValue={"0%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center justify-center gap-2 bg-azure-blue px-2 py-1 rounded-md font-semibold text-gray-50">
            <h4 className="w-full text-xs">
              Buffer Stock Level(% of expected inventory level)
            </h4>
            <h5 className="text-black text-sm font-semibold text-gray-50">
              <input
                type="text"
                defaultValue={"10%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center justify-center gap-2 bg-azure-blue px-2 py-1 rounded-md font-semibold text-gray-50">
            <h4 className="w-full text-xs">No of Weeks in Forecast Periiod</h4>
            <h5 className="text-black text-sm font-semibold text-gray-50">
              <input
                type="text"
                defaultValue={"14%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200"
                style={{ width: "50px" }}
              />
            </h5>
          </div>
          <div className="w-full flex items-center justify-center gap-2 bg-azure-blue px-2 py-1 rounded-md font-semibold text-gray-50">
            <h4 className="w-full text-xs">
              AverageMargin (in %) - for stock out loos estimation
            </h4>
            <h5 className="text-black text-sm font-semibold text-gray-50">
              <input
                type="text"
                defaultValue={"50%"}
                className="px-2 py-1.5 text-center rounded-sm bg-grey-200"
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

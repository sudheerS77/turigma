import React, {useState} from 'react'
import Slider from 'react-input-slider';
import DropDown from '../dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from "./table.component";

const SettingsComponent = () => {
  const [state, setState] = useState({ x: 10, y: 10 });
  return (
    <>
      <div className="w-3/12 flex flex-col items-start gap-3 shadow-xl px-3 py-2 border border-gray-100 rounded-md">
        <h4 className="text-xl font-semibold">Settings</h4>
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
        </div>
        <div className="flex flex-col items-start justify-center w-full p-2 rounded-md shadow-md">
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-xs font-semibold bg-dark-blue text-gray-50 px-2 py-1 rounded-md">
              Forecast Tolerage (in %) - [confidence interval]
            </h4>
            <h5 className="text-sm font-semibold text-blue-900 bg-gray-200 px-2 py-1 rounded-md">
              10%
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-xs font-semibold bg-dark-blue text-gray-50 px-2 py-1 rounded-md">
              StockOut SLA index(in %) - [0%=High SLA, 100% = min inv cost]
            </h4>
            <h5 className="text-sm font-semibold text-dark-blue bg-gray-200 px-2 py-1 rounded-md">
              0%
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-xs font-semibold bg-dark-blue text-gray-50 px-2 py-1 rounded-md">
              Buffer Stock Level(% of expected inventory level)
            </h4>
            <h5 className="text-sm font-semibold text-dark-blue bg-gray-200 px-2 py-1 rounded-md">
              10%
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-xs font-semibold bg-dark-blue text-gray-50 px-2 py-1 rounded-md">
              No of Weeks in Forecast Periiod
            </h4>
            <h5 className="text-sm font-semibold text-dark-blue bg-gray-200 px-2 py-1 rounded-md">
              14
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-xs font-semibold bg-dark-blue text-gray-50 px-2 py-1 rounded-md">
              AverageMargin (in %) - for stock out loos estimation
            </h4>
            <h5 className="text-sm font-semibold text-dark-blue bg-gray-200 px-2 py-1 rounded-md">
              50%
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

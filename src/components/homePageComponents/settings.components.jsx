import React, {useState} from 'react'
import Slider from 'react-input-slider';
import DropDown from '../dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './table';

const SettingsComponent = () => {
    const [state, setState] = useState({ x: 10, y: 10 });
  return (
    <>
      <div className="flex flex-col items-start gap-2 mt-5 shadow-xl px-3 py-2 border border-gray-100">
        <h4>Settings</h4>
        <span className="w-1/2">
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
                backgroundColor: "#0000FF",
              },
            }}
          />
          {state.x}
        </span>
        <div className="flex items-center gap-5 text-xl font-semibold">
          Select Warehouse
          <DropDown />
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-sm font-semibold bg-blue-900 text-gray-50 px-2 py-1 rounded-md">
              Forecast Tolerage (in %) - [confidence interval]
            </h4>
            <h5 className="text-sm font-semibold text-blue-900 bg-gray-200 px-2 py-1 rounded-md">
              10%
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-sm font-semibold bg-blue-900 text-gray-50 px-2 py-1 rounded-md">
              StockOut SLA index(in %) - [0%=High SLA, 100% = min inv cost]
            </h4>
            <h5 className="text-sm font-semibold text-blue-900 bg-gray-200 px-2 py-1 rounded-md">
              0%
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-sm font-semibold bg-blue-900 text-gray-50 px-2 py-1 rounded-md">
              Buffer Stock Level(% of expected inventory level)
            </h4>
            <h5 className="text-sm font-semibold text-blue-900 bg-gray-200 px-2 py-1 rounded-md">
              10%
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-sm font-semibold bg-blue-900 text-gray-50 px-2 py-1 rounded-md">
              No of Weeks in Forecast Periiod
            </h4>
            <h5 className="text-sm font-semibold text-blue-900 bg-gray-200 px-2 py-1 rounded-md">
              14
            </h5>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h4 className="text-sm font-semibold bg-blue-900 text-gray-50 px-2 py-1 rounded-md">
              AverageMargin (in %) - for stock out loos estimation
            </h4>
            <h5 className="text-sm font-semibold text-blue-900 bg-gray-200 px-2 py-1 rounded-md">
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
        <div className="w-full">
          <TableComponent />
        </div>
      </div>
    </>
  );
}

export default SettingsComponent
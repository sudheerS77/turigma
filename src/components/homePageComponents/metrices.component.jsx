import React from "react";

const MetriceComponent = () => {
  return (
    <>
      <div className="w-4/12 border border-gray-100 rounded-md shadow-md p-2.5">
        <h6 className="text-xl font-bold text-center py-2">Open Metrice</h6>
        <div className="flex flex-wrap gap-4">
          {/* HOLDING */}
          <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
            <p className="text-gray-200">Inv. Holding Case (Total)</p>
            <div className="border-r border-l px-2 py-1">
              <p className="text-gray-300">TOTAL</p>
              <h6 className="text-xl">168,345</h6>
            </div>
            <div className="border-r px-2 py-1">
              <p>Average</p>
              <h6 className="text-xl">168,345</h6>
            </div>
            <div className="border-r px-2 py-1">
              <p>MEDIAN</p>
              <h6 className="text-xl">168,345</h6>
            </div>
          </div>
          {/* STOCK OUT LOSS */}
          <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
            <p>Inv. Holding Case (Total)</p>
            <div className="border-r border-l px-2 py-1">
              <p>TOTAL</p>
              <h6 className="text-xl">168,345</h6>
            </div>
            <div className="border-r px-2 py-1">
              <p>Average</p>
              <h6 className="text-xl">168,345</h6>
            </div>
            <div className="border-r px-2 py-1">
              <p>MEDIAN</p>
              <h6 className="text-xl">168,345</h6>
            </div>
          </div>
          {/* INVENTORY TURN */}
          <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
            <p>Inv. Holding Case (Total)</p>
            <div className="border-r border-l px-2 py-1">
              <p>Average</p>
              <h6 className="text-xl">168,345</h6>
            </div>
            <div className="border-r px-2 py-1">
              <p>MEDIAN</p>
              <h6 className="text-xl">168,345</h6>
            </div>
            <div className="border-r px-2 py-1">
              <p>MIN</p>
              <h6 className="text-xl">168,345</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetriceComponent;

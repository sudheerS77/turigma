import React from "react";

const EmptyMetriceComponent = () => {
  return (
    <>
      <div className="w-1/2 h-full border-2 border-gray-200 rounded-md shadow-xs p-2.5">
        <h6 className="text-xl font-bold text-center py-2 text-center">
          Output Metrics
        </h6>

        <div className="flex flex-wrap gap-4 text-gray-50 mx-2">
          {/* HOLDING */}
          <div className="w-full grid grid-cols-4 text-black  items-center justify-center font-semibold border-2 border-gray-400 rounded-md">
            <div className="text-center flex justify-center items-center border-r h-full shadow-md">
              Inv. Holding Case
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">Total</p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">
                Average
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">
                Median
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
          </div>

          {/* STOCK OUT LOSS */}
          <div className="w-full grid grid-cols-4 text-black  items-center justify-center font-semibold border-2 border-gray-400 rounded-md">
            <div className="text-center flex justify-center items-center border-r h-full shadow-md">
              Stock out Loss
            </div>
            <div className="text-center border-r">
              <p className="font-semibold border-b border-gray-400 pb-0.5 shadow-md">
                Total
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">
                Average
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">
                Median
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
          </div>

          {/* INVENTORY TURN */}
          <div className="w-full grid grid-cols-4 text-black  items-center justify-center font-semibold border-2 border-gray-400 rounded-md">
            <div className="text-center flex justify-center items-center border-r h-full shadow-md">
              Inventory Turns
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">
                Average
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">
                Median
              </p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 shadow-md">Min</p>
              <h6 className="text-lg text-gray-800 font-bold">0</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyMetriceComponent;

import React from "react";

const EmptyMetriceComponent = () => {
  return (
    <>
      <div className="w-4/12 border border-gray-100 rounded-md shadow-md p-2.5">
        <h6 className="text-xl font-bold text-center py-2 text-center">
          Output Metrics
        </h6>

        <div className="flex flex-wrap gap-4 text-gray-50">
          {/* HOLDING */}
          <div className="grid grid-cols-4 gap-3 bg-azure-blue items-center justify-center font-semibold">
            <div className="text-center flex justify-center items-center border-r h-full">
              Inv. Holding Case
            </div>
            <div className="text-center ">
              <p className="">Total</p>
              <h6 className="text-xl">0</h6>
            </div>
            <div className="text-center">
              <p>Average</p>
              <h6 className="text-xl">0</h6>
            </div>
            <div className="text-center">
              <p>Median</p>
              <h6 className="text-xl">0</h6>
            </div>
          </div>

          {/* STOCK OUT LOSS */}
          <div className="grid grid-cols-4 gap-3 bg-azure-blue items-center justify-center font-semibold">
            <div className="text-center flex justify-center items-center border-r h-full">
              Stock out Loss
            </div>
            <div className="text-center">
              <p className="">Total</p>
              <h6 className="text-xl">0</h6>
            </div>
            <div className="text-center">
              <p>Average</p>
              <h6 className="text-xl">0</h6>
            </div>
            <div className="text-center">
              <p>Median</p>
              <h6 className="text-xl">0</h6>
            </div>
          </div>

          {/* INVENTORY TURN */}
          <div className="grid grid-cols-4 gap-3 bg-azure-blue items-center justify-center font-semibold">
            <div className="text-center flex justify-center items-center border-r h-full">
              Inventory Turns
            </div>
            <div className="text-center">
              <p className="">Average</p>
              <h6 className="text-xl">0 </h6>
            </div>
            <div className="text-center">
              <p>Median</p>
              <h6 className="text-xl">0</h6>
            </div>
            <div className="text-center">
              <p>Min</p>
              <h6 className="text-xl">0</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyMetriceComponent;

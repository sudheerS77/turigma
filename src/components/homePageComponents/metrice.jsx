import React from "react";

const Metrice = () => {
  return (
    <div className="w-4/12 border border-gray-100 rounded-md shadow-md p-2.5">
      <h6 className="text-xl font-bold text-center py-2">Open Metrics</h6>
      <div className="flex flex-wrap gap-4">
        {/* HOLDING */}
        <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
          <p className="w-20">Inv. Holding Case</p>
          <div className="border-r border-l px-2 py-1  w-20 text-center">
            <p className="text-gray-300">Total</p>
            <h6 className="text-xl"></h6>
          </div>
          <div className="border-r px-2 py-1  w-20 text-center">
            <p>Average</p>
            <h6></h6>
          </div>
          <div className=" px-2 py-1  w-20 text-center">
            <p>Median</p>
            <h6 className="text-xl"></h6>
          </div>
        </div>
        {/* STOCK OUT LOSS */}
        <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
          <p className="w-20">Stock out Loss</p>
          <div className="border-r border-l px-2 py-1  w-20 text-center">
            <p>Total</p>
            <h6 className="text-xl"></h6>
          </div>
          <div className="border-r px-2 py-1  w-20 text-center">
            <p>Average</p>
            <h6 className="text-xl"></h6>
          </div>
          <div className=" px-2 py-1  w-20 text-center">
            <p>Median</p>
            <h6 className="text-xl"></h6>
          </div>
        </div>
        {/* INVENTORY TURN */}
        <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
          <p className="w-20 text-center">Inventory Turns</p>
          <div className="border-r border-l px-2 py-1  w-20 text-center">
            <p>Average</p>
            <h6 className="text-xl"></h6>
          </div>
          <div className="border-r px-2 py-1 w-20 text-center  w-20 text-center">
            <p>Median</p>
            <h6 className="text-xl"></h6>
          </div>
          <div className=" px-2 py-1  w-20 text-center">
            <p>Min</p>
            <h6 className="text-xl"></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrice;

import React from "react";

const EmptyMetriceComponent = () => {
  return (
    <>
      <div className="w-full lg:w-1/2 h-full rounded-md shadow-md p-2.5 border-2 border-gray-300">
        <h6 className="text-xl font-bold text-center py-1 text-center">
          Output Metrics
        </h6>

        <div className="flex flex-wrap gap-6 text-gray-50 mx-2 pb-3">
          {/* HOLDING */}
          <div className="w-full text-md text-gray-800 font-semibold py-2">
            <div className="w-full grid grid-cols-4 text-center border-b border-gray-400 py-2.5">
              <div></div>
              <div>Total</div>
              <div>Average</div>
              <div>Median</div>
            </div>
            <div>
              <div className="w-full text-center grid grid-cols-4 pt-2 pb-2 border-b border-gray-400 py-2.5">
                <div className="text-sm">Inv. Holding Case</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
              </div>
            </div>
            {/* <div className="w-full grid grid-cols-4 text-center border-b border-gray-400 py-2.5">
              <div></div>
              <div>Total</div>
              <div>Average</div>
              <div>Median</div>
            </div> */}
            <div>
              <div className="w-full text-center grid grid-cols-4 pt-2 pb-2 border-b border-gray-400 py-2.5">
                <div>Stock out loss</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 text-center border-b border-gray-400 py-2.5">
              <div></div>
              <div>Average</div>
              <div>Median</div>
              <div>Min</div>
            </div>
            <div>
              <div className="w-full text-center grid grid-cols-4 pt-2 pb-2 border-b border-gray-400 py-2.5">
                <div>Inventory Turns</div>
                <div>{}</div>
                <div>{}</div>
                <div>{}</div>
              </div>
            </div>
          </div>

          {/* <div className="w-full grid grid-cols-4 text-black  items-center justify-center font-semibold">
            <div className="text-center flex justify-center items-center border-r h-full">
              Inv. Holding Case
            </div>
           
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5 "></p>
              <h6 className="text-lg text-gray-800 font-bold">
                {invHoldingCostTotal}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Total</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {invHoldingCostTotal}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Average</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {Math.round(invHoldingCostTotal / 5)}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Median</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {medianHoldingValue}
              </h6>
            </div>
          </div> */}

          {/* STOCK OUT LOSS */}
          {/* <div className="w-full grid grid-cols-4 text-black  items-center justify-center font-semibold">
            <div className="text-center flex justify-center items-center border-r h-full">
              Stock out Loss
            </div>
            <div className="text-center border-r">
              <p className="font-semibold border-b border-gray-400 pb-0.5">
                Total
              </p>
              <h6 className="text-lg text-gray-800 font-bold">
                {Math.abs(stockOutLossTotal)}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Average</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {Math.abs(Math.round(stockOutLossTotal / 5))}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Median</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {medianStockOutLossValue}
              </h6>
            </div>
          </div> */}

          {/* INVENTORY TURN */}
          {/* <div className="w-full grid grid-cols-4 text-black  items-center justify-center font-semibold">
            <div className="text-center flex justify-center items-center border-r h-full">
              Inventory Turns
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Average</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {Math.round(invTurnTotal / 5)}{" "}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Median</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {medianTurnValues}
              </h6>
            </div>
            <div className="text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Min</p>
              <h6 className="text-lg text-gray-800 font-bold">
                {sortedInvTurnValues[0]}
              </h6>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default EmptyMetriceComponent;

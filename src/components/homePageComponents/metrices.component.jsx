import React from "react";

const MetriceComponent = (props) => {
  const data = props.data;
  // data[0].map((item) => {
  //   console.log(item);
  // });
  const whData = data[0][0];
  const invHoldingValues = [
    whData["Holding Cost1"],
    whData["Holding Cost2"],
    whData["Holding Cost3"],
    whData["Holding Cost4"],
    whData["Holding Cost5"],
  ];
  const stockOutLossValues = [
    whData["Stkout Cost1"],
    whData["Stkout Cost2"],
    whData["Stkout Cost3"],
    whData["Stkout Cost4"],
    whData["Stkout Cost5"],
  ];
  const invTurnTotalValues = [
    whData["Inv Turn1"],
    whData["Inv Turn2"],
    whData["Inv Turn3"],
    whData["Inv Turn4"],
    whData["Inv Turn5"],
  ];
  const invHoldingCostTotal =
    whData["Holding Cost1"] +
    whData["Holding Cost2"] +
    whData["Holding Cost3"] +
    whData["Holding Cost4"] +
    whData["Holding Cost5"];
  const invTurnTotal =
    whData["Inv Turn1"] +
    whData["Inv Turn2"] +
    whData["Inv Turn3"] +
    whData["Inv Turn4"] +
    whData["Inv Turn5"];
  const stockOutLossTotal =
    whData["Stkout Cost1"] +
    whData["Stkout Cost2"] +
    whData["Stkout Cost3"] +
    whData["Stkout Cost4"] +
    whData["Stkout Cost5"];
  // invMedian.sort();
  const sortedInvHoldingValues = Array.from(invHoldingValues).sort(
    (a, b) => a - b
  );
  const sortedStockOutLossValues = Array.from(stockOutLossValues).sort(
    (a, b) => a - b
  );
  const sortedInvTurnValues = Array.from(invTurnTotalValues).sort(
    (a, b) => a - b
  );
  var halfinvH = Math.floor(sortedInvHoldingValues.length / 2);
  var halfSOL = Math.floor(sortedInvHoldingValues.length / 2);
  var halfinvTT = Math.floor(sortedInvTurnValues.length / 2);
  var medianHoldingValue;
  var medianStockOutLossValue;
  var medianTurnValues;
  if (sortedInvHoldingValues.length % 2) {
    medianHoldingValue = sortedInvHoldingValues[halfinvH];
  } else {
    medianHoldingValue =
      (sortedInvHoldingValues[halfinvH - 1] +
        sortedInvHoldingValues[halfinvH]) /
      2.0;
  }
  if (sortedStockOutLossValues.length % 2) {
    medianStockOutLossValue = sortedStockOutLossValues[halfSOL];
  } else {
    medianStockOutLossValue =
      (sortedStockOutLossValues[halfSOL - 1] +
        sortedStockOutLossValues[halfSOL]) /
      2.0;
  }
  if (sortedInvTurnValues.length % 2) {
    medianTurnValues = sortedInvTurnValues[halfinvTT];
  } else {
    medianTurnValues =
      (sortedInvTurnValues[halfinvTT - 1] + sortedInvTurnValues[halfinvTT]) /
      2.0;
  }

  return (
    <>
      <div className="w-4/12 border border-gray-100 rounded-md shadow-md p-2.5">
        <h6 className="text-xl font-bold text-center py-2 text-center">
          Open Metrics
        </h6>
        <div className="flex flex-wrap gap-4">
          {/* HOLDING */}
          <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
            <p className="w-20">Inv. Holding Case</p>
            <div className="border-r border-l px-2 py-1  w-20 text-center">
              <p className="text-gray-300">Total</p>
              <h6 className="text-xl">{invHoldingCostTotal}</h6>
            </div>
            <div className="border-r px-2 py-1  w-20 text-center">
              <p>Average</p>
              <h6 className="text-xl">{Math.round(invHoldingCostTotal / 5)}</h6>
            </div>
            <div className=" px-2 py-1  w-20 text-center">
              <p>Median</p>
              <h6 className="text-xl">{medianHoldingValue}</h6>
            </div>
          </div>
          {/* STOCK OUT LOSS */}
          <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
            <p className="w-20">Stock out Loss</p>
            <div className="border-r border-l px-2 py-1  w-20 text-center">
              <p>Total</p>
              <h6 className="text-xl">{Math.abs(stockOutLossTotal)}</h6>
            </div>
            <div className="border-r px-2 py-1  w-20 text-center">
              <p>Average</p>
              <h6 className="text-xl">
                {Math.abs(Math.round(stockOutLossTotal / 5))}
              </h6>
            </div>
            <div className=" px-2 py-1  w-20 text-center">
              <p>Median</p>
              <h6 className="text-xl">{Math.abs(medianStockOutLossValue)}</h6>
            </div>
          </div>
          {/* INVENTORY TURN */}
          <div className="w-full text-md font-bold flex items-center justify-around bg-dark-blue text-gray-50">
            <p className="w-20 text-center">Inventory Turns</p>
            <div className="border-r border-l px-2 py-1  w-20 text-center">
              <p>Average</p>
              <h6 className="text-xl">{Math.round(invTurnTotal / 5)}</h6>
            </div>
            <div className="border-r px-2 py-1 w-20 text-center  w-20 text-center">
              <p>Median</p>
              <h6 className="text-xl">{medianTurnValues}</h6>
            </div>
            <div className=" px-2 py-1  w-20 text-center">
              <p>Min</p>
              <h6 className="text-xl">{sortedInvTurnValues[0]}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MetriceComponent;

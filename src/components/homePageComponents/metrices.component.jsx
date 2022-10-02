import React from "react";
import { useParams } from "react-router-dom";
import MetriceData from "./metrice.json";

var MetriceComponent = (props) => {
  // var data = props.data;
  var { id } = useParams();
  // data[0].map((item) => {
  // });
  id = parseInt(id);
  if (id === 0 || id < 0) {
    id = 1;
  }
  if (id > 15) {
    id = 1;
  }
  var whData = MetriceData[id - 1];
  var invHoldingValues = [
    whData["Holding Cost1"],
    whData["Holding Cost2"],
    whData["Holding Cost3"],
    whData["Holding Cost4"],
    whData["Holding Cost5"],
  ];
  var stockOutLossValues = [
    whData["Stkout Cost1"],
    whData["Stkout Cost2"],
    whData["Stkout Cost3"],
    whData["Stkout Cost4"],
    whData["Stkout Cost5"],
  ];
  var invTurnTotalValues = [
    whData["Inv Turn1"],
    whData["Inv Turn2"],
    whData["Inv Turn3"],
    whData["Inv Turn4"],
    whData["Inv Turn5"],
  ];
  var invHoldingCostTotal =
    whData["Holding Cost1"] +
    whData["Holding Cost2"] +
    whData["Holding Cost3"] +
    whData["Holding Cost4"] +
    whData["Holding Cost5"];
  var invTurnTotal =
    whData["Inv Turn1"] +
    whData["Inv Turn2"] +
    whData["Inv Turn3"] +
    whData["Inv Turn4"] +
    whData["Inv Turn5"];
  var stockOutLossTotal =
    whData["Stkout Cost1"] +
    whData["Stkout Cost2"] +
    whData["Stkout Cost3"] +
    whData["Stkout Cost4"] +
    whData["Stkout Cost5"];
  // invMedian.sort();
  var sortedInvHoldingValues = Array.from(invHoldingValues).sort(
    (a, b) => a - b
  );
  var sortedStockOutLossValues = Array.from(stockOutLossValues).sort(
    (a, b) => a - b
  );
  var sortedInvTurnValues = Array.from(invTurnTotalValues).sort(
    (a, b) => a - b
  );
  var halfinvH = Math.floor(sortedInvHoldingValues.length / 2);
  var halfSOL = Math.floor(sortedStockOutLossValues.length / 2);
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

  if (id === 0 || id < 0 || id > 45) {
    invHoldingCostTotal = 0;
    invTurnTotal = 0;
    stockOutLossTotal = 0;
    medianHoldingValue = 0;
    medianStockOutLossValue = 0;
    medianTurnValues = 0;
  }
  return (
    <>
      <div
        style={{
          minHeight: "355px",
        }}
        className="w-full lg:w-1/2 rounded-md shadow-md p-2.5 border-2 border-gray-300"
      >
        <h6 className="text-xl font-bold text-center py-1 text-center">
          Output Metrics
        </h6>
        <div className="flex flex-wrap gap-12 text-gray-50 mx-2 pb-3">
          {/* HOLDING */}
          <div className="w-full text-md text-gray-800 font-semibold py-2">
            <div className="w-full grid grid-cols-4 items-center justify-center text-center border-b border-gray-400 py-2.5">
              <div></div>
              <div>Total</div>
              <div>Average</div>
              <div>Median</div>
            </div>
            <div>
              <div className="w-full grid grid-cols-4 items-center justify-center text-center pt-2 pb-2 border-b border-gray-400 py-2.5">
                <div className="text-sm">Inv. Holding Case</div>
                <div>{invHoldingCostTotal}</div>
                <div>{Math.round(invHoldingCostTotal / 5)}</div>
                <div>{medianHoldingValue}</div>
              </div>
            </div>
            {/* <div className="w-full grid grid-cols-4 text-center border-b border-gray-400 py-2.5">
              <div></div>
              <div>Total</div>
              <div>Average</div>
              <div>Median</div>
            </div> */}
            <div>
              <div className="w-full grid grid-cols-4 items-center justify-center text-center pt-2 pb-2 border-b border-gray-400 py-2.5">
                <div className="text-sm">Stock out loss</div>
                <div>{Math.abs(stockOutLossTotal)}</div>
                <div>{Math.abs(Math.round(stockOutLossTotal / 5))}</div>
                <div>{medianStockOutLossValue}</div>
              </div>
            </div>
            <div className="w-full grid grid-cols-4 items-center justify-center text-center border-b border-gray-400 py-2.5">
              <div></div>
              <div>Average</div>
              <div>Median</div>
              <div>Min</div>
            </div>
            <div>
              <div className="w-full grid grid-cols-4 items-center justify-center text-center pt-2 pb-2 border-b border-gray-400 py-2.5">
                <div className="text-sm">Inventory Turns</div>
                <div>{Math.round(invTurnTotal / 5)}</div>
                <div>{medianTurnValues}</div>
                <div>{sortedInvTurnValues[0]}</div>
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

export default MetriceComponent;

{
  /* <div className="w-full text-md font-bold flex items-center justify-around bg-blue-green text-gray-50">
            <p className="w-20">Inv. Holding Case</p>
            <div className="border-r border-l px-2 py-1 w-20 text-center">
              <p className="border-b border-gray-400">Total</p>
              <h6 className="text-lg text-gray-800 font-bold">{invHoldingCostTotal}</h6>
            </div>
            <div className="border-r px-2 py-1 w-20 text- border-rcenter">
              <p className="border-b border-gray-400 pb-0.5">Average</p>
              <h6 className="text-lg text-gray-800 font-bold">{Math.round(invHoldingCostTotal / 5)}</h6>
            </div>
            <div className=" px-2 py-1  w-20 text-center border-r">
              <p className="border-b border-gray-400 pb-0.5">Median</p>
              <h6 className="text-lg text-gray-800 font-bold">{medianHoldingValue}</h6>
            </div>
          </div> */
}

{
  /* <table className="w-full">
          <thead>
            <tr>
              <td></td>
              <th>Total</th>
              <th>Average</th>
              <th>Median</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>Inv. Holding Case</td>
              <td>{invHoldingCostTotal}</td>
              <td>{Math.round(invHoldingCostTotal / 5)}</td>
              <td>{medianHoldingValue}</td>
            </tr>
            <tr>
              <td>Stock out </td>
              <td>{invHoldingCostTotal}</td>
              <td>{Math.round(invHoldingCostTotal / 5)}</td>
              <td>{medianHoldingValue}</td>
            </tr>
            <tr>
              <td>Inventory Turns</td>
              <td>{invHoldingCostTotal}</td>
              <td>{Math.round(invHoldingCostTotal / 5)}</td>
              <td>{medianHoldingValue}</td>
            </tr>
          </tbody>
        </table> */
}
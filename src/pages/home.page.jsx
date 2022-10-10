import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import InputMetrics from "../components/homePageComponents/inputMetric.components";
import BarChartComponent from "../components/homePageComponents/barChart.component";
import MapChart from "../components/homePageComponents/mapChart";
import MetriceComponent from "../components/homePageComponents/metrices.component";
import EmptyMetriceComponent from "../components/homePageComponents/emptyMetrice.component";

//Warehouse Data
import data from "../components/homePageComponents/warehouse.json";
import wh7 from "../components/homePageComponents/wh7.json";
import { ALL_STATE_NAMES } from "../components/constants/state_names";

const HomePage = () => {
  var { id } = useParams();
  const [weeks, setWeeks] = useState(14);
  const [slaIndex, setSlaIndex] = useState(-1);
  const [whData, setWhData] = useState([]);
  const [slaMapColor, setSlaMapColor] = useState("red");

  function handleWeeks(value) {
    setWeeks(value);
  }
  function handleSlaIndex(e) {
    setSlaIndex(e.target.value);
  }
  var mapData = "";
  var stateName = "";
  if (id) {
    if (id > 0 && id < 16) {
      mapData = [data[id - 1]];
      stateName = ALL_STATE_NAMES[id - 1].name;
    }
  }
  var BarGraphData = [];
  let BarGraphData1 = [];

  if (id > 0 && id < 16) {
    for (var i = 0; i < weeks; i++) {
      BarGraphData.push(mapData[0][i]);
    }
  }

  function changeBarData(ind) {
    setWhData(wh7[ind]);
    // if (parseInt(slaIndex) === 0) {
    //   setSlaMapColor("red");
    //   alert("red");
    // } else

    // else setSlaMapColor("yellow");
    // for (var i = 0; i < weeks; i++) {
    //   BarGraphData1.push(wh7[ind][i]);
    // }
  }
  useEffect(() => {
    if (id > 0 && id < 16) {
      if (parseInt(id) === 7 && parseFloat(slaIndex) === 0.4) {
        changeBarData(0);
      } else if (parseInt(id) === 7 && parseFloat(slaIndex) === 1) {
        changeBarData(1);
      } else {
        setWhData();
        for (var k = 0; k < weeks; k++) {
          BarGraphData.push(mapData[0][k]);
        }
      }
    }

    if (slaIndex === "0.4") {
      setSlaMapColor("#ffff99");
    } else if (parseFloat(slaIndex) === 1) setSlaMapColor("#00ff00");
    else if (slaIndex === "0") {
      setSlaMapColor("red");
    } else {
      setSlaMapColor("red");
      // setSlaMapColor("red");
    }
  }, [slaIndex]);

  return (
    <>
      <div
        className="w-full h-full "
        style={{
          background: "rgb(164,198,215)",
          background:
            "linear-gradient(60deg, rgba(164,198,215,1) 0%, rgba(237,243,246,1) 52%, rgba(164,198,215,1) 100%)",
        }}
      >
        <div className="flex flex-col items-center justify-center px-3 md:px-10">
          <div className="w-full h-auto flex flex-col-reverse lg:flex-row items-start justify-around gap-3 py-5">
            <div className="w-full lg:w-10/12 h-auto flex flex-col items-center justify-center gap-4">
              <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gray-100 border border-gray-100 rounded-xl shadow-sm p-4">
                <h4 className="text-center text-md md:text-xl font-bold">
                  Inventory Placement What-If Simulation: Channel Mode
                </h4>
                <div className="flex h-max flex-col lg:flex-row items-start justify-around gap-2">
                  {id && id >= 1 && id <= 15 ? (
                    <MetriceComponent slaIndex={slaIndex} />
                  ) : (
                    <EmptyMetriceComponent />
                  )}
                  <MapChart slaMapColor={slaMapColor} />
                </div>
              </div>
              <div className="w-full pb-2 shadow-sm flex flex-col items-center justify-center bg-gray-100 border border-gray-100 rounded-md z-0">
                <h4 className="text-center text-xl font-bold pt-4 pb-5">
                  Inventory Level of each SKU (for region {stateName} &
                  Warehouse -{id})
                </h4>
                <BarChartComponent data={BarGraphData} BarGraphData1={whData} />
              </div>
            </div>
            <div className="lg:w-4/12">
              <InputMetrics
                handleWeeks={handleWeeks}
                handleSlaIndex={handleSlaIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

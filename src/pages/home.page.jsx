import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import CostComponents from "../components/homePageComponents/cost.Components";
import SettingsComponent from "../components/homePageComponents/settings.components";
import TableComponent from "../components/homePageComponents/table.component";
import BarChartComponent from "../components/homePageComponents/barChart.component";
import MapChart from "../components/homePageComponents/mapChart";
import OptionsComponent from "../components/homePageComponents/options.components";
import MetriceComponent from "../components/homePageComponents/metrices.component";
import EmptyMetriceComponent from "../components/homePageComponents/emptyMetrice.component";
//Walmart Data
import data from "../components/homePageComponents/warehouse.json";
import { ALL_STATE_CODES } from "../components/constants/STATES";
import { ALL_STATE_NAMES } from "../components/constants/state_names";

const HomePage = () => {
  var { id } = useParams();
  
  var mapData = "";
  var stateName = "";
  // if (id !== "-1") {
  //   if (id === 1) {
  //     mapData = [data[id]];
  //   } else {
  //     mapData = [data[id - 1]];
  //   }
  //   stateName = ALL_STATE_NAMES[id]["name"];
  // }
  if (id) {
    if (id > 0) {
      mapData = [data[id]];
      stateName = ALL_STATE_NAMES[id].name;
      console.log(stateName);
    } else {
      id = 1;
    }
  }
  console.log(id);
  // useEffect(() => {
  //   window.scroll({
  //     top: 650,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, [id]);
  console.log(id);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-10 px-10">
        <div>
          <h4 className="text-center text-2xl font-bold">
            Inventory Placement What-If Simulation: Channel Mode
          </h4>
          <div className="w-full flex items-start justify-around py-5 bg-white border border-gray-100 rounded-md shadow-xl">
            <SettingsComponent />
            {id && id >= 1 && id <= 15 ? (
              <MetriceComponent data={id} />
            ) : (
              <EmptyMetriceComponent />
            )}
            <MapChart />
          </div>
        </div>
        <div>
          <h4 className="text-center text-2xl font-bold">
            Inventory Level of each SKU (for region {stateName} & Warehouse -
            {id})
          </h4>
          <BarChartComponent data={mapData} />
        </div>
      </div>
    </>
  );
};

export default HomePage;




// <div className="pb-44 px-10 ">
//         <div className="w-full h-auto flex items-start justify-center gap-3 mb-20">
//           <div className="w-1/2 flex flex-col items-center justify-center gap-2">
//             {/* <OptionsComponent /> */}
//             <SettingsComponent />
//             {/* <CostComponents /> */}
//           </div>
//           <div className="w-1/2">
//             <MapChart />
//           </div>
//         </div>
//         <div className="w-full flex flex-col items-start justify-center gap-4">
//           <TopChart data={data} />
//           {/* <TableComponent data={data} /> */}
//         </div>
//       </div>


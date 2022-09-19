import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import CostComponents from "../components/homePageComponents/cost.Components";
import SettingsComponent from "../components/homePageComponents/settings.components";
import TableComponent from "../components/homePageComponents/table.component";
import TopChart from "../components/homePageComponents/barChart.component";
import MapChart from "../components/homePageComponents/mapChart";
import OptionsComponent from "../components/homePageComponents/options.components";
import MetriceComponent from "../components/homePageComponents/metrices.component";
//Walmart Data
import data from "../components/homePageComponents/warehouse.json";
import Metrice from "../components/homePageComponents/metrice";
const HomePage = () => {
  const { id } = useParams();
  const mapData = [data[id - 1]];
  // walmart.find((item) => {
  //   if (item.name === Number(id) && item.Holiday_Flag !== 0) {
  //     data.push(item);
  //     console.log(data);
  //   }
  // });

  // useEffect(() => {
  //   window.scroll({
  //     top: 650,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // }, [id]);
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-10 px-10">
        <div>
          <h4 className="text-center text-2xl font-bold">
            Inventory Placement What-If Simulation: Channel Mode
          </h4>
          <div className="w-full flex items-start justify-around py-5 bg-white border border-gray-100 rounded-md shadow-xl">
            <SettingsComponent />
            {id ? <MetriceComponent data={mapData} /> : <Metrice />}
            <MapChart data={id} />
          </div>
        </div>
        <div>
          <h4 className="text-center text-2xl font-bold">
            Inventory Levek of each SKU (for given WH)
          </h4>
          <TopChart data={mapData} />
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
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import CostComponents from "../components/homePageComponents/cost.Components";
import SettingsComponent from "../components/homePageComponents/settings.components";
import TableComponent from "../components/homePageComponents/table.component";
import TopChart from "../components/homePageComponents/barChart.component";
import MapChart from "../components/homePageComponents/mapChart";
import OptionsComponent from "../components/homePageComponents/options.components";
//Walmart Data
import walmart from "../components/homePageComponents/walmart.json";
const HomePage = () => {
  const { id } = useParams();
  const data = [];
  console.log(typeof id);
  walmart.find((item) => {
    if (item.name === Number(id) && item.Holiday_Flag !== 0) {
      data.push(item);
      console.log(data);
    }
  });
  useEffect(() => {
    window.scroll({
      top: 650,
      left: 0,
      behavior: "smooth",
    });
  }, [id]);
  return (
    <>
      <div className="pb-44 px-10 ">
        <div className="w-full h-auto flex items-start justify-center gap-3 mb-20">
          <div className="w-1/2 flex flex-col items-center justify-center gap-2">
            <OptionsComponent />
            <SettingsComponent />
            <CostComponents />
          </div>
          <div className="w-1/2">
            <MapChart />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-4">
          <TopChart data={data} />
          <TableComponent data={data} />
        </div>
      </div>
    </>
  );
};

export default HomePage;

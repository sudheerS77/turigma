import React from "react";
import { useNavigate } from "react-router-dom";
import USAMap from "react-usa-map";
import { ALL_STATE_CODES } from "../constants/STATES";

const StateMap = ({ statesColorConfig }) => {
  let navigate = useNavigate();
  const mapHandler = (event) => {
    // alert(event.target.dataset.name);
    // ALL_STATE_CODES.map((name, i) => {
    //   console.log(i);
    // });
    // const stateValue = ALL_STATE_CODES.find((name, i) => {
    //   if (name === event.target.dataset.name) {
    //     // console.log(i);
    //     return i;
    //   }
    // });
    const stateValue = ALL_STATE_CODES.indexOf(event.target.dataset.name);
    navigate(`/${stateValue}`);
  };
  
  return (
    <div className="w-full flex items-center justify-center">
      <USAMap
        customize={statesColorConfig}
        width={500}
        height={380}
        onClick={mapHandler}
      />
    </div>
  );
};

export default StateMap;

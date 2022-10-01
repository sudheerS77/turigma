import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import USAMap from "react-usa-map";
import { ALL_STATE_CODES } from "../constants/STATES";

const StateMap = ({ statesColorConfig }) => {
  let navigate = useNavigate();
  const [state, setState] = useState();
  const [color, setColor] = useState();
  const statesData = { ...statesColorConfig };
  var prevStateName = "";
  var prevStateColor = "";
  console.log({ state, color });
  var statesColorConfigs = Object.assign({}, statesColorConfig);
  const mapHandler = (event) => {
    console.log(prevStateName);
    setState(event.target.dataset.name);
    setColor(statesColorConfigs[event.target.dataset.name].fill);
    statesColorConfigs[state].fill = color;
    statesColorConfigs[`${event.target.dataset.name}`].fill = "Blue";

    console.log(statesColorConfig[`${event.target.dataset.name}`]);
    console.log(statesColorConfigs[`${event.target.dataset.name}`]);
    // prevStateName = event.target.dataset.name;
    // prevStateColor = statesColorConfig[`${event.target.dataset.name}`].fill;
    // console.log({ prevStateName, prevStateColor });

    const stateValue = ALL_STATE_CODES.indexOf(event.target.dataset.name) + 1;
    navigate(`/${stateValue}`);
  };
  console.log(statesColorConfigs);

  return (
    <>
      <div className="hidden lg:block w-full flex items-center justify-center">
        <USAMap
          customize={statesColorConfigs}
          width={450}
          height={350}
          onClick={mapHandler}
        />
      </div>
      <div className="lg:hidden w-full flex items-center justify-center">
        <USAMap
          customize={statesColorConfigs}
          width={300}
          height={200}
          onClick={mapHandler}
        />
      </div>
    </>
  );
};

export default StateMap;

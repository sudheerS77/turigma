import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import USAMap from "react-usa-map";
import { ALL_STATE_CODES } from "../constants/STATES";
import { GRAPH_COLORS } from "../constants/graph_color";

const StateMap = ({ statesColorConfig }) => {
  const { id } = useParams();
  let navigate = useNavigate();
  const [state, setState] = useState();
  const [color, setColor] = useState();
  const mapHandler = (name) => {
    if (state === name) {
    } else {
      if (state && color) {
        statesColorConfig[state].fill = color;
        console.log(statesColorConfig[state].fill, color);
      }
      setState(name);
      setColor(statesColorConfig[name].fill);
    }
    statesColorConfig[`${name}`].fill = "Blue";
    const stateValue = ALL_STATE_CODES.indexOf(name) + 1;
    navigate(`/${stateValue}`);
  };
  useEffect(() => {
    const RANDOM_COLOR_CONFIG = {};
    if (id > 0) {
      const stateName = ALL_STATE_CODES[id - 1];
      mapHandler(stateName);
    }
  }, [id]);

  console.log(statesColorConfig);

  return (
    <>
      <div className="hidden lg:block w-full flex items-center justify-center">
        <USAMap
          customize={statesColorConfig}
          width={450}
          height={350}
          onClick={(e) => {
            mapHandler(e.target.dataset.name);
          }}
        />
      </div>
      <div className="lg:hidden w-full flex items-center justify-center">
        <USAMap
          customize={statesColorConfig}
          width={300}
          height={200}
          onClick={(e) => {
            mapHandler(e.target.dataset.name);
          }}
        />
      </div>
    </>
  );
};

export default StateMap;

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
    const statecolors = [
      {
        MD: {
          fill: "blue",
        },
      },
      {
        GA: {
          fill: "blue",
        },
      },
      {
        NH: {
          fill: "red",
        },
      },
      {
        FL: {
          fill: "green",
        },
      },
      {
        ID: {
          fill: "green",
        },
      },
      {
        VA: {
          fill: "red",
        },
      },
      {
        NM: {
          fill: "red",
        },
      },
      {
        UT: {
          fill: "red",
        },
      },
      {
        AR: {
          fill: "green",
        },
      },
      {
        TX: {
          fill: "red",
        },
      },
      {
        WI: {
          fill: "green",
        },
      },
      {
        KY: {
          fill: "green",
        },
      },
      {
        CA: {
          fill: "blue",
        },
      },
      {
        IL: {
          fill: "red",
        },
      },
      {
        NV: {
          fill: "red",
        },
      },
      {
        KS: {
          fill: "blue",
        },
      },
      {
        WA: {
          fill: "green",
        },
      },
      {
        TN: {
          fill: "green",
        },
      },
      {
        MA: {
          fill: "red",
        },
      },
      {
        PA: {
          fill: "red",
        },
      },
      {
        IA: {
          fill: "red",
        },
      },
      {
        NJ: {
          fill: "blue",
        },
      },
      {
        NY: {
          fill: "green",
        },
      },
      {
        LA: {
          fill: "red",
        },
      },
      {
        IN: {
          fill: "blue",
        },
      },
      {
        MN: {
          fill: "red",
        },
      },
      {
        OH: {
          fill: "red",
        },
      },
      {
        MO: {
          fill: "green",
        },
      },
      {
        OK: {
          fill: "red",
        },
      },
      {
        WV: {
          fill: "blue",
        },
      },
      {
        OR: {
          fill: "green",
        },
      },
      {
        AZ: {
          fill: "green",
        },
      },
      {
        MT: {
          fill: "red",
        },
      },
      {
        CO: {
          fill: "green",
        },
      },
      {
        CT: {
          fill: "red",
        },
      },
      {
        DE: {
          fill: "green",
        },
      },
      {
        MS: {
          fill: "red",
        },
      },
      {
        ME: {
          fill: "blue",
        },
      },
      {
        MI: {
          fill: "blue",
        },
      },
      {
        SC: {
          fill: "green",
        },
      },
      {
        NC: {
          fill: "green",
        },
      },
      {
        NE: {
          fill: "blue",
        },
      },
      {
        RI: {
          fill: "green",
        },
      },
      {
        HI: {
          fill: "red",
        },
      },
      {
        AL: {
          fill: "red",
        },
      },
    ];
    

    console.log(event.target.dataset.name);
    const stateValue = ALL_STATE_CODES.indexOf(event.target.dataset.name) + 1;
    console.log("stateValue", stateValue);
    navigate(`/${stateValue}`);
  };
  
  return (
    <div className="w-full flex items-center justify-center">
      <USAMap
        customize={statesColorConfig}
        width={500}
        height={370}
        onClick={mapHandler}
      />
    </div>
  );
};

export default StateMap;

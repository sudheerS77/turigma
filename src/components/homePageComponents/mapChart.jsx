import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";


import StatesMap from "../homePageComponents/stateMap";

import { GRAPH_COLORS } from "../constants/graph_color";
import { ALL_STATE_CODES } from "../constants/STATES";
import { useParams } from "react-router-dom";
import { GRAPH_DATA } from "../constants/GRAPH_DATA";

// const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize().domain([1, 10]).range([
  "#0000FF",
  // "#0047ab",
  // "#003366",
  // "#2a52be",
  // "#0073cf",
  // "#00008b",
  // "#120a8f",
  // "#0f52ba",
  // "#4d4dff",
]);

const MapChart = ({ slaMapColor }) => {
  const { id } = useParams();
  const [statesColorConfig, setStatesColorConfig] = useState({
    MD: {
      fill: "yellow",
    },
    GA: {
      fill: "green",
    },
    NH: {
      fill: "red",
    },
    FL: {
      fill: "yellow",
    },
    ID: {
      fill: "green",
    },
    VA: {
      fill: "red",
    },
    NM: {
      fill: "red",
    },
    UT: {
      fill: "yellow",
    },
    AR: {
      fill: "red",
    },
    TX: {
      fill: "yellow",
    },
    WI: {
      fill: "yellow",
    },
    KY: {
      fill: "red",
    },
    CA: {
      fill: "yellow",
    },
    IL: {
      fill: "green",
    },
    NV: {
      fill: "red",
    },
    KS: {
      fill: "yellow",
    },
    WA: {
      fill: "yellow",
    },
    TN: {
      fill: "red",
    },
    MA: {
      fill: "yellow",
    },
    PA: {
      fill: "green",
    },
    IA: {
      fill: "red",
    },
    NJ: {
      fill: "yellow",
    },
    NY: {
      fill: "red",
    },
    LA: {
      fill: "green",
    },
    IN: {
      fill: "yellow",
    },
    MN: {
      fill: "green",
    },
    OH: {
      fill: "red",
    },
    MO: {
      fill: "yellow",
    },
    OK: {
      fill: "green",
    },
    WV: {
      fill: "green",
    },
    OR: {
      fill: "red",
    },
    AZ: {
      fill: "green",
    },
    MT: {
      fill: "red",
    },
    CO: {
      fill: "green",
    },
    CT: {
      fill: "green",
    },
    DE: {
      fill: "red",
    },
    MS: {
      fill: "yellow",
    },
    ME: {
      fill: "green",
    },
    MI: {
      fill: "red",
    },
    SC: {
      fill: "yellow",
    },
    NC: {
      fill: "green",
    },
    NE: {
      fill: "red",
    },
    RI: {
      fill: "yellow",
    },
    HI: {
      fill: "green",
    },
    AL: {
      fill: "red",
    },
  });

  // const [statesColorConfig, setStatesColorConfig] = useState({});
  const [graphData, setGraphData] = useState(GRAPH_DATA);

  // useEffect(() => {
  //   const RANDOM_COLOR_CONFIG = {};
  //   if (id !== -1) {
  //     const stateName = ALL_STATE_CODES[id - 1];
  //     const randomColorIndex = Math.floor(Math.random() * 5);
  //     RANDOM_COLOR_CONFIG[stateName] = {
  //       fill: GRAPH_COLORS[randomColorIndex],
  //     };
  //   }

  //   setStatesColorConfig(RANDOM_COLOR_CONFIG);
  // }, [id]);

  const randomizeData = () => {
    // Randomize colors
    const RANDOM_COLOR_CONFIG = {};

    ALL_STATE_CODES.forEach((state) => {
      const randomColorIndex = Math.floor(Math.random() * 5);

      RANDOM_COLOR_CONFIG[state] = {
        fill: GRAPH_COLORS[randomColorIndex],
      };
    });

    setStatesColorConfig(RANDOM_COLOR_CONFIG);

    // Randomize graph
    const currentGraphData = [...graphData];

    const newGraphData = currentGraphData.map((metric) => {
      const randomMetric = {};
      Object.keys(metric).forEach((property) => {
        if (property !== "name") {
          randomMetric[property] = Math.floor(Math.random() * 10000);
        }
      });
      randomMetric.name = metric.name;

      return randomMetric;
    });

    setGraphData(newGraphData);
  };
  statesColorConfig["NM"].fill = slaMapColor;
  console.log(statesColorConfig["NM"].fill);
  return (
    <>
      <div className="w-full lg:w-1/2 border-2 border-gray-300 shadow-md rounded-md flex items-center justify-center">
        <div style={{ flex: 0.4 }}>
          <StatesMap {...{ statesColorConfig, slaMapColor }} />
        </div>
      </div>
    </>
  );
};

export default MapChart;
{
  /* <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const cur = data.find((s) => s.id === geo.id);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(cur ? cur.unemployment_rate : "#EEE")}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap> */
}
{
  /* <div style={{ flex: 0.6, textAlign: "center" }}>
            <button onClick={randomizeData}>Go Crazy!</button>
          </div> */
}
          
// import React from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   Graticule,
//   Line,
//   Sphere,
// } from "react-simple-maps";
// import { PatternLines } from "@vx/pattern";

// const geoUrl = "./features.json";

// // https://www.worldatlas.com/articles/top-coffee-producing-countries.html
// const highlighted = [
//   "BRA",
//   "VNM",
//   "COL",
//   "IDN",
//   "ETH",
//   "HND",
//   "IND",
//   "UGA",
//   "MEX",
//   "GTM",
//   "PER",
//   "NIC",
//   "CHN",
//   "CIV",
//   "CRI",
//   "KEN",
//   "PNG",
//   "TZA",
//   "SLV",
//   "ECU",
//   "CMR",
//   "LAO",
//   "MDG",
//   "GAB",
//   "THA",
//   "VEN",
//   "DOM",
//   "HTI",
//   "COD",
//   "RWA",
//   "BDI",
//   "PHL",
//   "TGO",
//   "GIN",
//   "YEM",
//   "CUB",
//   "PAN",
//   "BOL",
//   "TLS",
//   "CAF",
//   "NGA",
//   "GHA",
//   "SLE",
//   "AGO",
//   "JAM",
//   "PRY",
//   "MWI",
//   "TTO",
//   "ZWE",
//   "LBR",
// ];

// function generateCircle(deg) {
//   if (!deg)
//     return [
//       [-180, 0],
//       [-90, 0],
//       [0, 0],
//       [90, 0],
//       [180, 0],
//     ];
//   return new Array(361).fill(1).map((d, i) => {
//     return [-180 + i, deg];
//   });
// }

// const MapChart = () => {
//   return (
//     <ComposableMap projection="geoEqualEarth">
//       <PatternLines
//         id="lines"
//         height={6}
//         width={6}
//         stroke="#776865"
//         strokeWidth={1}
//         background="#F6F0E9"
//         orientation={["diagonal"]}
//       />
//       <Sphere stroke="#DDD" />
//       <Graticule stroke="#DDD" />
//       <Geographies geography={geoUrl} stroke="#FFF" strokeWidth={0.5}>
//         {({ geographies }) =>
//           geographies.map((geo) => {
//             const isHighlighted = highlighted.indexOf(geo.id) !== -1;
//             return (
//               <Geography
//                 key={geo.rsmKey}
//                 geography={geo}
//                 fill={isHighlighted ? "url('#lines')" : "#F6F0E9"}
//                 onClick={() => console.log(geo.properties.name)}
//               />
//             );
//           })
//         }
//       </Geographies>
//       <Line coordinates={generateCircle(0)} stroke="#F53" strokeWidth={2} />
//       <Line
//         coordinates={generateCircle(23)}
//         stroke="#776865"
//         strokeWidth={1}
//         strokeDasharray={[5, 5]}
//       />
//       <Line
//         coordinates={generateCircle(-24)}
//         stroke="#776865"
//         strokeWidth={1}
//         strokeDasharray={[5, 5]}
//       />
//     </ComposableMap>
//   );
// };

// export default MapChart;


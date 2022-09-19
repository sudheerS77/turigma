import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json";

const colorScale = scaleQuantize()
  .domain([1, 10])
  .range([
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

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // https://www.bls.gov/lau/
    csv(geoUrl).then(
      (counties) => {
        setData(counties);
        console.log(counties);
      }
    );
  }, []);

  return (
    <>
      <div className="w-4/12 bg-gray-50 border border-gray-100 shadow-md rounded-md">
        <ComposableMap projection="geoAlbersUsa">
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
        </ComposableMap>
      </div>
    </>
  );
};

export default MapChart;

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

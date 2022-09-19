import React from "react";
import USAMap from "react-usa-map";

const StateMap = ({ statesColorConfig }) => {
  return <USAMap customize={statesColorConfig} width={500} height={380} />;
};

export default StateMap;

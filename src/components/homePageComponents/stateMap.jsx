import React from "react";
import USAMap from "react-usa-map";

const StateMap = ({ statesColorConfig }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <USAMap customize={statesColorConfig} width={500} height={380} />
    </div>
  );
};

export default StateMap;

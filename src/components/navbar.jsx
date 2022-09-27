import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full px-10 py-3 shadow-md fixed z-50 bg-gray-50 border-b border-gray-100 flex items-center">
        <div className="w-20 h-20">
          <img
            src="https://turigma.ai/wp-content/uploads/2022/01/new-logo1.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="w-full text-center text-green-600 font-bold">
          <h4>Turigma Ai Sales Prediction Model</h4>
        </div>
      </div>
    </>
  );
};
export default Navbar;

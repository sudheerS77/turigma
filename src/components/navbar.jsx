import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full px-10 py-1 shadow-md fixed z-50 bg-dark-blue border-b border-gray-100 flex items-center">
        {/* <div className="w-20 h-20 p-2">
          <img
            src="https://turigma.ai/wp-content/uploads/2022/01/new-logo1.png"
            alt=""
            className="w-full h-full"
          />
        </div> */}
        <div className="w-full text-center text-gray-50  text-md font-semibold md:font-bold">
          <h4>Turigma AI Supply Chain Optimization</h4>
        </div>
      </div>
    </>
  );
};
export default Navbar;

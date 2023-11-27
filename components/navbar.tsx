import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <span className=" text-yellow-300 text-4xl m-2 pt-1 font-bold ">
          Cretoo
        </span>
        <span className="text-white items-center flex font-light pr-2 opacity-70  text-3xl">|</span>
        <div>
          <div className="flex pl-4 pt-3">
            <span className="text-white">Image Creator</span>
          </div>
          <div>
            <span className="text-white">Supported by DALL.E-3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

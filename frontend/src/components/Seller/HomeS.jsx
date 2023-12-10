import React from "react";
import { NavBarS } from "./NavBarS";
import { Link } from "react-router-dom";

export const HomeS = () => {
  return (
    <>
      <NavBarS />
      <div className="text-[50px] text-center m-8 shadow-md rounded-xl bg-gray-100 p-6 ">
        <Link to="/seller/manageproducts/addproducts">
          <div className="rounded-full inline-block pr-5 pl-5 bg-gray-300 font-bold">
            +
          </div>
        </Link>
        <div>Add Products</div>
      </div>
    </>
  );
};

import React from "react";
import { Link } from "react-router-dom";

export const ManageProd = () => {
  return (
    <>
      <div className="grid grid-flow-col p-4 text-center font-russo text-lg">
        <div>
          <Link to="/seller/manageproducts/addproducts">
            <button className="bg-blue-400 p-2 rounded-xl hover:shadow-lg w-[80%] ">
              Add Products
            </button>
          </Link>
        </div>
        <div>
          <Link>
            <button className="bg-red-400 p-2 rounded-xl hover:shadow-lg w-[80%] ">
              Remove Products
            </button>
          </Link>
        </div>
      </div>
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

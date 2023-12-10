import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const NavBarS = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-3 shadow-md">
        <Link to="#" >
          <img
            className="w-[100px] sm:w-[130px] "
            src="\images\GearUp-removebg-preview-1.png"
            alt=""
            srcset=""
          />
        </Link>
        <Box className="grid grid-cols-2 gap-3 justify-items-center justify-self-end font-russo text-center">
            <Link to="/seller/manageproducts"><button className="bg-blue-400 p-2 rounded-xl hover:shadow-lg">Manage Products</button></Link>
            {/* <button>Remove Products</button> */}
            <Link><button className="bg-green-400 p-2 rounded-xl hover:shadow-lg" >Manage Orders</button></Link>
        </Box>
      </div>
    </>
  );
};

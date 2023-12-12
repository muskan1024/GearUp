import { FavoriteBorder, ShoppingCartOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/v1/seller/products/category")
      .then((response) => {
        setCategories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="text-center grid grid-cols-2 sm:grid-cols-4 p-3 shadow-md gap-2">
        <Link to="#">
          <img
            className="w-[100px] sm:w-[130px] "
            src="\images\GearUp-removebg-preview-1.png"
            alt=""
            srcset=""
          />
        </Link>
        <Box className="sm:hidden grid grid-cols-2 gap-4 justify-items-center justify-self-end font-russo text-sm text-center">
          <Box>
            <ShoppingCartOutlined
              className="hover:text-[#F50500]"
              sx={{ fontSize: "30px" }}
            />
          </Box>
          <Box>
            <FavoriteBorder
              className="hover:text-[#F50500]"
              sx={{ fontSize: "30px" }}
            />
          </Box>
        </Box>
        <div className="flex w-full h-10 bg-gray-100 rounded-full shadow-sm hover:shadow-md shadow-gray-300 col-span-2">
          <input
            type="text"
            placeholder="Search GearUp"
            className="enabled:outline-none ml-3 bg-transparent w-full"
            name=""
            id=""
          />
          <p className="bg-[#F50500] p-2 rounded-full text-2xl hover:bg-slate-900 text-white">
            <FiSearch />
          </p>
        </div>
        <Box className="hidden sm:grid grid-cols-2 gap-8 justify-items-center justify-self-end font-russo text-md text-center">
          <Box>
            <ShoppingCartOutlined
              className="hover:text-[#F50500]"
              sx={{ fontSize: "35px" }}
            />
            {/* <h5>Cart</h5> */}
          </Box>
          <Box>
            <FavoriteBorder
              className="hover:text-[#F50500]"
              sx={{ fontSize: "35px" }}
            />
            {/* <h5>Like</h5> */}
          </Box>
        </Box>
      </div>
      <div className=" grid-flow-col xl:text-xl lg:text-md lg:grid justify-around p-2 font-russo bg-gray-200 hidden  xl:grid">
        <Link to="/home/allproducts">
          <h1 className="hover:text-[#F50500] hover:underline">All Products</h1>
        </Link>
        {categories.map((category) => (
          <Link to={`/products/categories/${category._id}`}>
            <div
              key={category._id}
              className="hover:text-[#F50500] hover:underline"
            >
              {category.categoryName}
            </div>
          </Link>
        ))}

        {/* <Link to={`/products/categories/${category}`}>
          {category.categoryName}
        </Link> */}

        {/* <Link >
          <h1 className="hover:text-[#F50500] hover:underline">Body Parts</h1>
        </Link>
        <Link >
          <h1 className="hover:text-[#F50500] hover:underline">
            Oils & Fluids
          </h1>
        </Link>
        <Link >
          <h1 className="hover:text-[#F50500] hover:underline">
            Wheels & Tiers
          </h1> */}
        {/* </Link> */}
        {/* <Link>
          <h1 className="hover:text-[#F50500] hover:underline">Lighting</h1>
        </Link>
        <Link>
          <h1 className="hover:text-[#F50500] hover:underline">Electronics</h1>
        </Link>
        <Link>
          <h1 className="hover:text-[#F50500] hover:underline">Interior</h1>
        </Link>
        <Link>
          <h1 className="hover:text-[#F50500] hover:underline">Exterior</h1>
        </Link>
        <Link>
          <h1 className="hover:text-[#F50500] hover:underline">
            Tools & Garage
          </h1>
        </Link> */}
      </div>
    </>
  );
}

export default NavBar;

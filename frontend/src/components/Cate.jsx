import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cate() {
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
      <h1 className="text-2xl text-center font-russo mt-10 mb-5 lg:mb-16 ">
        Shop By Categories
      </h1>
      <div className="grid gap-7 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-[2%] text-right text-lg justify-around xl:ml-[15%] xl:mr-[15%] font-rubik">
        {categories.map((category) => (
          <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
            <Link to={`/products/categories/${category._id}`}>
              <img src={category.categoryImage} alt="" srcset="" />
              <h1 className="absolute bg-[#F50500] hidden sm:block text-white top-12 right-0 p-2">
                {category.categoryName}
              </h1>
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\repair-part.png" alt="" srcset="" />
          <h1 className="absolute bg-[#F50500] hidden sm:block text-white top-12 right-0 p-2">
            Spare Parts
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\body-part.png" alt="" srcset="" />
          <h1 className="absolute bg-[#F50500] hidden sm:block text-white top-12 right-0 p-2">
            Body Parts
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\oil&fluids.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] hidden sm:block text-white top-12 right-0 p-2">
            Oil & Fluids
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\lighting.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] hidden sm:block text-white top-12 right-0 p-2">
            Lighting
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\electronics.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] hidden sm:block text-white top-12 right-0 p-2">
            Electronics
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\interior.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] hidden sm:block text-white top-12 right-0 p-2">
            Interior
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\exterior.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] hidden sm:block text-white top-12 right-0 p-2">
            Exterior
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
          <img src="images\cate_images\tools&garage.png" alt="" srcset="" />
          <h1 className="absolute bg-[#f50500] hidden sm:block text-white  top-12 right-0 p-2">
            Tools & Garage
          </h1>
        </div> */}
      {/* </div> */}
    </>
  );
}

export default Cate;

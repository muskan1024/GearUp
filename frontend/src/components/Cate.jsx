import React from "react";

function Cate() {
  return (
    <>
      <h1 className="text-2xl text-center font-russo mt-10 mb-5 lg:mb-16 ">
        Shop By Categories
      </h1>
      <div className="grid gap-7 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-[2%] text-right text-lg justify-around xl:ml-[15%] xl:mr-[15%] font-rubik">
        <div className="relative md:row-span-2 md:col-span-2 shadow-md hover:shadow-md hover:shadow-gray-400">
          <img
            className="md:w-[440px] w-[240px] "
            src="images\cate_images\tiers.png"
            alt=""
            srcset=""
          />
          <h1 className="bg-[#F50500] hidden sm:block text-white top-12 absolute right-0 p-2 ">
            Wheels & Tiers
          </h1>
        </div>
        <div className="relative shadow-md hover:shadow-md hover:shadow-gray-400">
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
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Cate;

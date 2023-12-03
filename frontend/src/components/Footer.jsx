import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 font-rubik grid grid-cols-2 md:grid-cols-4 gap-5 text-xs md:text-base ">
      <div>
        <img
          src="images\GearUp-removebg-preview-1.png"
          width="150px"
          alt="GearUp Logo"
          srcset=""
        />
        <p className="font-russo">Driven by Quality, Powered by Service</p>
        <p className="hover:text-[#F50500]">gearup@gmail.com</p>
        <p className="hover:text-[#F50500]">+91 987654321</p>
        <p className="hover:text-[#F50500]">GearUp_23</p>
      </div>
      <div className="hidden sm:block">
        <p className="font-russo">Catalog</p>
        <div className="grid grid-cols-2 ">
          <p className="hover:text-[#F50500]">Wheels & Tiers</p>
          <p className="hover:text-[#F50500]">Spare Parts</p>
          <p className="hover:text-[#F50500]">Body Parts</p>
          <p className="hover:text-[#F50500]">Oil & Fluids</p>
          <p className="hover:text-[#F50500]">Lighting</p>
          <p className="hover:text-[#F50500]">Electronics</p>
          <p className="hover:text-[#F50500]">Interior</p>
          <p className="hover:text-[#F50500]">Exterior</p>
          <p className="hover:text-[#F50500]">Tools & Garages</p>
        </div>
      </div>
      <div className="grid gap-3">
        <div>
          <p className="font-russo">For Seller's</p>
          <p>
            Already a Seller?{" "}
            <Link
              to="/seller/login"
              className="hover:text-[#F50500] underline "
            >
              {" "}
              Login
            </Link>
          </p>
          <p>
            Become a Seller?{" "}
            <Link
              to="/seller/signup"
              className="hover:text-[#F50500] underline"
            >
              Register
            </Link>{" "}
          </p>
        </div>
        <div>
          <p className="font-russo">For User's</p>
          <p>
            Already a User?{" "}
            <Link to="/" className="hover:text-[#F50500] underline ">
              {" "}
              Login
            </Link>
          </p>
          <p>
            New User?{" "}
            <Link to="/signup" className="hover:text-[#F50500] underline">
              SignUp
            </Link>{" "}
          </p>
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <div className="font-russo">
          <p>Designed & Developed By: </p>
          <p className="text-[#F50500] text-center">Muskan, Azim, Rohit</p>
        </div>
        <div>
          <p className="font-russo">About</p>
          <div className="inline-block pl-8">
            <p className="hover:text-[#F50500]">Seller's</p>
            <p className="hover:text-[#F50500]">Reviews</p>
            <p className="hover:text-[#F50500]">GearUp</p>
          </div>
        </div>
      </div>
    </div>
  );
};

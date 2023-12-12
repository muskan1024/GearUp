import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignupS() {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      fullName: data.get("fullName"),
      shopName: data.get("shopName"),
      contactNumber: data.get("contactNumber"),
      alternateNumber: data.get("alternateNumber"),
      email: data.get("email"),
      address: data.get("address"),
      password: data.get("password"),
      role: 'admin'
    };

    try {
      const response = await axios.post(
        "http://localhost:3002/api/v1/sellers/signup",
        userData
      );

      if (response.status === 200) {
        history("/seller/login");
        console.log("Registration successful");
      } else {
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("An error occurred while registering:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("Registration failed. Email or Password is incorrect!");
      }
    }
  };
  return (
    <form onSubmit={handleSignup} noValidate className="w-full h-screen flex item-start">
      <div className="w-full h-full bg-white flex flex-col p-5 sm:p-12 justify-between items-center">
        <img
          src="/images/GearUp-gif.gif"
          height={"170px"}
          width={"200px"}
          className="-mt-12"
        />

        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2 font-russo">
            <h3 className="text-3xl mb-2">Sign Up</h3>
            <p className="text-base mb-6">
              Please enter your details to become a seller on GearUp!
            </p>
          </div>

          <div className="grid grid-flow-cols grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col ">
              <label className="font-russo">Full name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Enter your First name"
                className="  py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-russo">Shop Name</label>
              <input
                type="text"
                name="shopName"
                placeholder="Enter your Last name"
                className="py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-russo">Phone number</label>
              <input
                type="number"
                name="contactNumber"
                placeholder="Enter your Phone number"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-russo">Alternate Phone number</label>
              <input
                type="number"
                name="alternateNumber"
                placeholder="Enter your Phone number"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-russo">Email-Id</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email-ID"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-russo">Shop Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter you Shop Address"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-russo">Password</label>
              <input
                type="Password"
                placeholder="Enter your Password"
                name="password"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-russo">Confirm password</label>
              <input
                type="Password"
                placeholder="Confirm your Password"
                name="password"
                className=" text-black py-3 bg-transparent border-b border-black outline-none focus:outline-none"
              />
            </div>
          </div>
          <span id="signup_failed" className="text-red-700 font-bold">{errorMessage} </span>
          <div className="flex justify-center font-russo">
            <button className="w-[50%] text-white my-3 mt-5 bg-[#F50500] rounded-md p-3 text-center flex items-center justify-center cursor-pointer text-lg">
              Sign Up
            </button>
          </div>
          <div className="w-full flex items-center justify-center font-russo">
          <p className="text-sm font-normal text-black">
            Already a Seller on GearUp?
            <Link to="/seller/login" className="font-semibold underline underline-offset-2 cursor-pointer">
              Login
            </Link>
          </p>
        </div>
        </div>
      </div>
    </form>
  );
}
import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  const handleSignup = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userData = {
      fullName: data.get("fullName"),
      userName: data.get("userName"),
      email: data.get("email"),
      password: data.get("password"),
      contactNumber: data.get("contactNumber"),
    };

    try {
      const response = await axios.post(
        "http://localhost:3002/api/v1/users",
        userData
      );

      if (response.status === 200) {
        history("/");
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
    <form
      onSubmit={handleSignup}
      noValidate
      className="w-full h-screen flex item-start"
    >
      <div className="relative w-1/2 h-full flex flex-col">
        <img
          src="images\Signup-bg.avif"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full bg-white flex flex-col p-16 justify-between items-center">
        <img
          src="images\GearUp-gif.gif"
          height={"170px"}
          width={"200px"}
          className="-mt-16"
        />

        <div className="w-full flex flex-col">
          <div className="w-full flex flex-col mb-2 font-russo">
            <h3 className="text-3xl mb-2">Sign Up</h3>
            <p className="text-base mb-6">
              Welcome to GearUp! Please Enter your Details to Register!
            </p>
          </div>

          <div className="grid grid-flow-cols grid-cols-2 gap-6">
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
              <label className="font-russo">User Name</label>
              <input
                type="text"
                name="userName"
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
              <label className="font-russo">Email-Id</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email-ID"
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
          <span id="signup_failed" className="text-red-700 font-bold">
            {errorMessage}{" "}
          </span>
          <div className="flex justify-center font-russo">
            <button className="w-[50%] text-white my-3 mt-5 bg-[#F50500] rounded-md p-3 text-center flex items-center justify-center cursor-pointer text-lg">
              Sign Up
            </button>
          </div>

          {/* <div className=" flex items-center justify-center relative py-2 font-russo">
            <div className="w-3/4 h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-white">or</p>
          </div>
          <div className="flex justify-center my-3 font-russo ">
            <div className="w-[50%] text-black border-2 border-black/40 rounded-md p-2 flex justify-center cursor-pointer items-center">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                className="h-9 mr-2"
              />
              Sign Up with Google
            </div>
          </div> */}
          <div className="w-full flex items-center justify-center font-russo">
            <p className="text-sm font-normal text-black">
              Already have a account?
              <Link
                to="/"
                className="font-semibold underline underline-offset-2 cursor-pointer"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}

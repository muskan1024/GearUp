import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const history = useNavigate();
  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const response = await axios.post(
        "http://localhost:3002/api/v1/auth",
        formData
      );

      if (response.status === 200) {
        history("/home");
        console.log("Login successful");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occurred while logging in:", error);
      if (error.response && error.response.data) {
        // Use state to store the error message and display it in your component
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("Registration failed. Email or Password is incorrect!");
      }
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      noValidate
      className="w-full h-screen flex item-start "
    >
      <img
        src="images\login-bg.avif"
        className=" object-cover relative w-full lg:relative lg:w-1/2 h-full"
      />
      <div className="relative w-full lg:w-1/2 h-full bg-white flex flex-col p-4 lg:p-20 justify-between items-center">
        <img
          src="images\GearUp-gif.gif"
          height={"170px"}
          width={"200px"}
          className="lg:-mt-20"
        />

        <div className="w-full flex flex-col max-w-[600px]">
          <div className="w-full flex flex-col mb-2 font-russo">
            <h3 className="text-3xl mb-2">Login</h3>
            <p className="text-base mb-6">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <label className="font-russo">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="w-full text-black mb-6 mt-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <label className="font-russo">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="w-full text-black mb-4 mt-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />
          </div>

          <span id="login_failed" className="text-red-700 font-bold mb-2">{errorMessage}</span>
          {/* <div className="w-full flex items-centre justify-between font-russo">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me</p>
            </div>
            <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
              Forget Password ?
            </p>
          </div> */}

          <div className="w-full flex flex-col my-2 font-russo">
            <button className="w-full text-white my-2 bg-[#F50500] rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Log in
            </button>

            <Link to="/signup">
              <button className="w-full text-black my-2  bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>

          {/* <div className="w-full flex items-center justify-center relative py-2 font-russo">
            <div className="w-full h-[1px] bg-black"></div>
            <p className="text-lg absolute text-black/80 bg-white">or</p>
          </div>
          <div className="w-full text-black my-3 bg-white border-2 border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer font-russo">
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              className="h-6 mr-2"
            />
            Sign in with Google
          </div> */}
        </div>

        <div className="w-full flex items-center justify-center font-russo">
          <p className="text-sm font-normal text-black">
            Don't have account?
            <Link to="/signup" className="font-semibold underline underline-offset-2 cursor-pointer">
              {" "}
              Sign up for free.
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;

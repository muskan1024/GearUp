import React from "react";
import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";
import Cate from "./Cate";
import { Footer } from "./Footer";
import { ProductList } from "./Products/ProductList";
import { T4ProductList } from "./Products/T4ProductList";

function Home() {
  return (
    <>
      <NavBar />
      <div className="relative bg-gradient-to-b from-gray-900 from-40% to-transparent ">
        <img src="images\bg-img.jpg" alt="" className="opacity-20 w-screen" />
        <div className="absolute w-full top-0 text-3xl  sm:text-6xl lg:text-7xl xl:text-8xl font-russo text-white p-0 sm:p- grid grid-flow-cols grid-cols-2 gap-4 overflow-hidden">
          <div className="justify-self-stretch md:p-10 lg:p-16">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 250,
                strings: ["Driven by Quality, Powered by Service."],
              }}
              className="text-white"
            />
          </div>
          <div className="grid justify-items-center">
            <img
              src="images\car-gif.png"
              className="xl:w-[500px] "
              alt=""
              srcset=""
            />
            <img
              src="images\GearUp-gif.gif"
              className="w-[90px] -mt-5 sm:w-[150px] sm:-mt-7 md:w-[200px] md:-mt-10 lg:-mt-16 lg:w-[300px] xl:w-[400px] "
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <Cate />
      <div className="bg-gray-100 p-4 m-4 rounded-lg">
        <h1 className="font-russo text-xl text-center">
          Newly Added Products
        </h1>
        <T4ProductList/>
      </div>
      <Footer />
    </>
  );
}

export default Home;

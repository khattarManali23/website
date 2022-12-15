import { Poppins } from "@next/font/google";
import React from "react";

// Import Swiper styles
import "swiper/css";
import icon from "../assets/icon.png";
import data from "../data/technology";
const poppins = Poppins({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-poppins",
});

const Technology = () => {
  return (
    <div>
      <div
        class={
          `text-center p-8  flex flex-col justify-center items-center ` +
          `${poppins.variable} font-sans`
        }
      >
        <h5 class="font-normal text-md  uppercase">Technology</h5>
        <h1
          class="sm:text-5xl text-3xl mb-4 sm:w-4/6 w-full  font-bold text-center text-transparent bg-clip-text  sm:leading-[68px]  leading-[45.2px]
        bg-gradient-to-r from-[#FFB838] via-[#F34F8C] to-[#8236BA]"
        >
          Converting Dreams to Blueprints, Ideas to Innovation and Vison to
          Value.!
        </h1>
        <p class="sm:text-2xl text-md text-white sm:w-11/12 w-full font-normal leading-[35px]">
          Harness the power of technology to increase efficiency, augment
          delivery capacity, taper time-to-market, aid processes and enhance
          overall operations. Get precise solutions with the right tech stack
          and architecture that best aligns with your business goals.
        </p>
      </div>

      <div
        class={`w-full border border-red-600 flex flex-wrap justify-items-center  justify-center gap-y-14 gap-x-6 mt-10 mb-5  `}
      >
        {data.map((item, index) => {
          return (
            <div
              class="w-[20rem] h-[440px]  bg-[#121A21] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl p-4"
              key={index}
            >
              <a href="#">
                <img src={icon.src} alt="Product" class="h-12 w-12 my-6 " />
                <div class=" py-3 w-72">
                  <div className="">
                    <span class="text-white uppercase text-2xl">
                      {item.heading}
                    </span>
                    <p
                      class="text-md font-normal text-[#A3A3A3] leading-[32px]  block capitalize"
                      style={{
                        marginTop: "1.5rem",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;

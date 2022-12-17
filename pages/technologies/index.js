import { Poppins } from "@next/font/google";
import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiYoutube } from "react-icons/fi";
import Banner from "../../components/Banner";
import allClients from "../../data/allclients";

import data from "../../data/banner";
const poppins = Poppins({
  weight: ["500"],
  style: ["normal"],
  variable: "--font-poppins",
});

const technologies = () => {
  const banner = data.filter((item) => item.slug === "technologies");
  return (
    <div className={`${poppins.variable} font-sans `}>
      <Banner banner={banner} />
      <div className="w-full flex justify-center py-4 items-center flex-col  ">
        {allClients.map((item) => {
          return (
            <>
              <div class="text-center   p-8">
                <h1 class="text-5xl leading-[67.2px] text-center text-transparent bg-clip-text  sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] ">
                  {item.client}
                </h1>
              </div>
              <div className="flex w-5/6 justify-around items-center py-3 flex-wrap">
                {item.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image}
                    className={`w-2/12 ` + `h-1/12 m-4`}
                  />
                ))}
              </div>
            </>
          );
        })}
      </div>
      <div class="flex flex-col mx-auto max-w-[1500px]  h-auto my-4">
        <div
          class="flex items-center justify-evenly sm:justify-around flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-[
#121A21]"
        >
          <div class="text-gray-400">
            Copyright ©2022 | Designed by Manas Agrawal
          </div>
          <div>innodeed@gmail.com</div>

          <ul class="flex gap-[15px] text-gray-400 cursor-pointer">
            <li class="ease-in duration-200 hover:text-gray-100 border rounded-full p-4">
              <AiOutlineTwitter
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                }}
              />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100 border rounded-full p-4">
              <FaFacebookF
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                }}
              />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100 border rounded-full p-4">
              <FiInstagram
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                }}
              />
            </li>
            <li class="ease-in duration-200 hover:text-gray-100 border rounded-full p-4">
              <FiYoutube
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default technologies;

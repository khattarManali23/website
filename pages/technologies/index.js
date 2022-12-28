import { Poppins } from "@next/font/google";
import React from "react";
import Banner from "../../components/Banner";
import PageFooter from "../../components/PageFooter";
import allClients from "../../data/allclients";

import data from "../../data/banner";
const poppins = Poppins({
  weight: ["500"],
  style: ["normal"],
  subsets: ["latin"],
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
      <PageFooter />
    </div>
  );
};

export default technologies;

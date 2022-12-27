import { Poppins } from "@next/font/google";
import { Progress } from "antd";
import AOS from "aos";
import React from "react";
import a1 from "../assets/a1.jpeg";
import a2 from "../assets/a2.jpeg";

const poppins = Poppins({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-poppins",
});

const HomeAbout = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="flex w-full justify-center flex-wrap  items-center">
      <div
        className={
          `text-center p-8  flex flex-col justify-center items-center ` +
          `${poppins.variable} font-sans`
        }
      >
        <h5 className="font-normal text-md  uppercase">About us</h5>
        <h1
          className="sm:text-5xl text-3xl mb-4   font-bold text-center text-transparent bg-clip-text  sm:leading-[68px]  leading-[45.2px]
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
        >
          Thinkers, Innovators and Tech Mavericks
        </h1>
      </div>
      <div className="flex w-11/12  justify-center  items-center flex-wrap">
        <div class="text-gray-700 body-font   flex-1">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-white items-center flex-wrap text-center">
              <h1
                class="title-font text-xs leading-5 mb-4 font-medium 
            text-transparent bg-clip-text py-4    
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]
            
            
            "
              >
                About Us
              </h1>
              <p class="mb-8 leading-[40px] text-3xl">
                We design brand, digital experience that engage the right
                customers and As well as right business
              </p>
              <div
                class="flex w-full  sm:w-3/5 justify-between items-center text-white"
                data-aos="fade-right"
              >
                <Progress
                  percent={90}
                  trailColor="transparent"
                  type="circle"
                  strokeWidth={2}
                  strokeColor={{
                    "0%": "#FFB838",
                    "50%": "#F34F8C",
                    "100%": "#8236BA",
                  }}
                />

                <Progress
                  percent={75}
                  trailColor="transparent"
                  type="circle"
                  strokeWidth={2}
                  strokeColor={{
                    "0%": " #FFB838",
                    "50%": "#F34F8C",
                    "100%": "#8236BA",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="  flex-wrap   justify-center items-center flex ">
          <div class=" w-[340px] h-[596px] flex flex-wrap items-center justify-center   m-2">
            <div class="flex flex-col justify-center items-center">
              <img
                src={a1.src}
                alt=""
                style={{
                  width: "320px",
                  height: "250px",
                }}
                // class="w-[380px] height-[657px] object-cover object-center
              />
              <div class="">
                <h2 class="font-medium mb-2 text-xl text-white my-2 leading-7 text-center">
                  800M + Downloads{" "}
                </h2>
                <p class="text-[#A3A3A3] leading-8 font-normal my-4 text-[15px]  text-center tracking-wider mb-2">
                  Starting with a 360º app strategy defining and detailing the
                  raison d’êtrè of the app: technology required, investment
                  estimate, timeline, total cost of ownership and the end value,
                  we also dive deep into content strategy, branding strategy and
                  monetization. Result – engaging apps that users actually use.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class=" w-[340px] h-[596px]  flex flex-col items-center justify-center   m-2">
            <div class="flex flex-col justify-center items-center">
              <img
                src={a2.src}
                alt=""
                style={{
                  width: "320px",
                  height: "250px",
                }}
                // class="w-[380px] height-[657px] object-cover object-center
              />
              <div class="">
                <h2 class="font-medium mb-2 text-xl text-white my-2 leading-7 text-center">
                  750 + Projects Delivered
                </h2>
                <p class="text-[#A3A3A3] leading-8 font-normal my-4 text-[15px]  text-center tracking-wider mb-2">
                  Tech solutions that have helped businesses align their
                  channels/customer interfaces, streamline processes, automate
                  systems to bring in efficiency and effectiveness, simplify
                  communications, elevate customer experiences, embed resources
                  and do so much more.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

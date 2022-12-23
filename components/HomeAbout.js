import { Progress, Space } from "antd";
import React from "react";
const HomeAbout = () => {
  return (
    <div className="flex w-full justify-center border items-center">
      <div className="flex w-11/12 justify-center border items-center">
        <div class="text-gray-700 body-font  flex-1">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
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
              <div class="flex justify-center">
                <Space wrap>
                  <Progress
                    type="circle"
                    percent={90}
                    strokeColor={{
                      "0%": "#FFB838",
                      "100%": "#F34F8C",
                      "100%": "#8236BA",
                    }}
                  />
                  <Progress
                    type="circle"
                    percent={70}
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                  />
                </Space>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 border flex">
          <div class="p-20 bg-purple-100 w-full md:w-1/2">
            <div class="bg-white rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                alt=""
                class="rounded-t-lg"
              />
              <div class="p-6">
                <h2 class="font-bold mb-2 text-2xl text-purple-800">
                  Card with an image
                </h2>
                <p class="text-purple-700 mb-2">
                  This is a little bit better of a card!
                </p>
                <a
                  href="#"
                  class="text-purple-600 hover:text-purple-500 underline text-sm"
                >
                  Read More 👉
                </a>
              </div>
            </div>
          </div>
          <div class="p-20 bg-purple-100 w-full md:w-1/2">
            <div class="bg-white rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
                alt=""
                class="rounded-t-lg"
              />
              <div class="p-6">
                <p class="text-purple-700 mb-2">
                  This is a little bit better of a card!
                </p>
                <a
                  href="#"
                  class="text-purple-600 hover:text-purple-500 underline text-sm"
                >
                  Read More 👉
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;

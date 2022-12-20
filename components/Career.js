import React from "react";
import bloghero from "../assets/bloghero.jpeg";

const Career = () => {
  return (
    <div>
      <main>
        <div id="hero" class="pt-5 lg:flex items-center  sm:block hidden ">
          <div class=" py-10  md:flex lg:block  w-full lg:max-w-3xl lg:px-20 arrow_box ">
            <div class=" w-full ">
              <h2 className="w-full text-center">INSIGHTS</h2>
              <h1
                className="sm:text-5xl text-3xl mb-4  font-bold text-center text-transparent bg-clip-text  sm:leading-[68px]  leading-[45.2px]
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
              >
                Words From Our Client
              </h1>
              <div class="my-12 mx-2 ">
                <h3 className="text-[30px] my-2 font-medium leading-[45px]">
                  Maya Kyon
                </h3>
                <p className="text-xl leading-8 font-normal w-3/4 text-[#D0D0D0]">
                  We develop creative solutions for small and big brands like
                  build artistic products identities We develop creative
                  solutions for small and
                </p>
              </div>
            </div>
          </div>

          <div
            class="mt-6 flex-1  lg:mt-0 
          w-
          
          "
          >
            <div></div>
            <img
              class=" object-cover  w-[725px]  h-[500px]"
              src={bloghero.src}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Career;

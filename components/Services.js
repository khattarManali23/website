import React from "react";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import services from "../assets/services.png";

const Services = () => {
  return (
    <div>
      <div className="flex flex-wrap relative ">
        <div className="flex-1  justify-center items-center flex">
          <section class="text-gray-700 body-font sm:w-5/6 w-full ">
            <div class="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h3
                  class="text-5xl font-medium text-center text-transparent bg-clip-text py-4 mb-8 leading-[65px]   
        bg-gradient-to-r from-[#FFB838] via-[#F34F8C] to-[#8236BA]"
                >
                  Services
                </h3>

                <h3 class="text-4xl text-white font-medium text-center  py-2  leading-8">
                  Web App Solution
                </h3>
                <h6
                  className=" font-normal text-xl  text-left text-transparent bg-clip-text py-1  leading-8   
        bg-gradient-to-r from-[#FFB838] via-[#F34F8C] to-[#8236BA]"
                >
                  Streamline reporting, customer experiences, drive efficiency
                  with web-app driven Processes.
                </h6>
                <p class="mb-8 font-normal leading-[30px] text-xl">
                  With future-proof technology, agile practices, market acumen
                  and our highly experienced team, we create web applications
                  that are engaging and highly functional. Be it custom website,
                  process implementation, connecting with social networking
                  sites, or system integration, we’ve got you covered.
                </p>
              </div>
            </div>
            <img
              class="absolute bottom-0 right-8  object-cover  block sm:hidden rounded-lg"
              src={mobile1.src}
              alt=""
            />
            <img
              class="absolute -right-1 bottom-0 object-cover  block sm:hidden rounded-lg"
              src={mobile2.src}
              alt=""
            />
            <img
              class="absolute bottom-0 right-0 object-cover block sm:hidden rounded-lg"
              src={mobile3.src}
              alt=""
            />
          </section>
        </div>

        <div class="sm:grid hidden relative flex-1   w-full  overflow-hidden ">
          <div class="row-span-full p-4 w-[569px] h-[363px] col-start-1 col-span-10 self-end bg-white rounded-lg overflow-hidden">
            <img class="object-cover rounded-lg" src={services.src} alt="" />
          </div>
          <div class="row-span-full col-span-4 col-end-8 absolute w-[651.44px] h-[400.46px] self-end p-4 text-white rounded-lg bg-white overflow-hidden ">
            <img
              class=" rounded-lg 
                object-cover
                
              
              
              "
              src={services.src}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

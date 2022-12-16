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
          <section className="text-gray-700 body-font sm:w-5/6 w-full ">
            <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 sm:items-center  items-start text-left">
                <h3
                  className=" sm:text-5xl text-xl font-bold text-center text-transparent bg-clip-text sm:py-4 py-2   leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]

        "
                >
                  Services
                </h3>

                <h3 className="sm:text-4xl text-xl w-full text-white font-medium text-left  pt-2 leadind-[30px]  sm:leading-8">
                  Web App Solution
                </h3>
                <h6
                  className=" font-normal text-xl sm:block hidden text-left text-transparent bg-clip-text py-1  leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
                >
                  Streamline reporting, customer experiences, drive efficiency
                  with web-app driven Processes.
                </h6>
                <p className="mb-8 font-normal sm:leading-[30px]  text-white sm:text-xl text-[10px] sm:block hidden">
                  With future-proof technology, agile practices, market acumen
                  and our highly experienced team, we create web applications
                  that are engaging and highly functional. Be it custom website,
                  process implementation, connecting with social networking
                  sites, or system integration, we’ve got you covered.
                </p>
                <p className="mb-8 font-extralight sm:leading-[30px] leading-5 w-3/4 text-white sm:text-xl text-xs sm:hidden block">
                  We develop creative solutions for small and big brands like
                  build artistic products identities and much more Lorem ipsum
                  dolor sit amet
                </p>
              </div>
            </div>
            <img
              className="absolute bottom-0 right-8  object-cover  block sm:hidden rounded-lg"
              src={mobile1.src}
              alt=""
            />
            <img
              className="absolute -right-1 bottom-0 object-cover  block sm:hidden rounded-lg"
              src={mobile2.src}
              alt=""
            />
            <img
              className="absolute bottom-0 right-0 object-cover block sm:hidden rounded-lg"
              src={mobile3.src}
              alt=""
            />
          </section>
        </div>

        <div className="sm:grid hidden relative flex-1   w-full  overflow-hidden ">
          <div className="row-span-full p-4 w-[569px] h-[363px] col-start-1 col-span-10 self-end bg-white rounded-lg overflow-hidden">
            <img
              className="object-cover rounded-lg"
              src={services.src}
              alt=""
            />
          </div>
          <div className="row-span-full col-span-4 col-end-8 absolute w-[651.44px] h-[400.46px] self-end p-4 text-white rounded-lg bg-white overflow-hidden ">
            <img
              className=" rounded-lg 
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

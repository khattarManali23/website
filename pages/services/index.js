import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/banner";

const Services = () => {
  const banner = data.filter((item) => item.slug === "services");

  return (
    <div>
      <Banner banner={banner} />
      <div className="flex flex-col justify-center items-center">
        <div class="   text-center p-10">
          <h1 class="text-base font-medium  mb-2 leading-[23px]">SERVICES</h1>
          <h1
            class="font-bold text-4xl  mb-4 text-center text-transparent bg-clip-text  sm:leading-[68px]  leading-[45.2px]
      bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
          >
            Our Services
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;

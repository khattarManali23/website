import React from "react";
import Banner from "../../components/Banner";
import PageFooter from "../../components/PageFooter";
import ServiceCard from "../../components/ServiceCard";
import data from "../../data/banner";

const Services = () => {
  const banner = data.filter((item) => item.slug === "services");
  return (
    <div className="w-full">
      <Banner banner={banner} />
      <div className="flex justify-center flex-wrap my-4 items-center">
        <h1 className="text-5xl leading-[67.2px] w-full sm:w-1/4 text-center text-transparent bg-clip-text  sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] ">
          DOMAIN
        </h1>

        <ServiceCard />

        <PageFooter />
      </div>
    </div>
  );
};

export default Services;

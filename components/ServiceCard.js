import React from "react";
import services from "../data/domain";

const ServiceCard = () => {
  return (
    <div className="flex justify-center flex-wrap   w-full">
      {services.map((service, i) => {
        return (
          <div
            key={i}
            className="flex justify-around items-center  flex-wrap flex-col mx-4  sm:w-56 w-36 my-4 "
          >
            <div class="p-8 mx-8 flex items-center justify-around bg-[#121A21] rounded-full">
              <img
                src={service.img}
                alt="domain"
                class="object-cover sm:w-24 sm:h-24 w-12 h-12"
              />
            </div>
            <div>
              <h1 class="sm:text-2xl text-base w-28 h-14 my-2  sm:w-56 text-center  font-normal leading-6 sm:leading-9 text-white">
                {service.title}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;

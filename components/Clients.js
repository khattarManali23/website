import React from "react";
import client1 from "../assets/client (1).png";
import client2 from "../assets/client (2).png";
import client3 from "../assets/client (3).png";
import client5 from "../assets/client (5).png";

const Clients = () => {
  return (
    <div className="w-full h-10/12 border border-red-900 flex flex-col justify-center items-center">
      <h2>
        <span
          class="text-6xl font-bold text-center text-transparent bg-clip-text py-4  leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] capitalize
       
        "
        >
          Our Clients
        </span>
      </h2>

      <div className="flex border border-green-900">
        <div className="p-6 border ">
          <img src={client1.src} alt="client" />
        </div>
        <div className="flex-1">
          <div className="p-4 border">
            <img src={client2.src} alt="client" />
          </div>
          <div className="p-4 border">
            <img src={client3.src} alt="client" />
          </div>
          <div className="p-4 border">
            <img src={client5.src} alt="client" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

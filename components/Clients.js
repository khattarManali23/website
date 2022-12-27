import React from "react";
import amazon from "../assets/amazon.png";
import cisco from "../assets/cisco.png";
import client1 from "../assets/client (1).png";
import client2 from "../assets/client (2).png";
import client3 from "../assets/client (3).png";
import client4 from "../assets/client (4).png";
import client5 from "../assets/client (5).png";

const Clients = () => {
  return (
    <div className="  py-8  flex flex-col justify-center items-center">
      <div>
        <h2 className="my-6">
          <span
            className="text-6xl font-bold text-center text-transparent bg-clip-text py-6 my-4  leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] capitalize
       
        "
          >
            Our Clients
          </span>
        </h2>
      </div>

      <div className="flex justify-center flex-wrap items-center flex-col my-20 w-11/12 h-full">
        <div className="flex w-full justify-center items-center flex-wrap">
          <div
            style={{
              border: "1px solid #212b30",
              width: "355px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={client1.src} alt="" className="p-10  " />
          </div>
          <div className="flex flex-col flex-wrap  flex-1">
            <div className="flex justify-center flex-wrap items-center">
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={client2.src} alt="" className="p-6" />
              </div>
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={client3.src} alt="" className="p-6" />
              </div>
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={client4.src} alt="" className="p-6" />
              </div>
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={client5.src} alt="" className="p-6" />
              </div>
            </div>
            <div className="flex justify-center flex-wrap items-center">
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={cisco.src} alt="" className="p-6" />
              </div>
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={amazon.src} alt="" className="p-6" />
              </div>
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={client4.src} alt="" className="p-6" />
              </div>
              <div
                style={{
                  border: "1px solid #212b30",
                  width: "240px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "Center",
                  alignItems: "center",
                }}
              >
                <img src={client5.src} alt="" className="p-6" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center items-center flex-wrap">
          <div
            style={{
              border: "1px solid #212b30",
              width: "219.1px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={client5.src} alt="" className="p-6" />
          </div>
          <div
            style={{
              border: "1px solid #212b30",
              width: "219.1px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={client4.src} alt="" className="p-6" />
          </div>
          <div
            style={{
              border: "1px solid #212b30",
              width: "219.1px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={client3.src} alt="" className="p-6" />
          </div>
          <div
            style={{
              border: "1px solid #212b30",
              width: "219.1px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={client2.src} alt="" className="p-6" />
          </div>
          <div
            style={{
              border: "1px solid #212b30",
              width: "219.1px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={cisco.src} alt="" className="p-6" />
          </div>
          <div
            style={{
              border: "1px solid #212b30",
              width: "219.1px",
              height: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={amazon.src} alt="" className="p-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

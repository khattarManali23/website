import React from "react";
import contactbg from "../assets/contactbg.jpeg";

const ContactForm = () => {
  return (
    <div
      className=" text-gray-100 bg-transparent flex justify-center items-center w-full h-screen   py-12"
      style={{
        backgroundImage: `url(${contactbg.src})`,
        backgroundSize: "cover",
        position: "relative",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex justify-center items-center flex-wrap sm:w-10/12 w-11/10 ">
        <div className="flex flex-col justify-center items-center flex-1 w-full">
          <div className="w-full">
            <h3 className="border-whites text-left text-[75px]"> Contact us</h3>
          </div>
        </div>
        <div className="bg-gray-800  flex-1   flex flex-col justify-center items-center w-[602.18px] h-[734px] sm:-bottom-14 sm:right-12 right-0 top-0   sm:absolute relative ">
          <h1
            className=" text-3xl pb-6 mt-2  w-full  font-bold text-center text-transparent bg-clip-text  leading-4
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
            data-aos="fade-up"
          >
            Want To Disscuss About A Project
          </h1>
          <div className="w-[468px]">
            <span className="uppercase text-sm text-white bg-transparent   font-bold">
              Full Name
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder=""
            />
          </div>
          <div className="mt-8 w-[468px]">
            <span className="uppercase text-sm text-white bg-transparent  font-bold">
              Email
            </span>
            <input
              className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>
          <div className="mt-8 w-[468px]">
            <span className="uppercase text-sm text-white bg-transparent  font-bold">
              Message
            </span>
            <textarea className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8 w-[468px]">
            <button className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-[#FFB838] via-[#F34F8C] to-[#8236BA]  text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

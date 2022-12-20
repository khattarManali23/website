import React from "react";
import contact from "../assets/contact.jpg";

const ContactForm = () => {
  return (
    <div
      className="my-4 flex sm:justify-end  justify-center items-center relative sm:h-[100vh] h-[70vh] w-full"
      style={{
        backgroundImage: `url(${contact.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div class="sm:w-2/5 w-10/12 sm:p-8 p-4 bg-[#121A21] absolute top-10 sm:top-24">
        <div>
          <span class="uppercase text-sm text-white font-bold">Full Name</span>
          <input
            class="w-full bg-transparent text-white border border-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder=""
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-white font-bold">Email</span>
          <input
            class="w-full bg-transparent text-white border border-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
          />
        </div>
        <div class="mt-8">
          <span class="uppercase text-sm text-white font-bold">Message</span>
          <textarea class="w-full h-32 bg-transparent text-white border border-white mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div class="mt-8">
          <button class="uppercase py-5 text-sm font-bold tracking-wide sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";
import contactdata from "../data/contact";

const ContactCards = () => {
  return (
    <div className=" w-full mx-3  h-full sm:h-[150vh]  flex sm:flex-row flex-col   justify-between items-center relative">
      {contactdata.map((item, index) => {
        return (
          <div
            className={
              ` flex flex-col justify-center items-center m-4` +
              (item.id !== 2
                ? "flex flex-col justify-center items-center relative top-20"
                : "")
            }
            key={index}
          >
            <img
              src={item.image}
              className="object-cover w-[380px] h-[499px]"
              alt="..."
            />
            <div className="p-4 text-center">
              <h5 className="text-2xl text-center text-white font-medium  mb-2 uppercase">
                {item.title}
              </h5>
              <p className="text-[15px] font-normal leading-[32px] ">
                {item.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactCards;

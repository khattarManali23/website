import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram, FiYoutube } from "react-icons/fi";

const PageFooter = () => {
  return (
    <div className="my-2">
      <div className="flex flex-col justify-center items-center   mx-auto max-w-[1500px] bg-[#121A21] h-36 my-4">
        <div
          className="flex items-center justify-evenly sm:justify-around flex-col sm:flex-row sm:px-[30px] md:px-[40px] lg:px-[50px] xl:px-[75px] w-full h-[100px] bg-[
#121A21] flex-row-reverse


"
        >
          <div className="text-gray-400 py-2">
            Copyright ©2022 | Designed by Manas Agrawal
          </div>
          <div
            className="py-2 cursor-pointer"
            onClick={() => {
              window.open("mailto:innodeed@gmail.com");
            }}
          >
            innodeed@gmail.com
          </div>

          <ul className="flex py-2 gap-[15px] text-gray-400 cursor-pointer">
            <li
              className="ease-in duration-200 hover:text-gray-100 border rounded-full p-4 cursor-pointer"
              onClick={() => {
                window.open("https://www.instagram.com/");
              }}
            >
              <AiOutlineTwitter
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://twitter.com/");
                }}
              />
            </li>
            <li
              className="ease-in duration-200 hover:text-gray-100 border rounded-full p-4 cursor-pointer"
              onClick={() => {
                window.open("https://www.facebook.com/");
              }}
            >
              <FaFacebookF
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.facebook.com/");
                }}
              />
            </li>
            <li
              className="ease-in duration-200 hover:text-gray-100 border rounded-full p-4 cursor-pointer"
              onClick={() => {
                window.open("https://www.instagram.com/");
              }}
            >
              <FiInstagram
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.instagram.com/");
                }}
              />
            </li>
            <li
              className="ease-in duration-200 hover:text-gray-100 border rounded-full p-4 cursor-pointer"
              onClick={() => {
                window.open("https://www.youtube.com/");
              }}
            >
              <FiYoutube
                style={{
                  color: "white",
                  fontSize: "1.2rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  window.open("https://www.youtube.com/");
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;

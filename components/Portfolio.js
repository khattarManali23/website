import { Poppins } from "@next/font/google";
import React from "react";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
const poppins = Poppins({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-poppins",
});
const Portfolio = () => {
  const images = [portfolio1, portfolio3, portfolio4, portfolio2];
  return (
    <div
      className={
        `flex justify-center flex-col w-full h-full items-center flex-wrap ` +
        `${poppins.variable} font-sans`
      }
    >
      <h6
        className="text-white text-lg sm:hidden block text-center font-bold my-2
  "
      >
        our work
      </h6>

      <h2>
        <span
          class="text-6xl font-bold text-center text-transparent bg-clip-text py-4  leading-8   
        bg-gradient-to-r from-[#FFB838] via-[#F34F8C] to-[#8236BA]
        sm:hidden block
        "
        >
          Portfolio
        </span>
      </h2>
      <div className="flex justify-center items-center bg-[#212b31]  flex-wrap px-2 my-12">
        <div class="columns-2 md:columns-2 lg:columns-2 flex-1 min-w-[350px]  ">
          {images.map((image, index) => (
            <div className="flex justify-center items-center mb-4" key={index}>
              <img src={image.src} alt="portfolio" />
            </div>
          ))}
        </div>

        <div
          className="flex-1 flex justify-center items-center  "
          style={{
            width: "100%",
            minWidth: "350px",
          }}
        >
          <div className="flex justify-center flex-col sm:w-3/4  w-11/12 items-center">
            <h2
              class="text-6xl font-bold text-center text-transparent bg-clip-text py-4  leading-8
            bg-gradient-to-r from-[#FFB838] via-[#F34F8C] to-[#8236BA]
            sm:block hidden
            
            "
            >
              Portfolio
            </h2>
            <p class="text-center text-xl leading-9 font-normal">
              We develop creative solutions for small and big brands like build
              artistic products identities and much more Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Praesent tincidunt eu leo sit
              amet finibus. Etiam viverra ut felis ac gravida. In cursus
              ultrices tellus et pellentesque. We develop creative solutions for
              small and big brands like build artistic products identities and
              much more Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent tincidunt eu leo sit amet finibus. Etiam viverra ut felis
              ac gravida. In cursus ultrices tellus et pellentesque.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import line1 from "../assets/line1.png";
import line2 from "../assets/line2.png";
import career from "../data/career";

const CareerBanner = () => {
  return (
    <div>
      <div id="hero" className="pt-5  hidden items-center sm:flex">
        <div
          className="px-5 sm:px-2 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl  lg:mr-8 lg:px-20 relative  bg-transparent
        z-999
          "
        >
          <img
            src={line1.src}
            className="absolute -rotate-[66.31] -right-[10.5rem] -top-20"
          />
          <img
            src={line2.src}
            className="absolute  -rotate-[66.31] -right-[10.5rem] -bottom-20 "
          />

          <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
            <h1
              className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight text-transparent bg-clip-text sm:py-4 py-2   leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
            >
              Careers @Innodeed{" "}
            </h1>
          </div>

          <div className="flex-1  sm:hidden md:hidden lg:flex xl:flex flex-col w-full h-full">
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={true}
              infiniteLoop={true}
              autoPlay={true}
              interval={3000}
              transitionTime={1000}
              swipeable={true}
              dynamicHeight={true}
              emulateTouch={true}
              stopOnHover={true}
              useKeyboardArrows={true}
              centerMode={true}
              centerSlidePercentage={100}
              className="flex-1    relative "
              renderIndicator={(onClickHandler, isSelected, index, label) => {
                const defStyle = {
                  color: "white",
                  cursor: "pointer",
                };
                const style = isSelected
                  ? {
                      ...defStyle,
                      width: 120,
                      height: 120,

                      FontSize: "100px",
                      background:
                        "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }
                  : {
                      ...defStyle,
                      width: 120,
                      height: 120,
                      FontSize: "100px",
                    };
                return (
                  <span
                    style={style}
                    onClick={onClickHandler}
                    onKeyDown={onClickHandler}
                    value={index}
                    key={index}
                    role="button"
                    tabIndex={0}
                    aria-label={`${label} ${index + 1}`}
                    className=" text-[4rem] text-left my-8"
                  >
                    •
                  </span>
                );
              }}
            >
              {career.map((item, index) => {
                return (
                  <div className="text-left h-80    w-full" key={index}>
                    <h5 className="text-3xl font-medium leading-[45px] my-6  ">
                      {item.title}
                    </h5>
                    <p className="text-white leading-[30px] font-normal  text-xl">
                      {item.content}
                    </p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        <div className="mt-6 sm:hidden bg-transparent md:hidden lg:block xl:block flex-1  lg:mt-0">
          <img className=" src={girl.src} className=" w-[725px] h-[578px]" />
        </div>
      </div>
      <div className="pt-5  flex-wrap flex items-center flex-col sm:hidden">
        <div className="text-center  p-10">
          <h1
            className="font-bold text-4xl mb-4 text-transparent bg-clip-text sm:py-4 py-2    leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
          >
            {" "}
            Careers @Innodeed{" "}
          </h1>
        </div>
        <div className="flex-1  flex flex-col w-full h-full">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={1000}
            swipeable={true}
            emulateTouch={true}
            stopOnHover={true}
            useKeyboardArrows={true}
            centerMode={false}
            centerSlidePercentage={100}
            className="flex-1    relative "
            renderIndicator={(onClickHandler, isSelected, index, label) => {
              const defStyle = {
                color: "white",
                cursor: "pointer",
              };
              const style = isSelected
                ? {
                    ...defStyle,
                    width: 120,
                    height: 120,

                    FontSize: "100px",
                    background:
                      "linear-gradient(to right, #f32170, #ff6b08, #cf23cf, #eedd44)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }
                : {
                    ...defStyle,
                    width: 120,
                    height: 120,
                    FontSize: "100px",
                  };
              return (
                <span
                  style={style}
                  onClick={onClickHandler}
                  onKeyDown={onClickHandler}
                  value={index}
                  key={index}
                  role="button"
                  tabIndex={0}
                  aria-label={`${label} ${index + 1}`}
                  className=" text-[4rem] text-left  "
                >
                  •
                </span>
              );
            }}
          >
            {career.map((item, index) => {
              return (
                <div className="h-[45rem]" key={index}>
                  <div className=" rounded overflow-hidden m-6 shadow-lg">
                    <img className=" src={item.image} alt="Mountain" />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{item.title}</div>
                      <p className="text-gray-700 text-base">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CareerBanner;

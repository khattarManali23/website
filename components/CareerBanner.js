import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import girl from "../assets/girl.jpeg";
import career from "../data/career";

const CareerBanner = () => {
  return (
    <div>
      <main>
        <div id="hero" class="pt-5 lg:flex items-center">
          <div class="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-4xl lg:mr-8 lg:px-20 event h-full">
            <div class="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
              <h1
                class="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight text-transparent bg-clip-text sm:py-4 py-2   leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]"
              >
                Careers @Innodeed{" "}
              </h1>
            </div>

            <div class="flex-1 flex flex-col w-full h-full">
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
                    marginLeft: 20,
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
                    <div class="text-left h-80   " key={index}>
                      <h5 class="text-3xl font-medium leading-[45px] my-6  ">
                        {item.title}
                      </h5>
                      <p class="text-white leading-[30px] font-normal  text-xl">
                        {item.content}
                      </p>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div class="mt-6  flex-1 lg:mt-0">
            <img
              class=""
              src={girl.src}
              className="object-cover w-[725px] h-[578px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerBanner;

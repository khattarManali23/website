import Image from "next/image";
import React from "react";
import data from "../data/banner";

const Banner = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <header
            class="w-full sm:h-screen h-[50vh]  text-white flex flex-col justify-center  relative"
            key={item.id}
            style={
              {
                //   backgroundImage:
                //     "linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)",
                //   minHeight: "760px",
              }
            }
          >
            {console.log(item.image)}
            <div
              class="z-0 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat hidden md:block "
              //   style={{
              //     background: item.image.src,
              //   }}
            >
              <Image src={item.image.src} alt="image" layout="fill" />
            </div>
            <div class="z-0 absolute top-0 left-0 w-full bg-cover bg-no-repeat flex md:hidden h-full ">
              <Image
                src={item.mobileImage.src}
                alt="mobileImage"
                layout="fill"
              />
            </div>
            <div class="z-10 relative py-12 mx-auto md:w-1/2 text-center">
              <h1 class="leading-tight mb-8 text-5xl text-center font-thin">
                {item.heading}
              </h1>
              <p class="text-center text-xl font-light mb-8">
                {item.paragraph}
              </p>
            </div>
          </header>
        );
      })}
    </div>
  );
};

export default Banner;

import gsap from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import Image from "next/image";
import React from "react";

gsap.registerPlugin(CSSRulePlugin);

const Banner = ({ banner }) => {
  setTimeout(transition, 1000);

  function transition() {
    var tl = new gsap.timeline();

    tl.to(
      CSSRulePlugin.getRule("body:before"),
      0.2,
      { cssRule: { top: "50%" }, ease: "Power2.easeOut " },
      "close"
    )
      .to(
        CSSRulePlugin.getRule("body:after"),
        0.2,
        { cssRule: { bottom: "50%" }, ease: "Power2.easeOut" },
        "close"
      )
      .to(document.querySelector(".loader"), 0.2, { opacity: 1 })
      .to(
        CSSRulePlugin.getRule("body:before"),
        0.2,
        { cssRule: { top: "0%" }, ease: "Power2.easeOut" },
        "+=1.5",
        "open"
      )
      .to(
        CSSRulePlugin.getRule("body:after"),
        0.2,
        { cssRule: { bottom: "0%" }, ease: "Power2.easeOut" },
        "-=0.2",
        "open"
      )
      .to(document.querySelector(".loader"), 0.2, { opacity: 0 }, "-=0.2");
  }

  return (
    <div className="w-full h-full flex justify-center items-center flex-col relative">
      <div className="progress loader w-full">
        <div className="progress-value"></div>
      </div>
      {/* </div> */}
      {banner.map((item) => {
        return (
          <header
            className="w-full h-screen  text-white flex flex-col justify-around items-center  relative   -content -index"
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="z-0 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat hidden md:block ">
              {/* <Image src={item.image} alt="image" layout="fill" /> */}
            </div>
            <div className="z-0 absolute top-0  left-0 w-full bg-cover bg-no-repeat flex md:hidden h-full ">
              <Image
                src={item.mobileImage.src}
                alt="mobileImage"
                layout="fill"
              />
            </div>
            <div className="z-10 relative  mx-auto  flex justify-end items-center flex-col text-center ">
              <h1
                className={
                  item.style
                    ? item.style
                    : " mb-8 sm:text-7xl text-3xl w-full font-semibold  text-center text-transparent bg-clip-text py-4  leading-8 sm:leading-[88.52px] sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] "
                }
              >
                {item.heading}
              </h1>
              <p className="text-center text-xl font-light mb-8">
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

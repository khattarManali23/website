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
      0.8,
      { cssRule: { top: "50%" }, ease: "Power2.easeOut " },
      "close"
    )
      .to(
        CSSRulePlugin.getRule("body:after"),
        0.8,
        { cssRule: { bottom: "50%" }, ease: "Power2.easeOut" },
        "close"
      )
      .to(document.querySelector(".loader"), 0.2, { opacity: 1 })
      .to(
        CSSRulePlugin.getRule("body:before"),
        0.8,
        { cssRule: { top: "0%" }, ease: "Power2.easeIn" },
        "+=1.8",
        "open"
      )
      .to(
        CSSRulePlugin.getRule("body:after"),
        0.8,
        { cssRule: { bottom: "0%" }, ease: "Power2.easeIn" },
        "-=0.4",
        "open"
      )
      .to(document.querySelector(".loader"), 0.2, { opacity: 0 }, "-=0.2");
  }

  return (
    <div>
      <div class="loader  bg-[#08131A] w-full h-full ">
        <div class="bar1"></div>
        <div class="bar2"></div>
      </div>
      {banner.map((item) => {
        return (
          <header
            className="w-full sm:h-screen h-[50vh]  text-white flex flex-col justify-around items-center  relative img-gradient -content -index"
            key={item.id}
            style={
              {
                //   backgroundImage:
                //     "linear-gradient(135deg, #231437 0%, #2c385e 50%, #336e6b 100%)",
                //   minHeight: "760px",
              }
            }
          >
            <div
              className="z-0 absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat hidden md:block border"
              //   style={{
              //     background: item.image.src,
              //   }}
            >
              <Image src={item.image.src} alt="image" layout="fill" />
            </div>
            <div className="z-0 absolute top-0  left-0 w-full bg-cover bg-no-repeat flex md:hidden h-full ">
              <Image
                src={item.mobileImage.src}
                alt="mobileImage"
                layout="fill"
              />
            </div>
            <div className="z-10 relative  mx-auto  flex justify-end items-center flex-col text-center -content -index">
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

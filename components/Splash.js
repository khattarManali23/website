import gsap from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import cover from "../assets/Hero.png";

import React from "react";
gsap.registerPlugin(CSSRulePlugin);

const Splash = () => {
  setTimeout(transition, 10);

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
    <>
      <div className="loader ">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
      </div>

      <main>
        <div className="-content -index">
          <div>
            <img src={cover.src} alt="cover" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Splash;

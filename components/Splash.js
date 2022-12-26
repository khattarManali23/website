import gsap from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import girl from "../assets/girl.jpeg";

import React from "react";
gsap.registerPlugin(CSSRulePlugin);

const Splash = () => {
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
    <>
      <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
      </div>

      <main>
        <div class="-content -index">
          <div>
            <img src={girl.src} class="object-cover w-full h-full" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Splash;
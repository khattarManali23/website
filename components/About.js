import React from "react";
import data from "../../data/banner";
import Banner from "./Banner";

const About = () => {
  const banner = data.filter((item) => item.slug === "about");
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default About;

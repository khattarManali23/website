import React from "react";
import portfolio5 from "../../assets/portfolio.jpg";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import Banner from "../../components/Banner";
import Mansory from "../../components/Mansory";

import data from "../../data/banner";

const Portfolio = () => {
  const images = [portfolio1, portfolio3, portfolio4, portfolio2, portfolio5];

  const banner = data.filter((item) => item.slug === "portfolio");
  console.log("cc", images);

  return (
    <div>
      <Banner banner={banner} />
      <div className="w-full flex justify-center items-center ">
        <div className="w-4/6 ">
          <Mansory images={images} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

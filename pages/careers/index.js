import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/banner";

const Career = () => {
  const banner = data.filter((item) => item.slug === "careers");
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default Career;

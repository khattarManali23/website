import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/banner";

const technologies = () => {
  const banner = data.filter((item) => item.slug === "technologies");
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default technologies;

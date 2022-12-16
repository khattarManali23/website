import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/banner";

const Services = () => {
  const banner = data.filter((item) => item.slug === "services");
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default Services;

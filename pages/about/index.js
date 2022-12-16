import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/banner";

const about = () => {
  const banner = data.filter((item) => item.slug === "about");
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default about;

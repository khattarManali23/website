import React from "react";
import Banner from "../../components/Banner";
import data from "../../data/banner";

const ContactUs = () => {
  const banner = data.filter((item) => item.slug === "contact");
  return (
    <div>
      <Banner banner={banner} />
    </div>
  );
};

export default ContactUs;

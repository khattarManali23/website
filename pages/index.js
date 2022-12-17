import "antd/dist/reset.css";
import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Technology from "../components/Technology";
import TimeLine from "../components/TimeLine";
import data from "../data/banner";

export default function Home() {
  const banner = data.filter((item) => item.slug === "home");
  return (
    <div>
      <Banner banner={banner} />
      <Technology />
      <Services />
      <Portfolio />
      <TimeLine />

      <Footer />
    </div>
  );
}

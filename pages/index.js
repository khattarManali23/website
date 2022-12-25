import { Poppins } from "@next/font/google";
import "antd/dist/reset.css";
import React from "react";
import Banner from "../components/Banner";
import CareerBanner from "../components/CareerBanner";
import Footer from "../components/Footer";
import HomeAbout from "../components/HomeAbout";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Technology from "../components/Technology";
import TimeLine from "../components/TimeLine";
import data from "../data/banner";
const poppins = Poppins({
  weight: ["400"],
  style: ["normal"],
  variable: "--font-poppins",
});

export default function Home() {
  const banner = data.filter((item) => item.slug === "home");
  return (
    <div className={`${poppins.variable} font-sans`}>
      <Banner banner={banner} />
      <HomeAbout />
      <Technology />
      <Services />
      <Portfolio />
      <CareerBanner />
      {/* <Clients /> */}
      <TimeLine />

      <Footer />
    </div>
  );
}

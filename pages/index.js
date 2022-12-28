import { Poppins } from "@next/font/google";
import "antd/dist/reset.css";
import React from "react";
import data from "../data/banner";

import Banner from "../components/Banner";
import CareerBanner from "../components/CareerBanner";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import HomeAbout from "../components/HomeAbout";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Technology from "../components/Technology";
const poppins = Poppins({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
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
      <Clients />
      {/* <TimeLine /> */}

      <Footer />
    </div>
  );
}

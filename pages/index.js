import "antd/dist/reset.css";
import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Technology from "../components/Technology";

export default function Home() {
  return (
    <div>
      <Banner />
      <Technology />
      <Services />
      <Portfolio />

      <Footer />
    </div>
  );
}

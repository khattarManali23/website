import { Poppins } from "@next/font/google";
import "antd/dist/reset.css";
import { NextSeo } from "next-seo";
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
      <NextSeo
        title="Innodeed || Digital Solution Partner"
        description="Innodeed is a digital solution partner that helps businesses to grow and scale. We are a team of passionate and experienced professionals who are committed to delivering the best solutions to our clients."
        canonical="https://innodeed-nu.vercel.app/"
        openGraph={{
          url: "https://innodeed-nu.vercel.app/",
          title: "Innodeed || Digital Solution Partner",
          description:
            "Innodeed is a digital solution partner that helps businesses to grow and scale. We are a team of passionate and experienced professionals who are committed to delivering the best solutions to our clients.",
          images: [
            {
              url: "https://innodeed-nu.vercel.app/images/Innodeed.png",
              width: 800,
              height: 600,
              alt: "Innodeed || Digital Solution Partner",
            },
          ],
          site_name: "Innodeed || Digital Solution Partner",
        }}
        twitter={{
          handle: "@innodeed",
          site: "@innodeed",
          cardType: "summary_large_image",
        }}
      />

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

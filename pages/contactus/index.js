import React from "react";
import Banner from "../../components/Banner";
import Career from "../../components/Career";
import ContactCards from "../../components/ContactCards";
import ContactForm from "../../components/ContactForm";
import PageFooter from "../../components/PageFooter";
import data from "../../data/banner";

const ContactUs = () => {
  const banner = data.filter((item) => item.slug === "contact");
  return (
    <div>
      <Banner banner={banner} />
      <Career />
      <div className="flex justify-center flex-wrap flex-col  items-center w-full ">
        <h3
          className=" sm:text-5xl text-xl font-bold text-center text-transparent bg-clip-text pt-8 leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838]

        "
        >
          Our Presence
        </h3>
        <ContactCards />
      </div>

      <ContactForm />
      <div className="my-32">
        <PageFooter />
      </div>
    </div>
  );
};

export default ContactUs;

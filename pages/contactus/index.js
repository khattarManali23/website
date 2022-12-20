import React from "react";
import Banner from "../../components/Banner";
import ContactForm from "../../components/ContactForm";
import PageFooter from "../../components/PageFooter";
import data from "../../data/banner";

const ContactUs = () => {
  const banner = data.filter((item) => item.slug === "contact");
  return (
    <div>
      <Banner banner={banner} />
      <ContactForm />
      <div className="my-24">
        <PageFooter />
      </div>
    </div>
  );
};

export default ContactUs;

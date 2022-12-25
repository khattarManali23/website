import { Col, Row } from "antd";
import React from "react";
import client1 from "../assets/client (1).png";
import client2 from "../assets/client (2).png";
import client3 from "../assets/client (3).png";
import client5 from "../assets/client (5).png";

const Clients = () => {
  return (
    <div className="w-full h-10/12 border border-red-900 flex flex-col justify-center items-center">
      <h2>
        <span
          className="text-6xl font-bold text-center text-transparent bg-clip-text py-4  leading-8   
      sm:bg-gradient-to-r sm:from-[#FFB838] sm:via-[#F34F8C] sm:to-[#8236BA]  bg-gradient-to-r from-[#8236BA] via-[#F34F8C] to-[#FFB838] capitalize
       
        "
        >
          Our Clients
        </span>
      </h2>

      <div className="flex bg-red-400 w-10/12 h-full">
        {/* <Divider orientation="left">Percentage columns</Divider> */}
        <Row gutter={[16, 16]} className="w-full h-full">
          <Col className="gutter-row" span={6}>
            <div className="h-full w-full flex justify-center items-center">
              <img src={client1} alt="client1" className="h-1/2 w-1/2" />
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className="h-full w-full flex justify-center items-center">
              <img src={client2} alt="client2" className="h-1/2 w-1/2" />
              <img src={client3} alt="client3" className="h-1/2 w-1/2" />
              <img src={client5} alt="client5" className="h-1/2 w-1/2" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Clients;

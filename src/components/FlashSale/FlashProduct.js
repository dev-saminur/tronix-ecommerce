import React from "react";
import { Col, Row } from "react-bootstrap";
import { Poppins } from "next/font/google";
import Badge from "../helper/Badge/Badge";
import Image from "next/image";
import Smartphone from "../../assets/arrival/smartphone.jpg";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const FlashProduct = () => {
  return (
    <div>
      <Row>
        <Col md={4}>
          <div className="flash-box">
            <div className="image">
              <Image
                src={Smartphone}
                width={512}
                height={376}
                alt="smartphone"
              />
              <div className="new-badge">
                <Badge badge={true} discount="25" />
              </div>
            </div>
            <div className="content">
              <h4 className={poppins.className + " " + " "}>
                Wireless Headphone
              </h4>
              <div className="price d-flex align-items-center">
                <h3 className={poppins.className + " " + " "}>
                  {" "}
                  <del>$150</del>{" "}
                </h3>
                <h3 className={poppins.className + " " + " "}>- $150</h3>
              </div>
              <div className="sold-out">
                <span className={poppins.className + " " + " "}>sold out</span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={4}>two</Col>
        <Col md={4}>three</Col>
      </Row>
    </div>
  );
};

export default FlashProduct;

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
              <h4 className={poppins.className + " " + " "}>Headphone</h4>
              <h3>$120</h3>
              <div className="review d-flex align-items-center">
                <div className="rating d-flex align-items-center">
                  icon
                  <span className={poppins.className + " " + " "}>5.0</span>
                </div>
                <div className="sold-out">
                  <span className={poppins.className + " " + " "}>
                    sold out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
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
              <h4 className={poppins.className + " " + " "}>Headphone</h4>
              <h3>$120</h3>
              <div className="review d-flex align-items-center">
                <div className="rating d-flex align-items-center">
                  icon
                  <span className={poppins.className + " " + " "}>5.0</span>
                </div>
                <div className="sold-out">
                  <span className={poppins.className + " " + " "}>
                    sold out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
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
              <h4 className={poppins.className + " " + " "}>Headphone</h4>
              <h3>$120</h3>
              <div className="review d-flex align-items-center">
                <div className="rating d-flex align-items-center">
                  icon
                  <span className={poppins.className + " " + " "}>5.0</span>
                </div>
                <div className="sold-out">
                  <span className={poppins.className + " " + " "}>
                    sold out
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FlashProduct;

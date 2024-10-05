import React from "react";
import Header from "../helper/Header/Header";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import Smartphone from "../../assets/arrival/smartphone.jpg";
import Image from "next/image";
import Badge from "../helper/Badge/Badge";
import { Poppins } from "next/font/google";
import { MdStarRate } from "react-icons/md";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const NewArrival = () => {
  return (
    <>
      <div className="arrival-section">
        <Container>
          <Header title="new arrival" />
          <Row>
            <Col md={4}>
              <div className="arrival-box d-flex ">
                <div className="image">
                  <Image
                    src={Smartphone}
                    width={235}
                    height={290}
                    alt="smartphone"
                  />
                  <div className="new-badge">
                    <Badge title="new" alone={true} />
                  </div>
                </div>
                <div className="content">
                  <h4 className={poppins.className + " " + " "}>
                    USB Speaker Portable
                  </h4>
                  <h3>$299.00</h3>
                  <div className="review d-flex align-items-center">
                    <div className="rating d-flex align-items-center">
                      <MdStarRate />
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
            <Col md={4}>Two</Col>
            <Col md={4}>Three</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewArrival;

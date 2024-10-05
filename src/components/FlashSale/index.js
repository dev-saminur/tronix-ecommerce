import React from "react";
import Container from "../helper/Container/Container";
import { Col, Row } from "react-bootstrap";
import Header from "../helper/Header/Header";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
const FlashSale = () => {
  return (
    <>
      <div className="flash-section">
        <Container>
          <div className="flash-header d-flex justify-content-between align-items-center">
            <div className="flash-time d-flex align-items-center">
              <Header title="Flash Sale" />
              <div className="time-area d-flex align-items-center gap-4">
                <div className="time-box">
                  <h4 className={poppins.className + " " + ""}>1</h4>
                  <span className={poppins.className + " " + ""}>hrs</span>
                </div>
                <div className="time-box">
                  <h4 className={poppins.className + " " + ""}>34</h4>
                  <span className={poppins.className + " " + ""}>min</span>
                </div>
                <div className="time-box">
                  <h4 className={poppins.className + " " + ""}>26</h4>
                  <span className={poppins.className + " " + ""}>sec</span>
                </div>
              </div>
            </div>
            <Link href="/" className={poppins.className + " " + " "}>
              view all
            </Link>
          </div>
          <Row>
            <Col md={4}>one</Col>
            <Col md={4}>two</Col>
            <Col md={4}>three</Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default FlashSale;
